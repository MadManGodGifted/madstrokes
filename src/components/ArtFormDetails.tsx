"use client";

import { ArtForm } from "@/lib/artData";
import { motion } from "framer-motion";
import { MapPin, Palette, History, Flame, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageService } from "@/lib/imageService";
import ArtImage from './ArtImage';

interface ArtFormDetailsProps {
    art: ArtForm;
}

export default function ArtFormDetails({ art }: ArtFormDetailsProps) {
    const [activeImage, setActiveImage] = useState(0);
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            const urls = await ImageService.getArtImages(art);
            setImages(urls);
            setLoading(false);
        };
        fetchImages();
    }, [art]);

    if (loading || images.length === 0) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-pulse">
                <div className="aspect-square bg-off-white rounded-2xl" />
                <div className="space-y-4">
                    <div className="h-12 bg-off-white rounded w-3/4" />
                    <div className="h-6 bg-off-white rounded w-1/2" />
                    <div className="space-y-2">
                        <div className="h-4 bg-off-white rounded" />
                        <div className="h-4 bg-off-white rounded" />
                        <div className="h-4 bg-off-white rounded w-5/6" />
                    </div>
                </div>
            </div>
        );
    }

    const currentImage = images[activeImage];
    const isMainPlaceholder = currentImage.includes('placeholder');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery Section */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <div className={`relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-terracotta/10 ${
                    isMainPlaceholder ? 'bg-[#FDFCF8]' : ''
                }`}>
                    <ArtImage
                        src={currentImage}
                        alt={art.name}
                        className={`w-full h-full ${isMainPlaceholder ? 'opacity-40 grayscale-[0.5]' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                        <div>
                            <span className="text-white/60 text-xs font-sans uppercase tracking-[0.2em] mb-1 block">Location</span>
                            <div className="flex items-center text-white space-x-2">
                                <MapPin size={16} className="text-terracotta" />
                                <span className="font-serif text-xl">{art.state}, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {images.map((url: string, index: number) => {
                        const isThumbPlaceholder = url.includes('placeholder');
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                                    index === activeImage 
                                        ? "border-terracotta shadow-lg scale-95" 
                                        : "border-transparent opacity-60 hover:opacity-100"
                                } ${isThumbPlaceholder ? 'bg-[#FDFCF8]/50' : ''}`}
                            >
                                <ArtImage 
                                    src={url} 
                                    alt={`${art.name} thumbnail ${index + 1}`} 
                                    className={`w-full h-full ${isThumbPlaceholder ? 'opacity-30' : ''}`} 
                                />
                            </button>
                        );
                    })}
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col"
            >
                <header className="mb-10">
                    <div className="flex items-center space-x-3 mb-4">
                        <span className="px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-sans uppercase tracking-widest rounded-full">
                            {art.region} India
                        </span>
                        <div className="h-px w-12 bg-terracotta/20" />
                        <span className="text-earth/40 text-xs font-sans uppercase tracking-widest">
                            {art.id}
                        </span>
                    </div>
                    <h1 className="text-6xl font-serif text-indigo-dye mb-6 leading-tight tracking-tight">
                        {art.name}
                    </h1>
                    <p className="text-xl text-earth/80 font-serif leading-relaxed italic border-l-4 border-terracotta/30 pl-6 py-2">
                        {art.shortDescription}
                    </p>
                </header>

                <div className="prose prose-earth max-w-none space-y-10">
                    <section>
                        <div className="flex items-center space-x-3 mb-4 text-indigo-dye">
                            <History size={20} className="text-terracotta" />
                            <h2 className="text-2xl font-serif m-0">Heritage & History</h2>
                        </div>
                        <p className="text-earth/70 font-sans leading-relaxed text-justify">
                            {art.history}
                        </p>
                    </section>

                    <section className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-terracotta/5 shadow-sm">
                        <div className="flex items-center space-x-3 mb-4 text-indigo-dye">
                            <Globe size={20} className="text-terracotta" />
                            <h2 className="text-2xl font-serif m-0">The Essence</h2>
                        </div>
                        <p className="text-earth/70 font-sans leading-relaxed">
                            {art.detailedDescription}
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section>
                            <div className="flex items-center space-x-3 mb-4 text-indigo-dye">
                                <Palette size={20} className="text-terracotta" />
                                <h2 className="text-xl font-serif m-0">Materials Used</h2>
                            </div>
                            <ul className="grid grid-cols-1 gap-2">
                                {art.materialsUsed.map((material: string, idx: number) => (
                                    <li key={idx} className="flex items-center space-x-2 text-earth/70 font-sans text-sm">
                                        <div className="h-1.5 w-1.5 rounded-full bg-terracotta/40" />
                                        <span>{material}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <div className="flex items-center space-x-3 mb-4 text-indigo-dye">
                                <Flame size={20} className="text-terracotta" />
                                <h2 className="text-xl font-serif m-0">Cultural Significance</h2>
                            </div>
                            <p className="text-earth/70 font-sans text-sm leading-relaxed">
                                {art.culturalSignificance}
                            </p>
                        </section>
                    </div>

                    <div className="pt-10 flex items-center justify-between border-t border-earth/10 mt-12">
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-full bg-indigo-dye flex items-center justify-center text-white font-serif text-xl border-2 border-terracotta/20">
                                MS
                            </div>
                            <div>
                                <p className="text-xs font-sans text-earth/50 uppercase tracking-widest leading-none">Curated By</p>
                                <p className="text-sm font-serif text-earth">Mad Strokes Team</p>
                            </div>
                        </div>
                        <div className="text-right">
                         <p className="text-xs font-sans text-earth/30 leading-none mb-1">Coordinates</p>
                         <p className="text-xs font-mono text-terracotta">{art.coordinates.lat.toFixed(4)}° N, {art.coordinates.lng.toFixed(4)}° E</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
