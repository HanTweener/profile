# Load environment variables from .env if present
if (Test-Path ".env") {
    Get-Content .env | Where-Object { $_ -match '^([^#=]+)=(.*)$' } | ForEach-Object {
        $key = $matches[1].Trim()
        $value = $matches[2].Trim()
        [System.Environment]::SetEnvironmentVariable($key, $value, [System.EnvironmentVariableTarget]::Process)
    }
}

$siteUrl = if ($env:VITE_SITE_URL) { $env:VITE_SITE_URL } else { "https://profile.mfarhanf.dpdns.org" }

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  Pulling latest image from GHCR...       " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Pull latest code repository
git pull origin main

# Pull pre-compiled Docker image from GHCR
docker compose pull web
if ($LASTEXITCODE -ne 0) {
    # Fallback to docker-compose if docker compose is not available
    docker-compose pull web
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to pull image from GitHub Packages." -ForegroundColor Yellow
        Write-Host "Tip: If package is private, run 'docker login ghcr.io' or make the package Public in GitHub Package Settings." -ForegroundColor Yellow
    }
}

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "  Restarting containers with new image...   " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Re-create containers with the latest image
docker compose up -d
if ($LASTEXITCODE -ne 0) {
    docker-compose up -d
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to start containers." -ForegroundColor Red
        exit 1
    }
}

Write-Host "`n==========================================" -ForegroundColor Green
Write-Host "  Deployment Successful! 🎉               " -ForegroundColor Green
Write-Host "  Live at: $siteUrl" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
