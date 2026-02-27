import type { NextConfig } from "next";

/* config options here */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn.myanimelist.net" }]
  },
  reactCompiler: true,
};

export default nextConfig;
