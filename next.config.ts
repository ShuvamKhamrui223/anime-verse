import type { NextConfig } from "next";

/* config options here */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "myanimelist.net", protocol: "https" }, { hostname: "cdn.myanimelist.net", protocol: "https" }]
  },
  reactCompiler: true,
};

export default nextConfig;
