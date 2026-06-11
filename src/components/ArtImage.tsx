'use client';

import { useState, useEffect } from 'react';

interface ArtImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

/**
 * ArtImage is a robust wrapper around the standard img tag.
 * It handles loading states and automatically swaps to a placeholder
 * if the primary image fails to load or is invalid.
 * 
 * IMPORTANT: useEffect syncs internal imgSrc with external src prop changes
 * so that switching art forms correctly resets and shows the new image.
 */
export default function ArtImage({ 
  src, 
  alt, 
  className = '', 
  fallback = 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000&auto=format&fit=crop' 
}: ArtImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sync state whenever the src prop changes (e.g. user switches art form)
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-earth/5 ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-earth/10">
          <div className="w-8 h-8 rounded-full border-2 border-terracotta/20 border-t-terracotta animate-spin" />
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
      />
    </div>
  );
}
