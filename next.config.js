/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    SW_CONTRACT_ADDRESS: process.env.SW_CONTRACT_ADDRESS,
  },
  webpack(config) {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
    return config;
  },
};

module.exports = nextConfig;
