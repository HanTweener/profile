Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  Pulling latest image from GitHub...     " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Pull the latest code repo
git pull origin main

# Pull the newly built pre-compiled Docker image from GHCR
docker-compose pull web
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to pull image from GitHub Packages. If your package is private, make sure you ran 'docker login ghcr.io' or set package to public." -ForegroundColor Yellow
}

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "  Restarting web container with new image... " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Re-create web container with the latest image
docker-compose up -d web
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to start container." -ForegroundColor Red
    exit 1
}

Write-Host "`n==========================================" -ForegroundColor Green
Write-Host "  Deployment Successful! 🎉               " -ForegroundColor Green
Write-Host "  Live at: https://profile.mfarhanf.dpdns.org" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
