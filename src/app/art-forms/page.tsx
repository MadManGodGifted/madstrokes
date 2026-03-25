"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { artForms, ArtForm } from "@/lib/artData";
import ArtCard from "@/components/ArtCard";
import SearchStatus from "@/components/SearchStatus";
import { Filter, Search as SearchIcon, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";

function ArtFormsContent() {
    const searchParams = useSearchParams();
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    // Sync query params -> state
    useEffect(() => {
        const q = searchParams.get("q");
        if (q) setSearchQuery(q);
    }, [searchParams]);

    // Initialize Fuse with the artForms dataset
    const fuse = useMemo(() => {
        return new Fuse(artForms, {
            keys: [
                { name: "name", weight: 0.5 },
                { name: "state", weight: 0.3 },
                { name: "medium", weight: 0.1 },
                { name: "shortDescription", weight: 0.1 }
            ],
            threshold: 0.4, // Balance between strict and fuzzy
            includeScore: true,
            distance: 100,
            location: 0,
            minMatchCharLength: 2
        });
    }, []);

    // Perform search and filtering
    const { filteredArt, suggestions } = useMemo(() => {
        let results = artForms;

        if (searchQuery.trim().length >= 2) {
            const fuseResults = fuse.search(searchQuery);
            results = fuseResults.map(r => r.item);
        }

        // Apply region filter
        const finalResults = filter === "All"
            ? results
            : results.filter(art => art.region === filter);

        // Get top suggestions for "Did you mean?" if query is present
        let topSuggestion = "";
        if (searchQuery.trim().length >= 2) {
            const allFuseResults = fuse.search(searchQuery);
            if (allFuseResults.length > 0 && allFuseResults[0].score! < 0.6) {
                topSuggestion = allFuseResults[0].item.name;
            }
        }

        return { 
            filteredArt: finalResults, 
            suggestions: topSuggestion 
        };
    }, [searchQuery, filter, fuse]);

    const regions = ["All", "North", "South", "East", "West", "Central", "Northeast"];

    const handleClearSearch = () => {
        setSearchQuery("");
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
    };

    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <div className="max-w-xl">
                        <motion.h1 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-5xl font-serif text-earth mb-4"
                        >
                            Indian Art Forms
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-earth/60 font-sans"
                        >
                            A curated exploration of traditional and folk art techniques passed down through generations.
                        </motion.p>
                    </div>

                    {/* Search Bar UI */}
                    <div className="w-full lg:max-w-md relative group">
                        <div className={`relative flex items-center transition-all duration-300 ${
                            isSearchFocused ? 'scale-105 shadow-xl shadow-terracotta/5' : ''
                        }`}>
                            <div className={`absolute inset-0 bg-white rounded-2xl transition-all duration-300 border-2 ${
                                isSearchFocused ? 'border-terracotta shadow-lg' : 'border-terracotta/10 group-hover:border-terracotta/30'
                            }`} />
                            
                            <SearchIcon className={`relative ml-6 h-5 w-5 transition-colors ${
                                isSearchFocused ? 'text-terracotta' : 'text-earth/30'
                            }`} />
                            
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                                placeholder="Search by art, state, or medium..."
                                className="relative w-full py-4 pl-4 pr-12 bg-transparent text-earth font-sans focus:outline-none placeholder:text-earth/30"
                            />

                            <AnimatePresence>
                                {searchQuery && (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        onClick={handleClearSearch}
                                        className="relative mr-4 p-2 hover:bg-off-white rounded-full transition-colors text-earth/30 hover:text-terracotta"
                                    >
                                        <X size={18} />
                                    </motion.button>
                                )}
                            </AnimatePresence>
                            
                            {!searchQuery && !isSearchFocused && (
                                <div className="absolute right-6 flex items-center space-x-2 pointer-events-none opacity-20">
                                    <Sparkles size={16} />
                                    <span className="text-xs font-sans tracking-widest uppercase">Smart</span>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                <SearchStatus 
                    query={searchQuery}
                    count={filteredArt.length}
                    onClear={handleClearSearch}
                    didYouMean={suggestions}
                    onSuggestionClick={handleSuggestionClick}
                />

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-12 py-6 border-y border-terracotta/10">
                    <div className="flex items-center text-earth/50 mr-4">
                        <Filter size={18} className="mr-2" />
                        <span className="text-sm font-sans uppercase tracking-widest">Region:</span>
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
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredArt.map((art) => (
                            <motion.div
                                key={art.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ArtCard art={art} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                    {filteredArt.length === 0 && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-24 flex flex-col items-center"
                        >
                            <div className="w-20 h-20 bg-terracotta/5 rounded-full flex items-center justify-center text-terracotta/30 mb-6">
                                <SearchIcon size={40} />
                            </div>
                            <p className="text-earth/40 font-serif text-xl mb-2">
                                No art forms matching your search or filter.
                            </p>
                            <button 
                                onClick={() => { setSearchQuery(""); setFilter("All"); }}
                                className="text-terracotta hover:underline font-sans text-sm"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}

export default function ArtFormsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-off-white pt-32 pb-24 flex items-center justify-center">
                <p className="text-earth/50 font-sans tracking-widest uppercase text-sm">Loading Art Forms...</p>
            </div>
        }>
            <ArtFormsContent />
        </Suspense>
    );
}
