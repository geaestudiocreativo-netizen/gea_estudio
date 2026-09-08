import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'talleres-alonso',
	number: '01',
	title: 'Talleres Alonso',
	client: 'Talleres Alonso',
	location: 'Valencia, España',
	year: 2026,
	description: 'Una identidad sólida para un taller con más de 40 años de historia. El taller de toda la vida, ahora con una identidad visual y ecosistema digital que refleja su legado familiar.',
	subtitle: 'Una identidad sólida para un taller con más de 40 años de historia. El taller de toda la vida, ahora con una identidad visual y ecosistema digital que refleja su legado familiar.	',
	services: [
		{
			type: 'Branding',
			gallery: 'branding',
			layout: 'branding-a',
			images: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '06.svg', '05.jpg']
		},
		{
			type: 'Web',
			gallery: 'web',
			background: 'background_web_talleres_alonso.jpg.svg',
			url: 'https://www.talleresalonsolasrozas.com',
			images: ['webpage.jpg']
		}
	],
	gallery: {
		layouts: ['editorial', 'gallery', 'hero']
	},
	assetsFolder: '01-talleres-alonso',
	coverImage: 'hero.jpg',
	logo: 'logo.png',
	heroImage: 'hero.svg',
	imageSize: 'large',
	cardImage: '/images/projects/project-01.jpg'
};

export default project;
