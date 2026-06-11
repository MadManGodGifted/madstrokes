
const GLOBAL_USED_URLS = new Set();
const registry = {
  "warli": ["url1", "url2"],
  "madhubani": ["url3", "url4"]
};

// Simulate pre-population
Object.values(registry).forEach(urls => urls.forEach(url => GLOBAL_USED_URLS.add(url)));

function getDynamicFallback(art, index) {
  const fallbacks = [
    `/placeholders/p0.svg`,
    `/placeholders/p1.svg`,
    `/placeholders/p2.svg`,
    `/placeholders/p3.svg`
  ];
  const hash = art.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return fallbacks[(hash + index) % fallbacks.length];
}

async function getArtImages(art, mockWikiResults, mockUnsplashResults) {
  let results = registry[art.id] || [];
  if (results.length >= 3) return results.slice(0, 3);

  // Wiki
  const validWiki = mockWikiResults.filter(url => !GLOBAL_USED_URLS.has(url) && !results.includes(url));
  const selectedWiki = validWiki.slice(0, 3 - results.length);
  selectedWiki.forEach(url => GLOBAL_USED_URLS.add(url));
  results = [...results, ...selectedWiki];

  // Unsplash
  if (results.length < 3) {
    const validUnsplash = mockUnsplashResults.filter(url => !GLOBAL_USED_URLS.has(url) && !results.includes(url));
    const selectedUnsplash = validUnsplash.slice(0, 3 - results.length);
    selectedUnsplash.forEach(url => GLOBAL_USED_URLS.add(url));
    results = [...results, ...selectedUnsplash];
  }

  if (results.length > 0) return results;

  return [getDynamicFallback(art, 0), getDynamicFallback(art, 1), getDynamicFallback(art, 2)];
}

// Tests
async function runTests() {
  console.log("--- Uniqueness Test ---");
  const art1 = { id: "pattachitra", name: "Pattachitra" };
  const art2 = { id: "kalamkari", name: "Kalamkari" };
  
  const commonResults = ["shared-url-1", "shared-url-2", "unique-1", "unique-2"];
  
  const res1 = await getArtImages(art1, commonResults, []);
  console.log("Art 1 Results:", res1);
  
  const res2 = await getArtImages(art2, commonResults, []);
  console.log("Art 2 Results:", res2);
  
  const intersection = res1.filter(x => res2.includes(x));
  console.log("Common URLs (should be empty):", intersection);

  console.log("\n--- Fallback Consistency Test ---");
  const art3 = { id: "newart", name: "New Art" };
  const fallback1 = [getDynamicFallback(art3, 0), getDynamicFallback(art3, 1), getDynamicFallback(art3, 2)];
  const fallback2 = [getDynamicFallback(art3, 0), getDynamicFallback(art3, 1), getDynamicFallback(art3, 2)];
  console.log("Fallback 1:", fallback1);
  console.log("Fallback 2 (should be same):", JSON.stringify(fallback1) === JSON.stringify(fallback2));
}

runTests();
