import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        features: resolve(__dirname, 'ozellikler/index.html'),
        ai: resolve(__dirname, 'yapay-zeka/index.html'),
        udf: resolve(__dirname, 'uyap-udf/index.html'),
        security: resolve(__dirname, 'guvenlik/index.html'),
        contact: resolve(__dirname, 'iletisim/index.html'),
        privacy: resolve(__dirname, 'gizlilik/index.html')
      }
    }
  }
});
