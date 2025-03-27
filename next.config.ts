import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        domains: ["i.pinimg.com"],
    },
    experimental: {
        turbo: {},
    },
}

export default nextConfig
