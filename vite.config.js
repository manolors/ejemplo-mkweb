import path from "path";
const isGitHubPages = true;
const isNetlify = process.env.NETLIFY || false;
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";
const noMinify = isNetlify && mode !== "production"
const minify = noMinify ? { minify: false, minifySyntax: false } : {};

export default {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    minify,
  }
};
