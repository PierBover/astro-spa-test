import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

export default defineConfig({
	integrations: [vue(
		{
			appEntrypoint: '/src/spa/main.js'
		}
	)]
});