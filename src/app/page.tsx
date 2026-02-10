"use client";

import { useState } from "react";
import NetflixSidebar from "@/components/NetflixNavbar"; // Keeping filename, component is Sidebar
import Hero from "@/components/Hero";
import EpisodeList from "@/components/EpisodeList";
import VideoLightbox from "@/components/VideoLightbox";
import { episodes, Episode } from "@/lib/data";

export default function Home() {
  // Force rebuild: Cache buster 1
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);

  const handlePlay = (episode: Episode) => {
    setActiveEpisode(episode);
  };

  const handleClose = () => {
    setActiveEpisode(null);
  };

  const handleNext = () => {
    if (!activeEpisode) return;
    const currentIndex = episodes.findIndex((e) => e.id === activeEpisode.id);
    if (currentIndex >= 0 && currentIndex < episodes.length - 1) {
      setActiveEpisode(episodes[currentIndex + 1]);
    } else {
      // End of list, close or loop? Close for now.
      setActiveEpisode(null);
    }
  };

  const hasNext = activeEpisode
    ? episodes.findIndex((e) => e.id === activeEpisode.id) < episodes.length - 1
    : false;

  return (
    <div className="relative min-h-screen bg-[#141414] text-white font-sans selection:bg-[#E50914] selection:text-white overflow-x-hidden">
      <NetflixSidebar />
      <Hero onPlay={() => handlePlay(episodes[0])} />
      {/* Content wrapper - Hero handles the top part. EpisodeList overlaps nicely. */}
      {/* We need a container for the rest of the page if we add more rows */}
      <div className="bg-[#141414] h-auto pb-8 relative z-20">
        <EpisodeList onPlay={handlePlay} />
        {/* Footer removed via user request */}
      </div>

      {/* Video Lightbox */}
      {activeEpisode && (
        <VideoLightbox
          episode={activeEpisode}
          onClose={handleClose}
          onNext={handleNext}
          hasNext={hasNext}
        />
      )}
    </div>
  );
}
