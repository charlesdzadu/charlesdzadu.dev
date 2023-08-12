import { Technology } from 'models/technology';
import projects from '~/data/projects.json';
import { Project } from '~/models/project';




export function getProjectsList(technos?: Technology[]): Project[] {
	const projectsList: Project[] = [];

	if (!technos || technos.length === 0) {
		projectsList.length = 0;
		for (const project of projects) {
			projectsList.push(project);
		}

	} else {
		projectsList.length = 0;
		for (const project of projects) {
			for (const techno of technos) {
				if (project.technologies.includes(techno.name)) {
					projectsList.push(project);
				}
			}
		}
	}

	return projectsList;
}
