/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { isServer }) => {
    // Handle Three.js
    config.externals = config.externals || [];
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }

    return config;
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig

