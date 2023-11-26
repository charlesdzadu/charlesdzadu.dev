<template>
	<div class="w-full h-full flex p-4">
		<div class="hidden lg:flex lg:w-[300px] ">

		</div>
		<div class="flex justify-center items-center gap-24 px-5">
			<div>
				<div class="flex flex-col gap-3">

					<h2 class="text-white">Hi all. I am</h2>
					<h1 class="text-6xl text-white leading-tight">Charles DZADU</h1>
					<h3 class="text-green-light lg:text-purple text-xl lg:text-2xl flex "> <span>> </span> <span
							class="pl-4 leading-tight">Software Engineer, UX/UI
							Designer</span></h3>
				</div>
				<div class="h-32 lg:h-48">

				</div>
				<div>
					<div class="hidden lg:flex lg:flex-col">
						<span>// Complete the game to continue</span>
						<span>// You can also check my Github page </span>
					</div>
					<div class="flex lg:hidden">
						<span>// Find my profile on github</span>
					</div>
					<!-- <br> -->
					<a href="https://github.com/charlesdzadu" class="text-white"> <span class="text-purple">const </span>
						<span class="text-green-light">githubLink</span> = <span
							class="text-orange">"https://github.com/charlesdzadu"</span> </a>
				</div>
			</div>
			<div class="hidden lg:flex">
				<GamesTicTacToe></GamesTicTacToe>
				<!-- <GamesGlobe3D></GamesGlobe3D> -->
			</div>
		</div>
	</div>
</template>

<script setup>

useSeoMeta({
	title: "Software Engineer, UX/UI Designer from Togo",
	description: "I am a Software Engineer, UX/UI Designer from Togo. I am passionate about building excellent software that improves the lives of those around me.",
	url: "https://dzadu.dev",
	keywords: "Nuxt, Vue, Tailwind, TailwindCSS, TailwindUI, JavaScript, TypeScript, Node, Express, MongoDB, MySQL, PostgreSQL, Docker, Kubernetes, AWS, GCP, Firebase, Git, GitHub, GitLab, BitBucket, Agile, Scrum, Kanban, CI/CD, DevOps, TDD, BDD, REST, GraphQL, Microservices, Serverless, Web, Mobile, iOS, Android, React, React Native, Redux, MobX, Relay, Angular, NgRx, Vue, Vuex, Ember, Next, Gatsby, JAMstack, PWA, AMP, Ionic, Electron, Storybook, Styled Components, CSS-in-JS, Material UI, Ant Design, Bootstrap, Foundation, Semantic UI, Tailwind, TailwindCSS, TailwindUI, HTML5, CSS3, Webpack, Rollup, Babel, Gulp, Grunt, Browserify, Yeoman, npm, Yarn, Bower, BrowserSync, ESLint, Prettier, Stylelint, WebSockets, SocketIO, Highcharts, D3, Canvas, WebGL, WebRTC, WebAssembly, Progressive Web Apps, AMP, Accelerated Mobile Pages, SEO, Performance, Responsive, Accessibility, Internationalization, Localization, i18n, l10n, A/B Testing, Analytics, Tag Manager, Hotjar, Optimizely, Fullstory, Mixpanel, Segment, Amplitude, Google Analytics, Google Tag Manager, Hotjar, Optimizely, Fullstory, Mixpanel, Segment, Amplitude, Google Analytics, Google Tag Manager",
	ogUrl: "https://dzadu.dev",
	ogImage: "https://dzadu.dev/favicon.ico",
})


</script>
