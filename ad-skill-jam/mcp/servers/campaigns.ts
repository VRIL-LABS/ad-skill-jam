import type { Account, Credential, Platform, Secrets } from '../shared/accounts.ts';
import { ReadError, type ProviderRequest } from '../shared/http.ts';
import { asObject, asRows, invalidResponse, nextValue, oauth1Header, optionalObject, urlWithQuery, type Page } from './provider-utils.ts';

type ReadInputs = {
  account: Account;
  secrets: Secrets;
  version: string;
  limit: number;
  offset?: string;
};
type CampaignSpec = {
  title: string;
  docs: string;
  accessDocs: string;
  idKind: string;
  version: string;
  versionPattern?: RegExp;
  hosts: readonly string[];
  credentials: readonly Credential[];
  settings?: readonly ('managerId' | 'region')[];
  identifier?: RegExp;
  note?: string;
  fields: readonly [string, string, string];
  request(inputs: ReadInputs): ProviderRequest;
  parse(body: unknown, limit: number, offset?: string): Page;
};

const bearer = (secrets: Secrets) => ({ authorization: 'Bearer ' + secrets.token });
const digits = /^\d+$/;
const snapPageSize = 50;

function snapPosition(offset?: string) {
  if (!offset) return { index: 0, cursor: undefined };
  const separator = offset.indexOf(':');
  return { index: Number(offset.slice(0, separator)), cursor: offset.slice(separator + 1) || undefined };
}

const google: CampaignSpec = {
  title: 'Google Ads',
  docs: 'https://developers.google.com/google-ads/api/rest/try-it',
  accessDocs: 'https://developers.google.com/google-ads/api/docs/api-policy/developer-token',
  idKind: 'Google Ads customer ID without hyphens',
  version: 'v26',
  versionPattern: /^v\d+$/,
  hosts: ['googleads.googleapis.com'],
  identifier: digits,
  credentials: ['token'],
  fields: ['name', 'status', 'advertisingChannelType'],
  request({ account, secrets, version, limit, offset }) {
    // The cursor comes from the last campaign returned by the API.
    if (offset && !digits.test(offset)) invalidResponse();
    const predicates = [
      account.platform === 'youtube' ? 'campaign.advertising_channel_type IN (VIDEO, DEMAND_GEN)' : '',
      offset ? 'campaign.id > ' + offset : '',
    ].filter(Boolean);
    const where = predicates.length ? ' WHERE ' + predicates.join(' AND ') : '';
    return {
      url: urlWithQuery('https://googleads.googleapis.com', '/' + version + '/customers/' + account.accountId + '/googleAds:search'),
      headers: { ...bearer(secrets), ...(account.managerId ? { 'login-customer-id': account.managerId } : {}) },
      body: {
        query: 'SELECT campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type FROM campaign' +
          where + ' ORDER BY campaign.id ASC LIMIT ' + (limit + 1),
      },
    };
  },
  parse(body, limit) {
    const result = asObject(body);
    const rows = asRows(result.results ?? []).map(row => asObject(row.campaign));
    const page = rows.slice(0, limit);
    const next = rows.length > limit ? nextValue(page.at(-1)?.id) : undefined;
    if (rows.length > limit && !next) invalidResponse();
    return { rows: page, next };
  },
};

