import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'gea-artesania',
	number: '03',
	title: 'Gea Artesanía',
	client: 'Gea Artesanía',
	location: 'Madrid, España',
	year: 2023,
	description: 'Bisutería artesanal con piezas de diseño hechas en arcilla polimérica.',
	subtitle: 'Universo visual para una marca de bisutería artesanal de edición limitada.',
	services: [
		{ type: 'Branding', gallery: 'branding', layout: 'branding-d', images: [
				'branding-02.jpg', 'branding-03.png','branding-04.png',
			] },
		{ type: 'Fotografía', gallery: 'fotografia', images: [
				'IMG_0143.jpg', 'IMG_0568.jpg', 'IMG_0743.JPG', 'IMG_0856.jpg',
				'IMG_1886.JPG', 'IMG_2193.JPG', 'IMG_3467.JPG', 'IMG_4067.jpg',
				'IMG_4492.jpg', 'IMG_5191.jpg', 'IMG_5389.jpg', 'IMG_5542.jpg',
				'IMG_5690.jpg', 'IMG_7291.JPG', 'IMG_7812.JPG', 'IMG_7821.JPG',
				'IMG_8274.JPG', 'IMG_8832.JPG'
			] },
		{ type: 'Redes Sociales', gallery: 'redes-sociales', images: [
				'ig_1.png', 'ig_2.jpg', 'ig_3.jpg', 'ig_4.jpg'
			], videos: ['video-01.mov', 'video-02.mov', 'video-03.mov'] }
	],
	gallery: {
		layouts: ['editorial', 'gallery', 'hero']
	},
	assetsFolder: '03-gea-artesania',
	coverImage: '/images/projects/03-gea-artesania/cover.jpg',
	logo: '/images/projects/03-gea-artesania/logo.png',
	heroImage: '/images/projects/03-gea-artesania/hero.jpg',
	imageSize: 'large',
	cardImage: '/images/projects/03-gea-artesania/card.jpg'
};

export default project;
