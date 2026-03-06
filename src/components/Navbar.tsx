"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-off-white/80 backdrop-blur-md border-b border-terracotta/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-serif font-bold text-terracotta tracking-tight">
                            MAD STROKES
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-earth hover:text-terracotta transition-colors font-sans">Home</Link>
                        <Link href="/art-forms" className="text-earth hover:text-terracotta transition-colors font-sans">Art Forms</Link>
                        <Link href="/map" className="text-earth hover:text-terracotta transition-colors font-sans">Explore Map</Link>
                        <Link href="/about" className="text-earth hover:text-terracotta transition-colors font-sans">About</Link>
                        <Link href="/blog" className="text-earth hover:text-terracotta transition-colors font-sans">Blog</Link>
                        <Link href="/contact" className="text-earth hover:text-terracotta transition-colors font-sans">Contact</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative hidden lg:block">
                            <input
                                type="text"
                                placeholder="Search art forms..."
                                className="pl-10 pr-4 py-2 bg-white/50 border border-terracotta/20 rounded-full focus:outline-none focus:ring-1 focus:ring-terracotta text-sm font-sans"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-earth/50" />
                        </div>

                        <button
                            className="md:hidden p-2 text-earth"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-off-white border-b border-terracotta/10 px-4 pt-2 pb-6 space-y-2 flex flex-col">
                    <Link href="/" className="py-2 text-earth font-sans">Home</Link>
                    <Link href="/art-forms" className="py-2 text-earth font-sans">Art Forms</Link>
                    <Link href="/map" className="py-2 text-earth font-sans">Explore Map</Link>
                    <Link href="/about" className="py-2 text-earth font-sans">About</Link>
                    <Link href="/blog" className="py-2 text-earth font-sans">Blog</Link>
                    <Link href="/contact" className="py-2 text-earth font-sans">Contact</Link>
                </div>
            )}
        </nav>
    );
}
