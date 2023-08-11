<template>
	<div class="w-full h-full flex flex-col   lg:flex-row">
		<AboutSidebar class="hidden lg:flex"></AboutSidebar>
		<AboutMobileSidebar class="flex lg:hidden"></AboutMobileSidebar>
		<NuxtPage />
	</div>
</template>
<script setup>
useSeoMeta({
	title: 'Know more about me',
	description: 'This is the about page',
	keywords: 'Charles Dzadu, about, me, skills, projects, contact',
})
</script>


