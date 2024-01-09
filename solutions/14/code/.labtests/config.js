import { defineConfig } from 'vite'
export default defineConfig({
	plugins: [],
    test: {
        include: ['**/.labtests/*.test.{js,tsx,ts}'],
        globals: true
    }
})
