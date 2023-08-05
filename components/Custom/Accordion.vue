<template>
	<div class="flex flex-col pb-1">
		<button class="flex gap-3 items-center bg-line py-2 px-4" @click="data.isOpen = !data.isOpen">
			<i class="ri-arrow-right-s-fill ri-lg transition-all" :class="{'rotate-90': data.isOpen}"></i>
			<span>{{props.title}}</span>
		</button>
		<div class="py-1">
			<slot v-if="data.isOpen"></slot>
		</div>
	</div>
</template>

<script setup>

const data = reactive({
	isOpen: false,
})

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
})

</script>
