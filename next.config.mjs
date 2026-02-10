/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/katra-menu',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
