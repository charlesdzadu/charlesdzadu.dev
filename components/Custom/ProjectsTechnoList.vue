<template>
	<div class="px-4 py-5 flex flex-col gap-2">
		<div class="flex gap-4 items-center" v-for="tech in technos" :key="tech.icon">
			<input type="checkbox" @change="projectsStore.addOrRemoveTechnos(tech)" :name="tech.name" :id="tech.name"
				class="h-5 w-5 focus:ring-primary bg-transparent border focus:border-none rounded-sm checked:bg-gray focus:bg-gray" />
			<label :for="tech.name">
				<div class="flex gap-1 items-center">
					<i :class="tech.icon"></i>
					<span>{{ tech.name }}</span>
				</div>
			</label>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getTechnosList } from '@/utils/get_technos_list'
import { useProjectsStore } from '~/stores/projects'

const projectsStore = useProjectsStore()
const technos = computed(() => getTechnosList())


</script>
