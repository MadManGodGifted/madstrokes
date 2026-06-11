"use client";

import { motion } from "framer-motion";

export default function SubmitArtPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-12 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif text-indigo-dye mb-4"
                    >
                        Submit Your Artwork
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-earth/70 font-sans"
                    >
                        Share your creations inspired by traditional Indian art with our growing community.
                    </motion.p>
                </header>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-terracotta/5"
                >
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all font-sans text-earth"
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Email Address</label>
                                <input 
                                    type="email" 
                                    className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all font-sans text-earth"
                                    placeholder="jane@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Art Title</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all font-sans text-earth"
                                placeholder="E.g., Monsoon in Madhubani"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Inspired By (Traditional Art Style)</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all font-sans text-earth"
                                placeholder="E.g., Warli, Gond, Miniature..."
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Artwork URL / Portfolio Link</label>
                            <input 
                                type="url" 
                                className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all font-sans text-earth"
                                placeholder="https://"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Description & Medium</label>
                            <textarea 
                                rows={4}
                                className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all font-sans text-earth resize-none"
                                placeholder="Tell us about the piece and the materials used..."
                                required
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-4 bg-terracotta text-white font-serif text-lg tracking-wide rounded-lg hover:bg-terracotta/90 transition-all shadow-lg hover:shadow-xl shadow-terracotta/20"
                        >
                            Submit Artwork
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
