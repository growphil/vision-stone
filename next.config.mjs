/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/brands",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/infrastructure",
        destination: "/manufacturing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
