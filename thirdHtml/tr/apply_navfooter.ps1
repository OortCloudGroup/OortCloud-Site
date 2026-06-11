# Apply nav/footer translations from JSON reference file
$trDir = "n:\1main\tr"
$jsonPath = "$trDir\translations.json"
$jsonContent = [System.IO.File]::ReadAllText($jsonPath, [System.Text.Encoding]::UTF8)
$t = $jsonContent | ConvertFrom-Json

$files = @("about","approval","classroom","clouddisk","contact","dispatch","email","fieldmanager","messenger","oortai","workup")

foreach ($f in $files) {
    $path = "$trDir\$f.html"
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    
    # === NAV ===
    $content = $content.Replace(">Products</a>", ">" + $t.nav_products + "</a>")
    $content = $content.Replace(">Platform</a>", ">" + $t.nav_platform + "</a>")
    $content = $content.Replace(">Enterprise</a>", ">" + $t.nav_enterprise + "</a>")
    $content = $content.Replace(">About</a>", ">" + $t.nav_about + "</a>")
    
    $content = $content.Replace('title="Switch Language"', 'title="' + $t.nav_switch_lang + '"')
    $content = $content.Replace(">User</span>", ">" + $t.nav_user + "</span>")
    $content = $content.Replace('aria-label="Toggle menu"', 'aria-label="' + $t.nav_toggle_menu + '"')
    
    # Login/Dashboard/Logout with SVG-aware regex
    $content = $content -replace '(class="nav-login"[^>]*>[\s\S]*?</svg>\s*)Login', ('$1' + $t.nav_login)
    $content = $content -replace '(desktopHome/index\.html" target="_blank">[\s\S]*?</svg>\s*)Dashboard', ('$1' + $t.nav_dashboard)
    $content = $content -replace '(id="navLogout">[\s\S]*?</svg>\s*)Logout', ('$1' + $t.nav_logout)
    
    # Nav CTA varies by page
    switch ($f) {
        "contact" { $content = $content.Replace(">Contact Us</a>", ">" + $t.nav_contact_us + "</a>") }
        "about" { $content = $content.Replace(">Get Started</a>", ">" + $t.nav_get_started + "</a>") }
        default { $content = $content.Replace(">Get Started Free</a>", ">" + $t.nav_get_started_free + "</a>") }
    }
    
    # === FOOTER ===
    $content = $content.Replace(">Building the future of enterprise technology.</p>", ">" + $t.footer_tagline + "</p>")
    $content = $content.Replace("<h5>Products</h5>", "<h5>" + $t.footer_products + "</h5>")
    $content = $content.Replace("<h5>Solutions</h5>", "<h5>" + $t.footer_solutions + "</h5>")
    $content = $content.Replace("<h5>Company</h5>", "<h5>" + $t.footer_company + "</h5>")
    
    $content = $content.Replace(">Cloud Classroom</a>", ">" + $t.footer_cloud_classroom + "</a>")
    $content = $content.Replace(">Instant Messenger</a>", ">" + $t.footer_instant_messenger + "</a>")
    $content = $content.Replace(">Cloud Disk</a>", ">" + $t.footer_cloud_disk + "</a>")
    $content = $content.Replace(">Email</a>", ">" + $t.footer_email + "</a>")
    $content = $content.Replace(">Intelligent Approval</a>", ">" + $t.footer_intelligent_approval + "</a>")
    $content = $content.Replace(">Command & Dispatch</a>", ">" + $t.footer_command_dispatch + "</a>")
    $content = $content.Replace(">Field Manager</a>", ">" + $t.footer_field_manager + "</a>")
    
    $content = $content.Replace(">About Us</a>", ">" + $t.footer_about_us + "</a>")
    $content = $content.Replace(">Careers</a>", ">" + $t.footer_careers + "</a>")
    $content = $content.Replace(">Contact</a>", ">" + $t.footer_contact + "</a>")
    $content = $content.Replace(">Privacy Policy</a>", ">" + $t.footer_privacy + "</a>")
    $content = $content.Replace("All rights reserved.", $t.footer_copyright)
    
    [System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "Nav/footer translated: $f.html"
}
Write-Host "Done!"
