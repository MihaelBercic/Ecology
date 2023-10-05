import adapter from '@sveltejs/adapter-static';
import { importAssets } from 'svelte-preprocess-import-assets';
import {vitePreprocess} from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(), // ToDo: Taprau jajc
	//ToDo: Tvoj jajc: svelte({ preprocess: [importAssets()] })
	kit: {
		appDir: "internal",
		adapter: adapter({
			fallback: "app.html"
		}),
	}
};

export default config;
