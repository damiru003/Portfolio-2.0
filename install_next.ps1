Set-Location "d:\Full stack\Portfolio\temp"
Write-Host "Installing next package..."
npm install next@14.2.35 --no-audit --no-fund --fetch-retries 5
Write-Host "Done with exit: $LASTEXITCODE"
