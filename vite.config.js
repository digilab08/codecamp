import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/codecamp/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon-196.ico', 'robots.txt', 'apple-icon-180.png'],
      manifest: {
        name: 'CodeCamp',
        short_name: 'CodeCamp',
        description: 'CodeCamp - Programmieren lernen',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0ea5e9',
        icons: [
          { src: '/pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: '/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        // Optional runtime caching examples below in section 6
      },
      // Optional for testing SW in dev; remove for production if you like:
      // devOptions: { enabled: true }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        notfound: '404.html',
      },
      output: {
        sanitizeFileName: (name) => {
          // Sanitizes file names generated during the build process:
          // - Replaces spaces with dashes ('-').
          // - Removes invalid characters that are not alphanumeric, underscores (_), periods (.), or dashes (-).
          return name
            .replace(/\s+/g, '-') // Replaces spaces with dashes.
            .replace(/[^a-zA-Z0-9_.-]/g, '') // Removes all invalid characters.
        },
      },
    },
  },
})
