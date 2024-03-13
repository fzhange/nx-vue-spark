/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { resolve } from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/.',

  server: {
    port: 4200,
    host: 'localhost',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      app: resolve(__dirname, 'src/app'),
      components: resolve(__dirname, 'src/components'),
      routes: resolve(__dirname, 'src/routes'),
      composables: resolve(__dirname, 'src/composables'),
    },
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [vue(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: './dist/nx-vue-spark',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: './coverage/nx-vue-spark',
      provider: 'v8',
    },
  },
});
