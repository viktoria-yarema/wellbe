const million = require("million/compiler");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  generateBuildId: async () => {
    return "version 5";
  },
  // distDir: "../server/functions/nextServer",
};

const millionConfig = {
  auto: true,
};

module.exports = million.next(nextConfig, millionConfig);
