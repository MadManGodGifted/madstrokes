import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Hero Header */}
                <header className="mb-24 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif text-indigo-dye mb-6">Our Story</h1>
                    <div className="w-24 h-1 bg-terracotta mx-auto rounded-full mb-8" />
                    <p className="text-xl text-earth/70 font-sans max-w-2xl mx-auto leading-relaxed">
                        Discovering and digitally preserving the vibrant, living heritage of Indian artistry, one stroke at a time.
                    </p>
                </header>

                {/* Section 1: The Vision */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-sans uppercase tracking-[0.2em] text-terracotta mb-4 font-bold block">
                                THE VISION
                            </span>
                            <h2 className="text-4xl font-serif text-indigo-dye mb-6">
                                Bridging History and Modern Digital Exploration
                            </h2>
                            <p className="text-lg text-earth/80 font-sans leading-relaxed mb-6">
                                Mad Strokes was founded by <strong>Mantavya Rawat</strong> out of a deep reverence for 
                                India&apos;s artistic diversity. From the meticulous lines of Madhubani to the earthy 
                                warmth of Warli, every region tells a distinct visual story.
                            </p>
                            <p className="text-lg text-earth/80 font-sans leading-relaxed">
                                Our goal is to map these hidden gems, offering a visual context to the techniques, 
                                communities, and histories that define Bhartiya Sanskriti (Indian culture).
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-white rounded-2xl shadow-xl border border-ochre/20 p-2 transform rotate-2">
                                <div className="w-full h-full bg-off-white flex flex-col items-center justify-center rounded-xl border border-earth/5 border-dashed">
                                    <span className="text-earth/40 font-serif italic text-xl">Cultural Mapping</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-ochre/10 rounded-full -z-10 blur-3xl" />
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="mb-32">
                    <div className="bg-indigo-dye text-white p-12 md:p-20 rounded-3xl relative overflow-hidden text-center shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracotta via-ochre to-terracotta opacity-50" />
                        <blockquote className="relative z-10 text-2xl md:text-4xl font-serif leading-relaxed italic max-w-3xl mx-auto">
                            &quot;Art is not just a visual experience; it is a repository of a community&apos;s soul, holding stories passed down through generations.&quot;
                        </blockquote>
                        <div className="mt-8 font-sans text-sm tracking-widest uppercase opacity-60">
                            The Philosophy of Mad Strokes
                        </div>
                        
                        {/* Motif Backgrounds */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-terracotta/10 rounded-full blur-2xl" />
                    </div>
                </section>

                {/* Section 2: What We Offer */}
                <section className="mb-24">
                    <h2 className="text-4xl font-serif text-indigo-dye mb-12 text-center">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-earth/5 hover:border-terracotta/30 transition-colors group">
                            <div className="w-12 h-12 bg-ochre/10 rounded-full flex items-center justify-center text-ochre mb-6 group-hover:scale-110 transition-transform">
                                <span className="font-serif text-2xl">01</span>
                            </div>
                            <h3 className="text-xl font-serif text-indigo-dye mb-3">Cultural Mapping</h3>
                            <p className="font-sans text-earth/70 leading-relaxed text-sm">
                                An interactive geospatial experience to discover the precise origins 
                                and geographical significance of diverse art forms across India.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-earth/5 hover:border-terracotta/30 transition-colors group">
                            <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta mb-6 group-hover:scale-110 transition-transform">
                                <span className="font-serif text-2xl">02</span>
                            </div>
                            <h3 className="text-xl font-serif text-indigo-dye mb-3">Detailed Insights</h3>
                            <p className="font-sans text-earth/70 leading-relaxed text-sm">
                                Comprehensive learning resources detailing the historical origins, 
                                traditional mediums, and cultural impact of every style.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border border-earth/5 hover:border-terracotta/30 transition-colors group">
                            <div className="w-12 h-12 bg-indigo-dye/10 rounded-full flex items-center justify-center text-indigo-dye mb-6 group-hover:scale-110 transition-transform">
                                <span className="font-serif text-2xl">03</span>
                            </div>
                            <h3 className="text-xl font-serif text-indigo-dye mb-3">Artist Spotlight</h3>
                            <p className="font-sans text-earth/70 leading-relaxed text-sm">
                                Showcasing contemporary portfolios that draw direct inspiration 
                                from these ancient, enduring traditions.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-center pt-12 border-t border-earth/10">
                    <h2 className="text-3xl font-serif text-indigo-dye mb-6">Join the Journey</h2>
                    <p className="text-earth/70 font-sans max-w-lg mx-auto mb-8">
                        Whether you are an artist, a historian, or just a lover of culture, there is a place for you in our community.
                    </p>
                    <Link 
                        href="/art-forms"
                        className="inline-flex items-center space-x-2 bg-terracotta text-white px-8 py-4 rounded-sm font-serif hover:bg-terracotta/90 transition-all shadow-lg hover:shadow-xl shadow-terracotta/20"
                    >
                        <span>Explore the Art Archive</span>
                        <ArrowRight size={18} />
                    </Link>
                </section>

            </div>
        </main>
    );
}
