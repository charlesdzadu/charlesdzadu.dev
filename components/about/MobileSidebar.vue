<template>
	<div class="flex flex-col">
		<template v-for="menu in aboutMenu" :key="menu.icon">
			<CustomAccordion :title="menu.title">
				<template v-for="folder in menu.folders">
					<div class="flex flex-col gap-2 px-4">
						<button @click="setActiveFolder(folder)" class="flex gap-2 group py-1">
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
			</CustomAccordion>
		</template>
		<CustomAccordion title="contacts"></CustomAccordion>
	</div>
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
