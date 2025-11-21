import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Polyfill globalThis.crypto.getRandomValues for Node versions that don't
// expose the Web Crypto API on the global scope (older Node 16.x installs).
// Vite and some dependencies expect `globalThis.crypto.getRandomValues` to exist.
// If you're running Node 18+ this is a no-op and can be removed.
export default defineConfig(async () => {
  // Do the polyfill inside an async config factory to avoid top-level await
  // issues when the config is compiled to CommonJS by esbuild.
  try {
    // @ts-ignore: runtime import of node:crypto; types may not be installed locally
    const nodeCrypto = await import("node:crypto");
    const webcrypto = (nodeCrypto as any).webcrypto;
    if (
      !(
        (globalThis as any).crypto && (globalThis as any).crypto.getRandomValues
      )
    ) {
      (globalThis as any).crypto = webcrypto;
    }
  } catch (e) {
    // If node:crypto isn't available, leave it and let the dev server show a clear error.
  }

  return {
    plugins: [react()],
    server: { port: 5173 },
  };
});
