import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'http://localhost:5000/v1/:path*',
      },
    ];
  },
};

export default nextConfig;
