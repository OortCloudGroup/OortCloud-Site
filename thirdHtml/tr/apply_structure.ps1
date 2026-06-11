$trDir = "n:\1main\tr"
$files = @("index","about","approval","classroom","clouddisk","contact","dispatch","email","fieldmanager","messenger","oortai","workup")

foreach ($f in $files) {
    $path = "$trDir\$f.html"
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    
    # 1. Change lang="en" to lang="tr"
    $content = $content -replace '<html lang="en">', '<html lang="tr">'
    
    # 2. Update CSS paths: styles.css -> ../styles.css
    $content = $content -replace 'href="styles.css"', 'href="../styles.css"'
    
    # 3. Update page-specific CSS paths
    $content = $content -replace "href=""$f.css""", "href=""../$f.css"""
    
    # 4. fieldmanager.html also references dispatch.css
    if ($f -eq "fieldmanager") {
        $content = $content -replace 'href="dispatch.css"', 'href="../dispatch.css"'
    }
    
    # 5. Update script.js path
    $content = $content -replace 'src="script.js"', 'src="../script.js"'
    
    # 6. Add Noto Sans font link after the existing Google Fonts link
    $notoFontLink = '    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">'
    $content = $content -replace '(    <link href="https://fonts\.googleapis\.com/css2[^"]*"[^>]*>)', "`$1`n$notoFontLink"
    
    # 7. Add inline style override and hreflang tags before </head>
    $hreflangBlock = @"
    <link rel="alternate" hreflang="en" href="https://oortcloudsmart.com/en/$f.html" />
    <link rel="alternate" hreflang="tr" href="https://oortcloudsmart.com/tr/$f.html" />
    <link rel="alternate" hreflang="x-default" href="https://oortcloudsmart.com/en/$f.html" />
    <style>:root { --font-primary: 'Noto Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }</style>
</head>
"@
    $content = $content -replace '    </head>', $hreflangBlock
    
    # 8. Set Turkish as active in language switcher
    $content = $content -replace '<div class="nav-lang-item active" data-lang="en">', '<div class="nav-lang-item" data-lang="en">'
    $content = $content -replace '<div class="nav-lang-item" data-lang="tr">', '<div class="nav-lang-item active" data-lang="tr">'
    
    # 9. Change langCurrent from EN to TR
    $content = $content -replace '<span class="nav-lang-current" id="langCurrent">EN</span>', '<span class="nav-lang-current" id="langCurrent">TR</span>'
    
    # Write back with UTF-8 BOM-free encoding
    [System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))
    
    Write-Host "Processed: $f.html"
}
Write-Host "All structural changes complete!"
