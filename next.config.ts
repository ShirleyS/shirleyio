import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
