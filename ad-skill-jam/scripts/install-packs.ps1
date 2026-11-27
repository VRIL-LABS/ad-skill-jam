#Requires -Version 5.1
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [ValidateSet('all', 'amazon', 'apple', 'google', 'linkedin', 'meta', 'microsoft', 'pinterest', 'reddit', 'snapchat', 'tiktok', 'x', 'youtube', 'shared')]
    [string[]]$Packs,

    [ValidatePattern('^[a-z0-9][a-z0-9-]*$')]
    [string]$Agent,

    [switch]$List
)

$ErrorActionPreference = 'Stop'
if ([Environment]::OSVersion.Platform -ne [PlatformID]::Win32NT) {
    throw 'Use install-packs.sh on Linux and macOS.'
}
if ($Packs -contains 'all' -and $Packs.Count -ne 1) {
    throw 'Use all by itself.'
}

$node = Get-Command node.exe -ErrorAction SilentlyContinue
$npx = Get-Command npx.cmd -ErrorAction SilentlyContinue
if (-not $node -or -not $npx -or -not (Get-Command git -ErrorAction SilentlyContinue)) {
    throw 'Install Node.js 24 or later with npm, and Git, then rerun this script.'
}

& $node.Source -e 'if (Number(process.versions.node.split(".")[0]) < 24) process.exit(1)'
if ($LASTEXITCODE -ne 0) {
    throw 'Node.js 24 or later is required.'
}

$sourceUrl = 'https://github.com/VRIL-LABS/ad-skill-jam/tree/main/ad-skill-jam'
foreach ($pack in $Packs) {
    $url = switch ($pack) {
        'all' { $sourceUrl }
        'shared' { "$sourceUrl/ads" }
        default { "$sourceUrl/$($pack.ToLowerInvariant())-ads" }
    }
    $installArgs = @('add', $url, '--skill', '*')
    if ($List) {
        $installArgs += '--list'
    } else {
        $installArgs += '--copy'
        if ($Agent) { $installArgs += @('-a', $Agent, '--yes') }
    }

    & $npx.Source --yes --ignore-scripts skills@1.9.1 @installArgs
    if ($LASTEXITCODE -ne 0) {
        throw "Skills CLI failed for $pack (exit $LASTEXITCODE)."
    }
}
