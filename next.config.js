/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "http://127.0.0.1:5500/delivery/" },
          { key: "Access-Control-Allow-Methods", value: "GET" },
        ]
      }
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
