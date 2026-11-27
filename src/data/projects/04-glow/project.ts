import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'glow',
	number: '02',
	title: 'GLOW22',
	client: 'GLOW22',
	location: 'Collado Villalba, Madrid',
	sector: 'Tienda de peluquería y cosmética',
	sectorEn: 'Hair and beauty shop',
	year: 2026,
	description:
		'Logotipo y web para una tienda de peluquería y cosmética profesional que aún no existía. Una firma geométrica y redonda, donde la W son dos 22.',
	subtitle:
		'Logotipo y web para una tienda de peluquería y cosmética profesional que aún no existía.',
	services: [
		{
			type: 'Branding',
			gallery: 'branding',
			layout: 'branding-b',
			images: [
				'02-glow-logo-color.jpg',
				'03-glow-champu.jpg',
				'glow-pelo.jpg',
				'04-glow-w22.jpg',
				'05-glow-silla.jpg',
				'06-glow-frasco.jpg'
			],
			videos: ['glow-logo-presentacion.mp4']
		},
		{
			type: 'Web',
			gallery: 'web',
			background: 'background_glow_blur.jpg',
			url: 'https://www.glow22.es',
			images: ['glow-web-brilla.jpg', 'glow-web-areas.jpg', 'glow-web-proximamente.jpg', 'glow-web-conocenos.jpg']
		}
	],
	gallery: {
		layouts: ['editorial', 'gallery', 'hero']
	},
	assetsFolder: '04-glow',
	coverImage: 'hero.jpg',
	logo: 'logo.svg',
	heroImage: 'hero.jpg',
	imageSize: 'small'
};

export default project;
