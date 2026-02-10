import { getAssetPath } from "@/lib/utils";

export interface Episode {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  instagramUrl: string;
  duration: string;
}

export const showMetadata = {
  title: "Subway Takes",
  description: "Social media sensation and SNL host Veronika Slowikowska desperately wishes for one thing: to be on Subway Takes. In this surreal 8-part series, Kareem’s messenger materializes in her living room and becomes her unlikely mentor as she prepares for the take of a lifetime...",
  matchScore: "98% Match",
  year: "2024",
  maturityRating: "TV-MA",
  seasonCount: "1 Season",
  genres: ["Mockumentary", "Comedy", "Reality TV"],
  cast: ["Veronika Slowikowska", "Kyle Gordon", "Various Strangers"],
};

export const episodes: Episode[] = [
  {
    id: 1,
    title: "The Pilot",
    description: "what would your take be?",
    thumbnail: getAssetPath("/episodes/ep1.jpg"),
    instagramUrl: "https://www.instagram.com/reel/DTdLD4wEThR/",
    duration: "1m",
  },
  {
    id: 2,
    title: "Episode 2",
    description: "so it begins…",
    thumbnail: getAssetPath("/episodes/ep2.jpg"),
    instagramUrl: "https://www.instagram.com/reel/DUQ9lgJDWmB/",
    duration: "1m",
  },
  {
    id: 3,
    title: "Episode 3",
    description: "the subway is transient",
    thumbnail: getAssetPath("/episodes/ep3.jpg"),
    instagramUrl: "https://www.instagram.com/reels/DUT3Qz6AUR4/",
    duration: "1m",
  },
  {
    id: 4,
    title: "Episode 4",
    description: "I don’t know if I can do this…",
    thumbnail: getAssetPath("/episodes/ep4.jpg"),
    instagramUrl: "https://www.instagram.com/reels/DUWabfdgWLK/",
    duration: "1m",
  },
  {
    id: 5,
    title: "Episode 5",
    description: "thanks Kyle",
    thumbnail: getAssetPath("/episodes/ep5.jpg"),
    instagramUrl: "https://www.instagram.com/reels/DUZR-H5gero/",
    duration: "1m",
  },
  {
    id: 6,
    title: "Episode 6",
    description: "training 🚊",
    thumbnail: getAssetPath("/episodes/ep6.jpg"),
    instagramUrl: "https://www.instagram.com/reel/DUcICm4D8Na/",
    duration: "1m",
  },
  {
    id: 7,
    title: "Episode 7",
    description: "the almost final chapter 📖",
    thumbnail: getAssetPath("/episodes/ep7.jpg"),
    instagramUrl: "https://www.instagram.com/reels/DUguqhAElqf/",
    duration: "1m",
  },
  {
    id: 8,
    title: "Episode 8",
    description: "I’m having a panic attack!!",
    thumbnail: getAssetPath("/episodes/ep8.jpg"),
    instagramUrl: "https://www.instagram.com/reels/DUiyzXFDgUw/",
    duration: "1m",
  },
];
