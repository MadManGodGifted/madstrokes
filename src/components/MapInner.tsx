"use client";

import { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { artForms } from "@/lib/artData";
import L from "leaflet";
// Leaflet CSS is imported in globals.css

// Fix for default marker icons in Leaflet with Next.js
const customIcon = typeof window !== 'undefined' ? new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
}) : null;

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
                        <Popup>
                            <div className="p-2 min-w-[200px]">
                                <h3 className="font-serif text-lg text-terracotta mb-1">{art.name}</h3>
                                <p className="text-xs font-sans text-earth/60 mb-2 uppercase tracking-wide">{art.state}</p>
                                <p className="text-sm font-sans text-earth mb-3 line-clamp-2">{art.shortDescription}</p>
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
