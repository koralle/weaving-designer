/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
