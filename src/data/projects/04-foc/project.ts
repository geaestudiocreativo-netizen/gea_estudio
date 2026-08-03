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
	services: ['Redes Sociales', 'Fotografía', 'Cinematografía', 'Papelería'],
	assetFolder: '04-foc',
	coverImage: '/images/projects/project-04.jpg',
	logo: '/images/Logotype.svg',
	heroImage: '/images/projects/project-04.jpg',
	layouts: {
		'Fotografía': 'stack',
		'Redes Sociales': 'stack',
		'Papelería': 'stack',
		'Cinematografía': 'stack'
	},
	imageSize: 'medium',
	cardImage: '/images/projects/project-04.jpg'
};

export default project;
