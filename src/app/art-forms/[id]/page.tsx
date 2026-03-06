"use client";

import { artForms } from "@/lib/artData";
import { notFound } from "next/navigation";
import { MapPin, Calendar, ScrollText, Palette, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArtDetail { params }: { params: { id: string } }) {
    const art = artForms.find((a) => a.id === params.id);

    if (!art) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/art-forms"
                    className="inline-flex items-center text-terracotta hover:underline mb-8 font-serif"
                >
                    ← Back to Art Forms
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Image and Gallery Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="aspect-[4/5] bg-white rounded-2xl shadow-2xl overflow-hidden border border-terracotta/10 relative">
                            <div className="absolute inset-0 bg-ochre/10 flex items-center justify-center text-earth/20 font-serif text-3xl">
                                {art.name} Gallery Placeholder
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-terracotta uppercase tracking-[0.3em] font-sans text-sm mb-4 block">
                            {art.state} &bull; {art.region} India
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-indigo-dye mb-8 leading-tight">
                            {art.name}
                        </h1>

                        <p className="text-xl text-earth/80 leading-relaxed mb-12 font-sans italic">
                            {art.shortDescription}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-terracotta/10 rounded-lg text-terracotta">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-earth mb-1">Origin</h4>
                                    <p className="text-sm text-earth/60 font-sans">{art.origin}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-terracotta/10 rounded-lg text-terracotta">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-earth mb-1">Tradition Age</h4>
                                    <p className="text-sm text-earth/60 font-sans">{art.approxAge}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-terracotta/10 rounded-lg text-terracotta">
                                    <Palette size={20} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-earth mb-1">Medium</h4>
                                    <p className="text-sm text-earth/60 font-sans">{art.medium}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 bg-white/50 p-8 rounded-2xl border border-terracotta/10">
                            <div>
                                <h3 className="flex items-center text-xl font-serif text-indigo-dye mb-4">
                                    <ScrollText size={22} className="mr-3 text-terracotta" />
                                    Cultural Significance
                                </h3>
                                <p className="text-earth/80 leading-relaxed font-sans">
                                    {art.significance}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
