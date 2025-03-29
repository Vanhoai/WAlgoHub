import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        domains: ["i.pinimg.com"],
    },
    experimental: {
        turbo: {},
    },
    env: {
        VAPID_KEY: process.env.VAPID_KEY,
        BASE_URL: process.env.BASE_URL,
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
        APP_ID: process.env.APP_ID,
        MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    },
}

export default nextConfig
