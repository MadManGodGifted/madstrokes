"use client";

import { useState } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import { ArtForm } from "@/lib/artData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface ArtCardStackProps {
    cards: ArtForm[];
}

export default function ArtCardStack({ cards }: ArtCardStackProps) {
    const [deck, setDeck] = useState<ArtForm[]>(cards);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const swipeThreshold = 80; // slightly lower threshold for easier swiping
        if (Math.abs(info.offset.x) > swipeThreshold) {
            setDeck((prevDeck) => {
                const newDeck = [...prevDeck];
                const topCard = newDeck.shift();
                if (topCard) newDeck.push(topCard);
                return newDeck;
            });
        }
    };

    return (
        <div className="relative w-[92%] max-w-7xl mx-auto h-[550px] sm:h-[450px] md:h-[500px] flex items-center justify-center perspective-1000 mt-12 mb-16">
            {deck.map((art, index) => {
                const isTop = index === 0;
                const reverseIndex = deck.length - index;

                return (
                    <ArtCardInStack
                        key={art.id}
                        art={art}
                        index={index}
                        isTop={isTop}
                        reverseIndex={reverseIndex}
                        onDragEnd={handleDragEnd}
                    />
                );
            })}
        </div>
    );
}

function ArtCardInStack({ art, index, isTop, reverseIndex, onDragEnd }: any) {
    // Motion values for the top card drag effect
    const x = useMotionValue(0);
    const rotateValue = useTransform(x, [-200, 200], [-10, 10]);

    // Base rotation for paper pile effect based on index
    const baseRotation = (index % 2 === 0 ? 3 : -3) * Math.min(index, 3) + (index % 3 === 0 ? 1 : 0);

    // Disable heavy effects while dragging for performance
    const isDragging = useMotionValue(false);

    return (
        <motion.div
            className={clsx(
                "absolute inset-0 bg-[#fdfbf7] rounded-xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),inset_0_0_40px_rgba(0,0,0,0.1)] border border-[#e8dfc7]",
                isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
            )}
            style={{
                zIndex: reverseIndex,
                x: isTop ? x : 0,
                rotateZ: isTop ? rotateValue : baseRotation,
                willChange: "transform",
            }}
            initial={false}
            animate={{
                scale: 1 - index * 0.05,
                y: index * 15,
                opacity: index > 4 ? 0 : 1 - index * 0.15,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.5,
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragStart={() => isTop && isDragging.set(true)}
            onDragEnd={(e, info) => {
                if (isTop) {
                    isDragging.set(false);
                    if (onDragEnd) onDragEnd(e, info);
                }
            }}
            whileDrag={{ scale: 1.02 }}
            // Optimize layout animations
            layout
            // Render conditionally based on depth for better performance
            layoutId={`card-${art.id}`}
        >
            {/* Background Image / Placeholder */}
            <div className="absolute inset-0 bg-ochre/10 flex items-center justify-center text-earth/20 font-serif text-2xl">
                {art.name} Visual
            </div>

            {/* Dynamic Texture Overlay - Optimized */}
            <motion.div
                className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-color-burn"
                style={{
                    // Use a seamless pre-generated noise pattern as a CSS background instead of live SVG turbulence
                    // SVG turbulence filters are notoriously bad for framerate during animations
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '256px',
                }}
                animate={{ opacity: isDragging.get() ? 0 : 0.25 }} // Hide texture while dragging
            />

            {/* Vignette / Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 pointer-events-none" />

            {/* Content Container */}
            <div className="relative h-full w-full p-6 md:p-10 flex flex-col justify-end text-white">
                <div className="mb-auto self-start">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-sans uppercase tracking-widest rounded-full shadow-sm font-medium border border-white/20">
                        {art.state}
                    </span>
                </div>

                <div className="max-w-2xl mt-8">
                    <h3 className="text-3xl lg:text-5xl font-serif text-white mb-3 tracking-wide drop-shadow-md">
                        {art.name}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base font-sans mb-6 line-clamp-3 leading-relaxed drop-shadow-sm">
                        {art.shortDescription}
                    </p>

                    <div className="pt-5 border-t border-white/20 flex justify-between items-center pointer-events-auto">
                        <span className="text-xs font-sans text-white/50 uppercase tracking-widest font-semibold flex-shrink-0 mr-4">
                            {art.medium}
                        </span>
                        <Link
                            href={`/art-forms/${art.id}`}
                            className="flex items-center space-x-2 text-white font-serif text-sm md:text-base hover:text-ochre transition-colors shrink-0"
                            onPointerDown={(e) => e.stopPropagation()}
                        >
                            <span>Read More</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
