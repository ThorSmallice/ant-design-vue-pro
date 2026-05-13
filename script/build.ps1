Write-Host "Building Docker image..." -ForegroundColor Cyan

# Build image
docker build -t antd-vue-dbthor .

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nBuild successful!" -ForegroundColor Green
    Write-Host "`nCleaning up dangling images and unused resources..." -ForegroundColor Cyan
    
    # Clean up dangling images
    docker image prune -f
    
    # Clean up all unused resources
    docker system prune -f
    
    Write-Host "`nCleanup completed!" -ForegroundColor Green
    Write-Host "`nRun command: docker run -p $port:80 antd-vue-dbthor" -ForegroundColor Yellow
} else {
    Write-Host "`nBuild failed!" -ForegroundColor Red
    exit 1
}