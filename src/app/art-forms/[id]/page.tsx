"use client";

import { useParams } from "next/navigation";
import { artForms } from "@/lib/artData";
import ArtFormDetails from "@/components/ArtFormDetails";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArtFormDetailPage() {
    const { id } = useParams();
    const art = artForms.find((a: any) => a.id === id);

    if (!art) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-off-white">
                <h1 className="text-4xl font-serif text-earth mb-4">Art Form Not Found</h1>
                <Link href="/art-forms" className="text-terracotta hover:underline">
                    Back to all art forms
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/art-forms"
                    className="inline-flex items-center space-x-2 text-earth/60 hover:text-terracotta transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-sans text-sm uppercase tracking-widest">Back to Gallery</span>
                </Link>

                <ArtFormDetails art={art} />
            </div>
        </main>
    );
}
