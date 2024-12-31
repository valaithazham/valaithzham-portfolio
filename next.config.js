/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true"; // Check if running on GitHub Pages
const repoName = "valaithzham-portfolio"; // Replace with your repository name

const nextConfig = {
  distDir: "build", // Specify the directory for the exported files
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "POST, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },
  output: "export",
  basePath: isGitHubPages ? `/${repoName}` : "", // Set basePath only for GitHub Pages
  assetPrefix: isGitHubPages ? `/${repoName}/` : "", // Prefix for static assets
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
