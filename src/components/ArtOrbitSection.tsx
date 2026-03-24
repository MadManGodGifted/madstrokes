"use client";

import { useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ArtForm } from "@/lib/artData";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface ArtOrbitSectionProps {
    cards: ArtForm[];
}

export default function ArtOrbitSection({ cards }: ArtOrbitSectionProps) {
    return (
        <>
            {/* Mobile Horizontal Scroll View */}
            <div className="md:hidden w-full relative px-4 py-8 overflow-hidden bg-off-white">
                <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-8" style={{ scrollbarWidth: 'none' }}>
                    {cards.map((art) => (
                        <div key={art.id} className="snap-center shrink-0 w-[260px] h-[360px] ml-4 first:ml-0 last:mr-4">
                            <MobileArtCard art={art} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Curved Conveyor View */}
            <div className="hidden md:flex relative w-full h-[600px] overflow-hidden bg-off-white items-center justify-center my-12">
                {/* 
                  We define a fixed internal track width. 
                  Cards move from 0 to 1 across this track.
                */}
                <div className="relative w-[1200px] h-full pointer-events-none">
                    {cards.map((art, index) => (
                        <ArtConveyorCard 
                            key={art.id} 
                            art={art} 
                            index={index}
                            totalCards={cards.length}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

function ArtConveyorCard({ art, index, totalCards }: { art: ArtForm, index: number, totalCards: number }) {
    // Progress represents horizontal travel from left (0) to right (1)
    // Distribute evenly across the 0-1 range initially
    const initialProgress = index / totalCards;
    const progress = useMotionValue(initialProgress);
    
    const [isHovered, setIsHovered] = useState(false);
    const [popupDirection, setPopupDirection] = useState<'left' | 'right'>('right');

    const speed = 0.0003; 

    useAnimationFrame((t, delta) => {
        if (!isHovered) {
            let nextProgress = progress.get() + (delta * speed);
            // If it goes past 1 (right edge), reset it back to 0 (left edge) to loop
            if (nextProgress >= 1) {
                nextProgress = nextProgress % 1; 
            }
            progress.set(nextProgress);
        }
    });

    const trackWidth = 1400; // slightly wider than container to hide popping at edges
    const startX = -100; // start slightly off-screen left
    const arcHeight = 150; // how deep the curve dips (positive Y is down)
    const baseY = 50;

    // x = purely linear movement left to right
    const x = useTransform(progress, (p) => startX + (p * trackWidth));
    
    // y = constant baseline (straight line)
    const y = useTransform(progress, (p) => baseY);
    
    // Scale: center cards (progress near 0.5) are larger, edges are slightly smaller
    const scale = useTransform(progress, (p) => 0.9 + (Math.sin(p * Math.PI) * 0.25));
    
    // Z-index: cards in the center (bottom-most part of arc) should be in front
    const zIndexBase = useTransform(progress, (p) => Math.floor(Math.sin(p * Math.PI) * 100));
    
    // Quick fade at extreme edges (p ~ 0 or p ~ 1) so resetting to 0 feels seamless
    const opacity = useTransform(progress, (p) => {
        const threshold = 0.1;
        const maxOpacity = 1;
        const edgeOpacity = 0; 
        
        let normalized = 1;
        if (p < threshold) {
            normalized = p / threshold;
        } else if (p > 1 - threshold) {
            normalized = (1 - p) / threshold;
        }
        
        return edgeOpacity + (normalized * (maxOpacity - edgeOpacity));
    });

    // No rotation for normal cards
    const rotation = 0;

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Determine whether to show popup left or right based on horizontal position
        if (progress.get() > 0.6) {
            setPopupDirection('left');
        } else {
            setPopupDirection('right');
        }
    };

    return (
        <motion.div
            className="absolute left-0 top-0 -ml-[120px] pointer-events-auto"
            style={{ 
                x, 
                y, 
                zIndex: isHovered ? 2000 : zIndexBase, 
                scale: isHovered ? 1.2 : scale, // Slightly less aggressive hover scale to match refined look
                opacity
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="relative w-[240px] h-[320px] rounded-2xl p-3 flex flex-col cursor-pointer transition-shadow duration-300"
                style={{
                    backgroundColor: "#f5e9d8", 
                    boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.2)" : "0 8px 16px rgba(0,0,0,0.1)",
                    rotate: `${rotation}deg`
                }}
            >
                {/* Visual / Image Section - Normal Rounded */}
                <div className="w-full h-[65%] rounded-xl bg-gradient-to-br from-ochre/20 to-terracotta/10 overflow-hidden relative border border-black/5 shadow-inner">
                    <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
                    <div className="absolute inset-0 flex items-center justify-center font-serif text-earth/30 text-lg">
                        Visual
                    </div>
                    {/* Dark gradient for text readability at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <span className="absolute bottom-3 left-3 z-20 text-white/95 text-[10px] font-sans uppercase tracking-[0.2em] font-medium drop-shadow-md">
                        {art.medium}
                    </span>
                </div>
                
                {/* Title Section */}
                <div className="w-full flex-grow flex items-center justify-center pt-2">
                    <h3 className="font-serif text-indigo-dye text-xl text-center leading-tight">
                        {art.name}
                    </h3>
                </div>

                {/* Floating Info Panel on Hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div 
                            initial={{ opacity: 0, x: popupDirection === 'right' ? -15 : 15, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, y: -20, scale: 1 }}
                            exit={{ opacity: 0, x: popupDirection === 'right' ? -15 : 15, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className={clsx(
                                "absolute w-[280px] bg-[#f5e9d8] p-6 rounded-2xl shadow-2xl z-[1001] pointer-events-auto border border-terracotta/10",
                                popupDirection === 'right' ? "left-[110%] top-0" : "right-[110%] top-0"
                            )}
                            style={{
                                rotate: `${-rotation}deg` // Keep popup visually straight
                            }}
                        >
                            <h4 className="font-serif text-indigo-dye text-2xl mb-1">{art.name}</h4>
                            <div className="flex items-center text-terracotta text-[11px] uppercase tracking-widest font-sans mb-4 font-semibold">
                                <MapPin size={12} className="mr-1" />
                                {art.region}
                            </div>
                            <p className="text-earth/80 text-sm font-sans leading-relaxed mb-6 border-l-2 border-ochre/50 pl-3">
                                {art.shortDescription}
                            </p>
                            <Link 
                                href={`/art-forms/${art.id}`} 
                                className="inline-flex items-center text-white bg-indigo-dye hover:bg-terracotta transition-colors px-4 py-2 rounded text-xs font-sans uppercase tracking-[0.1em] font-medium w-fit"
                            >
                                <span>Discover Form</span>
                                <ArrowRight size={14} className="ml-2" />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

function MobileArtCard({ art }: { art: ArtForm }) {
    return (
        <div 
            className="relative w-full h-full rounded-[14px] p-3 flex flex-col shadow-xl border border-terracotta/5"
            style={{
                backgroundColor: "#f5e9d8",
            }}
        >
             <div className="w-full h-[60%] rounded-xl bg-gradient-to-br from-ochre/20 to-terracotta/10 overflow-hidden relative border border-black/5 shadow-inner">
                <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center font-serif text-earth/40 text-lg">
                     Visual
                </div>
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/70 to-transparent z-10" />
                <span className="absolute bottom-3 left-3 z-20 text-white/95 text-[10px] font-sans uppercase tracking-[0.2em] drop-shadow-md">
                    {art.medium}
                </span>
             </div>
             <div className="pt-4 flex flex-col flex-grow">
                 <h3 className="font-serif text-indigo-dye text-2xl mb-1">{art.name}</h3>
                 <p className="text-earth/60 text-xs font-sans line-clamp-2 mb-3">
                     {art.shortDescription}
                 </p>
                 <Link 
                     href={`/art-forms/${art.id}`} 
                     className="mt-auto flex items-center text-terracotta text-sm font-serif group"
                 >
                     <span>Read More</span>
                     <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                 </Link>
             </div>
        </div>
    );
}
