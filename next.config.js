/** @type {import('next').NextConfig} */
module.exports = {
  crossOrigin: 'anonymous',
  reactStrictMode: false,
  images: {
    domains: ['localhost']
  },
  env: {
    KAKAO_JS_KEY: process.env.KAKAO_JS_KEY,
    API_URL: process.env.API_URL,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}
