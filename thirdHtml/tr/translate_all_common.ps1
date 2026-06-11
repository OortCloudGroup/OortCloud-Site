# Turkish Translation Script - All common elements
# Uses Unicode escapes to avoid encoding issues

$trDir = "n:\1main\tr"
$files = @("index","about","approval","classroom","clouddisk","contact","dispatch","email","fieldmanager","messenger","oortai","workup")

# Turkish character definitions
$U = [char]0x00DC  # Ü
$u = [char]0x00FC  # ü
$C = [char]0x00C7  # Ç
$c = [char]0x00E7  # ç
$S = [char]0x015E  # Ş
$s = [char]0x015F  # ş
$G = [char]0x011E  # Ğ
$g = [char]0x011F  # ğ
$I_dot = [char]0x0130  # İ
$i_dotless = [char]0x0131  # ı
$O = [char]0x00D6  # Ö
$o = [char]0x00F6  # ö

# Build translation strings (correct Turkish: ı=dotless i, İ=dotted I)
$t_Urunler = "${U}r${u}nler"                           # Ürünler
$t_Hakkinda = "Hakk${i_dotless}nda"                      # Hakkında
$t_Kurumsal = "Kurumsal"
$t_SatisIletisim = "Sat${i_dotless}${s} ${I_dot}leti${s}imi"  # Satış İletişimi
$t_GirisYap = "Giri${s} Yap"                              # Giriş Yap
$t_Kullanici = "Kullan${i_dotless}c${i_dotless}"          # Kullanıcı
$t_KontrolPaneli = "Kontrol Paneli"
$t_CikisYap = "${C}${i_dotless}k${i_dotless}${s} Yap"     # Çıkış Yap
$t_DilDegistir = "Dil De${g}i${s}tir"                     # Dil Değiştir
$t_MenuAcKapat = "Men${u}y${u} a${c}/kapat"              # Menüyü aç/kapat
$t_Cozumler = "${C}${o}z${u}mler"                         # Çözümler
$t_Sirket = "${S}irket"                                   # Şirket
$t_Hakkimizda = "Hakk${i_dotless}m${i_dotless}zda"        # Hakkımızda
$t_Kariyer = "Kariyer"
$t_Iletisim = "${I_dot}leti${s}im"                        # İletişim
$t_GizlilikPolitikasi = "Gizlilik Politikas${i_dotless}" # Gizlilik Politikası
$t_KurumsalTeknoloji = "Kurumsal teknolojinin gelece${g}ini in${s}a ediyoruz."
$t_TumHaklari = "T${u}m haklar${i_dotless} sakl${i_dotless}d${i_dotless}r."  # Tüm hakları saklıdır.
$t_BulutSinif = "Bulut S${i_dotless}n${i_dotless}f"      # Bulut Sınıf
$t_AnlikMesajlasma = "Anl${i_dotless}k Mesajla${s}ma"    # Anlık Mesajlaşma
$t_BulutDisk = "Bulut Disk"
$t_Eposta = "E-posta"
$t_AkilliOnay = "Ak${i_dotless}ll${i_dotless} Onay"      # Akıllı Onay
$t_KomutaSevk = "Komuta ve Sevk"
$t_SahaYoneticisi = "Saha Y${o}neticisi"                  # Saha Yöneticisi
$t_UcretsizBaslayin = "${U}cretsiz Ba${s}lay${i_dotless}n" # Ücretsiz Başlayın
$t_Baslayin = "Ba${s}lay${i_dotless}n"                    # Başlayın
$t_BizeUlasin = "Bize Ula${s}${i_dotless}n"               # Bize Ulaşın

