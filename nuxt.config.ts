// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		}
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/i18n',
	],
	i18n: {
		vueI18n: './i18n.config.ts'
	},
	plugins: [
		{ src: '~/plugins/remixicon', mode: 'client' },
	],

})
