<template>
	<div class="flex flex-col w-full">
		<h1 class="text-lg">// Code snippet showcase</h1>
		<div class="flex flex-col w-full mt-6 gap-3">
			<div class="flex justify-between items-start">
				<div class="flex gap-2">
					<div class="h-10 w-10 bg-gray rounded-full"></div>
					<div class="flex flex-col">
						<span class="text-sm text-blue-dark font-bold">@charlesdzadu</span>
						<span class="text-xs">created 5 month ago</span>
					</div>
				</div>
				<div class="flex gap-4">

					<div class="flex items-center gap-1">
						<i class="ri-chat-1-fill"></i>
						<span>02</span>
					</div>
					<div class="flex items-center gap-1">
						<i class="ri-star-fill"></i>
						<span>23</span>
					</div>
				</div>
			</div>
			<code class="w-full bg-primary-dark border border-line rounded-md p-4 justify-start items-start">
						print("Hello World")
				</code>
			<div class="flex justify-end items-center gap-1">
				<span class="text-xs">hello_world.py</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import hljs from 'highlight.js';


onMounted(() => {
	setTimeout(function () {
		document.querySelectorAll('code')
			.forEach((block) => {
				hljs.highlightBlock(block)
			})
	}, 500)
});

</script>

<style src="/node_modules/highlight.js/styles/monokai.css"></style>
