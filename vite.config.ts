import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const localOptions = {
  port: 3000,
  proxy: {
    "^/css": {
      target: "https://fonts.googleapis.com/",
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/\/style.css/, ""),
    },
  },
};

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [/\/css\/style.css/],
    },
  },
  server: localOptions,
  preview: localOptions,
}));
