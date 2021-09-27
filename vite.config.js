import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import json from '@rollup/plugin-json';
import styleImport from 'vite-plugin-style-import';

const path = require('path');
const isDev = () => {
  return process.env.NODE_ENV === 'development';
};
const mockData = {
  mockPath: 'mock',
  supportTs: false,
};
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    isDev() ? viteMockServe(mockData) : () => {},
    json(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
  ],
  publicDir: 'public',
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  server: {
    https: false,
    cors: true,
    proxy: {
      '^/api': {
        target: 'http://1.15.253.155:8080',
        rewrite: (path) => {
          return path.replace(/^\/api/, '');
        },
        changeOrigin: true,
      },
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  css: {
    preprocessorOptions: {
      less: {
        // color - 全局默认主题颜色； width - 默认页面最小宽度
        additionalData: '@color: #293146;@width: 1366px;',
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'resource',
    assetsInlineLimit: 4096, // 4kb
    sourcemap: !!isDev(),
    minify: isDev() ? 'esbuild' : 'terser',
  },
});
