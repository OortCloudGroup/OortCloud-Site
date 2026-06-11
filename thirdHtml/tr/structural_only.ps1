# Structural changes only - no Turkish text (avoids encoding issues)
$trDir = "n:\1main\tr"
$files = @("index","about","approval","classroom","clouddisk","contact","dispatch","email","fieldmanager","messenger","oortai","workup")

foreach ($f in $files) {
    $path = "$trDir\$f.html"
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    
    # lang attribute
    $content = $content.Replace('<html lang="en">', '<html lang="tr">')
    
    # CSS paths
    $content = $content.Replace('href="styles.css"', 'href="../styles.css"')
    $content = $content.Replace("href=""$f.css""", "href=""../$f.css""")
    if ($f -eq "fieldmanager") {
        $content = $content.Replace('href="dispatch.css"', 'href="../dispatch.css"')
    }
    $content = $content.Replace('src="script.js"', 'src="../script.js"')
    
    # Add Noto Sans font
    $notoLink = '    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">'
    $content = $content -replace '(<link href="https://fonts\.googleapis\.com/css2[^"]*"[^>]*>)', "`$1`n$notoLink"
    
    # Add hreflang + style before </head>
    $hlBlock = "    <link rel=""alternate"" hreflang=""en"" href=""https://oortcloudsmart.com/en/$f.html"" />`n"
    $hlBlock += "    <link rel=""alternate"" hreflang=""tr"" href=""https://oortcloudsmart.com/tr/$f.html"" />`n"
    $hlBlock += "    <link rel=""alternate"" hreflang=""x-default"" href=""https://oortcloudsmart.com/en/$f.html"" />`n"
    $hlBlock += "    <style>:root { --font-primary: 'Noto Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }</style>`n"
    $content = $content.Replace("</head>", "${hlBlock}</head>")
    
    # Language switcher active state
    $content = $content.Replace('<div class="nav-lang-item active" data-lang="en">', '<div class="nav-lang-item" data-lang="en">')
    $content = $content.Replace('<div class="nav-lang-item" data-lang="tr">', '<div class="nav-lang-item active" data-lang="tr">')
    $content = $content.Replace('<span class="nav-lang-current" id="langCurrent">EN</span>', '<span class="nav-lang-current" id="langCurrent">TR</span>')
    
    # External links
    $content = $content.Replace("vls.oortcloudsmart.com/en/", "vls.oortcloudsmart.com/tr/")
    $content = $content.Replace("sh.oortcloudsmart.com/en/", "sh.oortcloudsmart.com/tr/")
    
    [System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "Structural changes: $f.html"
}
Write-Host "Done!"
