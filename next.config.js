/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Explicitly set the root to avoid picking up other lockfiles higher up
    root: __dirname,
  },
};

module.exports = nextConfig;
