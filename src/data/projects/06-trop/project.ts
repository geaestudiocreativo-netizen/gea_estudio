import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'trop',
	number: '06',
	title: 'Trop',
	client: 'Trop',
	location: 'Valencia, España',
	year: 2026,
	description: 'Este proyecto gastronómico revoluciona la forma de ver la comida.',
	subtitle: 'Dirección de arte y contenido para una experiencia gastronómica urbana.',
	services: [
		{ type: 'Redes Sociales', gallery: 'stack' },
		{ type: 'Fotografía', gallery: 'stack' },
		{ type: 'Cinematografía', gallery: 'stack' }
	],
	gallery: {
		layouts: ['editorial', 'gallery', 'hero']
	},
	assetsFolder: '06-trop',
	coverImage: '/images/projects/project-06.jpg',
	logo: '/images/Logotype.svg',
	heroImage: '/images/projects/project-06.jpg',
	imageSize: 'medium',
	cardImage: '/images/projects/project-06.jpg'
};

export default project;
