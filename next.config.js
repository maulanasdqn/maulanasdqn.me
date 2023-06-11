/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NEXT_PUBLIC_ENV === "local",
});
const nextConfig = {
  images: {
    domains: ["a-us.storyblok.com"],
  },
};

module.exports = withPWA(nextConfig);
