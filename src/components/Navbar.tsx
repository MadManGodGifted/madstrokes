"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Menu } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";
import { artForms } from "@/lib/artData";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isHeroActive, setIsHeroActive] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const updateNavbarTone = () => {
            const hero = document.querySelector(".temple-hero");
            if (!hero) {
                setIsHeroActive(false);
                return;
            }

            const bounds = hero.getBoundingClientRect();
            setIsHeroActive(bounds.bottom > 80 && bounds.top < window.innerHeight);
        };

        updateNavbarTone();
        window.addEventListener("scroll", updateNavbarTone, { passive: true });
        window.addEventListener("resize", updateNavbarTone);
        return () => {
            window.removeEventListener("scroll", updateNavbarTone);
            window.removeEventListener("resize", updateNavbarTone);
        };
    }, []);

    const fuse = useMemo(() => {
        return new Fuse(artForms, {
            keys: ["name", "state"],
            threshold: 0.4,
        });
    }, []);

    const searchResults = useMemo(() => {
        if (searchQuery.length < 2) return [];
        return fuse.search(searchQuery).slice(0, 4).map(r => r.item);
    }, [searchQuery, fuse]);

    const handleSearchSubmit = (query: string) => {
        if (query.trim()) {
            router.push(`/art-forms?q=${encodeURIComponent(query)}`);
            setIsSearchFocused(false);
            setSearchQuery(""); // clear after nav
        }
    };

    const navigationTone = isHeroActive
        ? "bg-[#32130d]/82 border-[#e5a640]/35 shadow-[0_8px_30px_rgba(24,7,4,0.25)]"
        : "bg-off-white/95 border-terracotta/15 shadow-[0_6px_22px_rgba(58,30,23,0.08)]";
    const linkTone = isHeroActive ? "text-[#ffe8ae] hover:text-[#f5bd56]" : "text-earth hover:text-terracotta";
    const logoTone = isHeroActive ? "text-[#f6bd55]" : "text-terracotta";

    return (
        <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ${navigationTone}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-500 ${logoTone}`}>
                            MAD STROKES
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className={`transition-colors font-sans ${linkTone}`}>Home</Link>
                        <Link href="/art-forms" className={`transition-colors font-sans ${linkTone}`}>Art Forms</Link>
                        <Link href="/about" className={`transition-colors font-sans ${linkTone}`}>About</Link>
                        <Link href="/blog" className={`transition-colors font-sans ${linkTone}`}>Blog</Link>
                        <Link href="/contact" className={`transition-colors font-sans ${linkTone}`}>Contact</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative hidden lg:block">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleSearchSubmit(searchQuery);
                                    }}
                                    placeholder="Search art forms..."
                                    className={`pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-ochre text-sm font-sans w-64 transition-colors duration-500 ${isHeroActive ? "bg-[#5b2419]/70 border border-[#e5a640]/35 text-[#fff0c9] placeholder:text-[#f5d89a]/65" : "bg-white/50 border border-terracotta/20 text-earth"}`}
                                />
                                <Search className={`absolute left-3 top-2.5 h-4 w-4 pointer-events-none transition-colors duration-500 ${isHeroActive ? "text-[#f5d89a]/75" : "text-earth/50"}`} />
                            </div>

                            <AnimatePresence>
                                {isSearchFocused && searchQuery.length >= 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full mt-2 w-full bg-white border border-terracotta/20 rounded-xl shadow-xl overflow-hidden z-20 py-2"
                                    >
                                        {searchResults.length > 0 ? (
                                            searchResults.map(art => (
                                                <button 
                                                    key={art.id} 
                                                    onClick={() => handleSearchSubmit(art.name)}
                                                    className="w-full text-left block px-4 py-2 hover:bg-off-white transition-colors"
                                                >
                                                    <div className="text-sm font-sans text-indigo-dye">{art.name}</div>
                                                    <div className="text-xs text-earth/60 italic">{art.state}</div>
                                                </button>
                                            ))
                                        ) : (
                                            <div className="px-4 py-3 text-sm text-earth/60 font-sans italic">
                                                No matches found.
                                            </div>
                                        )}
                                        
                                        <button
                                            onClick={() => handleSearchSubmit(searchQuery)}
                                            className="w-full text-left px-4 py-3 text-xs font-sans tracking-wider uppercase text-terracotta hover:bg-terracotta/5 border-t border-terracotta/10 mt-1"
                                        >
                                            See search results
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            className={`md:hidden p-2 transition-colors duration-500 ${linkTone}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={`md:hidden border-b px-4 pt-2 pb-6 space-y-2 flex flex-col transition-colors duration-500 ${isHeroActive ? "bg-[#32130d] border-[#e5a640]/30" : "bg-off-white border-terracotta/10"}`}>
                    <Link href="/" className={`py-2 font-sans ${linkTone}`}>Home</Link>
                    <Link href="/art-forms" className={`py-2 font-sans ${linkTone}`}>Art Forms</Link>
                    <Link href="/about" className={`py-2 font-sans ${linkTone}`}>About</Link>
                    <Link href="/blog" className={`py-2 font-sans ${linkTone}`}>Blog</Link>
                    <Link href="/contact" className={`py-2 font-sans ${linkTone}`}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
