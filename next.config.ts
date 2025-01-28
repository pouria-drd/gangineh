import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: process.env.NODE_ENV === "development", // Enable strict mode only in development
    images: {
        domains: ["127.0.0.1", "localhost"],
    },
};

export default nextConfig;
