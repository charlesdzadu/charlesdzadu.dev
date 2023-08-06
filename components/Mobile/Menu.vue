<template>
	<div class="absolute z-[10]  w-full bg-primary  transition-all duration-[500ms]">
		<div class="pb-12 flex flex-col gap-1 justify-start items-start ">
			<template v-for="link in data.links" :key="link.to">
				<a :href="link.to" class="block p-2 text-white px-4">{{ link.title }}
				</a>
				<LineH></LineH>
			</template>
		</div>
	</div>
</template>

<script setup>
const data = reactive({
	links: [
		{
			title: "_hello",
			to: "/"
		},
		{
			title: "_about-me",
			to: "/about/personal-info"
		},
		{
			title: "_projects",
			to: "/projects"
		},
		{
			title: "_contact-me",
			to: "/contact-me"
		},
	]
})
</script>
