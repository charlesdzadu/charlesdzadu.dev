<template>
	<div class="flex h-full">
		<a :href=link :title=title class="p-4 text-gray hover:text-white transition-colors">
			<i :class=icon class="ri-lg"></i>
		</a>
		<LineV></LineV>
	</div>
</template>

<script setup lang="ts">

const props = defineProps({
	icon: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: false,
	},
	title: {
		type: String,
		required: false,
	},
})

</script>
