import { Technology } from 'models/technology';
import projects from '~/data/projects.json';
import { Project } from '~/models/project';




export function getProjectsList(technos: Technology[]): Project[] {
	if (!technos  || technos.length === 0) {
		const projectsList: Project[] = [];
		for (const project of projects) {
			const projectObject = new Project(project.title, project.excerpt, project.image, project.link, project.technology, project.description, project.screenshot);
			projectsList.push(projectObject);
		}
		return projectsList;
	} else {
		const projectsList: Project[] = [];
		for (const project of projects) {
			for (const techno of technos) {
				if (project.technology.includes(techno.name)) {
					const projectObject = new Project(project.title, project.excerpt, project.image, project.link, project.technology, project.description, project.screenshot);
					projectsList.push(projectObject);
				}
			}
		}
		return projectsList;
	}
}
