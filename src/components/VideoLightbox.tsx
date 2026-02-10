"use client";

import { X, SkipForward } from "lucide-react";
import { Episode } from "@/lib/data";
import { useEffect } from "react";

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

    // Load Instagram embed script if needed

    useEffect(() => {
        if (episode.embedHtml) {
            // Check if script is already present
            if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
                const script = document.createElement("script");
                script.src = "//www.instagram.com/embed.js";
                script.async = true;
                document.body.appendChild(script);
            }
            // Trigger process for new embeds
            if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process();
            }
        }
    }, [episode]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-8 text-white/70 hover:text-white transition-colors z-[110]"
            >
                <X size={40} />
            </button>

            <div className="relative w-full max-w-[85vw] md:max-w-[500px] aspect-[9/16] max-h-[80vh] flex flex-col items-center shadow-2xl justify-center">
                {episode.embedHtml ? (
                    <div
                        className="w-full h-full overflow-y-auto custom-embed-container flex items-center justify-center bg-black rounded"
                        dangerouslySetInnerHTML={{ __html: episode.embedHtml }}
                    />
                ) : (
                    <iframe
                        src={getEmbedUrl(episode.instagramUrl)}
                        className="w-full h-full rounded bg-black"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}

                {/* Manual Skip Button - Right side on Desktop, Bottom Right on Mobile */}
                {hasNext && (
                    <button
                        onClick={onNext}
                        className="absolute -bottom-16 md:bottom-auto md:top-1/2 md:-right-20 md:-translate-y-1/2 text-white/70 hover:text-[#e9c46a] transition-colors md:block flex flex-col items-center gap-1"
                        title="Next Episode"
                    >
                        <SkipForward size={40} className="md:w-12 md:h-12" />
                        <span className="text-xs md:hidden uppercase tracking-widest font-bold">Next</span>
                    </button>
                )}
            </div>
        </div>
    );
}
