const fs = require('fs');

const artForms = JSON.parse(fs.readFileSync('src/lib/artFormsData.json', 'utf8'));
const registry = JSON.parse(fs.readFileSync('src/lib/artImagesRegistry.json', 'utf8'));

console.log("Checking art forms against registry...\n");

artForms.forEach(art => {
  const urls = registry[art.id];
  if (!urls) {
    console.log(`❌ Missing registry entry: ${art.id} (${art.name})`);
  } else {
    console.log(`✅ ${art.id}: ${urls.length} images`);
    urls.forEach((url, i) => {
      if (url.includes('unsplash.com/photo-') && (
        url.includes('photo-1582555172866-f73bb12a2ab3') ||
        url.includes('photo-1544413647-b539bfcacc6d') ||
        url.includes('photo-1515405295579-ba7b45403062') ||
        url.includes('photo-1627341870230-0192eef81fdb') ||
        url.includes('photo-1541810271594-83952ba58941') ||
        url.includes('photo-1628198642055-6679549cd87c') ||
        url.includes('photo-1579783902614-a3fb3927b6a5') ||
        url.includes('photo-1533154683836-84ea7a0bc310')
      )) {
        console.log(`   ⚠️ Image ${i+1} is a generic placeholder: ${url}`);
      }
    });
  }
});
