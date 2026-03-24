const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'phtos');
const destDir = path.join(__dirname, 'public', 'phtos');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const srcFile = path.join(srcDir, file);
        const destFile = path.join(destDir, file);
        fs.copyFileSync(srcFile, destFile);
        console.log(`Copied ${file}`);
    }
}
console.log('Done copying assets.');
