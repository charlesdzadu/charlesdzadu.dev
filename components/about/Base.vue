<template>
	<div class="w-full ">
		<div class="flex flex-col h-full">
			<div class="flex justify-start items-center gap-5 pl-4">
				<h2 class="py-3">{{title}}</h2>
				<i class="ri-close-line"></i>
				<LineV></LineV>
			</div>
			<LineH></LineH>
			<div class="w-full h-full  flex justify-between">
				<slot> </slot>
				<div class="flex">
					<LineV></LineV>
					<div class="h-3 w-[40px] bg-gray m-2"></div>
					<LineV></LineV>
				</div>
				<div class="w-full flex justify-start items-start p-6">
					<CodeSnippets></CodeSnippets>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

defineProps({
	title: {
		type: String,
		default: 'about',
	},
})
</script>
