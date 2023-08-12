<template>
	<div class="w-full h-full  flex">
		<SidebarBase class="hidden lg:flex">
			<div class="flex flex-col ">
				<div class="flex justify-start items-center gap-3 py-3 text-white pl-4">
					<i class="ri-arrow-down-s-fill"></i>
					<h2>projects</h2>
				</div>
				<LineH></LineH>
				<CustomProjectsTechnoList />
			</div>
		</SidebarBase>
		<div class="w-full ">
			<div class="flex flex-col h-full">
				<div class="hidden lg:flex justify-start items-center gap-5 pl-2 ">
					<h2 class="py-3">all</h2>
					<i class="ri-close-line"></i>
					<LineV></LineV>
				</div>
				<LineH class="hidden lg:flex "></LineH>
				<div class="p-5  flex lg:hidden">
					<p>_projects</p>
				</div>
				<CustomAccordion title="projects" class="flex lg:hidden">
					<CustomProjectsTechnoList />
				</CustomAccordion>
				<div class="w-full h-full p-5 lg:p-20">
					<div class="w-full h-full  grid grid-cols-1  lg:grid-cols-3 gap-10">
						<div class="flex flex-col " v-for="project in projectsStore.projects">
							<div class="flex gap-4">
								<span class="text-orange">{{ project.title }}</span>
								<span>//{{ project.category }}</span>
							</div>
							<div class="rounded-md border border-line mt-3">
								<div class="h-40 w-full bg-primary-dark rounded-md">
								</div>
								<div class="p-5">
									<p class="text-gray-500 pb-4">{{ project.description }}</p>
									<a href="" class="px-5 py-2 bg-line text-sm rounded-md ">view-project</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>


<script setup lang="ts">

import { useProjectsStore } from '~/stores/projects'

const projectsStore = useProjectsStore()
projectsStore.initProjects()


useSeoMeta({
	title: 'Projects',
	description: 'Amazing projects build with love and passion',
	keywords: 'projects, web, application, mobile, desktop, makifaa, portfolio, vue, nuxt, javascript, typescript, html, css, scss, sass, tailwindcss, vuetify, bootstrap, nodejs, express, mongodb, mysql, postgresql, graphql, apollo, rest, api, git, github, bitbucket, docker, kubernetes, aws, gcp, azure, digitalocean, heroku, netlify, vercel, cloudflare, nginx, apache, linux, ubuntu, debian, windows, macos, ios, android, flutter, dart, c, c++, c#, java, kotlin, python, php, laravel, symfony, django, nextjs, react, react native, redux, vuex, webpack, babel, eslint, prettier, jest, mocha, chai, jasmine, selenium, puppeteer, cypress, storybook, figma, adobe xd, photoshop, illustrator, indesign, lightroom, after effects, premiere pro, audition, davinci resolve, blender, maya, 3ds max, unity, unreal engine, godot, gimp, inkscape, krita, zbrush, substance painter, substance designer, quixel mixer, quixel bridge, substance alchemist, marmoset toolbag, marvelous designer, gravity sketch, sketchup, autocad, revit, solidworks, fusion 360, rhino, cinema 4d, houdini, arduino, raspberry pi, iot, machine learning, deep learning, artificial intelligence, data science, big data, blockchain, cryptocurrency, bitcoin, ethereum, binance, dogecoin, litecoin, ripple, tron, cardano, polkadot, binance smart chain, solana, eos, tezos, stellar, cosmos, avalanche, hedera hashgraph, elrond, kusama, near, algorand, fantom, terra, avalanche, harmony, flow, chia, iota, neo, waves, zilliqa, polygon, filecoin, monero, dash, aave, uniswap, compound, maker, synthetix, yearn finance, chainlink, sushiswap, 1inch, balancer, curve, ren, kyber network, bancor, loopring, ren, augur, 0x, the graph, audius, enjin,',
})

</script>
