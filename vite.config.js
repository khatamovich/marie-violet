import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Enable history API fallback
    // This makes the server respond to any path by serving index.html
    historyApiFallback: true,
  },
});
