/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_SERVER: 'http://localhost:8081'
  }
}

module.exports = nextConfig
