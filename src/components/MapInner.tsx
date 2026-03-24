"use client";

import { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { artForms } from "@/lib/artData";
import { ImageService } from "@/lib/imageService";
import L from "leaflet";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ArtImage from './ArtImage';
// Leaflet CSS is imported in globals.css

// Fix for default marker icons in Leaflet with Next.js
const customIcon = typeof window !== 'undefined' ? new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
}) : null;

function MapPopupImage({ art }: { art: any }) {
    const [imgUrl, setImgUrl] = useState<string | null>(null);
    const [isPlaceholder, setIsPlaceholder] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            const url = await ImageService.getCoverImage(art);
            setImgUrl(url);
            setIsPlaceholder(url.includes('placeholder'));
        };
        fetchImage();
    }, [art]);

    if (!imgUrl) return <div className="h-24 w-full mb-3 bg-off-white animate-pulse" />;

    return (
        <div className={isPlaceholder ? 'bg-[#FDFCF8]' : ''}>
            <ArtImage 
                src={imgUrl} 
                alt={art.name} 
                className={`h-24 w-full mb-3 ${isPlaceholder ? 'opacity-40 grayscale-[0.5]' : ''}`}
            />
        </div>
    );
}

export default function MapInner() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Create the map instance only once on the client
    const map = useMemo(() => {
        if (!isClient || !customIcon) return null;

        return (
            <MapContainer
                center={[20.5937, 78.9629]}
                zoom={5}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
                key="india-art-map-instance"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {artForms.map((art) => (
                    <Marker
                        key={art.id}
                        position={art.coordinates}
                        icon={customIcon}
                    >
                        <Popup className="premium-popup">
                            <div className="flex flex-col w-[220px] overflow-hidden rounded-lg">
                                <MapPopupImage art={art} />
                                <div className="px-1">
                                    <h3 className="font-serif text-lg text-indigo-dye m-0 leading-tight mb-1">{art.name}</h3>
                                    <p className="text-[10px] font-sans text-terracotta mb-2 uppercase tracking-[0.1em] font-bold">{art.state}</p>
                                    <p className="text-xs font-sans text-earth/70 mb-4 line-clamp-2 leading-relaxed">
                                        {art.shortDescription}
                                    </p>
                                    <Link
                                        href={`/art-forms/${art.id}`}
                                        className="inline-flex items-center space-x-1 text-terracotta font-serif text-xs hover:underline group/btn border-t border-terracotta/10 pt-3 w-full"
                                    >
                                        <span>Explore Heritage</span>
                                        <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        );
    }, [isClient]);

    if (!isClient) {
        return (
            <div className="w-full h-full bg-off-white flex items-center justify-center">
                <div className="text-earth/40 font-serif animate-pulse">Initializing Map...</div>
            </div>
        );
    }

    return (
        <div className="w-full h-full relative">
            {map}
        </div>
    );
}
