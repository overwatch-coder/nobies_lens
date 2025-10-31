import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpg: { quality: 80 },
      jpeg: { quality: 75 },
      webp: { quality: 80 },
      avif: { quality: 70 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
