import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Basio Finance',
        short_name: 'Bosio Finance',
        description: 'Gerencie suas finanças com Bosio Finance',
        theme_color: '#005C6E',
        background_color: '#ffffff',
        icons: [
          {
            src: '/lovable-uploads/feb4b0d7-9e89-45bc-bae1-72b1af54eacd.jpg',
            sizes: '192x192',
            type: 'image/png'
          }
        ],
        display: 'standalone',
        start_url: '/'
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/^\/api\//]
      },
      devOptions: {
        enabled: mode === 'development',
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1024, // aumenta limite do aviso para 1MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const pkgName = id.toString().split('node_modules/')[1].split('/')[0];
            return pkgName;
          }
        }
      }
    }
  }
}));
