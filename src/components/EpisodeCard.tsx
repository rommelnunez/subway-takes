"use client";

import { Play } from "lucide-react";
import { Episode } from "@/lib/data";
import { cn } from "@/lib/utils";

interface EpisodeCardProps {
    episode: Episode;
    index: number;
    onPlay: (episode: Episode) => void;
}

export default function EpisodeCard({ episode, index, onPlay }: EpisodeCardProps) {
    return (
        <div className="flex flex-col gap-2 group cursor-pointer" onClick={() => onPlay(episode)}>
            {/* Thumbnail / Player Area */}
            <div
                className={cn(
                    "relative w-full aspect-video overflow-hidden rounded-md transition-all duration-300 ring-0 hover:ring-2 hover:ring-white"
                )}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={episode.thumbnail}
                    alt={episode.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <div className="bg-white/20 border-2 border-white rounded-full p-2 backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform">
                        <Play className="fill-white w-6 h-6 border-transparent" />
                    </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 px-1.5 py-0.5 rounded textxs font-semibold text-white">
                    {episode.duration}
                </div>
            </div>

            {/* Minimal Text Info for Carousel */}
            <div className="flex flex-col px-1">
                <h3 className="text-sm font-bold text-gray-200 group-hover:text-white truncate">{index + 1}. {episode.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">
                    {episode.description}
                </p>
            </div>
        </div>
    );
}
