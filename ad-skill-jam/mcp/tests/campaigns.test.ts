import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Client } from '@modelcontextprotocol/client';
import { InMemoryTransport } from '@modelcontextprotocol/server';
import { createServer } from '../gateway/server.ts';
import { campaignSpecs } from '../servers/campaigns.ts';
import type { Account, Platform, Secrets } from '../shared/accounts.ts';
import { createReader, ReadError } from '../shared/http.ts';
import { buildSkillsCatalog } from '../skills-bridge/catalog.ts';
import { createPageTokens } from '../shared/page-token.ts';

const keys: Secrets = {
  token: 'synthetic-access', developerToken: 'synthetic-developer', clientId: 'synthetic-client',
  consumerKey: 'synthetic-key', consumerSecret: 'synthetic-secret', tokenSecret: 'synthetic-token-secret',
};
const accountFor = (platform: Platform, alias = 'test-brand'): Account => ({
  platform, alias, accountId: '9182736450', managerId: '5647382910', region: 'eu',
  credentials: { token: 'ADJAM_TEST_ACCESS' },
});

const cases: Record<Platform, { host: string; route: string; method: 'GET' | 'POST'; body: unknown }> = {
  apple: { host: 'api.ads.apple.com', route: '/v1/campaigns/query', method: 'POST', body: { result: [{ name: 'Example', status: 'PAUSED', promotedObjectType: 'APPSTORE_APP' }], pagination: { totalCount: 2 } } },
  x: { host: 'ads-api.x.com', route: '/12/accounts/9182736450/campaigns', method: 'GET', body: { data: [{ name: 'Example', entity_status: 'PAUSED' }], next_cursor: 'provider-cursor' } },
  youtube: { host: 'googleads.googleapis.com', route: '/v26/customers/9182736450/googleAds:search', method: 'POST', body: { results: [{ campaign: { id: '1', name: 'Example', status: 'PAUSED', advertisingChannelType: 'VIDEO' } }, { campaign: { id: '2', name: 'Another' } }] } },
  tiktok: { host: 'business-api.tiktok.com', route: '/open_api/v1.3/campaign/get/', method: 'GET', body: { code: 0, data: { list: [{ campaign_name: 'Example', operation_status: 'DISABLE' }], page_info: { total_page: 2 } } } },
  snapchat: { host: 'adsapi.snapchat.com', route: '/v1/adaccounts/9182736450/campaigns', method: 'GET', body: { request_status: 'SUCCESS', campaigns: [{ sub_request_status: 'SUCCESS', campaign: { name: 'Example', status: 'PAUSED' } }], paging: { next_link: 'https://adsapi.snapchat.com/v1/adaccounts/9182736450/campaigns?cursor=provider-cursor' } } },
  microsoft: { host: 'campaign.api.bingads.microsoft.com', route: '/CampaignManagement/v13/Campaigns/QueryByAccountId', method: 'POST', body: { Campaigns: [{ Name: 'Example', Status: 'Paused', CampaignType: 'Search' }, { Name: 'Another' }] } },
  pinterest: { host: 'api.pinterest.com', route: '/v5/ad_accounts/9182736450/campaigns', method: 'GET', body: { items: [{ name: 'Example', status: 'PAUSED' }], bookmark: 'provider-cursor' } },
  linkedin: { host: 'api.linkedin.com', route: '/rest/adAccounts/9182736450/adCampaigns', method: 'GET', body: { elements: [{ name: 'Example', status: 'DRAFT' }], metadata: { nextPageToken: 'provider-cursor' } } },
  amazon: { host: 'advertising-api-eu.amazon.com', route: '/adsApi/v1/query/campaigns', method: 'POST', body: { campaigns: [{ name: 'Example', state: 'PAUSED', adProduct: 'SPONSORED_PRODUCTS' }], nextToken: 'provider-cursor' } },
  google: { host: 'googleads.googleapis.com', route: '/v26/customers/9182736450/googleAds:search', method: 'POST', body: { results: [{ campaign: { id: '1', name: 'Example', status: 'PAUSED', advertisingChannelType: 'SEARCH' } }, { campaign: { id: '2', name: 'Another' } }] } },
  meta: { host: 'graph.facebook.com', route: '/v26.0/act_9182736450/campaigns', method: 'GET', body: { data: [{ name: 'Example', effective_status: 'PAUSED' }], paging: { cursors: { after: 'provider-cursor' }, next: 'next' } } },
  reddit: { host: 'ads-api.reddit.com', route: '/api/v3/ad_accounts/9182736450/campaigns', method: 'GET', body: { data: [{ name: 'Example', configured_status: 'PAUSED' }], pagination: { next_url: 'https://ads-api.reddit.com/api/v3/ad_accounts/9182736450/campaigns?page.size=1&page.token=provider-cursor' } } },
};

