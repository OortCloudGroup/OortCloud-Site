$trDir = "n:\1main\tr"
$files = @("index","about","approval","classroom","clouddisk","contact","dispatch","email","fieldmanager","messenger","oortai","workup")

foreach ($f in $files) {
    $path = "$trDir\$f.html"
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    
    # === NAV COMMON TRANSLATIONS ===
    # Nav links (index page uses # anchors, other pages use index.html#)
    $content = $content.Replace('>Products</a>', '>Ürünler</a>')
    $content = $content.Replace('>Platform</a>', '>Platform</a>')
    $content = $content.Replace('>Enterprise</a>', '>Kurumsal</a>')
    $content = $content.Replace('>About</a>', '>Hakkında</a>')
    
    # Nav lang switcher title
    $content = $content.Replace('title="Switch Language"', 'title="Dil Değiştir"')
    
    # Login button text - careful to match the exact pattern
    $content = $content -replace '(class="nav-login"[^>]*>\s*<svg[^>]*>[^<]*</svg>\s*)Login', '$1Giriş Yap'
    
    # User text
    $content = $content.Replace('>User</span>', '>Kullanıcı</span>')
    
    # Dashboard
    $content = $content -replace '(desktopHome/index\.html" target="_blank">\s*<svg[^>]*>[^<]*</svg>\s*)Dashboard', '$1Kontrol Paneli'
    
    # Logout
    $content = $content -replace '(id="navLogout">\s*<svg[^>]*>[^<]*</svg>\s*)Logout', '$1Çıkış Yap'
    
    # Mobile menu aria-label
    $content = $content.Replace('aria-label="Toggle menu"', 'aria-label="Menüyü aç/kapat"')
    
    # === FOOTER COMMON TRANSLATIONS ===
    $content = $content.Replace('>Building the future of enterprise technology.</p>', '>Kurumsal teknolojinin geleceğini inşa ediyoruz.</p>')
    $content = $content.Replace('<h5>Products</h5>', '<h5>Ürünler</h5>')
    $content = $content.Replace('<h5>Solutions</h5>', '<h5>Çözümler</h5>')
    $content = $content.Replace('<h5>Company</h5>', '<h5>Şirket</h5>')
    
    # Footer product links
    $content = $content.Replace('>Cloud Classroom</a>', '>Bulut Sınıf</a>')
    
    # Footer solution links
    $content = $content.Replace('>Instant Messenger</a>', '>Anlık Mesajlaşma</a>')
    $content = $content.Replace('>Cloud Disk</a>', '>Bulut Disk</a>')
    $content = $content.Replace('>Email</a>', '>E-posta</a>')
    $content = $content.Replace('>Intelligent Approval</a>', '>Akıllı Onay</a>')
    $content = $content.Replace('>Command & Dispatch</a>', '>Komuta ve Sevk</a>')
    $content = $content.Replace('>Field Manager</a>', '>Saha Yöneticisi</a>')
    
    # Footer company links
    $content = $content.Replace('>About Us</a>', '>Hakkımızda</a>')
    $content = $content.Replace('>Careers</a>', '>Kariyer</a>')
    $content = $content.Replace('>Contact</a>', '>İletişim</a>')
    $content = $content.Replace('>Privacy Policy</a>', '>Gizlilik Politikası</a>')
    
    # Footer copyright
    $content = $content.Replace('All rights reserved.', 'Tüm hakları saklıdır.')
    
    # External links: update /en/ to /tr/ for VLStream and OORT.SH
    $content = $content.Replace('vls.oortcloudsmart.com/en/', 'vls.oortcloudsmart.com/tr/')
    $content = $content.Replace('sh.oortcloudsmart.com/en/', 'sh.oortcloudsmart.com/tr/')
    
    [System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "Common translations applied to: $f.html"
}
Write-Host "All common translations done!"
