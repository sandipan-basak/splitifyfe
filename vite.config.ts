import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:  3003,
  },
  resolve: {
    alias: {
      '~/components': path.resolve(__dirname, 'src/components'),
      '~/containers': path.resolve(__dirname, 'src/containers'),
    },
  },
});
