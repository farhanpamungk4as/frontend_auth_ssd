/// <reference types="vite/client" />

import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173, // Paksa gunakan port 5173
    strictPort: true, // Jika port sedang digunakan, jangan coba port lain
  },
});

