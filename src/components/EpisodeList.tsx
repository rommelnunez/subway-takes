import { episodes } from "@/lib/data";
import EpisodeCard from "./EpisodeCard";

interface EpisodeListProps {
    onPlay: (episode: any) => void;
}

export default function EpisodeList({ onPlay }: EpisodeListProps) {
    return (
        <div className="relative z-20 -mt-24 md:-mt-48 pl-20 md:pl-32 overflow-visible pb-20">

            {/* Selection Header - "Trending Now" style but using Season info */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-md">
                Episodes &nbsp;<span className="text-lg font-normal text-gray-400">Season 1</span>
            </h2>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar pr-12">
                {episodes.map((episode, idx) => (
                    <div key={episode.id} className="shrink-0 w-[300px] md:w-[350px]">
                        <EpisodeCard episode={episode} index={idx} onPlay={onPlay} />
                    </div>
                ))}
            </div>
        </div>
    );
}
