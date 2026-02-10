/** @type {import('next').NextConfig} */
console.log("Loading next.config.mjs");
const nextConfig = {
  output: "export",
  basePath: "/subway-takes",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
