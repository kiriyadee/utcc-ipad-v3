/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["res.cloudinary.com", "ipad-utcc-stage.boring9.dev"],
  },
};

export default nextConfig;
