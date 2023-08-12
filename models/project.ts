export class Project {
	constructor(
		public title: string,
		public category: string,
		public excerpt: string,
		public link: string,
		public image: string,
		public technologies: string[],
		public description?: string,
		public screenshot?: string[],

	) {}
}
