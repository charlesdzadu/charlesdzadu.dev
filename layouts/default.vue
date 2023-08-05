<template>
	<main class="flex flex-col h-screen w-screen ">
		<Header class="hidden lg:flex"></Header>
		<MobileHeader class="flex lg:hidden"></MobileHeader>
		<div class="grow">
			<slot> </slot>
		</div>
		<Footer class="hidden lg:flex"></Footer>
	</main>
</template>
