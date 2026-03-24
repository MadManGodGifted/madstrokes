"use client";

import { ArtForm } from "@/lib/artData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImageService } from "@/lib/imageService";

interface ArtCardProps {
    art: ArtForm;
}

import ArtImage from './ArtImage';

export default function ArtCard({ art }: ArtCardProps) {
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const [isPlaceholder, setIsPlaceholder] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            const url = await ImageService.getCoverImage(art);
            setCoverImage(url);
            setIsPlaceholder(url.includes('placeholder'));
        };
        fetchImage();
    }, [art]);

    return (
        <div
            className={`group relative rounded-xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full ${
                isPlaceholder ? 'bg-[#FDFCF8] border-terracotta/10' : 'bg-white border-black/5'
            }`}
        >
            {/* Image Section */}
            <div className={`relative ${isPlaceholder ? 'opacity-40 grayscale-[0.5]' : ''}`}>
                {coverImage ? (
                    <ArtImage
                        src={coverImage}
                        alt={art.name}
                        className="aspect-[4/3] w-full"
                    />
                ) : (
                    <div className="aspect-[4/3] w-full bg-off-white animate-pulse" />
                )}
                {!isPlaceholder && coverImage && <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />}
            </div>
            
            <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 backdrop-blur-sm text-xs font-sans uppercase tracking-widest rounded-full shadow-sm ${
                    isPlaceholder ? 'bg-earth/5 text-earth/60 border border-earth/10' : 'bg-white/90 text-terracotta'
                }`}>
                    {art.state}
                </span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-indigo-dye mb-3 group-hover:text-terracotta transition-colors">
                    {art.name}
                </h3>
                <p className="text-earth/70 text-sm font-sans mb-6 line-clamp-3">
                    {art.shortDescription}
                </p>

                <div className="mt-auto pt-6 border-t border-earth/10 flex justify-between items-end">
                    {art.medium && (
                        <span className="text-[10px] font-sans text-earth/50 uppercase tracking-[0.1em] font-medium max-w-[140px] leading-tight">
                            {art.medium}
                        </span>
                    )}
                    <Link
                        href={`/art-forms/${art.id}`}
                        className="flex items-center space-x-1 text-terracotta font-serif text-sm hover:underline group/btn"
                    >
                        <span>Explore</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
