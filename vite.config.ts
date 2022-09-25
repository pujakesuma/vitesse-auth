/// <reference types="vitest" />

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

export default defineConfig((env) => {
  const appEnv = loadEnv(env.mode, `.env.${env.mode}`)

  return {
    base: appEnv.VITE_BASE,
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    // service setting
    server: {
      host: true, // only when host is set to true can use the form of network to access the project by ip
      port: 8080, // port number
      open: true, // automatically open the browser
      cors: true, // allow cross-domain settings
      strictPort: true, // if the port is occupied, exit directly
      // interface proxy
      proxy: {
        '/api': {
          // The interface of the local 8000 front-end code is proxied to the service port of 8888
          target: appEnv.VITE_API_BASEURL,
          changeOrigin: true, // allow cross-origin
          rewrite: path => path.replace('/api/', '/'),
        },
      },
    },
    plugins: [
      Vue({
        reactivityTransform: true,
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages(),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue/macros',
          'vue-router',
          '@vueuse/core',
        ],
        dts: true,
      }),

      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: true,
      }),

      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss(),
    ],

    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom',
    },
  }
})
