"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SearchStatusProps {
    query: string;
    count: number;
    onClear: () => void;
    didYouMean?: string;
    onSuggestionClick?: (suggestion: string) => void;
}

export default function SearchStatus({ query, count, onClear, didYouMean, onSuggestionClick }: SearchStatusProps) {
    if (!query) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-earth/60 font-sans">Showing {count} results for</span>
                <div className="flex items-center space-x-2 bg-terracotta/10 px-3 py-1 rounded-full border border-terracotta/20">
                    <span className="text-terracotta font-serif font-bold italic">"{query}"</span>
                    <button 
                        onClick={onClear}
                        className="p-0.5 hover:bg-terracotta/20 rounded-full transition-colors text-terracotta"
                        title="Clear search"
                    >
                        <X size={14} />
                    </button>
                </div>
                
                <AnimatePresence>
                    {didYouMean && count === 0 && (
                        <motion.button
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            onClick={() => onSuggestionClick?.(didYouMean)}
                            className="text-indigo-dye hover:text-terracotta transition-colors text-sm font-sans italic ml-2 border-b border-dashed border-indigo-dye/30"
                        >
                            Did you mean <span className="font-bold">"{didYouMean}"</span>?
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
            
            {count > 0 && didYouMean && didYouMean !== query.toLowerCase() && (
                <button
                    onClick={() => onSuggestionClick?.(didYouMean)}
                    className="text-earth/40 hover:text-terracotta transition-colors text-xs font-sans italic"
                >
                    Not what you're looking for? Try <span className="font-bold">"{didYouMean}"</span>
                </button>
            )}
        </motion.div>
    );
}
