import { VitePWA } from 'vite-plugin-pwa'
import  { defineConfig } from 'vite'


export default defineConfig({
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      injectManifest: {
        "globPatterns": [
            "**/*.html",
          ],
          build: {
            outDir: "../dist"
          }
      },
      devOptions: {
        enabled: true

      }
    })
  ]
})