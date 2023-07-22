<template>
	<a href="">
		<span class=" px-8 py-3 hover:text-white " :class="{'border-b-2 border-b-orange': active}" >{{title}}</span>
	</a>
	<LineV></LineV>
</template>

<script setup>

let props = defineProps({
	title: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: false,

	},
	active : {
		type: Boolean,
		required: false,
		default: false,
	}
})


</script>
