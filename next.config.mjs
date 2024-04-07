/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === "production";
const basePath = "";
const nextConfig = {
  basePath: basePath,
  assetPrefix: basePath,
  output: "export",
  reactStrictMode: true,
  distDir: "dist",
  images: {
    path: "",
    unoptimized: true,

    },
};

export default nextConfig;
