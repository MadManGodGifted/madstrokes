"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blogData";

export default function BlogClientPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-indigo-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-20 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-serif text-indigo-dye mb-6 italic"
                    >
                        Stories & Reflections
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-earth/60 font-sans max-w-2xl mx-auto"
                    >
                        Deep dives into Indian art history, artist interviews, and the personal creative journey of Mad Strokes.
                    </motion.p>
                </header>

                <div className="space-y-12">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white p-8 md:p-12 rounded-3xl border border-terracotta/5 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                <div className="flex items-center space-x-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md border border-earth/10">
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                        />
                                    </div>
                                    <span className="text-terracotta text-sm font-sans uppercase tracking-widest font-semibold">{post.author}</span>
                                </div>
                                <div className="flex flex-col md:items-end text-sm">
                                    <span className="text-terracotta font-sans uppercase tracking-widest mb-1 md:mb-0">{post.date}</span>
                                    <span className="text-earth/40 font-sans uppercase text-xs">{post.readTime}</span>
                                </div>
                            </div>

                            <Link href={`/blog/${post.id}`}>
                                <h2 className="text-3xl md:text-4xl font-serif text-indigo-dye mb-6 group-hover:text-terracotta transition-colors leading-tight cursor-pointer">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-lg text-earth/70 font-sans mb-8 leading-relaxed max-w-3xl">
                                {post.excerpt}
                            </p>

                            <Link
                                href={`/blog/${post.id}`}
                                className="inline-flex items-center text-indigo-dye font-serif text-lg hover:underline group-hover:text-terracotta transition-colors"
                            >
                                Read Full Story <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
