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
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

const millionConfig = {
  auto: true,
};

module.exports = million.next(nextConfig, millionConfig);
