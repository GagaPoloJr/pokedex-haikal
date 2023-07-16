import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react(), envCompatible(/* options */)],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
