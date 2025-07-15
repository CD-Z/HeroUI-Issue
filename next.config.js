/** @type {import('next').NextConfig} */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

const nextConfig = withPWA({
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.d\.ts$/,
      loader: "ignore-loader",
    });
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
  output: "standalone",
});

module.exports = nextConfig;
