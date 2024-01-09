import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: '/home/damner/code/.labtests/setup.js',
    }
})
