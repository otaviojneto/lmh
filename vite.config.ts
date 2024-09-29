import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  host: true, // Use `true` para permitir acesso na rede local (substitui '0.0.0.0')
  port: 3000,
});
