import path from "path";
const isGitHubPages = false;
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

// Configuración para detectar que estamos en netlify
const isNetlify = process.env.NETLIFY || false;
const minify = isNetlify && mode === "production"

console.log("nODE VERSION:", import.meta.env.NODE_ENV);
console.log("APP VERSION:", import.meta.env.MY_APP_VERSION);
export default {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    minify
  }
};