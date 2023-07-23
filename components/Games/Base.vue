<template>
	<div class="h-[550px] w-[550px] p-3 rounded-md flex justify-center items-center glass">
		<slot></slot>
	</div>
</template>


<style>
	.glass {
		background: linear-gradient(145deg, #43D9AD, #4D5BCE);
		border: 1px solid #0C1616;
		backdrop-filter: blur(64px);
		-webkit-backdrop-filter: blur(64px);
		box-shadow: inset 0 2px 0px 0 rgba(255, 255, 255, 0.3);
	}
</style>
