"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-off-white pt-20">
            {/* Background Textures/Gradients */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-terracotta rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-dye rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1 mb-6 text-sm font-sans tracking-widest uppercase text-earth/60 border-l-2 border-terracotta">
                        Mad Strokes presents
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif text-indigo-dye leading-tight mb-6">
                        Exploring the Soul <br />
                        <span className="text-terracotta italic font-sans font-light">of Indian Art</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-earth/80 font-sans mb-10 leading-relaxed">
                        Discover traditional and modern art forms from across India through an interactive map exploration.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="px-8 py-4 bg-terracotta text-off-white font-serif rounded-sm hover:bg-terracotta/90 transition-all shadow-lg hover:shadow-terracotta/20 transform hover:-translate-y-1">
                            Explore Art Map
                        </button>
                        <button className="px-8 py-4 border border-earth/20 text-earth font-serif rounded-sm hover:bg-earth/5 transition-all">
                            View Art Forms
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Brush Stroke (Simulated with absolute div) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-off-white to-transparent pointer-events-none" />
        </section>
    );
}
