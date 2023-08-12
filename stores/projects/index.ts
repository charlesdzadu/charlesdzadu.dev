import { defineStore } from 'pinia'
import { Technology } from 'models/technology';
import { Project } from 'models/project';
import { getProjectsList } from '@/utils/get_projects_list'

export const useProjectsStore = defineStore({
	id: 'projects',
	state: () => ({
		selectedTechnos: [] as Technology[],
		projects: [] as Project[],
	}),
	actions: {
		addOrRemoveTechnos(techno: Technology) {
			if (!this.selectedTechnos.includes(techno)) {
				this.selectedTechnos.push(techno);
			} else {
				this.selectedTechnos.splice(this.selectedTechnos.indexOf(techno), 1);
			}
			this.getProjectWithTechnos(this.selectedTechnos);
		},

		getProjectWithTechnos(technos: Technology[]) {
			this.projects = getProjectsList(technos);
		},

		initProjects() {
			this.projects = getProjectsList();
		}
	}

})
