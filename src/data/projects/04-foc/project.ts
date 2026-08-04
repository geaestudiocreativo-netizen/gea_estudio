import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'foc',
	number: '04',
	title: 'Foc',
	client: 'Foc',
	location: 'Valencia, España',
	year: 2026,
	description: 'Paellas de autor que revolucionan la forma de ver la comida tradicional valenciana.',
	subtitle: 'Contenido visual para una marca gastronómica contemporánea con alma mediterránea.',
	services: [
		{ type: 'Redes Sociales', gallery: 'stack' },
		{ type: 'Fotografía', gallery: 'stack' },
		{ type: 'Cinematografía', gallery: 'stack' },
		{ type: 'Papelería', gallery: 'stack' }
	],
	gallery: {
		layouts: ['editorial', 'gallery', 'hero']
	},
	assetsFolder: '04-foc',
	coverImage: '/images/projects/project-04.jpg',
	logo: '/images/Logotype.svg',
	heroImage: '/images/projects/project-04.jpg',
	imageSize: 'medium',
	cardImage: '/images/projects/project-04.jpg'
};

export default project;
