/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/bulldog-gym/' : '',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/bulldog-gym' : '',
}

export default nextConfig
