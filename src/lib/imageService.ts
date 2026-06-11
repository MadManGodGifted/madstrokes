import { ArtForm } from "./artData";

// ─── In-memory cache ─────────────────────────────────────────────────────────
// Keyed by art.id → resolved image URLs (populated once per session)
const imageCache = new Map<string, string[]>();

// ─── Search-term overrides ────────────────────────────────────────────────────
// Some art-form names need more precise search queries to get clean results.
const SEARCH_QUERY_OVERRIDES: Record<string, string> = {
  kalighat:      "Kalighat painting Bengal",
  pichwai:       "Pichwai painting Krishna Nathdwara",
  phad:          "Phad painting Rajasthan Pabuji",
  cheriyal:      "Cheriyal scroll painting Telangana",
  mysore:        "Mysore painting Karnataka",
  kangra:        "Kangra miniature painting Himachal",
  basholi:       "Basohli painting Pahari",
  thangka:       "Thangka Buddhist painting",
  aipan:         "Aipan art Kumaon Uttarakhand",
  alpana:        "Alpana folk art Bengal",
  saura:         "Saura tribal painting Odisha",
  santhal:       "Santhal tribal painting",
  rogan:         "Rogan art Kutch Gujarat",
  matanipachedi: "Mata ni Pachedi textile Gujarat",
  chittara:      "Chittara art Karnataka",
  keralamural:   "Kerala mural painting temple fresco",
  kavad:         "Kavad art Rajasthan wooden storytelling",
  dokra:         "Dokra metal craft lost wax",
  lippankaam:    "Lippan art Kutch mud mirror",
  manjusha:      "Manjusha art Bihar",
  sohrai:        "Sohrai painting Jharkhand",
  khovar:        "Khovar painting Jharkhand",
  kasuti:        "Kasuti embroidery Karnataka",
  chambarumal:   "Chamba Rumal embroidery Himachal",
};

export class ImageService {
  /**
   * Returns up to 6 live Wikimedia Commons image URLs for the given art form.
   * Results are cached in memory for the session lifetime.
   */
  static async getArtImages(art: ArtForm): Promise<string[]> {
    // Return cached results if available
    if (imageCache.has(art.id)) {
      return imageCache.get(art.id)!;
    }

    const query = SEARCH_QUERY_OVERRIDES[art.id] ?? `${art.name} India folk art painting`;
    console.log(`[ImageService] Fetching images for: ${art.name} | query: "${query}"`);

    try {
      // Use the existing Next.js API proxy to avoid CORS issues
      const apiUrl = `/api/images?query=${encodeURIComponent(query)}&source=wikimedia`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        console.warn(`[ImageService] API error ${response.status} for "${query}"`);
        imageCache.set(art.id, []);
        return [];
      }

      const data = await response.json();
      const urls: string[] = (data.results ?? [])
        .map((r: { urls: { regular: string } }) => r.urls?.regular)
        .filter(Boolean)
        .slice(0, 6);

      console.log(`[ImageService] Got ${urls.length} images for ${art.name}`);
      imageCache.set(art.id, urls);
      return urls;
    } catch (err) {
      console.error(`[ImageService] Fetch failed for "${art.name}":`, err);
      imageCache.set(art.id, []);
      return [];
    }
  }

  /**
   * Convenience: returns the first image URL (cover photo).
   */
  static async getCoverImage(art: ArtForm): Promise<string> {
    const images = await this.getArtImages(art);
    return images[0] ?? "";
  }

  /**
   * Pre-warms the cache for a list of art forms in the background.
   * Call this on page mount to avoid loading spinners when a user clicks an art form.
   */
  static prewarm(arts: ArtForm[]): void {
    arts.forEach(art => {
      if (!imageCache.has(art.id)) {
        this.getArtImages(art).catch(() => {/* silently ignored */});
      }
    });
  }
}
