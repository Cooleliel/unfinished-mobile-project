const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const ANDROID_ICONS = [
    { size: 48, name: 'mipmap-mdpi' },
    { size: 72, name: 'mipmap-hdpi' },
    { size: 96, name: 'mipmap-xhdpi' },
    { size: 144, name: 'mipmap-xxhdpi' },
    { size: 192, name: 'mipmap-xxxhdpi' }
];

const RES_PATH = './android/app/src/main/res';

async function generateAndroidIcons(sourceIcon) {
    // Créer les icônes pour chaque résolution
    for (const icon of ANDROID_ICONS) {
        const outputPath = path.join(RES_PATH, icon.name);
        
        // Générer l'icône normale
        await sharp(sourceIcon)
            .resize(icon.size, icon.size)
            .toFile(path.join(outputPath, 'ic_launcher.png'));
            
        // Générer l'icône ronde
        await sharp(sourceIcon)
            .resize(icon.size, icon.size)
            .composite([{
                input: Buffer.from(`
                    <svg>
                        <circle cx="${icon.size/2}" cy="${icon.size/2}" r="${icon.size/2}" fill="black"/>
                    </svg>`),
                blend: 'dest-in'
            }])
            .toFile(path.join(outputPath, 'ic_launcher_round.png'));
    }

    // Créer le dossier mipmap-anydpi-v26 s'il n'existe pas
    const anydpiPath = path.join(RES_PATH, 'mipmap-anydpi-v26');
    await fs.mkdir(anydpiPath, { recursive: true });

    // Créer les fichiers XML nécessaires
    await fs.writeFile(
        path.join(anydpiPath, 'ic_launcher.xml'),
        `<?xml version="1.0" encoding="utf-8"?>
            <adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
                <background android:drawable="@color/ic_launcher_background"/>
                <foreground android:drawable="@mipmap/ic_launcher"/>
            </adaptive-icon>`
    );

    await fs.writeFile(
        path.join(anydpiPath, 'ic_launcher_round.xml'),
        `<?xml version="1.0" encoding="utf-8"?>
            <adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
                <background android:drawable="@color/ic_launcher_background"/>
                <foreground android:drawable="@mipmap/ic_launcher_round"/>
            </adaptive-icon>`
    );

    // Créer le fichier colors.xml s'il n'existe pas
    const valuesPath = path.join(RES_PATH, 'values');
    await fs.mkdir(valuesPath, { recursive: true });
    
    await fs.writeFile(
        path.join(valuesPath, 'colors.xml'),
        `<?xml version="1.0" encoding="utf-8"?>
            <resources>
                <color name="ic_launcher_background">#FFFFFF</color>
            </resources>`
    );

    console.log('Génération des icônes terminée !');
}

// Lancer le script
const sourceIcon = process.argv[2];
if (!sourceIcon) {
    console.error('Veuillez fournir le chemin de l\'icône source');
    process.exit(1);
}

generateAndroidIcons(sourceIcon).catch(console.error);