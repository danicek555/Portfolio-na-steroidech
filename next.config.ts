import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Disable the development overlay panel
  onDemandEntries: {
    // Disable the development overlay
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Completely disable all development indicators
  devIndicators: false,
};

export default nextConfig;
