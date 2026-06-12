$f = 'n:\1main\id\field-manager-poster.html'
$bytes = [System.IO.File]::ReadAllBytes($f)
$gtCount = ($bytes | Where-Object { $_ -eq 0x3E }).Count
$cCount = ($bytes | Where-Object { $_ -eq 0x43 }).Count
$status = if ($gtCount -eq 0) { "CORRUPTED" } else { "OK" }
Write-Host "$status - field-manager-poster.html: >=$gtCount, C=$cCount"
