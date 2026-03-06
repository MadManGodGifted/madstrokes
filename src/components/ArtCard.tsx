"use client";

import { ArtForm } from "@/lib/artData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ArtCardProps {
    art: ArtForm;
}

export default function ArtCard({ art }: ArtCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-terracotta/10 flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden">
                {/* Placeholder for images until they are generated/provided */}
                <div className="absolute inset-0 bg-ochre/10 flex items-center justify-center text-earth/20 font-serif">
                    {art.name} Visual
                </div>
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-terracotta text-xs font-sans uppercase tracking-widest rounded-full shadow-sm">
                        {art.state}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-indigo-dye mb-3 group-hover:text-terracotta transition-colors">
                    {art.name}
                </h3>
                <p className="text-earth/70 text-sm font-sans mb-6 line-clamp-3">
                    {art.shortDescription}
                </p>

                <div className="mt-auto pt-6 border-t border-earth/5 flex justify-between items-center">
                    <span className="text-xs font-sans text-earth/50 uppercase tracking-tighter">
                        {art.medium}
                    </span>
                    <Link
                        href={`/art-forms/${art.id}`}
                        className="flex items-center space-x-2 text-terracotta font-serif text-sm hover:underline"
                    >
                        <span>Explore</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
