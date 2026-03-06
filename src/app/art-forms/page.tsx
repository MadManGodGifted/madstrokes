"use client";

import { useState } from "react";
import { artForms } from "@/lib/artData";
import ArtCard from "@/components/ArtCard";
import { Filter } from "lucide-react";

export default function ArtFormsPage() {
    const [filter, setFilter] = useState("All");

    const regions = ["All", "North", "South", "East", "West", "Central", "Northeast"];

    const filteredArt = filter === "All"
        ? artForms
        : artForms.filter(art => art.region === filter);

    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-16">
                    <h1 className="text-5xl font-serif text-earth mb-4">Indian Art Forms</h1>
                    <p className="text-earth/60 font-sans max-w-2xl">
                        A curated exploration of traditional and folk art techniques passed down through generations.
                    </p>
                </header>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-12 py-6 border-y border-terracotta/10">
                    <div className="flex items-center text-earth/50 mr-4">
                        <Filter size={18} className="mr-2" />
                        <span className="text-sm font-sans uppercase tracking-widest">Filter by Region:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {regions.map((region) => (
                            <button
                                key={region}
                                onClick={() => setFilter(region)}
                                className={`px-4 py-2 rounded-full text-sm font-sans transition-all ${filter === region
                                        ? "bg-terracotta text-white shadow-md"
                                        : "bg-white border border-terracotta/20 text-earth hover:bg-off-white"
                                    }`}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArt.map((art) => (
                        <ArtCard key={art.id} art={art} />
                    ))}
                </div>

                {filteredArt.length === 0 && (
                    <div className="text-center py-24">
                        <p className="text-earth/40 font-serif text-xl">No art forms found for this region yet.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
