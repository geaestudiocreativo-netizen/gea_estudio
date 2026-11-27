import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'mercurio',
	number: '04',
	title: 'Mercurio',
	client: 'Proyecto conceptual de Gea Estudio',
	location: 'Madrid, España',
	sector: 'Joyería',
	sectorEn: 'Jewellery',
	year: 2026,
	concept: true,
	description:
		'Marca conceptual de joyería en plata fundida. Dirección de arte y campaña creadas por Gea para explorar un lenguaje visual propio, del taller de la pintora al museo.',
	subtitle: 'Marca conceptual de joyería en plata fundida.',
	services: [
		{
			type: 'Fotografía',
			gallery: 'fotografia',
			images: ['mercurio-pendiente.jpg', 'mercurio-gargantilla.jpg']
		},
		{
			type: 'Filmmaking',
			gallery: 'stack',
			videos: ['mercurio-campana.mp4']
		}
	],
	gallery: {
		layouts: ['editorial', 'gallery', 'hero']
	},
	assetsFolder: '05-mercurio',
	coverImage: 'hero.jpg',
	logo: 'logo.svg',
	heroImage: 'hero.jpg',
	imageSize: 'small'
};

export default project;
