$f = 'n:\1main\id\field-manager-poster.html'
$enc = [System.Text.Encoding]::UTF8
$bom = New-Object System.Text.UTF8Encoding $true
$c = [System.IO.File]::ReadAllText($f, $enc)

# HTML lang
$c = $c.Replace('<html lang="en">', '<html lang="id">')

# Title
$c = $c.Replace('<title>Field Manager - Product Poster</title>', '<title>Field Manager - Poster Produk</title>')

# Tagline
$c = $c.Replace('>Unified Field Operations Platform<', '>Platform Operasi Lapangan Terpadu<')

# Hero title
$c = $c.Replace('Command.<br/>', 'Komando.<br/>')
$c = $c.Replace('Dispatch.<br/>', 'Kerahkan.<br/>')
$c = $c.Replace('>Control.</span>', '>Kendalikan.</span>')

# Description
$c = $c.Replace(
    'A next-generation field management platform that unifies personnel dispatch,
        fleet coordination, facility oversight, real-time trajectory tracking,
        AI-powered visual alerting, and IM channel integration
        into a single intelligent command interface.',
    'Platform manajemen lapangan generasi baru yang menyatukan pengiriman personel,
        koordinasi armada, pengawasan fasilitas, pelacakan lintasan real-time,
        peringatan visual berbasis AI, dan integrasi kanal IM
        dalam satu antarmuka komando cerdas yang terpadu.')

# Alt text
$c = $c.Replace('alt="Field Manager Platform Overview"', 'alt="Gambaran Umum Platform Field Manager"')

# Stats bar
$c = $c.Replace('>Situational Awareness<', '>Kesadaran Situasional<')
$c = $c.Replace('>Tracking & Dispatch<', '>Pelacakan & Pengiriman<')
$c = $c.Replace('>All-in-One<', '>Semua-dalam-Satu<')
$c = $c.Replace('>Command Platform<', '>Platform Komando<')

# Product Showcase
$c = $c.Replace('>PRODUCT SHOWCASE<', '>PENAMPILAN PRODUK<')
$c = $c.Replace('>Panoramic Command Interface<', '>Antarmuka Komando Panoramik<')
$c = $c.Replace('alt="Command Center Dashboard"', 'alt="Dasbor Pusat Komando"')
$c = $c.Replace('>Intelligent Command Center<', '>Pusat Komando Cerdas<')
$c = $c.Replace('>City-wide situational awareness with real-time personnel, vehicle, and facility overlays<',
    '>Kesadaran situasional seluruh kota dengan overlay personel, kendaraan, dan fasilitas secara real-time<')
$c = $c.Replace('alt="Feature Module Overview"', 'alt="Gambaran Umum Modul Fitur"')
$c = $c.Replace('>Unified Feature Matrix<', '>Matriks Fitur Terpadu<')
$c = $c.Replace('>Workforce, fleet, facility, and tracking modules working in seamless coordination<',
    '>Modul tenaga kerja, armada, fasilitas, dan pelacakan yang bekerja dalam koordinasi yang mulus<')

# Core Modules
$c = $c.Replace('>Core Modules<', '>Modul Inti<')
$c = $c.Replace('Six Pillars of<br/>Field Management', 'Enam Pilar<br/>Manajemen Lapangan')

# Feature 1 - Workforce
$c = $c.Replace('>Workforce Management<', '>Manajemen Tenaga Kerja<')
$c = $c.Replace(
    'Real-time visibility into all on-site personnel. Assign tasks, monitor status,
          and coordinate teams from a unified dispatch board with role-based access control.',
    'Visibilitas real-time untuk semua personel di lapangan. Tugaskan tugas, pantau status,
          dan koordinasikan tim dari papan pengiriman terpadu dengan kontrol akses berbasis peran.')

# Feature 2 - Fleet
$c = $c.Replace('>Fleet Operations<', '>Operasi Armada<')
$c = $c.Replace(
    'Track, dispatch, and optimize your field fleet in real time. Monitor vehicle
          health, fuel levels, and route efficiency with live GPS integration.',
    'Lacak, kirim, dan optimalkan armada lapangan secara real-time. Pantau kondisi
          kendaraan, level bahan bakar, dan efisiensi rute dengan integrasi GPS langsung.')

# Feature 3 - Facility
$c = $c.Replace('>Facility Oversight<', '>Pengawasan Fasilitas<')
$c = $c.Replace(
    'Comprehensive monitoring of field sites and infrastructure. Track access,
          safety compliance, equipment status, and environmental conditions at a glance.',
    'Pemantauan komprehensif terhadap lokasi lapangan dan infrastruktur. Pantau akses,
          kepatuhan keselamatan, status peralatan, dan kondisi lingkungan dalam sekejap.')

# Feature 4 - Tracking
$c = $c.Replace('>Trajectory Tracking<', '>Pelacakan Lintasan<')
$c = $c.Replace(
    'Visualize movement patterns and historical paths of personnel and vehicles.
          Geofencing alerts, playback analysis, and predictive route optimization.',
    'Visualisasikan pola pergerakan dan jalur historis personel dan kendaraan.
          Peringatan geofencing, analisis pemutaran ulang, dan optimasi rute prediktif.')

# Feature 5 - AI Vision
$c = $c.Replace('>AI Vision Alerting<', '>Peringatan Visual AI<')
$c = $c.Replace(
    'Leverage vision foundation models to analyze live camera feeds in real time.
          Automatically detect safety hazards, compliance violations, and anomalies
          with instant alert triggers.',
    'Manfaatkan model fondasi visual untuk menganalisis umpan kamera langsung secara real-time.
          Deteksi otomatis bahaya keselamatan, pelanggaran kepatuhan, dan anomali
          dengan pemicu peringatan instan.')

# Feature 6 - IM Channel
$c = $c.Replace('>IM Channel Integration<', '>Integrasi Kanal IM<')
$c = $c.Replace(
    'Push field operations updates directly to enterprise IM channels.
          Remote managers stay informed with real-time notifications, command
          dispatch, and instant two-way communication.',
    'Kirim pembaruan operasi lapangan langsung ke kanal IM perusahaan.
          Manajer jarak jauh tetap terinformasi dengan notifikasi real-time,
          pengiriman perintah, dan komunikasi dua arah secara instan.')

# Capabilities
$c = $c.Replace('>Key Capabilities<', '>Kemampuan Utama<')
$c = $c.Replace('>Built for the Field<', '>Dibangun untuk Lapangan<')
$c = $c.Replace('>Real-time GPS personnel tracking<', '>Pelacakan personel GPS real-time<')
$c = $c.Replace('>Smart task assignment & routing<', '>Penugasan & penugasan rute cerdas<')
$c = $c.Replace('>Vehicle health & maintenance alerts<', '>Peringatan kesehatan & perawatan kendaraan<')
$c = $c.Replace('>Geofencing & zone-based notifications<', '>Geofencing & notifikasi berbasis zona<')
$c = $c.Replace('>Multi-site facility dashboard<', '>Dasbor fasilitas multi-lokasi<')
$c = $c.Replace('>Historical trajectory playback<', '>Pemutaran ulang lintasan historis<')
$c = $c.Replace('>Emergency dispatch & escalation<', '>Pengiriman darurat & eskalasi<')
$c = $c.Replace('>Offline mode for remote areas<', '>Mode offline untuk area terpencil<')
$c = $c.Replace('>Role-based access & permissions<', '>Akses & permission berbasis peran<')
$c = $c.Replace('>Integration with IoT sensors<', '>Integrasi dengan sensor IoT<')
$c = $c.Replace('>AI vision hazard detection<', '>Deteksi bahaya visual AI<')
$c = $c.Replace('>IM push notifications & commands<', '>Notifikasi push & perintah IM<')

# Workflow
$c = $c.Replace('>How It Works<', '>Cara Kerja<')
$c = $c.Replace('>From Dispatch to Delivery<', '>Dari Pengiriman hingga Penyampaian<')
$c = $c.Replace('>Assign<', '>Tugaskan<')
$c = $c.Replace('>Allocate personnel<br/>& vehicles to sites<', '>Alokasikan personel<br/>& kendaraan ke lokasi<')
$c = $c.Replace('>Dispatch<', '>Kirim<')
$c = $c.Replace('>Route teams with<br/>optimized paths<', '>Arahkan tim dengan<br/>rute yang dioptimalkan<')
$c = $c.Replace('>Monitor<', '>Pantau<')
$c = $c.Replace('>Track progress &<br/>site conditions live<', '>Lacak kemajuan &<br/>kondisi lokasi secara langsung<')
$c = $c.Replace('>Analyze<', '>Analisis<')
$c = $c.Replace('>Review trajectories<br/>& optimize operations<', '>Tinjau lintasan<br/>& optimalkan operasi<')

# Footer CTA
$c = $c.Replace('>Ready to transform your field operations?<', '>Siap mentransformasi operasi lapangan Anda?<')
$c = $c.Replace('          Request a Demo', '          Minta Demo')

[System.IO.File]::WriteAllText($f, $c, $bom)
Write-Host "Done translating field-manager-poster.html"
