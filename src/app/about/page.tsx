export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-16 text-center">
                    <h1 className="text-5xl font-serif text-indigo-dye mb-6">Our Story</h1>
                    <div className="w-24 h-1 bg-terracotta mx-auto rounded-full" />
                </header>

                <section className="bg-white p-12 rounded-3xl shadow-xl border border-terracotta/5 space-y-8 font-sans text-lg text-earth/80">
                    <p>
                        Mad Strokes began as a simple observation: India&apos;s artistic heritage is vast, diverse, and deeply rooted in its geography, yet many of these traditions remain hidden within their local communities.
                    </p>

                    <h2 className="text-3xl font-serif text-indigo-dye mt-12 mb-4">The Vision</h2>
                    <p>
                        Founded by <strong>Mantavya Rawat</strong>, Mad Strokes aims to bridge the gap between cultural history and modern digital exploration. We believe that by mapping these art forms, we can provide a visual context to the stories, techniques, and spirits that define Indian creativity.
                    </p>

                    <blockquote className="border-l-4 border-ochre pl-8 py-4 italic text-2xl text-earth">
                        &quot;Art is not just a visual experience; it is a repository of a community&apos;s soul.&quot;
                    </blockquote>

                    <h2 className="text-3xl font-serif text-indigo-dye mt-12 mb-4">What We Offer</h2>
                    <ul className="list-disc pl-6 space-y-4">
                        <li><strong>Cultural Mapping:</strong> An interactive way to see where art forms originate.</li>
                        <li><strong>Detailed Insights:</strong> Learning about the mediums, history, and significance of each style.</li>
                        <li><strong>Artist Spotlight:</strong> Showcasing contemporary works that draw from these ancient traditions.</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
