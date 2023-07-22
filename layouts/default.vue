<template>
	<main class="flex flex-col h-screen w-screen ">
		<Header></Header>
		<div class="grow">
			<slot> </slot>
		</div>
		<Footer></Footer>
	</main>
</template>
