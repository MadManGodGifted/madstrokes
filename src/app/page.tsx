import Hero from "@/components/Hero";
import InteractiveMap from "@/components/InteractiveMap";
import ArtCard from "@/components/ArtCard";
import { artForms } from "@/lib/artData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="flex flex-col w-full">
            <Hero />

            {/* Interactive Map Section */}
            <section className="py-24 bg-off-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-indigo-dye mb-4">Discover the Colors of India</h2>
                        <p className="text-earth/60 font-sans max-w-2xl mx-auto">
                            Click on the pins to explore the rich artistic heritage and traditions of different regions.
                        </p>
                    </div>
                    <InteractiveMap />
                </div>
            </section>

            {/* Purpose Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif text-indigo-dye mb-8 border-b-2 border-ochre w-fit pb-2">
                                What this website is about
                            </h2>
                            <p className="text-xl text-earth/80 leading-relaxed mb-6">
                                Mad Strokes is a digital space dedicated to discovering and celebrating India&apos;s diverse art forms.
                                From tribal paintings to classical styles, this platform allows users to explore the artistic
                                traditions rooted in different regions of India.
                            </p>
                            <div className="mt-12 flex space-x-6">
                                <div className="p-6 bg-off-white border-l-4 border-terracotta shadow-sm">
                                    <h3 className="font-serif text-lg mb-2">Indian Art Forms</h3>
                                    <p className="text-sm opacity-70 italic font-sans text-earth">Cultural heritage across regions</p>
                                </div>
                                <div className="p-6 bg-off-white border-l-4 border-indigo-dye shadow-sm">
                                    <h3 className="font-serif text-lg mb-2">Mad Strokes Artwork</h3>
                                    <p className="text-sm opacity-70 italic font-sans text-earth">Modern creative expressions</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-off-white border border-ochre/20 rounded-lg overflow-hidden flex items-center justify-center p-4">
                                <div className="text-earth/20 font-serif text-2xl">Artistic Representation</div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-terracotta/10 rounded-full -z-10 blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Art Forms Section */}
            <section className="py-24 bg-off-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-serif text-indigo-dye mb-4">Traditional Art Forms</h2>
                            <p className="text-earth/60 font-sans max-w-xl">
                                Explore a curated selection of India&apos;s most iconic and storied artistic traditions.
                            </p>
                        </div>
                        <Link
                            href="/art-forms"
                            className="hidden md:flex items-center space-x-2 text-terracotta font-serif hover:underline group"
                        >
                            <span>View All Art Forms</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artForms.slice(0, 6).map((art) => (
                            <ArtCard key={art.id} art={art} />
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center md:hidden">
                        <Link
                            href="/art-forms"
                            className="inline-flex items-center space-x-2 text-terracotta font-serif hover:underline group"
                        >
                            <span>View All Art Forms</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Owner's Portfolio Preview Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative">
                                <div className="aspect-[4/5] bg-off-white border border-indigo-dye/10 rounded-2xl overflow-hidden flex items-center justify-center">
                                    <span className="text-earth/20 font-serif text-xl italic text-center p-8">
                                        Showcasing a collection of personal artworks by the creator of Mad Strokes.
                                    </span>
                                </div>
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-ochre/5 rounded-full blur-3xl -z-10" />
                                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-dye/5 rounded-full blur-3xl -z-10" />
                            </div>

                            <div className="order-1 lg:order-2">
                                <h2 className="text-sm font-sans uppercase tracking-[0.2em] text-terracotta mb-4 font-bold">
                                    THE ARTIST BEHIND THE STROKES
                                </h2>
                                <h3 className="text-5xl font-serif text-indigo-dye mb-8 leading-tight">
                                    Personal Works & <br />
                                    Creative Journey
                                </h3>
                                <p className="text-lg text-earth/70 leading-relaxed mb-8 font-sans">
                                    Beyond documenting traditional forms, Mad Strokes is also a home for contemporary creative
                                    expressions. Discover personal experiments with texture, color, and storytelling that
                                    bridge the gap between heritage and modern aesthetics.
                                </p>
                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 flex-shrink-0 bg-off-white rounded-full flex items-center justify-center text-ochre">
                                            <span className="font-serif text-xl">01</span>
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl text-indigo-dye mb-1">Modern Infusions</h4>
                                            <p className="text-earth/60 text-sm italic">Blending traditional motifs with contemporary techniques.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 flex-shrink-0 bg-off-white rounded-full flex items-center justify-center text-terracotta">
                                            <span className="font-serif text-xl">02</span>
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl text-indigo-dye mb-1">Storytelling Through Art</h4>
                                            <p className="text-earth/60 text-sm italic">Each stroke carries a narrative of personal growth and exploration.</p>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href="/portfolio"
                                    className="inline-block px-8 py-4 bg-indigo-dye text-white font-serif hover:bg-indigo-dye/90 transition-colors rounded-sm shadow-lg shadow-indigo-dye/20"
                                >
                                    Explore the Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contribution / Become an Artist Section */}
            <section className="py-24 bg-off-white relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="bg-white rounded-3xl p-12 lg:p-20 shadow-xl shadow-earth/5 border border-terracotta/10 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-terracotta mb-6 font-bold">
                                JOIN THE COMMUNITY
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-serif text-indigo-dye mb-8 leading-tight">
                                Contribute to Mad Strokes
                            </h3>
                            <p className="text-lg text-earth/70 leading-relaxed mb-12 font-sans">
                                Help us preserve and celebrate the living heritage of Indian art. 
                                Whether you are an artist looking to showcase your work, a researcher with cultural knowledge, 
                                or a passionate enthusiast, your contribution helps build a more vibrant digital archive 
                                of Indian creativity.
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link
                                    href="/submit-art"
                                    className="px-8 py-4 bg-terracotta text-white font-serif hover:bg-terracotta/90 transition-all rounded-sm shadow-lg shadow-terracotta/20 flex-shrink-0"
                                >
                                    Submit Your Art
                                </Link>
                                <Link
                                    href="/suggest-art"
                                    className="px-8 py-4 bg-white text-indigo-dye border border-indigo-dye/20 font-serif hover:bg-off-white transition-all rounded-sm flex-shrink-0"
                                >
                                    Suggest an Art Form
                                </Link>
                                <Link
                                    href="/join-artists"
                                    className="px-8 py-4 bg-indigo-dye text-white font-serif hover:bg-indigo-dye/90 transition-all rounded-sm shadow-lg shadow-indigo-dye/20 flex-shrink-0"
                                >
                                    Join as Artist
                                </Link>
                            </div>

                            <p className="mt-10 text-xs text-earth/40 font-sans italic">
                                Your submissions help us document the diverse artistic landscape of India.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-ochre/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl -z-10" />
            </section>
        </main>
    );
}
