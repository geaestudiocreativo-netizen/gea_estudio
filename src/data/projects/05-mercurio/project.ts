import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'mercurio',
	number: '04',
	title: 'Mercurio',
	client: 'Proyecto conceptual de Gea Estudio',
	location: '',
	sector: 'Joyería',
	sectorEn: 'Jewellery',
	year: 2026,
	concept: true,
	description:
		'Una marca de joyería en plata fundida creada para explorar un lenguaje visual propio. Dirección de arte, fotografía y campaña en vídeo, del taller de la pintora al museo.',
	subtitle: 'Marca conceptual de joyería en plata fundida.',
	services: [
		{
			type: 'Fotografía',
			gallery: 'fotografia',
			images: ['mercurio-pendiente.jpg', 'mercurio-gargantilla.jpg', 'mercurio-01.jpg', 'mercurio-02.jpg', 'mercurio-03.jpg', 'mercurio-04.jpg', 'mercurio-05.jpg']
		},
		{
			type: 'Filmmaking',
			gallery: 'stack',
			videos: ['mercurio-campana-v2.mp4']
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
