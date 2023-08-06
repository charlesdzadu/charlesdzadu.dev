<template>
	<div class="flex flex-col">
		<div class=" flex justify-between p-5">
			<NuxtLink to="/" class=" hover:text-white transition-colors">charles-dzadu</NuxtLink>
			<button @click.native="toggleMobileMenu">
				<i class=" ri-xl transition-all"
					:class="{ 'ri-close-fill': data.mobileMenu, 'ri-menu-fill': data.mobileMenu == false }"></i>
			</button>

		</div>
		<LineH></LineH>
		<MobileMenu  :class="{ 'top-[60px] opacity-100': data.mobileMenu, 'top-[-200px] opacity-0 ': data.mobileMenu == false }"></MobileMenu>
	</div>
</template>

<script setup>

const data = reactive({
	mobileMenu: false
})



const toggleMobileMenu = () => {
	console.log(data.mobileMenu)
	data.mobileMenu = !data.mobileMenu
}
</script>
