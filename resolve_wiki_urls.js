// Script to resolve actual Wikimedia Commons image URLs from filenames
const https = require('https');
const http = require('http');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, { headers: { 'User-Agent': 'MadStrokesBot/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function resolveFileURLs(filenames) {
  const titles = filenames.map(f => `File:${f}`).join('|');
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=url&format=json&origin=*`;
  const data = await fetchJSON(apiUrl);
  const results = {};
  if (data.query && data.query.pages) {
    for (const page of Object.values(data.query.pages)) {
      if (page.imageinfo && page.imageinfo[0]) {
        results[page.title.replace('File:', '')] = page.imageinfo[0].url;
      } else {
        results[page.title.replace('File:', '')] = 'NOT FOUND';
      }
    }
  }
  return results;
}

// Art form search queries for Wikimedia
async function searchWikiImages(query, limit = 3) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&origin=*`;
  const data = await fetchJSON(apiUrl);
  const urls = [];
  if (data.query && data.query.pages) {
    for (const page of Object.values(data.query.pages)) {
      if (page.imageinfo && page.imageinfo[0]) {
        const url = page.imageinfo[0].url;
        // Filter out SVGs, tiny icons, logos
        if (!url.endsWith('.svg') && !url.includes('logo') && !url.includes('icon')) {
          urls.push(url);
        }
      }
    }
  }
  return urls;
}

async function main() {
  console.log("=== Resolving Known Filenames ===\n");
  
  // Known filenames from research
  const knownFiles = [
    'Chittara_art.png',
    'Kasuti_of_Karnataka.jpg',
    'Kasuti_embroidery.jpg',
    '2018-07-18_kutch_mud_work.jpg',
    'Chamba_Rumal_with_the_Mahavidyas_LACMA_M.80.4.jpg',
    'Chamba_Rumal_with_Scenes_of_Gopis_Adoring_Krishna_LACMA_M.71.1.40.jpg',
    'Chamba_Rumal_with_Scenes_of_Sita_and_Hanuman_LACMA_M.71.37.3.jpg',
    'Rumal_with_Krishna_and_Radha_LACMA_AC1998.111.1.jpg',
    'Kavad_from_Rajasthan,_early_20th_century,_paint_on_wood,_maker_unknown.JPG',
    'Manjusha_boat_art.jpg',
    'Manjusha_drawing.jpg',
  ];
  
  // Resolve in batches of 5 (API limit)
  for (let i = 0; i < knownFiles.length; i += 5) {
    const batch = knownFiles.slice(i, i + 5);
    const resolved = await resolveFileURLs(batch);
    for (const [name, url] of Object.entries(resolved)) {
      console.log(`${name}: ${url}`);
    }
  }

  console.log("\n=== Searching for Art Forms ===\n");
  
  // Search for art forms that need images
  const searches = {
    'chittara': 'Chittara art Karnataka folk',
    'lippankaam': 'Lippan art Kutch Gujarat mud mirror',
    'kavad': 'Kavad art Rajasthan storytelling',
    'manjusha': 'Manjusha art Bihar boat painting',
    'khovar': 'Khovar art Jharkhand Hazaribagh',
    'kasuti': 'Kasuti embroidery Karnataka',
    'chambarumal': 'Chamba Rumal embroidery Himachal',
  };

  for (const [artId, query] of Object.entries(searches)) {
    console.log(`\n--- ${artId} (query: "${query}") ---`);
    const urls = await searchWikiImages(query, 5);
    urls.forEach((url, i) => console.log(`  [${i}] ${url}`));
    if (urls.length === 0) console.log('  No results found');
  }
}

main().catch(console.error);
