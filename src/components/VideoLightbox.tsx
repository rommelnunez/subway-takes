"use client";

import { X, SkipForward } from "lucide-react";
import { Episode } from "@/lib/data";

interface VideoLightboxProps {
    episode: Episode;
    onClose: () => void;
    onNext: () => void;
    hasNext: boolean;
}

export default function VideoLightbox({ episode, onClose, onNext, hasNext }: VideoLightboxProps) {

    // Improved Regex to handle various Instagram URL formats better
    const getEmbedUrl = (url: string) => {
        // Matches /reel/ID, /reels/ID, or /p/ID, handling trailing slashes and query params
        const match = url.match(/(?:reels?|p)\/([a-zA-Z0-9_-]+)/);
        const id = match ? match[1] : "";
        // Using /embed suffix which is often more reliable than /embed/captioned for some contexts
        return `https://www.instagram.com/p/${id}/embed/?autoplay=1`;
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-8 text-white/70 hover:text-white transition-colors z-[110]"
            >
                <X size={40} />
            </button>

            <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-[9/16] max-h-[90vh] flex flex-col items-center shadow-2xl">
                <iframe
                    src={getEmbedUrl(episode.instagramUrl)}
                    className="w-full h-full rounded bg-black"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>

                {/* Manual Skip Button */}
                {hasNext && (
                    <button
                        onClick={onNext}
                        className="absolute -right-20 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#e9c46a] transition-colors hidden md:block" // Added gold hover
                        title="Next Episode"
                    >
                        <SkipForward size={48} />
                    </button>
                )}
            </div>
        </div>
    );
}
