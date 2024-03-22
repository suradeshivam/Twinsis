import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://twinsis.onrender.com",
    },
    host: true,
    strictPort: true,
    port: 8000,
  },
  plugins: [react()],
});
