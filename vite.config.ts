import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import viteBuildInfo from "./viteBuildInfo"
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    // 设置文件./src路径为 @
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  },
  server: {
    port: 8888,
    // host:'0.0.0.0'
  },
})
