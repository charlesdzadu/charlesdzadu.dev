<template>
	<div class="flex flex-col">
		<div class="flex justify-between">
			<div class="px-4 flex items-center">
				<NuxtLink to="/" class=" hover:text-white transition-colors  w-[300px]">charles-dzadu</NuxtLink>
				<HeaderMenu></HeaderMenu>
			</div>
			<span class="mt-3 text-orange font-bold text-xl">Please note that this site is still under construction</span>
			<div class="flex items-center">
				<LineV></LineV>
				<a href="https://drive.google.com/file/d/14wsGOjBPNMI6GHB7PXNwruZz31lDlWN1/view?usp=sharing" target="_blank" class="flex p-3 gap-2 items-center">
					<i class="ri-download-cloud-fill ri-lg"></i>
					<span>download-cv</span>
				</a>
				<HeaderMenuItem title="_contact-me" link="/contact-me" />
			</div>
		</div>
		<LineH></LineH>
	</div>
</template>
