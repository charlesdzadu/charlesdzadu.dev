<template>
	<main class="flex flex-col h-screen w-screen ">
		<Header class="hidden lg:flex"></Header>

		<!-- <button @click.self="testfuntion">charles</button> -->
		<MobileHeader class="flex lg:hidden"></MobileHeader>
		<div class="grow">
			<slot> </slot>
		</div>
		<Footer class="hidden lg:flex"></Footer>
		<MobileFooter class="flex lg:hidden"></MobileFooter>
	</main>
</template>
<script setup>

// const testfuntion = () => {
// 	console.log('test')
// }
</script>
