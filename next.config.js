/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.licdn.com'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
        ]
    }
}

module.exports = nextConfig
