import { defineConfig } from 'vite';

export default defineConfig({
  root: './my_last_motoko_project_frontend', // Frontend klasörünü root olarak ayarla
  server: {
    port: 3000, // Yerel geliştirme sunucusu portunu belirle
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      // Node.js modüllerini tarayıcıya uyumlu hale getirmek için aliaslar
      path: 'path-browserify',
      process: 'process/browser',
    },
  },
});