export const campaignSpecs: Record<Platform, CampaignSpec> = {
  google,
  youtube: {
    ...google,
    title: 'YouTube Ads',
    docs: 'https://developers.google.com/google-ads/api/docs/demand-gen/reporting',
    note: 'This is Google Ads Video and Demand Gen inventory. Confirm YouTube delivery with a network and subnetwork performance report.',
  },
  apple: {
    title: 'Apple Ads',
    docs: 'https://developer.apple.com/documentation/apple-ads-platform-api/calling-apple-ads-platform-api',
    accessDocs: 'https://developer.apple.com/documentation/apple-ads-platform-api/access-overview',
    idKind: 'Apple Ads Platform API ad account ID',
    version: 'v1',
    hosts: ['api.ads.apple.com'],
    identifier: digits,
    credentials: ['token'],
    fields: ['name', 'status', 'promotedObjectType'],
    request({ account, secrets, version, limit, offset }) {
      return {
        url: urlWithQuery('https://api.ads.apple.com', '/' + version + '/campaigns/query'),
        headers: { ...bearer(secrets), 'X-AP-Context': 'adAccountId=' + account.accountId },
        body: { pagination: { offset: Number(offset ?? 0), pageSize: limit, fetchTotalCount: true } },
      };
    },
    parse(body, limit, offset) {
      const result = asObject(body);
      const rows = asRows(result.result);
      const end = Number(offset ?? 0) + rows.length;
      const total = optionalObject(result.pagination)?.totalCount;
      const more = typeof total === 'number' ? end < total : rows.length === limit;
      return { rows, next: rows.length && more ? String(end) : undefined };
    },
  },
  x: {
    title: 'X Ads',
    docs: 'https://docs.x.com/x-ads-api/campaign-management/reference#get-accounts-account-id-campaigns',
    accessDocs: 'https://docs.x.com/x-ads-api/introduction',
    idKind: 'X Ads account ID',
    version: '12',
    hosts: ['ads-api.x.com'],
    credentials: ['consumerKey', 'consumerSecret', 'token', 'tokenSecret'],
    fields: ['name', 'entity_status', 'objective'],
    request({ account, secrets, version, limit, offset }) {
      const url = urlWithQuery('https://ads-api.x.com', '/' + version + '/accounts/' + account.accountId + '/campaigns', { count: limit, cursor: offset });
      return { url, oauth: () => oauth1Header(url, { consumerKey: secrets.consumerKey!, consumerSecret: secrets.consumerSecret!, token: secrets.token!, tokenSecret: secrets.tokenSecret! }) };
    },
    parse(body) {
      const result = asObject(body);
      return { rows: asRows(result.data), next: nextValue(result.next_cursor) };
    },
  },
  tiktok: {
    title: 'TikTok Ads',
    docs: 'https://ads.tiktok.com/gateway/docs/index?doc_id=1740591846408194',
    accessDocs: 'https://ads.tiktok.com/marketing_api/homepage',
    idKind: 'TikTok advertiser ID',
    version: 'v1.3',
    hosts: ['business-api.tiktok.com'],
    identifier: digits,
    credentials: ['token'],
    fields: ['campaign_name', 'operation_status', 'objective_type'],
    request({ account, secrets, version, limit, offset }) {
      return {
        url: urlWithQuery('https://business-api.tiktok.com', '/open_api/' + version + '/campaign/get/', {
          advertiser_id: account.accountId, page: offset ?? 1, page_size: limit,
        }),
        headers: { 'Access-Token': secrets.token! },
      };
    },
    parse(body, limit, offset) {
      const result = asObject(body);
      if (result.code !== 0) throw new ReadError('PROVIDER_REJECTED', 'TikTok rejected the read. Check app entitlement, access token and advertiser assignment.');
      const data = asObject(result.data);
      const rows = asRows(data.list);
      const current = Number(offset ?? 1);
      const totalPages = optionalObject(data.page_info)?.total_page;
      const more = typeof totalPages === 'number' ? current < totalPages : rows.length === limit;
      return { rows, next: rows.length && more ? String(current + 1) : undefined };
    },
  },
  snapchat: {
    title: 'Snapchat Ads',
    docs: 'https://developers.snap.com/marketing-api/Ads-API/campaigns',
    accessDocs: 'https://developers.snap.com/marketing-api/Ads-API/authentication',
    idKind: 'Snap ad account ID',
    version: 'v1',
    hosts: ['adsapi.snapchat.com'],
    credentials: ['token'],
    note: 'Snap returns at least 50 rows per provider page when available. Smaller result pages are slices of a fresh read.',
    fields: ['name', 'status', 'objective_type'],
    request({ account, secrets, version, offset }) {
      const { cursor } = snapPosition(offset);
      return {
        url: urlWithQuery('https://adsapi.snapchat.com', '/' + version + '/adaccounts/' + account.accountId + '/campaigns', { limit: snapPageSize, cursor }),
        headers: bearer(secrets),
      };
    },
    parse(body, limit, offset) {
      const result = asObject(body);
      if (result.request_status !== 'SUCCESS') invalidResponse();
      const { index, cursor } = snapPosition(offset);
      const campaigns = asRows(result.campaigns);
      if (campaigns.length > snapPageSize) invalidResponse();
      const end = index + limit;
      const rows = campaigns.slice(index, end).map(row => {
        if (row.sub_request_status !== 'SUCCESS') invalidResponse();
        const campaign = asObject(row.campaign);
        const objective = optionalObject(campaign.objective_v2_properties)?.objective_v2_type;
        return { ...campaign, objective_type: objective ?? campaign.objective };
      });
      if (end < campaigns.length) return { rows, next: nextValue(end + ':' + (cursor ?? '')) };

      // Carry the cursor only. The next request uses the same fixed host and route.
      const link = nextValue(optionalObject(result.paging)?.next_link);
      const next = link ? nextValue(new URL(link).searchParams.get('cursor')) : undefined;
      if (link && (!next || next === cursor)) invalidResponse();
      return { rows, next: next ? nextValue('0:' + next) : undefined };
    },
  },
  microsoft: {
    title: 'Microsoft Advertising',
    docs: 'https://learn.microsoft.com/en-us/advertising/campaign-management-service/getcampaignsbyaccountid',
    accessDocs: 'https://learn.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13',
    idKind: 'Numeric Microsoft Advertising ad account ID. Set managerId to the CustomerId.',
    version: 'v13',
    hosts: ['campaign.api.bingads.microsoft.com'],
    identifier: digits,
    credentials: ['token', 'developerToken'],
    settings: ['managerId'],
    note: 'Microsoft returns account campaigns as one provider response. Result pages are slices of a fresh read, so changes can shift the inventory between pages.',
    fields: ['Name', 'Status', 'CampaignType'],
    request({ account, secrets, version }) {
      const accountId = Number(account.accountId);
      if (!Number.isSafeInteger(accountId)) throw new ReadError('INVALID_ACCOUNT_SETTING', 'Microsoft account ID exceeds the supported exact JSON integer range.');
      return {
        url: urlWithQuery('https://campaign.api.bingads.microsoft.com', '/CampaignManagement/' + version + '/Campaigns/QueryByAccountId'),
        headers: { ...bearer(secrets), CustomerId: account.managerId!, CustomerAccountId: account.accountId, DeveloperToken: secrets.developerToken! },
        body: { AccountId: accountId, CampaignType: 'Search, Shopping, DynamicSearchAds, Audience, Hotel, PerformanceMax, App, ObjectiveBased' },
      };
    },
    parse(body, limit, offset) {
      const result = asObject(body);
      const rows = asRows(result.Campaigns === null ? [] : result.Campaigns);
      const start = Number(offset ?? 0);
      const end = start + limit;
      return { rows: rows.slice(start, end), next: end < rows.length ? String(end) : undefined };
    },
  },
  pinterest: {
    title: 'Pinterest Ads',
    docs: 'https://developers.pinterest.com/docs/api/v5/campaigns-list/',
    accessDocs: 'https://developers.pinterest.com/docs/getting-started/set-up-authentication-and-authorization/',
    idKind: 'Numeric Pinterest ad account ID',
    version: 'v5',
    hosts: ['api.pinterest.com'],
    identifier: digits,
    credentials: ['token'],
    fields: ['name', 'status', 'objective_type'],
    request({ account, secrets, version, limit, offset }) {
      return {
        url: urlWithQuery('https://api.pinterest.com', '/' + version + '/ad_accounts/' + account.accountId + '/campaigns', { page_size: limit, bookmark: offset }),
        headers: bearer(secrets),
      };
    },
    parse(body) {
      const result = asObject(body);
      return { rows: asRows(result.items), next: nextValue(result.bookmark) };
    },
  },
  linkedin: {
    title: 'LinkedIn Ads',
    docs: 'https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns',
    accessDocs: 'https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/account-access-controls',
    idKind: 'Numeric LinkedIn advertising account ID',
    version: '202611',
    versionPattern: /^20\d{2}(0[1-9]|1[0-2])$/,
    hosts: ['api.linkedin.com'],
    identifier: digits,
    credentials: ['token'],
    note: 'Search covers non-test campaigns.',
    fields: ['name', 'status', 'objectiveType'],
    request({ account, secrets, version, limit, offset }) {
      const url = urlWithQuery('https://api.linkedin.com', '/rest/adAccounts/' + account.accountId + '/adCampaigns', {
        q: 'search', pageSize: limit, pageToken: offset,
      });
      url.search += '&search=(test:false)';
      return {
        url,
        headers: { ...bearer(secrets), 'LinkedIn-Version': version, 'X-Restli-Protocol-Version': '2.0.0' },
      };
    },
    parse(body) {
      const result = asObject(body);
      return { rows: asRows(result.elements), next: nextValue(optionalObject(result.metadata)?.nextPageToken) };
    },
  },
  amazon: {
    title: 'Amazon Ads',
    docs: 'https://github.com/amzn/ads-advanced-tools-docs/tree/main/unified-campaign-management-migration-skills',
    accessDocs: 'https://advertising.amazon.com/API/docs/en-us/get-started/overview',
    idKind: 'Amazon Ads advertiser account ID for Unified Campaign Management',
    version: 'v1',
    hosts: ['advertising-api.amazon.com', 'advertising-api-eu.amazon.com', 'advertising-api-fe.amazon.com'],
    credentials: ['token', 'clientId'],
    settings: ['region'],
    note: 'Query covers Sponsored Products through Unified Campaign Management.',
    fields: ['name', 'state', 'adProduct'],
    request({ account, secrets, version, limit, offset }) {
      const suffix = account.region === 'na' ? '' : '-' + account.region;
      return {
        url: urlWithQuery('https://advertising-api' + suffix + '.amazon.com', '/adsApi/' + version + '/query/campaigns'),
        headers: { ...bearer(secrets), 'Amazon-Ads-ClientId': secrets.clientId!, 'Amazon-Ads-AccountId': account.accountId },
        body: { adProductFilter: { include: ['SPONSORED_PRODUCTS'] }, maxResults: limit, ...(offset ? { nextToken: offset } : {}) },
      };
    },
    parse(body) {
      const result = asObject(body);
      return { rows: asRows(result.campaigns ?? []), next: nextValue(result.nextToken) };
    },
  },
  meta: {
    title: 'Meta Ads',
    docs: 'https://developers.facebook.com/docs/marketing-api/reference/ad-account/campaigns/',
    accessDocs: 'https://developers.facebook.com/docs/marketing-api/get-started/',
    idKind: 'Numeric Meta ad account ID without the act_ prefix',
    version: 'v26.0',
    versionPattern: /^v\d+\.\d+$/,
    hosts: ['graph.facebook.com'],
    identifier: digits,
    credentials: ['token'],
    fields: ['name', 'effective_status', 'objective'],
    request({ account, secrets, version, limit, offset }) {
      return {
        url: urlWithQuery('https://graph.facebook.com', '/' + version + '/act_' + account.accountId + '/campaigns', {
          fields: 'name,effective_status,objective', limit, after: offset,
        }),
        headers: bearer(secrets),
      };
    },
    parse(body) {
      const result = asObject(body);
      const paging = optionalObject(result.paging);
      const next = paging?.next ? nextValue(optionalObject(paging.cursors)?.after) : undefined;
      if (paging?.next && !next) invalidResponse();
      return { rows: asRows(result.data), next };
    },
  },
  reddit: {
    title: 'Reddit Ads',
    docs: 'https://ads-api.reddit.com/docs/v3/api/list-campaigns',
    accessDocs: 'https://ads-api.reddit.com/docs/v3/#authentication',
    idKind: 'Reddit advertising account ID',
    version: 'v3',
    hosts: ['ads-api.reddit.com'],
    credentials: ['token'],
    fields: ['name', 'configured_status', 'objective'],
    request({ account, secrets, version, limit, offset }) {
      const base = urlWithQuery('https://ads-api.reddit.com', '/api/' + version + '/ad_accounts/' + account.accountId + '/campaigns', {
        'page.size': limit,
      });
      const url = offset ? new URL(offset, base) : base;
      if (url.origin !== base.origin || url.pathname !== base.pathname || url.username || url.password || url.hash) invalidResponse();
      return {
        url,
        headers: { ...bearer(secrets), 'User-Agent': 'ad-skill-jam-mcp/1.1.1' },
      };
    },
    parse(body) {
      const result = asObject(body);
      return { rows: asRows(result.data), next: nextValue(optionalObject(result.pagination)?.next_url) };
    },
  },
};

export function accountProblems(account: Account, secrets: Secrets): { missing: string[]; invalid: string[] } {
  const spec = campaignSpecs[account.platform];
  const missing = [
    ...spec.credentials.filter(key => !secrets[key]),
    ...(spec.settings ?? []).filter(key => !account[key]),
  ];
  const invalid: string[] = [];
  if (spec.identifier && !spec.identifier.test(account.accountId)) invalid.push('accountId');
  if (account.platform === 'microsoft' && !Number.isSafeInteger(Number(account.accountId))) invalid.push('accountId');
  if (account.managerId && [ 'google', 'youtube', 'microsoft' ].includes(account.platform) && !digits.test(account.managerId)) invalid.push('managerId');
  if (account.version && account.version !== spec.version && !spec.versionPattern?.test(account.version)) invalid.push('version');
  return { missing, invalid };
}
