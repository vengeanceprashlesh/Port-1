/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
