/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/zoe-portfolio" : "";
const nextConfig = {
  basePath: basePath,
  assetPrefix: basePath,
  output: "export",
  reactStrictMode: true,
  distDir: "dist",
  images: {
    unoptimized: true,
    path: '/zoe-portfolio' },
};

export default nextConfig;
