import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'apod.nasa.gov' },
      { hostname: 'mars.jpl.nasa.gov' },
      { hostname: 'images-assets.nasa.gov' },
      { hostname: 'mars.nasa.gov' },
    ],
  },
}

export default nextConfig
