<template>
	<div class="w-full h-full  flex">
		<SidebarBase class="hidden lg:flex">
			<div class="flex flex-col ">
				<div class="flex justify-start items-center gap-3 py-3 text-white pl-4">
					<i class="ri-arrow-down-s-fill"></i>
					<h2>projects</h2>
				</div>
				<LineH></LineH>
				<CustomProjectsTechnoList />
			</div>
		</SidebarBase>
		<div class="w-full ">
			<div class="flex flex-col h-full">
				<div class="hidden lg:flex justify-start items-center gap-5 pl-2 ">
					<h2 class="py-3">all</h2>
					<i class="ri-close-line"></i>
					<LineV></LineV>
				</div>
				<LineH class="hidden lg:flex "></LineH>
				<div class="p-5  flex lg:hidden">
					<p>_projects</p>
				</div>
				<CustomAccordion title="projects" class="flex lg:hidden">
					<CustomProjectsTechnoList />
				</CustomAccordion>
				<div class="w-full h-full p-5 lg:p-20">
					<div class="w-full h-full  grid grid-cols-1  lg:grid-cols-3 gap-10">
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
