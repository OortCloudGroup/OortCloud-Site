$trDir = "n:\1main\tr"
$files = @("index","about","approval","classroom","clouddisk","contact","dispatch","email","fieldmanager","messenger","oortai","workup")

foreach ($f in $files) {
    $path = "$trDir\$f.html"
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    
    $insertBlock = "    <link rel=""alternate"" hreflang=""en"" href=""https://oortcloudsmart.com/en/$f.html"" />`n"
    $insertBlock += "    <link rel=""alternate"" hreflang=""tr"" href=""https://oortcloudsmart.com/tr/$f.html"" />`n"
    $insertBlock += "    <link rel=""alternate"" hreflang=""x-default"" href=""https://oortcloudsmart.com/en/$f.html"" />`n"
    $insertBlock += "    <style>:root { --font-primary: 'Noto Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }</style>`n"
    
    $content = $content.Replace("</head>", "$insertBlock</head>")
    
    [System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "Added hreflang+style to: $f.html"
}
Write-Host "Done!"
