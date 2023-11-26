// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'fr'
			},
			charset: 'utf-8',
			titleTemplate: '%s - Charles DZADU',

			viewport: 'width=device-width, initial-scale=1',
			link: [
				{ rel: 'canonical', href: 'https://dzadu.dev/' },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
				{ rel: 'apple-touche-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/site.webmanifest' },
				{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#c07313' },

			],
			meta: [
				{ name: 'msapplication-TileColor', content: '#ffffff' },
				{ name: 'theme-color', content: '#ffffff' },
			],
			script: [


			],


		}

	},
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		}
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/i18n',
		'nuxt-gtag',
		'@pinia/nuxt',
	],
	gtag: {
		id: process.env.GTAG_ID,
	},

	i18n: {
		vueI18n: './i18n.config.ts'
	},
	plugins: [
		{ src: '~/plugins/remixicon', mode: 'client' },
	],

})
