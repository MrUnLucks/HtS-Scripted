import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite' // https://github.com/unplugin/unplugin-vue-components
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
      imports: ['vue', '@vueuse/core'],
      vueTemplate: true,
    }),
    vue(),
    Components({
      /* options */
    }),
  ],
})
// vite.config.ts
