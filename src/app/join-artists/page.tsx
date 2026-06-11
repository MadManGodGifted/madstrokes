"use client";

import { motion } from "framer-motion";

export default function JoinArtistsPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-12 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif text-indigo-dye mb-4"
                    >
                        Join as an Artist
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-earth/70 font-sans"
                    >
                        Feature your portfolio, connect with a larger audience, and help us preserve cultural artistry.
                    </motion.p>
                </header>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-indigo-dye/5"
                >
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-dye/50 focus:border-transparent transition-all font-sans text-earth"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Email Address</label>
                                <input 
                                    type="email" 
                                    className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-dye/50 focus:border-transparent transition-all font-sans text-earth"
                                    placeholder="artist@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Portfolio Website or Instagram URL</label>
                            <input 
                                type="url" 
                                className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-dye/50 focus:border-transparent transition-all font-sans text-earth"
                                placeholder="https://"
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Years of Experience</label>
                            <select className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-dye/50 focus:border-transparent transition-all font-sans text-earth">
                                <option>Less than 1 year</option>
                                <option>1-3 years</option>
                                <option>3-5 years</option>
                                <option>5+ years</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Tell us about your art journey</label>
                            <textarea 
                                rows={4}
                                className="w-full px-4 py-3 bg-off-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-dye/50 focus:border-transparent transition-all font-sans text-earth resize-none"
                                placeholder="How did you start? What inspires you?"
                                required
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-4 bg-indigo-dye text-white font-serif text-lg tracking-wide rounded-lg hover:bg-indigo-dye/90 transition-all shadow-lg hover:shadow-xl shadow-indigo-dye/20"
                        >
                            Apply to Join
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
