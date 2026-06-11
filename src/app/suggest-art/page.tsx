"use client";

import { motion } from "framer-motion";

export default function SuggestArtPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-12 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif text-indigo-dye mb-4"
                    >
                        Suggest an Art Form
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-earth/70 font-sans max-w-xl mx-auto"
                    >
                        Do you know of an Indian art style we missed? Tell us about it to help enrich our cultural database.
                    </motion.p>
                </header>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-off-white p-8 md:p-12 rounded-3xl shadow-xl border border-ochre/10"
                >
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Art Form Name</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 bg-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre/50 focus:border-transparent transition-all font-sans text-earth"
                                placeholder="E.g., Pattachitra"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Region / State of Origin</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 bg-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre/50 focus:border-transparent transition-all font-sans text-earth"
                                    placeholder="E.g., Odisha"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Primary Medium</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 bg-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre/50 focus:border-transparent transition-all font-sans text-earth"
                                    placeholder="E.g., Cloth, Natural Colors"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Brief History or Significance</label>
                            <textarea 
                                rows={5}
                                className="w-full px-4 py-3 bg-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre/50 focus:border-transparent transition-all font-sans text-earth resize-none"
                                placeholder="Why is this art form important? What are its defining characteristics?"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-sans uppercase tracking-[0.1em] text-earth font-bold">Your Email (Optional, if we need to contact you)</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-3 bg-white border border-earth/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre/50 focus:border-transparent transition-all font-sans text-earth"
                                placeholder="name@example.com"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-4 bg-white text-indigo-dye border-2 border-indigo-dye font-serif text-lg tracking-wide rounded-lg hover:bg-off-white transition-all shadow-md group"
                        >
                            <span className="group-hover:-translate-y-0.5 inline-block transition-transform">
                                Suggest Art Form
                            </span>
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
