import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libAssetsPlugin()],
  build: {
    lib: {
      entry: 'src/main.tsx',
      formats: ['es'],
    },
  },
})
