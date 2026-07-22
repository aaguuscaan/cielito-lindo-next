import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: 'https', hostname: 'firebasestorage.googleapis.com' }] },
  experimental: { workerThreads: true, cpus: 1 },
};
export default nextConfig;
