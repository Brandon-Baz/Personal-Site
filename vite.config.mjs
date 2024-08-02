import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
    plugins: [react()],
    root: './',
    resolve: {
        alias: {
            'crypto': 'crypto-browserify',
            'stream': 'stream-browserify',
            'path': 'path-browserify',
            'os': 'os-browserify/browser',
            'fs': 'browserify-fs',
            'util': 'util/',
            'events': 'events/',
            'buffer': 'buffer/'
        },
    },
    define: {
        'process.env': {},
        global: 'window'
    },
    optimizeDeps: {
        include: ['fuse.js'],
        esbuildOptions: {
            define: {
                global: 'globalThis'
            },
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true,
                    process: true
                }),
                NodeModulesPolyfillPlugin()
            ]
        }
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            external: ['natural', 'keyword-extractor'],
        },
    },
    server: {
        open: './index.tsx'
    },
});