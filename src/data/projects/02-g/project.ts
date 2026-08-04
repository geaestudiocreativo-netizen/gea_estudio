import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'g',
	number: '02',
	title: '.G',
	client: 'By Gabriel García',
	location: 'Valencia, España',
	year: 2026,
	description:
		'Una marca de pastelería artesanal con sensibilidad editorial y carácter contemporáneo.',
	subtitle:
		'Una marca de pastelería artesanal con sensibilidad editorial y carácter contemporáneo.',
	services: [
		{ type: 'Branding', gallery: 'branding', layout: 'branding-a' },
		{ type: 'Web', gallery: 'stack' },
		{ type: 'Fotografía', gallery: 'stack' }
	],
	gallery: {
		layouts: ['editorial', 'gallery', 'hero']
	},
	assetsFolder: '02-punto-g',
	coverImage: 'hero.jpg.png',
	logo: 'logo.svg',
	heroImage: 'hero.jpg.png',
	imageSize: 'small',
	cardImage: '/images/projects/project-02.jpg'
};

export default project;
