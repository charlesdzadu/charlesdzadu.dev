<template>
	<div class="w-full ">
		<div class="flex flex-col h-full">
			<div class="hidden lg:flex justify-start items-center gap-5 pl-4 ">
				<h2 class="py-3">{{title}}</h2>
				<i class="ri-close-line"></i>
				<LineV ></LineV>
			</div>
			<LineH class="hidden lg:flex"></LineH>
			<div class="w-full h-full   flex flex-col lg:flex-row justify-start lg:justify-between">
				<slot> </slot>
				<div class="hidden lg:flex ">
					<LineV></LineV>
					<div class="h-[6px] w-[20px] bg-gray m-1"></div>
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
