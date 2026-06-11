import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-earth text-off-white py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-xl font-serif mb-4 text-ochre">Mad Strokes</h3>
                        <p className="text-sm opacity-80 max-w-xs">
                            Exploring the soul of Indian art. A platform to discover traditions and celebrate creativity.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif mb-4 text-ochre">Quick Links</h4>
                        <div className="flex flex-col space-y-2 text-sm opacity-80">
                            <Link href="/about" className="hover:text-terracotta transition-colors">About Us</Link>
                            <Link href="/art-forms" className="hover:text-terracotta transition-colors">Indian Art Forms</Link>
                            <Link href="/blog" className="hover:text-terracotta transition-colors">Blog & Stories</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif mb-4 text-ochre">Connect</h4>
                        <div className="flex space-x-6 mb-6">
                            <a href="https://www.instagram.com/mad.strokes/" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors"><Instagram size={20} /></a>
                            <a href="mailto:contact@madstrokes.com" className="hover:text-terracotta transition-colors"><Mail size={20} /></a>
                        </div>
                        <p className="text-xs opacity-60">
                            © {new Date().getFullYear()} Mad Strokes. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
