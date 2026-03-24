export class UnsplashService {
  static async searchImages(query: string): Promise<string[]> {
    console.log(`[UnsplashService v2.5] Fetching for: ${query}`);
    try {
      const response = await fetch(`/api/images?query=${encodeURIComponent(query + ' Indian art')}`);
      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        console.error('[UnsplashService] Fetch failed:', response.status, errData);
        return [];
      }
      const data = await response.json();
      const urls = data.results?.map((img: any) => img.urls.regular) || [];
      console.log(`[UnsplashService] Resolved ${urls.length} URLs:`, urls);
      return urls;
    } catch (error) {
      console.error('UnsplashService Error:', error);
      return [];
    }
  }
}
