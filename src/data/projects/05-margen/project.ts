import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'margen',
	number: '05',
	title: 'Margen',
	client: 'Margen Studio',
	location: 'Valencia, España',
	year: 2026,
	description: 'Arcilla a través de una marca auténtica.',
	subtitle: 'Narrativa visual para un proyecto cerámico de autor con tono escultórico.',
	services: [
		{ type: 'Redes Sociales', gallery: 'stack' },
		{ type: 'Cinematografía', gallery: 'stack' }
	],
	gallery: {
		layouts: ['editorial', 'gallery', 'hero']
	},
	assetsFolder: '05-margen',
	coverImage: '/images/projects/project-05.jpg',
	logo: '/images/Logotype.svg',
	heroImage: '/images/projects/project-05.jpg',
	imageSize: 'small',
	cardImage: '/images/projects/project-05.jpg'
};

export default project;
