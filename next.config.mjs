import withPWA from "next-pwa";

export default withPWA({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
});
