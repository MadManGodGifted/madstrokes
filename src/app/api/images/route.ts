import { NextResponse } from 'next/server';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const source = searchParams.get('source') || 'unsplash';

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    if (source === 'wikimedia') {
      console.log(`[Wikimedia API] Fetching images for query: "${query}"`);
      const wikiUrl = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=5&origin=*`;
      const response = await fetch(wikiUrl);
      const data = await response.json();
      
      const results = data.query?.pages ? Object.values(data.query.pages).map((page: any) => ({
        urls: { regular: page.imageinfo?.[0]?.url }
      })).filter(img => img.urls.regular) : [];

      console.log(`[Wikimedia API] Found ${results.length} images for "${query}"`);
      return NextResponse.json({ results });
    }

    // Default: Unsplash
    if (!UNSPLASH_ACCESS_KEY) {
    console.warn('[Unsplash API] UNSPLASH_ACCESS_KEY is not defined. Returning empty results.');
    return NextResponse.json({ results: [] });
  } else {
    console.log(`[Unsplash API] Key found: ${UNSPLASH_ACCESS_KEY.slice(0, 4)}...${UNSPLASH_ACCESS_KEY.slice(-4)}`);
  }

    console.log(`[Unsplash API] Fetching images for query: "${query}"`);
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=3&orientation=squarish`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Unsplash API] Error: ${response.status} ${response.statusText} - ${errorText}`);
      return NextResponse.json({ error: `Unsplash API error: ${response.statusText}`, details: errorText }, { status: response.status });
    }

    const data = await response.json();
    console.log(`[Unsplash API] Found ${data.results?.length || 0} images for "${query}"`);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(`Error fetching from ${source}:`, error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
