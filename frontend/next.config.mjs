/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'arweave.net',
                port: '',
                pathname: '**',
            },
        ],

    },
    productionBrowserSourceMaps: false, // Disable source maps in development
    optimizeFonts: false, // Disable font optimization
    minify: false, // Disable minification
    fastRefresh: true,
    concurrentFeatures: true,
    swcMinify: true,
};

export default nextConfig;
