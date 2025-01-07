/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'; // Check if running on GitHub Pages
const repoName = 'valaithzham-portfolio'; // Replace with your repository name

const nextConfig = {
  experimental: {
    appDir: true, // Ensure app directory is enabled
  },
  outputFileTracing: true, // Required for serverless functions
  basePath: isGitHubPages ? `/${repoName}` : '', // Set basePath only for GitHub Pages
  assetPrefix: isGitHubPages ? `/${repoName}/` : '', // Prefix for static assets
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
};

module.exports = nextConfig;
