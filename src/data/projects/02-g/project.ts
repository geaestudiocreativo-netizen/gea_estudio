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
	services: ['Branding', 'Web', 'Fotografía'],
	assetFolder: '02-.g',
	coverImage: 'hero.jpg.png',
	logo: 'logo.svg',
	heroImage: 'hero.jpg.png',
	layouts: {
		Branding: 'editorial-b',
		Web: 'stack',
		Fotografía: 'stack'
	},
	imageSize: 'small',
	cardImage: '/images/projects/project-02.jpg'
};

export default project;
