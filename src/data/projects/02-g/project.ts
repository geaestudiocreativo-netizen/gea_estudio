import type { ProjectFolderMetadata } from '../types';

const project: ProjectFolderMetadata = {
	slug: 'g',
	number: '01',
	title: '.G',
	client: '.G By Gabriel García',
	location: 'Las Rozas, Madrid',
	sector: 'Pastelería',
	sectorEn: 'Bakery',
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
			video: 'Vide_Web.optimized.mp4',
			url: 'https://www.tartaspuntog.es'
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
				'0C1553AF-CF57-4534-93EE-FFE87D92C9D9_1_105_c.jpeg',
				'1F0DD323-70D9-438E-A83D-CDAE288A2282_1_105_c.jpeg',
				'2C04F0F4-6BF0-4C96-B034-542F445DF07A_1_105_c.jpeg',
				'2C61A4FD-3CEE-4856-A74F-4BD4EA0DA529_1_105_c.jpeg',
				'5EA0B661-EE58-4561-A2DB-78E0FB9BF406_1_105_c.jpeg',
				'6A45AB35-71A0-48B1-9ED1-B4A5AEF66EB7_1_105_c.jpeg',
				'A28D67CA-930F-42F8-9BC6-3D51540A18CB_1_105_c.jpeg',
				'C110F99B-F169-4474-BB53-D288C0980722_1_105_c.jpeg',
				'D458DE10-3D64-4D6A-9994-AE20B026DCC4_1_105_c.jpeg',
				'DC0BA698-9FE6-4A5A-A24E-7CEA32E7EDBC_1_105_c.jpeg',
				'F9C66D75-92A4-493C-B951-187D75707B19_1_105_c.jpeg',
				'FA3D8728-71B9-4FCC-8811-970F5B056D8A_1_105_c.jpeg',
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
