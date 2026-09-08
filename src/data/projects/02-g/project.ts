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
			images: [
				'Color_ivory.jpg',
				'Color_brown.jpg',
				'Mockup_poste.png',
				'Mockup_packaging_cajas.png',
				'Mockup_bolsa.png',
			]
		},
		{
			type: 'Web',
			gallery: 'web',
			background: 'background_image.jpg',
			video: 'Vide_Web.mp4'
		},
		{
			type: 'Fotografía',
			gallery: 'fotografia',
			images: [
				'fotografia_cheescake.JPG',
				'fotografia_gabi_chocolates.JPG',
				'fotografia_gabi_cocinando.JPG',
				'fotografia_tartas.JPG',
				'fotografia_oreo.JPG',
				'fotografia_cheescake2.JPG',
				'fotografia_7.JPG',
				'fotografia_tarta_limon.JPG',
				'fotografia_tarta_limon_entera.JPG',
				'fotografia_10.JPG',
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
