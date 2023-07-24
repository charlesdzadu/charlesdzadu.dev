<template>
	<div class="w-full h-full  flex">
		<SidebarBase>
			<div class="flex flex-col ">
				<div class="flex justify-start items-center gap-3 py-3 text-white pl-4">
					<i class="ri-arrow-down-s-fill"></i>
					<h2>projects</h2>
				</div>
				<LineH></LineH>
				<div class="px-4 py-5 flex flex-col gap-2">
					<div class="flex gap-4 items-center" v-for="tech in technos" :key="tech.icon">
						<input type="checkbox" @change="addTechno(tech)"
							class="h-5 w-5 focus:ring-primary bg-transparent border focus:border-none rounded-sm checked:bg-gray focus:bg-gray" />
						<div class="flex gap-1 items-center">
							<i :class="tech.icon"></i>
							<span>{{ tech.name }}</span>
						</div>
					</div>
				</div>
			</div>
		</SidebarBase>
		<div class="w-full ">
			<div class="flex flex-col h-full">
				<div class="flex justify-start items-center gap-5 pl-2">
					<h2 class="py-3">all</h2>
					<i class="ri-close-line"></i>
					<LineV></LineV>
				</div>
				<LineH></LineH>
				<div class="w-full h-full p-20">
					<div class="w-full h-full  grid grid-cols-3 gap-10">
						<div class="flex flex-col " v-for="project in projects">
							<div class="flex gap-4">
								<span class="text-orange">Makifaa</span>
								<span>//_web_application</span>
							</div>
							<div class="rounded-md border border-line mt-3">
								<div class="h-32 w-full bg-primary-dark rounded-md">

								</div>
								<div class="p-5">
									<p class="text-gray-500 pb-4">{{ project.description }}</p>
									<a href="" class="px-5 py-2 bg-line text-sm rounded-md ">view-project</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>


<script setup lang="ts">
import { getTechnosList } from '@/utils/get_technos_list'
import { getProjectsList } from '@/utils/get_projects_list'
import { Technology } from 'models/technology';


let data = reactive({
	selectedTechnos: [] as Technology[],
})

const technos = computed(() => getTechnosList())
const projects = computed(() => getProjectsList(data.selectedTechnos))


const addTechno = (techno: Technology) => {
	if (data.selectedTechnos.includes(techno)) {
		data.selectedTechnos = data.selectedTechnos.filter((t) => t !== techno)
	} else {
		data.selectedTechnos.push(techno)
	}
}

</script>
