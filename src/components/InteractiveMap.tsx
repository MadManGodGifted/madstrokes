"use client";

import dynamic from "next/dynamic";

const MapInner = dynamic(() => import("./MapInner"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-off-white flex items-center justify-center border border-terracotta/20 rounded-xl overflow-hidden shadow-inner">
            <div className="text-earth/40 font-serif animate-pulse">Loading Map...</div>
        </div>
    )
});

export default function InteractiveMap() {
    return (
        <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-2xl border-4 border-white relative">
            <MapInner />
        </div>
    );
}
