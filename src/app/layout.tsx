import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: "Mad Strokes — Exploring India's Artistic Soul",
    description: "Discover traditional and modern art forms from across India through an interactive map.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-off-white relative`}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
