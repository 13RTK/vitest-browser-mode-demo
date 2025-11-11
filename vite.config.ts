/// <reference types="vitest/config" />

import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],

	test: {
		// environment: 'jsdom',
		globals: true,
		// setupFiles: ['./tests/setup.ts'],
		browser: {
			enabled: true,
			provider: playwright(),
			instances: [{ browser: 'chromium' }],
		},
	},

	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
