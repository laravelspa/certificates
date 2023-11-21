import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1000
    },
    // Commented In Production Build
    server: {
        hmr: {
          protocol: 'ws',
          host: 'localhost'
        }
    },
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false
                }
            }
        }),
        quasar({
            sassVariables: 'resources/sass/quasar-variables.sass'
        }),
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
});
