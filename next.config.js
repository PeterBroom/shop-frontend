/** @type {import('next').NextConfig} */
const nextConfig = {
  //   assetPrefix: "https://tailwindui.com/img/ecommerce-images/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "img/ecommerce-images/**",
      },
    ],
    domains: ["tailwindui.com"],
  },
};

module.exports = nextConfig;
