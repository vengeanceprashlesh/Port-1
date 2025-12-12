/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
  experimental: {
    optimizeCss: true,
    turbopack: {
      root: ['C:\\Portfolio'],
    },
  },
}

module.exports = nextConfig
