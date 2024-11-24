/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "standalone",
  images: {
    domains: [
      "res.cloudinary.com",
      "ipadcheckout.boring9.dev",
      "*.azurestaticapps.net",
    ],
  },
};

export default nextConfig;
