import { ArtForm } from "./artData";
import { WikimediaService } from "./wikimediaService";
import { UnsplashService } from "./unsplashService";
import artImagesRegistry from "./artImagesRegistry.json";

interface ArtImagesMap {
  [key: string]: string[];
}

const registry: ArtImagesMap = artImagesRegistry;

const BACKUP_ART_IMAGE = "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000&auto=format&fit=crop";

export class ImageService {
  static async getArtImages(art: ArtForm): Promise<string[]> {
    console.log(`[ImageService] Resolving images for: ${art.name}`);
    let results: string[] = [];

    try {
      // 1. Priority: Wikimedia Commons (Accuracy)
      const wikiImages = await WikimediaService.searchImages(art.name);
      const validWiki = wikiImages.filter(url => this.validateArtImage(url, art.name));
      results = [...validWiki.slice(0, 3)];
      console.log(`[ImageService] Found ${validWiki.length} valid Wikimedia images`);

      // 2. Secondary: Unsplash (Aesthetics) - Fill if needed
      if (results.length < 3) {
        const unsplashImages = await UnsplashService.searchImages(art.name);
        const validUnsplash = unsplashImages.filter(url => 
          this.validateArtImage(url, art.name) && !results.includes(url)
        );
        results = [...results, ...validUnsplash.slice(0, 3 - results.length)];
        console.log(`[ImageService] Added ${validUnsplash.length} Unsplash images to fill results`);
      }

      if (results.length >= 1) return results;
    } catch (error) {
      console.error(`[ImageService] Multi-source resolution error:`, error);
    }

    // 2. Fallback to Verified Registry
    const registeredImages = registry[art.id] || [];
    if (registeredImages.length > 0) {
      console.log(`[ImageService] Falling back to registry for ${art.name}`);
      return registeredImages.slice(0, 3);
    }

    // 3. High-Quality Static Backup
    console.log(`[ImageService] No dynamic/registered images. Using high-quality backup for ${art.name}`);
    return [BACKUP_ART_IMAGE, `/placeholders/art-traditional-placeholder.svg`];
  }

  /**
   * Quick utility to get just the first image
   */
  static async getCoverImage(art: ArtForm): Promise<string> {
    const images = await this.getArtImages(art);
    return images[0];
  }

  private static validateArtImage(url: string, artFormName: string): boolean {
    const lowerUrl = url.toLowerCase();
    
    // Strict Blacklist
    const blacklist = [
      'stock-photo', 'gettyimages', 'shutterstock', 'adobe-stock', 
      'portrait', 'person', 'face', 'human', 'selfie', 'fashion',
      'logo', 'graphic', 'banner', 'poster',
      'nature', 'landscape', 'mountain', 'animal', 'bird',
      'travel', 'hotel', 'tourism', 'generic', 'placeholder'
    ];

    if (blacklist.some(word => lowerUrl.includes(word))) return false;

    // Reliability Check
    const reliableSources = ['wikimedia', 'unsplash', 'pixabay', 'museum', 'archive'];
    const isFromReliableSource = reliableSources.some(source => lowerUrl.includes(source));

    // Context Keywords
    const artKeywords = [
      'painting', 'mural', 'canvas', 'ink', 'dye', 'handmade', 
      'traditional', 'heritage', 'folk', 'tribal', 'ancient',
      'sculpture', 'textile', 'weave', 'embroidery', 'pottery',
      'manuscript', 'illustration', 'sketch', 'drawing'
    ];

    const hasArtKeyword = artKeywords.some(keyword => lowerUrl.includes(keyword));

    return isFromReliableSource || hasArtKeyword;
  }
}
