import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:2]',
    },
  },
});
