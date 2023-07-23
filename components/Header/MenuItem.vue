<template>
	<LineV></LineV>
	<NuxtLink :to="link" class="flex items-center">
		<span class="px-8 py-3 hover:text-white " :class="{ 'border-b-2 border-b-orange text-white': active }">{{ title }}</span>
	</NuxtLink>
</template>

<script setup>

const route = useRoute();

let props = defineProps({
	title: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: false,

	},
})

// Make link active if it matches the current route
let active = computed(() => {
	return props.link === route.path
})


</script>
