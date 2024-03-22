import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Twinsis/frontend/",
  server: {
    proxy: {
      "/api": "https://twinsis.onrender.com",
    },
  },
  plugins: [react()],
});
