import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'talleres-alonso',
	number: '01',
	title: 'Talleres Alonso',
	client: 'Talleres Alonso',
	location: 'Valencia, España',
	year: 2026,
	description: 'Una identidad sólida para un taller con más de 40 años de historia.',
	subtitle: 'Identidad visual y ecosistema digital para un taller con legado familiar.',
	services: [
		{ type: 'Branding', gallery: 'branding', layout: 'branding-a' },
		{ type: 'Web', gallery: 'stack' }
	],
	gallery: {
		layouts: ['editorial', 'gallery', 'hero']
	},
	assetsFolder: '01-talleres-alonso',
	coverImage: '/images/projects/project-01.jpg',
	logo: '/images/Logotype.svg',
	heroImage: '/images/projects/project-01.jpg',
	imageSize: 'large',
	cardImage: '/images/projects/project-01.jpg'
};

export default project;
