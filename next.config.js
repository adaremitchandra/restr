/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mobile.api.adaremit.co.id",
      },
    ],
  },
};

module.exports = nextConfig;
