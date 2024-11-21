import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  target: "node14",
  outDir: "dist",
  external: [
    "express",
    "express-session",
    "cookie-parser",
    "staging",
    "crypto",
  ],
});
