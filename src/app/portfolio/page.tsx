"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Sketches", "Acrylic", "Oil", "Experimental"];

const projects = [
    { id: 1, title: "Rural Life", category: "Sketches", medium: "Pencil on Paper", year: "2023" },
    { id: 2, title: "Monsoon Mist", category: "Acrylic", medium: "Acrylic on Canvas", year: "2024" },
    { id: 3, title: "Heritage Soul", category: "Oil", medium: "Oil on Linen", year: "2023" },
    { id: 4, title: "Abstract Rhythm", category: "Experimental", medium: "Mixed Media", year: "2024" },
    { id: 5, title: "Warrior Spirit", category: "Sketches", medium: "Charcoal", year: "2022" },
    { id: 6, title: "Vibrant India", category: "Acrylic", medium: "Acrylic on Canvas", year: "2024" },
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <main className="min-h-screen pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-16 text-center">
                    <span className="text-terracotta uppercase tracking-[0.4em] text-xs mb-4 block">Creative Portfolio</span>
                    <h1 className="text-6xl font-serif text-indigo-dye mb-6">Mantavya Rawat</h1>
                    <p className="text-earth/60 font-sans max-w-xl mx-auto">
                        A visual journey blending personal expression with traditional Indian cultural inspiration.
                    </p>
                </header>

                {/* Categories */}
                <div className="flex justify-center flex-wrap gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 border-b-2 transition-all font-serif text-lg ${filter === cat
                                    ? "border-terracotta text-terracotta"
                                    : "border-transparent text-earth/40 hover:text-earth"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group"
                            >
                                <div className="aspect-[3/4] bg-off-white rounded-lg overflow-hidden border border-earth/5 mb-4 relative shadow-lg group-hover:shadow-2xl transition-all">
                                    <div className="absolute inset-0 bg-indigo-dye/5 flex items-center justify-center text-earth/20 font-serif">
                                        {project.title}
                                    </div>
                                    <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/10 transition-colors" />
                                </div>
                                <h3 className="text-xl font-serif text-earth mb-1">{project.title}</h3>
                                <div className="flex justify-between items-center text-sm text-earth/50 font-sans uppercase tracking-widest">
                                    <span>{project.medium}</span>
                                    <span>{project.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
