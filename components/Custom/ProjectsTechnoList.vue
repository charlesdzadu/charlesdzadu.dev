<template>
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
