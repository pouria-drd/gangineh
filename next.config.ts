import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: process.env.NODE_ENV === "development",

    images: {
        domains: ["127.0.0.1", "localhost"],
    },
};

export default nextConfig;
