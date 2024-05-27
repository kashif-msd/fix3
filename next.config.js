/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: 'build', 
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
