/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  },
};

module.exports = nextConfig;
