const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, "..", "dist");
const indexFile = path.join(distDir, "index.html");
const dest404 = path.join(distDir, "404.html");

if (!fs.existsSync(indexFile)) {
  console.error("index.html not found in dist. Did the build succeed?");
  process.exit(1);
}

try {
  fs.copyFileSync(indexFile, dest404);
  console.log("Copied index.html to 404.html for GH Pages SPA fallback");
} catch (err) {
  console.error("Failed to copy 404.html:", err);
  process.exit(1);
}
