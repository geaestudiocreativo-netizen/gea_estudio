import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'glow',
	number: '04',
	title: 'Glow',
	client: 'Glow 22',
	location: 'Collado Villalba, Madrid',
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
			images: ['01-glow-firma.jpg', '03-glow-final.jpg']
		},
		{
			type: 'Web',
			gallery: 'web',
			background: 'background_glow.jpg',
			url: 'https://www.glow22.es',
			images: ['glow-web-brilla.jpg', 'glow-web-proximamente.jpg']
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
