import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'gea-artesania',
	number: '03',
	title: 'Gea Artesanía',
	client: 'Gea Artesanía',
	location: 'Valencia, España',
	year: 2026,
	description: 'Bisutería artesanal con piezas de diseño hechas en arcilla polimérica.',
	subtitle: 'Universo visual para una marca de bisutería artesanal de edición limitada.',
	services: ['Branding', 'Web', 'Fotografía'],
	assetFolder: '03-gea-artesania',
	coverImage: '/images/projects/project-03.jpg',
	logo: '/images/Logotype.svg',
	heroImage: '/images/projects/project-03.jpg',
	layouts: {
		Branding: 'editorial-c',
		Web: 'stack',
		Fotografía: 'stack'
	},
	imageSize: 'large',
	cardImage: '/images/projects/project-03.jpg'
};

export default project;
