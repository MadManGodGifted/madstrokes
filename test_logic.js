
const artKeywords = [
  'painting', 'mural', 'canvas', 'ink', 'dye', 'handmade', 
  'traditional', 'heritage', 'folk', 'tribal', 'ancient',
  'sculpture', 'textile', 'weave', 'embroidery', 'pottery',
  'manuscript', 'illustration', 'sketch', 'drawing', 'artifact',
  'terracotta', 'bronze', 'canvas', 'scroll'
];

const blacklist = [
  'stock-photo', 'gettyimages', 'shutterstock', 'adobe-stock', 
  'portrait', 'person', 'face', 'human', 'selfie', 'fashion',
  'logo', 'graphic', 'banner', 'poster',
  'nature', 'landscape', 'mountain', 'animal', 'bird',
  'travel', 'hotel', 'tourism', 'generic', 'placeholder'
];

function generateQuery(art) {
  const parts = [
    art.name,
    art.medium?.includes('textile') || art.medium?.includes('embroidery') ? 'textile art' : 
    art.medium?.includes('painting') || art.medium?.includes('mural') ? 'painting' : '',
    art.state,
    'India'
  ].filter(Boolean);
  
  return parts.join(' ');
}

function validateArtImage(url, artFormName) {
  const lowerUrl = url.toLowerCase();
  
  if (blacklist.some(word => lowerUrl.includes(word))) return false;

  const reliableSources = ['wikimedia', 'unsplash', 'pixabay', 'museum', 'archive'];
  const isFromReliableSource = reliableSources.some(source => lowerUrl.includes(source));

  const hasArtKeyword = artKeywords.some(keyword => lowerUrl.includes(keyword));

  return isFromReliableSource || hasArtKeyword;
}

// Test cases
const testArts = [
  { name: "Warli Art", state: "Maharashtra", medium: "Natural pigments on mud wall" },
  { name: "Madhubani Painting", state: "Bihar", medium: "Natural dyes on paper/wall" },
  { name: "Kasuti Embroidery", state: "Karnataka", medium: "Hand embroidery on fabric" }
];

console.log("--- Query Generation Tests ---");
testArts.forEach(art => {
  console.log(`Art: ${art.name} -> Query: "${generateQuery(art)}"`);
});

console.log("\n--- Filtering Tests ---");
const urls = [
  "https://upload.wikimedia.org/wikipedia/commons/warli_painting.jpg", // Valid
  "https://images.unsplash.com/photo-portrait-face.jpg", // Invalid (portrait, face)
  "https://images.unsplash.com/photo-warli-tribal-art.jpg", // Valid
  "https://example.com/random-person.jpg", // Invalid (person)
  "https://museum.org/artifact-ancient-pottery.jpg" // Valid
];

urls.forEach(url => {
  console.log(`URL: ${url} -> Valid: ${validateArtImage(url, "test")}`);
});
