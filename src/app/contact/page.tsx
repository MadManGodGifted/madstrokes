"use client";

import { Mail, Instagram, Youtube, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-16 text-center">
                    <h1 className="text-5xl font-serif text-indigo-dye mb-4">Get in Touch</h1>
                    <p className="text-earth/60 font-sans max-w-xl mx-auto">
                        Have questions about Indian art or want to collaborate with Mantavya Rawat? Reach out to us.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form Placeholder */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-terracotta/10">
                        <h2 className="text-2xl font-serif text-indigo-dye mb-8">Send a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-sans uppercase tracking-[0.2em] text-earth/60 mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-off-white border border-terracotta/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-terracotta" />
                            </div>
                            <div>
                                <label className="block text-sm font-sans uppercase tracking-[0.2em] text-earth/60 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-off-white border border-terracotta/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-terracotta" />
                            </div>
                            <div>
                                <label className="block text-sm font-sans uppercase tracking-[0.2em] text-earth/60 mb-2">Message</label>
                                <textarea rows={5} className="w-full px-4 py-3 bg-off-white border border-terracotta/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-terracotta"></textarea>
                            </div>
                            <button className="w-full py-4 bg-terracotta text-white font-serif text-lg rounded-lg hover:bg-terracotta/90 transition-all shadow-lg shadow-terracotta/20">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-12 flex flex-col justify-center">
                        <div className="flex items-start space-x-6">
                            <div className="p-4 bg-indigo-dye text-white rounded-2xl shadow-lg">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif text-earth mb-1">Email</h3>
                                <p className="text-earth/60 font-sans">contact@madstrokes.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="p-4 bg-indigo-dye text-white rounded-2xl shadow-lg">
                                <Instagram size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif text-earth mb-1">Instagram</h3>
                                <p className="text-earth/60 font-sans">@madstrokes_art</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="p-4 bg-indigo-dye text-white rounded-2xl shadow-lg">
                                <Youtube size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif text-earth mb-1">YouTube</h3>
                                <p className="text-earth/60 font-sans">Mad Strokes Stories</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="p-4 bg-indigo-dye text-white rounded-2xl shadow-lg">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif text-earth mb-1">Location</h3>
                                <p className="text-earth/60 font-sans">New Delhi, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
