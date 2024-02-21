/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  skipWaiting: true,
  register: true,
  sw: false,
});
const nextConfig = {};

module.exports = withPWA(nextConfig);
