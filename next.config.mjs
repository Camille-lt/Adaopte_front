/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Ceci autorise toutes les images en HTTPS
      },
    ],
  },
};

export default nextConfig;
