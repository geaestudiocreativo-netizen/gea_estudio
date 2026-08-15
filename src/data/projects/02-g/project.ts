import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'g',
	number: '02',
	title: '.G',
	client: '.G By Gabriel García',
	location: 'Valencia, España',
	year: 2026,
	description:
		'Una marca de pastelería artesanal con sensibilidad editorial y carácter contemporáneo.',
	subtitle:
		'Una marca de pastelería artesanal con sensibilidad editorial y carácter contemporáneo.',
	services: [
		{
			type: 'Branding',
			gallery: 'branding',
			layout: 'branding-a',
			images: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg']
		},
		{ type: 'Web', gallery: 'stack', images: [] },
		{
			type: 'Fotografía',
			gallery: 'fotografia',
			images: [
				'fotografia_cheescake.JPG',
				'fotografia_gabi_chocolates.JPG',
				'fotografia_gabi_cocinando.JPG',
				'fotografia_oreo.JPG',
				'fotografia_tarta_limon_entera.JPG',
				'fotografia_tarta_limon.JPG'
			]
		}
	],
	gallery: {
		layouts: ['editorial', 'gallery', 'hero']
	},
	assetsFolder: '02-punto-g',
	coverImage: 'hero.JPG',
	logo: 'logo.svg',
	heroImage: 'hero.JPG',
	imageSize: 'small',
	cardImage: '/images/projects/project-02.jpg'
};

export default project;
