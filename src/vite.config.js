import { defineConfig } from "vite";

export default defineConfig({
  // plugins: [
  //   VitePWA({
  //     registerType: "autoUpdate",
  //     strategies: "injectManifest",
  //     injectManifest: {
  //       globPatterns: ["**/*.html"],

  //     },
  //     devOptions: {
  //       enabled: true,
  //     },
  //   }),
  // ],
  base: "",
  build: {
    outDir: "../dist",
  },
});
