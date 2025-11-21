// Small polyfill to expose webcrypto on globalThis for older Node versions.
// This file is meant to be preloaded with `node -r ./vite-crypto-polyfill.cjs`.
try {
  const nodeCrypto = require("node:crypto");
  const webcrypto = nodeCrypto && nodeCrypto.webcrypto;
  if (webcrypto && !(globalThis.crypto && globalThis.crypto.getRandomValues)) {
    globalThis.crypto = webcrypto;
  }
} catch (e) {
  // If require fails (very old Node), leave it alone. The startup error will be shown.
}
