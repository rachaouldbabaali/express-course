// Small polyfill to expose webcrypto on globalThis for older Node versions.
// This file is meant to be preloaded with `node -r ./vite-crypto-polyfill.cjs`.
try {
  const nodeCrypto = require("node:crypto");
  const webcrypto = nodeCrypto && nodeCrypto.webcrypto;

  // If full Web Crypto API is available on node:crypto.webcrypto, use it.
  if (webcrypto && typeof webcrypto.getRandomValues === "function") {
    if (
      !(
        globalThis.crypto &&
        typeof globalThis.crypto.getRandomValues === "function"
      )
    ) {
      globalThis.crypto = webcrypto;
    }
  } else {
    // Fallback for older Node versions: implement getRandomValues using
    // crypto.randomFillSync so libraries that call crypto.getRandomValues work.
    const nodeBuiltin = require("crypto");
    if (
      !(
        globalThis.crypto &&
        typeof globalThis.crypto.getRandomValues === "function"
      )
    ) {
      globalThis.crypto = {
        getRandomValues: (typedArray) => {
          if (
            !(
              ypedArray &&
              typeof typedArray === "object" &&
              typeof typedArray.length === "number"
            )
          ) {
            throw new TypeError("Expected an array-like object");
          }
          // crypto.randomFillSync works with Buffer/TypedArray
          return nodeBuiltin.randomFillSync(typedArray);
        },
      };
    }
  }
} catch (e) {
  // If require fails (very old Node), leave it alone. The startup error will be shown.
}
