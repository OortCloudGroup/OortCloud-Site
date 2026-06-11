$c = [System.IO.File]::ReadAllText("n:\1main\tr\index.html", [System.Text.Encoding]::UTF8)
$idx = $c.IndexOf("<h5>")
Write-Host ("First h5: " + $c.Substring($idx, 30))
Write-Host ("Char after h5>: U+" + [string]::Format("{0:X4}", [int][char]$c[$idx+4]))

$idx2 = $c.IndexOf("<h5>", $idx+4)
Write-Host ("Second h5: " + $c.Substring($idx2, 30))
Write-Host ("Char after h5>: U+" + [string]::Format("{0:X4}", [int][char]$c[$idx2+4]))

$idx3 = $c.IndexOf("<h5>", $idx2+4)
Write-Host ("Third h5: " + $c.Substring($idx3, 30))
Write-Host ("Char after h5>: U+" + [string]::Format("{0:X4}", [int][char]$c[$idx3+4]))
