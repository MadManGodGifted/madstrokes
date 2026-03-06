import Hero from "@/components/Hero";
import InteractiveMap from "@/components/InteractiveMap";

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
        </main>
    );
}
