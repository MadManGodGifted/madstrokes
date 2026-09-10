import TempleGateHero from "@/components/TempleGateHero";
import InteractiveMap from "@/components/InteractiveMap";
import ArtCard from "@/components/ArtCard";
import { artForms } from "@/lib/artData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="flex flex-col w-full">
            <TempleGateHero />

            {/* Interactive Map Section */}
            <section id="discover" className="py-24 bg-off-white">
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
                            <span className="text-sm font-sans uppercase tracking-[0.24em] text-terracotta mb-4 font-bold block">
                                More than a gallery
                            </span>
                            <h2 className="text-4xl font-serif text-indigo-dye mb-8 border-b-2 border-ochre w-fit pb-2">
                                A living map of Bhartiya Kala
                            </h2>
                            <p className="text-xl text-earth/80 leading-relaxed mb-6">
                                Mad Strokes is a digital doorway into the visual languages of India. Here, an art form is never only an image—it carries the memory of a place, the rhythm of a festival, the knowledge of a community, and the hand of its maker.
                            </p>
                            <p className="text-base text-earth/65 leading-relaxed mb-8">
                                Travel from the rice-paste lines of Warli to the devotional detail of Pattachitra, from embroidered stories to painted walls. Follow each tradition back to its region, materials, and cultural meaning.
                            </p>
                            <div className="mt-12 flex space-x-6">
                                <div className="p-6 bg-off-white border-l-4 border-terracotta shadow-sm">
                                    <h3 className="font-serif text-lg mb-2">30 living traditions</h3>
                                    <p className="text-sm opacity-70 italic font-sans text-earth">Mapped to their homes, materials and stories</p>
                                </div>
                                <div className="p-6 bg-off-white border-l-4 border-indigo-dye shadow-sm">
                                    <h3 className="font-serif text-lg mb-2">Culture in context</h3>
                                    <p className="text-sm opacity-70 italic font-sans text-earth">Not motifs—living practices and people</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative min-h-[440px] overflow-hidden rounded-2xl border border-ochre/30 bg-indigo-dye p-8 shadow-2xl">
                            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#f7f3e9_1px,transparent_1px)] [background-size:16px_16px]" />
                            <div className="relative flex h-full flex-col justify-between text-off-white">
                                <p className="font-serif text-4xl leading-tight">“Every region has a line, a colour and a story of its own.”</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border border-off-white/25 bg-off-white/10 p-5 backdrop-blur-sm"><span className="block font-serif text-3xl text-ochre">5</span><span className="text-xs uppercase tracking-widest text-off-white/70">Regions explored</span></div>
                                    <div className="border border-off-white/25 bg-off-white/10 p-5 backdrop-blur-sm"><span className="block font-serif text-3xl text-ochre">17</span><span className="text-xs uppercase tracking-widest text-off-white/70">States represented</span></div>
                                </div>
                                <div className="border-t border-off-white/25 pt-5 font-sans text-sm leading-relaxed text-off-white/75">This is a starting point for respectful discovery: learn the name, know the place, and value the people who keep the practice alive.</div>
                            </div>
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

            {/* Personal Artwork & Creative Journey Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative">
                                <div className="aspect-[4/5] bg-off-white/80 border border-ochre/15 rounded-2xl p-10 flex flex-col justify-between shadow-xl relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDFCF8] rounded-bl-full border-b border-l border-ochre/10 -z-10" />
                                    
                                    <span className="font-serif text-6xl text-ochre/30 leading-none">“</span>
                                    <p className="text-xl md:text-2xl text-earth/80 font-serif italic leading-relaxed z-10">
                                        Art is a continuous dialogue between the past and the present. My creative journey is an exploration of cultural roots, organic textures, and the vibrant stories waiting to be told through every stroke of the brush.
                                    </p>
                                    <div className="mt-8 border-t border-ochre/25 pt-6 flex justify-between items-center z-10">
                                        <div>
                                            <p className="text-sm font-serif text-earth font-bold">Mantavya Rawat</p>
                                            <p className="text-xs font-sans text-earth/50 uppercase tracking-widest">Creator, Mad Strokes</p>
                                        </div>
                                        <div className="h-2 w-2 rounded-full bg-terracotta/40 animate-pulse" />
                                    </div>
                                </div>
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-ochre/5 rounded-full blur-3xl -z-10" />
                                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-dye/5 rounded-full blur-3xl -z-10" />
                            </div>

                            <div className="order-1 lg:order-2">
                                <span className="text-sm font-sans uppercase tracking-[0.25em] text-terracotta mb-4 font-bold block">
                                    THE ARTIST'S BACKGROUND
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif text-indigo-dye mb-8 leading-tight">
                                    Personal Artwork & <br />
                                    Creative Journey
                                </h3>
                                <div className="space-y-6 text-earth/70 font-sans leading-relaxed text-base">
                                    <p>
                                        My artistic background is built on a foundation of curiosity and a deep connection to Indian traditions. What began as early experiments with charcoal sketches and acrylic textures gradually evolved into a lifelong passion for classical and tribal Indian art forms.
                                    </p>
                                    <p>
                                        I find profound inspiration in the mathematical harmony of Mandalas, the intricate storytelling of Madhubani paintings, and the fluid expressiveness of watercolors. Each medium allows me to blend ancient visual languages with a contemporary voice.
                                    </p>
                                    <p>
                                        Through Mad Strokes, I invite you to explore this intersection of heritage and modern design. It is not just about documenting the rich art forms of India, but about experiencing the soul and rhythm behind every single stroke.
                                    </p>
                                </div>
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
