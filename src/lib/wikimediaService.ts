export class WikimediaService {
  static async searchImages(query: string): Promise<string[]> {
    try {
      const response = await fetch(`/api/images?source=wikimedia&query=${encodeURIComponent(query + ' Indian art')}`);
      if (!response.ok) {
        console.error('[WikimediaService] Fetch failed:', response.status);
        return [];
      }
      const data = await response.json();
      return data.results?.map((img: any) => img.urls.regular) || [];
    } catch (error) {
      console.error('WikimediaService Error:', error);
      return [];
    }
  }
}
