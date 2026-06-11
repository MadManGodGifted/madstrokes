"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { BlogPost } from "@/lib/blogData";

interface BlogPostClientProps {
    post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
    // Generate initials for the author avatar
    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
    };

    return (
        <div className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-indigo-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-indigo-dye hover:text-terracotta font-serif text-lg group transition-colors"
                    >
                        <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Stories
                    </Link>
                </motion.div>

                {/* Article Header */}
                <header className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-indigo-dye leading-tight mb-8"
                    >
                        {post.title}
                    </motion.h1>

                    {/* Metadata Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-indigo-dye/10"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-ochre/20 border border-ochre/40 flex items-center justify-center font-serif text-indigo-dye text-lg font-bold">
                                {getInitials(post.author)}
                            </div>
                            <div>
                                <span className="block text-earth font-sans text-sm font-bold uppercase tracking-wider">{post.author}</span>
                                <span className="text-earth/40 text-xs font-sans uppercase">Author</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-earth/60">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-terracotta" />
                                <span className="font-sans">{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-terracotta" />
                                <span className="font-sans">{post.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Article Banner Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative aspect-[16/9] w-full mb-12 rounded-3xl overflow-hidden shadow-lg border border-earth/5"
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="prose prose-lg max-w-none dark:prose-invert"
                >
                    {/* Introduction */}
                    <p className="text-xl md:text-2xl text-earth/80 font-serif leading-relaxed italic mb-10 border-l-4 border-ochre pl-6">
                        {post.introduction}
                    </p>

                    {/* Dynamic Sections */}
                    <div className="space-y-10">
                        {post.sections.map((section, index) => {
                            switch (section.type) {
                                case "heading":
                                    return (
                                        <h2 
                                            key={index} 
                                            className="text-3xl font-serif text-indigo-dye mt-12 mb-4 border-b border-ochre/20 pb-2"
                                        >
                                            {section.content as string}
                                        </h2>
                                    );
                                case "paragraph":
                                    return (
                                        <p 
                                            key={index} 
                                            className="text-lg text-earth/70 font-sans leading-relaxed mb-6"
                                        >
                                            {section.content as string}
                                        </p>
                                    );
                                case "blockquote":
                                    return (
                                        <blockquote 
                                            key={index} 
                                            className="bg-off-white/80 p-8 my-8 rounded-2xl border-l-4 border-terracotta italic text-lg md:text-xl text-earth/80 font-serif leading-relaxed shadow-sm"
                                        >
                                            &ldquo;{section.content as string}&rdquo;
                                        </blockquote>
                                    );
                                case "list":
                                    const items = section.content as string[];
                                    return (
                                        <ul key={index} className="list-none space-y-4 my-6 pl-2">
                                            {items.map((item, i) => {
                                                const parts = item.split(": ");
                                                const title = parts[0];
                                                const desc = parts.slice(1).join(": ");
                                                return (
                                                    <li key={i} className="flex items-start">
                                                        <span className="inline-block w-2 h-2 rounded-full bg-terracotta mt-2.5 mr-4 flex-shrink-0" />
                                                        <span className="text-lg text-earth/70 font-sans leading-relaxed">
                                                            {desc ? (
                                                                <>
                                                                    <strong className="text-indigo-dye font-serif">{title}:</strong> {desc}
                                                                </>
                                                            ) : (
                                                                item
                                                            )}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>

                    {/* Conclusion */}
                    <div className="mt-12 pt-8 border-t border-indigo-dye/10">
                        <p className="text-lg text-earth/70 font-sans leading-relaxed font-semibold">
                            {post.conclusion}
                        </p>
                    </div>
                </motion.div>

                {/* Share and Bottom Navigation */}
                <footer className="mt-16 pt-12 border-t border-indigo-dye/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-2 text-earth/50 text-sm">
                        <span>Loved this story? Share the culture.</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert("Link copied to clipboard!");
                            }}
                            className="inline-flex items-center px-4 py-2 bg-white hover:bg-off-white border border-indigo-dye/10 rounded-full text-indigo-dye font-sans text-sm font-semibold transition-all shadow-sm"
                        >
                            <Share2 size={16} className="mr-2" />
                            Share Article
                        </button>
                    </div>
                </footer>

                {/* Call To Action - Join Community */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 bg-white p-8 md:p-12 rounded-3xl border border-ochre/20 shadow-xl shadow-earth/5 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-terracotta via-ochre to-indigo-dye" />
                    <h3 className="text-2xl md:text-3xl font-serif text-indigo-dye mb-4">
                        Do you have a story to tell?
                    </h3>
                    <p className="text-earth/60 font-sans max-w-xl mx-auto mb-8">
                        Mad Strokes is built on collaboration. If you are an artist, writer, or art enthusiast with deep roots in Indian heritage, help us write the next chapter.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/submit-art"
                            className="px-6 py-3 bg-terracotta text-white font-serif rounded-sm hover:bg-terracotta/90 transition-colors shadow-md shadow-terracotta/10"
                        >
                            Submit Your Art
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3 bg-white text-indigo-dye border border-indigo-dye/20 font-serif rounded-sm hover:bg-off-white transition-colors"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </motion.section>
            </article>
        </div>
    );
}
