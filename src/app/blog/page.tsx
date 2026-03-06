"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: "warli-story",
        title: "The Story of Warli Art",
        excerpt: "Exploring the geometric simplicity and deep-rooted nature of Maharashtra's tribal traditions.",
        date: "March 15, 2024",
        readTime: "5 min read",
    },
    {
        id: "madhubani-understanding",
        title: "Understanding Madhubani Painting",
        excerpt: "How the women of Mithila turned their courtyard rituals into a globally recognized art form.",
        date: "March 10, 2024",
        readTime: "8 min read",
    },
    {
        id: "tribal-modern-influence",
        title: "How Tribal Art Influences Modern Artists",
        excerpt: "Personal reflections on integrating ancient aesthetics into contemporary digital mediums.",
        date: "March 5, 2024",
        readTime: "6 min read",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif text-indigo-dye mb-6 italic">Stories & Reflections</h1>
                    <p className="text-lg text-earth/60 font-sans max-w-2xl mx-auto">
                        Deep dives into Indian art history, artist interviews, and the personal creative journey of Mad Strokes.
                    </p>
                </header>

                <div className="space-y-12">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 md:p-12 rounded-3xl border border-terracotta/5 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                <span className="text-terracotta text-sm font-sans uppercase tracking-widest mb-2 md:mb-0">
                                    {post.date}
                                </span>
                                <span className="text-earth/40 text-xs font-sans uppercase">
                                    {post.readTime}
                                </span>
                            </div>

                            <Link href={`/blog/${post.id}`}>
                                <h2 className="text-3xl md:text-4xl font-serif text-indigo-dye mb-6 group-hover:text-terracotta transition-colors leading-tight">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-lg text-earth/70 font-sans mb-8 leading-relaxed max-w-3xl">
                                {post.excerpt}
                            </p>

                            <Link
                                href={`/blog/${post.id}`}
                                className="inline-flex items-center text-indigo-dye font-serif text-lg hover:underline"
                            >
                                Read Full Story →
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </main>
    );
}
