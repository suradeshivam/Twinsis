import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://twinsis.onrender.com",
    },
    host: "0.0.0.0",
    port: process.env.PORT || 10000,
  },
  base: "https://github.com/suradeshivam/Twinsis/tree/main/frontend",
  plugins: [react()],
});
