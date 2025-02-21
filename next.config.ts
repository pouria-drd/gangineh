import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    reactStrictMode: process.env.NODE_ENV === "development",

    basePath: process.env.NEXT_PUBLIC_BASE_PATH,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "127.0.0.1",
            },
            {
                protocol: "https",
                hostname: "localhost",
            },
        ],
    },
};

export default nextConfig;
