 = 'n:\1main\classroom.html'
 = [System.IO.File]::ReadAllText(, [System.Text.Encoding]::UTF8)

# Hero Section
 = .Replace('<a href= index.html>Products</a>', '<a href=index.html>Productos</a>')
 = .Replace('<span>Cloud Classroom</span>', '<span>Aula en la nube</span>')
 = .Replace('Where knowledge <span class=gradient-text-red>comes alive</span>', 'Donde el conocimiento <span class=gradient-text-red>cobra vida</span>')
 = .Replace('The enterprise video learning platform that empowers organizations to create, share, and manage knowledge at scale. Live streaming, on-demand video, interactive training — all in one place.', 'La plataforma de aprendizaje en vídeo empresarial que permite a las organizaciones crear, compartir y gestionar conocimiento a escala. Transmisión en vivo, vídeo bajo demanda, formación interactiva: todo en un solo lugar.')
 = .Replace('>Start Free Trial</a>', '>Iniciar prueba gratuita</a>')
 = .Replace('>See How It Works</a>', '>Ver cómo funciona</a>')
 = .Replace('>Enterprise Training Session</div>', '>Sesión de formación empresarial</div>')
 = .Replace('>Course Contents</div>', '>Contenidos del curso</div>')
 = .Replace('>Introduction & Overview</span>', '>Introducción y descripción general</span>')
 = .Replace('>Core Concepts</span>', '>Conceptos fundamentales</span>')
 = .Replace('>Hands-on Practice</span>', '>Práctica práctica</span>')
 = .Replace('>Assessment & Quiz</span>', '>Evaluación y cuestionario</span>')

Write-Host 'Hero section done'
[System.IO.File]::WriteAllText(, , (New-Object System.Text.UTF8Encoding True))