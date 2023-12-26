/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  images: {
    domains: ["www.google.com", "google.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
