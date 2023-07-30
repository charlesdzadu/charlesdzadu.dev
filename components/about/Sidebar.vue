<template>
	<SidebarBase>
		<div class="flex h-full">
			<div class="w-[90px] flex flex-col gap-8 py-6">
				<template v-for="menu in aboutMenu" :key="menu.icon">
					<button @click="setActiveMenu(menu)" class="hover:text-white transition-colors"
					:class="{'text-white': data.activeMenu && menu.title == data.activeMenu.title}">
						<i :class="menu.icon" class="ri-xl"></i>
					</button>
				</template>


			</div>
			<LineV></LineV>
			<div class="flex flex-col w-full">
				<div class="flex justify-start items-center gap-3 py-3 text-white pl-4">
					<i class="ri-arrow-down-s-fill"></i>
					<h2>{{ data.activeMenu.title }}</h2>
				</div>
				<LineH></LineH>
				<div class="px-4 py-5 flex flex-col gap-2">
					<template v-for="folder in data.activeMenu.folders">
						<div class="flex flex-col gap-2">
							<button @click="setActiveFolder(folder)" class="flex gap-2 group">
								<i class="ri-arrow-right-s-line group-hover:text-white transition-all "
									:class="{ 'rotate-90': data.activeFolder && folder.title == data.activeFolder.title }"></i>
								<i class="ri-folder-3-fill" :class="folder.color"></i>
								<span class="group-hover:text-white transition-colors">{{ folder.title }}</span>
							</button>
							<div v-show="data.activeFolder && folder.title == data.activeFolder.title"
								class="flex flex-col gap-2 pl-6">
								<template v-for="link in folder.links">
									<NuxtLink :href="link.href" class="flex gap-2 group">
										<i class="ri-markdown-fill group-hover:text-white transition-colors"></i>
										<span class="group-hover:text-white transition-colors">{{ link.title }}</span>
									</NuxtLink>
								</template>
							</div>
						</div>
					</template>
				</div>
				<LineH></LineH>
				<div class="flex justify-start items-center gap-3 py-3 text-white pl-4">
					<i class="ri-arrow-down-s-fill"></i>
					<h2>contacts</h2>
				</div>
				<LineH></LineH>
				<div class="px-4 py-5 flex flex-col gap-2">
					<a class="flex gap-2 hover:text-white transition-colors" href="mailto:charles@dzadu.dev">
						<i class="ri-mail-fill"></i>
						<span>charles@dzadu.dev</span>
					</a>
					<a class="flex gap-2 hover:text-white transition-colors" href="tel:+22892569918">
						<i class="ri-phone-fill"></i>
						<span>(228) 92 56 99 18</span>
					</a>
				</div>
			</div>
		</div>
	</SidebarBase>
</template>

<script setup>
import aboutMenu from '~/data/about_menu'

const route = useRoute();

let data = reactive({
	activeMenu: null,
	activeFolder: null,
})

const setActiveMenu = (menu) => {
	if (menu) {
		data.activeMenu = menu;
		return;
	}
	let path = route.path
	for (let menu of aboutMenu) {
		for (let folder of menu.folders) {
			for (let link of folder.links) {
				if (link.href === path) {
					data.activeMenu = menu;
					data.activeFolder = folder;
					return;
				}
			}
		}
	}
}



const setActiveFolder = (folder) => {
	if (folder && folder.title != data.activeFolder.title) {
		data.activeFolder = folder;
		return;
	}
}

setActiveMenu()



</script>
