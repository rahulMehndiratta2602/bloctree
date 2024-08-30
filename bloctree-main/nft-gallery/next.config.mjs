/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nft-cdn.alchemy.com',
      },
    ],
  },
  env: {
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
  },
};

export default nextConfig;
