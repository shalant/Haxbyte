// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://haxbyte.com',
	output: 'static',
	outDir: './dist',
	publicDir: './public',
	srcDir: './src',
	vite: {
		ssr: {
			noExternal: [],
		},
	},
	integrations: [],
});
