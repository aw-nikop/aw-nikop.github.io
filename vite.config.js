const path = require('path')
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SCSS_Logger = {
    warn(message, options) {
        // Mute "Mixed Declarations" warning
        if (options.deprecation && message.includes('mixed-decls')) {
            return
        }
        // List all other warnings
        console.warn(`▲ [WARNING]: ${message}`);
    },
};
export default {
    root: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 8080,
        hot: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src', 'index.html'),
                docs: resolve(__dirname, 'src', 'docs', 'docs/index.html'),
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                logger: SCSS_Logger,
            },
        },
    },

}