$files = @(
    "n:\1main\tr\apply_structure.ps1",
    "n:\1main\tr\fix_head.ps1",
    "n:\1main\tr\common_translate.ps1"
)
$bom = [byte[]]@(0xEF, 0xBB, 0xBF)
foreach ($f in $files) {
    $bytes = [System.IO.File]::ReadAllBytes($f)
    if ($bytes[0] -ne 0xEF -or $bytes[1] -ne 0xBB -or $bytes[2] -ne 0xBF) {
        $newBytes = $bom + $bytes
        [System.IO.File]::WriteAllBytes($f, $newBytes)
        Write-Host "BOM added to: $f"
    } else {
        Write-Host "BOM already present: $f"
    }
}
