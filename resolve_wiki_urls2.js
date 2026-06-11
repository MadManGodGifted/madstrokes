// Search for more images using broader queries
const https = require('https');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'MadStrokesBot/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function searchWikiImages(query, limit = 5) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&origin=*`;
  const data = await fetchJSON(apiUrl);
  const urls = [];
  if (data.query && data.query.pages) {
    for (const page of Object.values(data.query.pages)) {
      if (page.imageinfo && page.imageinfo[0]) {
        const url = page.imageinfo[0].url;
        if (!url.endsWith('.svg') && !url.includes('logo') && !url.includes('icon') && !url.includes('flag')) {
          urls.push({ title: page.title, url });
        }
      }
    }
  }
  return urls;
}

async function main() {
  const searches = [
    { id: 'chittara', queries: ['Chittara painting', 'Deevaru art', 'Malnad folk art Karnataka'] },
    { id: 'lippankaam', queries: ['Lippan kaam', 'mud mirror art Kutch', 'Kutch mud work'] },
    { id: 'kavad', queries: ['Kavad Rajasthan', 'kavad storytelling wooden', 'portable shrine Rajasthan'] },
    { id: 'manjusha', queries: ['Manjusha kala', 'Manjusha painting Bihar', 'Ang Pradesh art'] },
  ];

  for (const { id, queries } of searches) {
    console.log(`\n=== ${id} ===`);
    for (const query of queries) {
      console.log(`\n  Query: "${query}"`);
      const results = await searchWikiImages(query, 5);
      results.forEach((r, i) => console.log(`    [${i}] ${r.title}: ${r.url}`));
      if (results.length === 0) console.log('    No results');
    }
  }
}

main().catch(console.error);
