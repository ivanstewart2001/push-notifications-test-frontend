/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  skipWaiting: true,
  register: true,
  sw: "firebase-messaging-sw.js",
});
const nextConfig = {};

module.exports = withPWA(nextConfig);
