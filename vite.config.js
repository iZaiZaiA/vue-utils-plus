import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
    ],
    build: {
        outDir: resolve(__dirname, './dist'),
        lib: {
            entry: resolve(__dirname, 'packages/index.js'),
            name: 'vueUtilsPlus'
        },
        rollupOptions: {
            context: 'globalThis',
            preserveEntrySignatures: 'strict',
            external: ['vue'],
            output: [
                {
                    format: 'umd',
                    exports: 'named',
                    sourcemap: false,
                    entryFileNames: '[name].js',
                    chunkFileNames: '[name].js',
                    assetFileNames: '[name].[ext]',
                    namespaceToStringTag: true,
                    inlineDynamicImports: false,
                    manualChunks: undefined,
                    globals: { vue: 'Vue' }
                },
                {
                    format: 'es',
                    exports: 'named',
                    sourcemap: false,
                    entryFileNames: '[name].esm.js',
                    chunkFileNames: '[name].js',
                    assetFileNames: '[name].[ext]',
                    namespaceToStringTag: true,
                    inlineDynamicImports: false,
                    manualChunks: undefined,
                    globals: { vue: 'Vue' }
                }
            ]
        }
    }
})