for (const [platform, expected] of Object.entries(cases) as [Platform, (typeof cases)[Platform]][]) {
  test(platform + ' builds the documented read and parses pagination', () => {
    const spec = campaignSpecs[platform];
    const account = accountFor(platform);
    const inputs = { account, secrets: keys, version: spec.version, limit: 1 };
    const first = spec.request(inputs);
    assert.equal(first.url.hostname, expected.host);
    assert.equal(first.url.pathname, expected.route);
    assert.equal(first.body ? 'POST' : 'GET', expected.method);
    assert.ok(!first.url.href.includes('synthetic'));
    const page = spec.parse(expected.body, 1);
    assert.equal(page.rows.length, 1);
    assert.equal(page.rows[0][spec.fields[0]], 'Example');
    assert.ok(page.next);
    const second = spec.request({ ...inputs, offset: page.next });
    assert.equal(second.url.hostname, expected.host);
    assert.equal(second.url.pathname, expected.route);
    if (platform !== 'microsoft') assert.notDeepEqual([first.url.href, first.body], [second.url.href, second.body]);
    assert.throws(() => spec.parse(null, 1), ReadError);

    if (platform === 'x') assert.match(first.oauth!(), /^OAuth .*oauth_signature="/);
    if (platform === 'apple') assert.equal(first.headers?.['X-AP-Context'], 'adAccountId=' + account.accountId);
    if (platform === 'linkedin') {
      assert.equal(first.headers?.['LinkedIn-Version'], '202611');
      assert.match(first.url.search, /&search=\(test:false\)/);
    }
    if (platform === 'amazon') {
      assert.equal(first.headers?.['Amazon-Ads-AccountId'], account.accountId);
      assert.equal(first.headers?.['Amazon-Ads-ClientId'], keys.clientId);
    }
    if (platform === 'youtube') assert.match(JSON.stringify(first.body), /IN \(VIDEO, DEMAND_GEN\)/);
    if (platform === 'google') assert.equal(first.headers?.['developer-token'], undefined);
  });
}

test('Snapchat pages small tool results within a provider page and advances its cursor', () => {
  const spec = campaignSpecs.snapchat;
  const inputs = { account: accountFor('snapchat'), secrets: keys, version: spec.version, limit: 20 };
  const body = {
    request_status: 'SUCCESS',
    campaigns: Array.from({ length: 50 }, (_, index) => ({
      sub_request_status: 'SUCCESS',
      campaign: { name: String(index), objective: 'APP_CONVERSION', objective_v2_properties: { objective_v2_type: 'APP_PROMOTION' } },
    })),
    paging: { next_link: 'https://adsapi.snapchat.com/v1/adaccounts/example/campaigns?cursor=provider%3Acursor&limit=50' },
  };
  assert.equal(spec.request(inputs).url.searchParams.get('limit'), '50');
  const first = spec.parse(body, 20);
  assert.equal(first.rows[0].objective_type, 'APP_PROMOTION');
  assert.equal(spec.request({ ...inputs, offset: first.next }).url.searchParams.get('cursor'), null);
  const second = spec.parse(body, 20, first.next);
  const third = spec.parse(body, 20, second.next);
  assert.deepEqual([first, second, third].map(page => page.rows.length), [20, 20, 10]);
  assert.deepEqual([first, second, third].map(page => page.rows[0].name), ['0', '20', '40']);
  assert.equal(spec.request({ ...inputs, offset: third.next }).url.searchParams.get('cursor'), 'provider:cursor');
});

test('account-scoped response parsing, local readiness and provider failures', async () => {
  const ready = accountFor('tiktok');
  const incomplete = { ...accountFor('tiktok', 'incomplete'), credentials: {} };
  const foreign = accountFor('tiktok', 'other-brand');
  let calls = 0;
  const fetcher: typeof fetch = async (url, init) => {
    calls += 1;
    assert.equal(init?.redirect, 'error');
    const page = new URL(String(url)).searchParams.get('page');
    const payload = page === '2' ? { code: 10001, message: 'provider-secret' } : {
      code: 0, data: {
        list: [{ campaign_name: 'Example\u0000campaign', campaign_id: 'id-hidden', access_token: 'canary', operation_status: 'DISABLE' }],
        page_info: { total_page: 2 },
      },
    };
    return Response.json(payload);
  };
  const skills = await buildSkillsCatalog();
  const server = createServer({ accounts: [ready, incomplete, foreign], skills, env: { ADJAM_TEST_ACCESS: 'synthetic-access' }, fetcher });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  const client = new Client({ name: 'adjam-contract-test', version: '0.1.0' });
  await server.connect(serverTransport);
  try {
    await client.connect(clientTransport);
    const read = (account_alias: string, limit = 1, page_token?: string) => client.callTool({
      name: 'tiktok_get_campaigns', arguments: { account_alias, limit, ...(page_token ? { page_token } : {}) },
    });
    const list = await client.callTool({ name: 'adjam_list_accounts', arguments: {} });
    const missing = await read(incomplete.alias);
    assert.match(JSON.stringify(list), /missing_configuration/);
    assert.partialDeepStrictEqual(missing.structuredContent, { code: 'ACCOUNT_NOT_READY' });
    assert.equal(calls, 0);
    const result = await read(ready.alias);
    assert.equal(result.isError, undefined);
    assert.partialDeepStrictEqual(result.structuredContent, { campaigns: [{ name: 'Example campaign', status: 'DISABLE', objective_or_type: null }] });
    assert.doesNotMatch(JSON.stringify(result), /id-hidden|canary|synthetic-access|9182736450/);
    const data = result.structuredContent;
    assert.ok(data && typeof data === 'object' && 'next_page_token' in data && typeof data.next_page_token === 'string');
    const token = data.next_page_token;
    assert.partialDeepStrictEqual((await read(foreign.alias, 1, token)).structuredContent, { code: 'INVALID_PAGE_TOKEN' });
    assert.partialDeepStrictEqual((await read(ready.alias, 2, token)).structuredContent, { code: 'INVALID_PAGE_TOKEN' });
    assert.equal(calls, 1);
    const rejected = await read(ready.alias, 1, token);
    assert.equal(rejected.isError, true);
    assert.partialDeepStrictEqual(rejected.structuredContent, { code: 'PROVIDER_REJECTED' });
    assert.doesNotMatch(JSON.stringify(rejected), /provider-secret/);
    assert.equal(calls, 2);
  } finally {
    await client.close();
    await server.close();
  }
});

test('HTTP choke point rejects external URLs and returns isolated rate limit and access errors', async () => {
  let requests = 0;
  const throttled = createReader(async () => {
    requests += 1;
    return new Response('hidden', { status: 429, headers: { 'retry-after': '4' } });
  });
  const hosts = ['api.pinterest.com'];
  await assert.rejects(throttled({ url: new URL('https://untrusted.invalid/') }, hosts), { code: 'INVALID_PROVIDER_URL' });
  assert.equal(requests, 0);
  const request = { url: new URL('https://api.pinterest.com/v5/') };
  await assert.rejects(throttled(request, hosts), { code: 'RATE_LIMITED', retryAfterMs: 4000 });
  await assert.rejects(throttled(request, hosts), { code: 'RATE_LIMITED' });
  assert.equal(requests, 1);
  const denied = createReader(async () => new Response('do not echo provider bodies', { status: 403 }));
  await assert.rejects(denied(request, hosts), { code: 'ACCESS_DENIED' });
  const unreadable = createReader(async () => new Response('unparseable private data', { status: 200 }));
  await assert.rejects(unreadable(request, hosts), { code: 'INVALID_PROVIDER_RESPONSE' });
});

test('pagination seals provider tokens to the binding and the lifetime of the server instance', () => {
  const tokens = createPageTokens();
  const token = tokens.encode('account-and-limit', 'provider-cursor');
  assert.equal(tokens.decode('account-and-limit', token), 'provider-cursor');
  assert.throws(() => tokens.decode('different-account', token), { code: 'INVALID_PAGE_TOKEN' });
  assert.throws(() => tokens.decode('account-and-limit', 'Z' + token), { code: 'INVALID_PAGE_TOKEN' });
  assert.throws(() => createPageTokens().decode('account-and-limit', token), { code: 'INVALID_PAGE_TOKEN' });
});