foreach ($f in $files) {
    $path = "$trDir\$f.html"
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    
    # === STRUCTURAL CHANGES ===
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
    
    # Language switcher: set tr as active, remove from en
    $content = $content.Replace('<div class="nav-lang-item active" data-lang="en">', '<div class="nav-lang-item" data-lang="en">')
    $content = $content.Replace('<div class="nav-lang-item" data-lang="tr">', '<div class="nav-lang-item active" data-lang="tr">')
    $content = $content.Replace('<span class="nav-lang-current" id="langCurrent">EN</span>', '<span class="nav-lang-current" id="langCurrent">TR</span>')
    
    # === NAV TRANSLATIONS ===
    $content = $content.Replace(">Products</a>", ">$t_Urunler</a>")
    $content = $content.Replace(">Platform</a>", ">Platform</a>")
    $content = $content.Replace(">Enterprise</a>", ">$t_Kurumsal</a>")
    $content = $content.Replace(">About</a>", ">$t_Hakkinda</a>")
    $content = $content.Replace('title="Switch Language"', "title=""$t_DilDegistir""")
    $content = $content.Replace(">User</span>", ">$t_Kullanici</span>")
    $content = $content.Replace('aria-label="Toggle menu"', "aria-label=""$t_MenuAcKapat""")
    
    # Login - use regex to handle SVG content between tag and text
    $content = $content -replace '(class="nav-login"[^>]*>[\s\S]*?</svg>\s*)Login', "`${1}$t_GirisYap"
    
    # Dashboard
    $content = $content -replace '(desktopHome/index\.html" target="_blank">[\s\S]*?</svg>\s*)Dashboard', "`${1}$t_KontrolPaneli"
    
    # Logout
    $content = $content -replace '(id="navLogout">[\s\S]*?</svg>\s*)Logout', "`${1}$t_CikisYap"
    
    # Nav CTA varies by page
    switch ($f) {
        "index" { $content = $content.Replace(">$t_SatisIletisim</a>", ">$t_SatisIletisim</a>"); $content = $content.Replace(">Contact Sales</a>", ">$t_SatisIletisim</a>") }
        "contact" { $content = $content.Replace(">Contact Us</a>", ">$t_BizeUlasin</a>") }
        "about" { $content = $content.Replace(">Get Started</a>", ">$t_Baslayin</a>") }
        default { $content = $content.Replace(">Get Started Free</a>", ">$t_UcretsizBaslayin</a>") }
    }
    
    # === FOOTER TRANSLATIONS ===
    $content = $content.Replace(">Building the future of enterprise technology.</p>", ">$t_KurumsalTeknoloji</p>")
    $content = $content.Replace("<h5>Products</h5>", "<h5>$t_Urunler</h5>")
    $content = $content.Replace("<h5>Solutions</h5>", "<h5>$t_Cozumler</h5>")
    $content = $content.Replace("<h5>Company</h5>", "<h5>$t_Sirket</h5>")
    $content = $content.Replace(">Cloud Classroom</a>", ">$t_BulutSinif</a>")
    $content = $content.Replace(">Instant Messenger</a>", ">$t_AnlikMesajlasma</a>")
    $content = $content.Replace(">Cloud Disk</a>", ">$t_BulutDisk</a>")
    $content = $content.Replace(">Email</a>", ">$t_Eposta</a>")
    $content = $content.Replace(">Intelligent Approval</a>", ">$t_AkilliOnay</a>")
    $content = $content.Replace(">Command & Dispatch</a>", ">$t_KomutaSevk</a>")
    $content = $content.Replace(">Field Manager</a>", ">$t_SahaYoneticisi</a>")
    $content = $content.Replace(">About Us</a>", ">$t_Hakkimizda</a>")
    $content = $content.Replace(">Careers</a>", ">$t_Kariyer</a>")
    $content = $content.Replace(">Contact</a>", ">$t_Iletisim</a>")
    $content = $content.Replace(">Privacy Policy</a>", ">$t_GizlilikPolitikasi</a>")
    $content = $content.Replace("All rights reserved.", $t_TumHaklari)
    
    # External links
    $content = $content.Replace("vls.oortcloudsmart.com/en/", "vls.oortcloudsmart.com/tr/")
    $content = $content.Replace("sh.oortcloudsmart.com/en/", "sh.oortcloudsmart.com/tr/")
    
    [System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "Processed: $f.html"
}
Write-Host "All common translations complete!"
