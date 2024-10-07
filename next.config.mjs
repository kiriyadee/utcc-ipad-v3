/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "standalone",
  images: {
    domains: ["res.cloudinary.com", "ipad-utcc-stage.boring9.dev"],
  },
};

export default nextConfig;
