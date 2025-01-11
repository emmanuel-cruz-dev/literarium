import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteStaticCopy({
    targets: [
      { src: 'robots.txt', dest: '.' },
      
    ],
  })],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'index.html'),
      },
    },
  },
  publicDir: 'public',
});
