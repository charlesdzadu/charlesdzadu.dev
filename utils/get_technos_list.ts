import technos from '~/data/technos.json';
import { Technology } from '~/models/technology';



export function getTechnosList(): Technology[] {
	const technosList: Technology[] = [];
	for (const techno of technos) {
		const technoObject = new Technology(techno.name, techno.icon_type, techno.icon);
		technosList.push(technoObject);
	}
	return technosList;
}
