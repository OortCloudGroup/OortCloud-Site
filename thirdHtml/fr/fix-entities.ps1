$files = @('workup.html','messenger.html','email.html','classroom.html','approval.html','clouddisk.html','fieldmanager.html','oortai.html')

foreach ($file in $files) {
    $path = Join-Path "n:\1main" $file
    $c = Get-Content $path -Raw -Encoding UTF8
    
    # Fix HTML entities back to UTF-8 characters
    $c = $c -replace '&Agrave;', [char]0x00C0   # À
    $c = $c -replace '&#233;', [char]0x00E9     # é
    $c = $c -replace '&#232;', [char]0x00E8     # è
    $c = $c -replace 'D&#233;connexion', "D$([char]0x00E9)connexion"
    $c = $c -replace 'Carri&#232;res', "Carri$([char]0x00E8)res"
    $c = $c -replace 'Politique de confidentialit&#233;', "Politique de confidentialit$([char]0x00E9)"
    $c = $c -replace 'Tous droits r&#233;serv&#233;s', "Tous droits r$([char]0x00E9)serv$([char]0x00E9)s"
    
    [System.IO.File]::WriteAllText($path, $c, (New-Object System.Text.UTF8Encoding($false)))
    Write-Host "Fixed entities: $file"
}
