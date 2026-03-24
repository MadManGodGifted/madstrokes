"use client";

import InteractiveMap from "@/components/InteractiveMap";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MapPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center space-x-2 text-earth/60 hover:text-terracotta transition-colors mb-6 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-sans text-sm uppercase tracking-widest">Back to Home</span>
                    </Link>
                    <h1 className="text-5xl font-serif text-earth mb-4">Explore India&apos;s Artistic Heritage</h1>
                    <p className="text-earth/60 font-sans max-w-2xl">
                        A geographical journey through the diverse traditional and folk art techniques passed down through generations.
                    </p>
                </header>

                <div className="h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white relative">
                    <InteractiveMap />
                </div>
            </div>
        </main>
    );
}
