import type { NextConfig } from "next";

/**
 * GitHub Pages serves project sites at /<repo>/ unless the repo is <user>.github.io.
 * Set BASE_PATH explicitly to override (e.g. "" when using a custom domain at the apex).
 */
function basePathForGitHubPages(): string {
  const explicit = process.env.BASE_PATH;
  if (explicit !== undefined) return explicit;

  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (!repo) return "";

  // User/org GitHub Pages repo → site is at root of github.io, no base path
  if (repo.endsWith(".github.io")) return "";

  return `/${repo}`;
}

const basePath = basePathForGitHubPages();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
