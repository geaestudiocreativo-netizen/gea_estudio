export type ServicePageItem = {
	slug: string;
	title: string;
	homeTitle: string;
	homeDescription: string;
	homeAlt: string;
	homeSize: 'imageXS' | 'imageS' | 'imageM' | 'imageL';
	intro: string;
	heroImage: string;
	homeImage: string;
	sectionTitle: string;
	services: string[];
	universeTitle: string;
	universeText: string;
	ctaTitle: string;
	ctaText: string;
	seo: {
		title: string;
		description: string;
	};
};

export const services: ServicePageItem[] = [
	{
		slug: 'branding',
		title: 'Branding',
		homeTitle: 'Branding',
		homeDescription: 'El punto de partida para construir una identidad sólida y reconocible.',
		homeAlt: 'Editorial branding artwork on a ceramic vase',
		homeSize: 'imageL',
		intro: 'Una marca no es solo un logotipo. Es la forma en la que una empresa se presenta, comunica y consigue ser recordada.',
		heroImage: '/images/services/branding/branding-service.jpg',
		homeImage: '/images/services/branding/branding-home.jpg',
		sectionTitle: 'Construimos sistemas visuales completos',
		services: [
			'Logotipo principal + sistema de logotipos',
			'Identidad visual completa',
			'Paleta de color + tipografías',
			'Dirección de arte',
			'Manual de marca',
			'Packaging',
			'Etiquetas',
			'Diseño de producto',
			'Iconografía'
		],
		universeTitle: 'Completa el universo visual',
		universeText: 'Una identidad visual cobra aún más fuerza cuando todas las disciplinas trabajan juntas.',
		ctaTitle: '¿Hablamos de tu proyecto?',
		ctaText:
			'Cada proyecto es diferente. Cuéntame qué tienes en mente y prepararemos una propuesta adaptada a tu marca, tus objetivos y la forma en la que quieres comunicar.',
		seo: {
			title: 'Branding | Gea Estudio',
			description:
				'Servicio de branding de Gea Estudio: sistemas visuales completos para marcas con identidad coherente y reconocible.'
		}
	},
	{
		slug: 'photography',
		title: 'Fotografía y Cinematografía',
		homeTitle: 'Fotografía & Cinematografía',
		homeDescription: 'Imágenes que mantienen viva la personalidad de la marca en cada detalle.',
		homeAlt: 'Portrait photographer holding a camera',
		homeSize: 'imageM',
		intro: 'Construimos imágenes que traducen la identidad de marca en escenas, atmósferas y narrativas visuales memorables.',
		heroImage: '/images/services/photography/photography-service.jpg',
		homeImage: '/images/services/photography/photography-home.jpg',
		sectionTitle: 'Construimos narrativas visuales completas',
		services: [
			'Dirección de arte para sesiones',
			'Fotografía de producto',
			'Fotografía editorial',
			'Cinematografía de marca',
			'Reels y piezas para campañas',
			'Postproducción y color',
			'Biblioteca visual de marca'
		],
		universeTitle: 'Completa el universo visual',
		universeText: 'El lenguaje visual de una marca se vuelve más sólido cuando imagen, diseño y dirección creativa trabajan en conjunto.',
		ctaTitle: '¿Hablamos de tu proyecto?',
		ctaText:
			'Cada proyecto es diferente. Cuéntame qué tienes en mente y prepararemos una propuesta adaptada a tu marca, tus objetivos y la forma en la que quieres comunicar.',
		seo: {
			title: 'Fotografía y Cinematografía | Gea Estudio',
			description:
				'Servicio de fotografía y cinematografía para marcas: contenido visual editorial y coherente en todos los puntos de contacto.'
		}
	},
	{
		slug: 'web',
		title: 'Diseño Web',
		homeTitle: 'Web',
		homeDescription: 'La extensión digital de una identidad diseñada para conectar con las personas.',
		homeAlt: 'Website design shown on a tablet screen',
		homeSize: 'imageXS',
		intro: 'Diseñamos experiencias digitales que prolongan la identidad de marca con claridad, funcionalidad y carácter.',
		heroImage: '/images/services/web/web-service.jpg',
		homeImage: '/images/services/web/web-home.jpg',
		sectionTitle: 'Construimos experiencias web completas',
		services: [
			'Arquitectura de información',
			'Wireframes y UX',
			'Diseño visual de interfaz',
			'Dirección creativa digital',
			'Copy y jerarquía de contenido',
			'Desarrollo web a medida',
			'Optimización responsive'
		],
		universeTitle: 'Completa el universo visual',
		universeText: 'Cuando la identidad también vive en digital, cada interacción refuerza la percepción de marca.',
		ctaTitle: '¿Hablamos de tu proyecto?',
		ctaText:
			'Cada proyecto es diferente. Cuéntame qué tienes en mente y prepararemos una propuesta adaptada a tu marca, tus objetivos y la forma en la que quieres comunicar.',
		seo: {
			title: 'Diseño Web | Gea Estudio',
			description:
				'Servicio de diseño web para marcas que buscan una presencia digital coherente con su identidad visual y estrategia.'
		}
	},
	{
		slug: 'editorial',
		title: 'Editorial',
		homeTitle: 'Editorial',
		homeDescription: 'Piezas editoriales que amplían el universo visual de una marca.',
		homeAlt: 'Premium stationery invitation and card set',
		homeSize: 'imageM',
		intro: 'Creamos piezas editoriales que amplían el universo visual de marca con ritmo, detalle y narrativa.',
		heroImage: '/images/services/editorial/editorial-service.jpg',
		homeImage: '/images/services/editorial/editorial-home.jpg',
		sectionTitle: 'Construimos piezas editoriales completas',
		services: [
			'Diseño de revistas y catálogos',
			'Books y lookbooks',
			'Papelería corporativa',
			'Sistemas de maquetación',
			'Jerarquía tipográfica',
			'Dirección de impresión',
			'Acabados y materiales'
		],
		universeTitle: 'Completa el universo visual',
		universeText: 'El editorial traduce la identidad de una marca en objetos y formatos que se leen, se tocan y se recuerdan.',
		ctaTitle: '¿Hablamos de tu proyecto?',
		ctaText:
			'Cada proyecto es diferente. Cuéntame qué tienes en mente y prepararemos una propuesta adaptada a tu marca, tus objetivos y la forma en la que quieres comunicar.',
		seo: {
			title: 'Editorial | Gea Estudio',
			description:
				'Servicio editorial para marcas: diseño de piezas impresas y sistemas visuales que sostienen una identidad coherente.'
		}
	},
	{
		slug: 'interior-design',
		title: 'Decoración e Interiorismo',
		homeTitle: 'Decoración',
		homeDescription: 'Espacios donde la identidad de la marca también se vive.',
		homeAlt: 'Interior design living room with framed wall gallery',
		homeSize: 'imageL',
		intro: 'Diseñamos espacios que expresan la identidad de marca a través de atmósferas, materiales y dirección estética.',
		heroImage: '/images/services/interior-design/interior-design-service.jpg',
		homeImage: '/images/services/interior-design/interior-design-home.jpg',
		sectionTitle: 'Construimos espacios con identidad',
		services: [
			'Concepto visual del espacio',
			'Paleta cromática y materiales',
			'Distribución y estilismo',
			'Selección de mobiliario',
			'Elementos decorativos a medida',
			'Señalética y detalles de marca',
			'Dirección de ejecución'
		],
		universeTitle: 'Completa el universo visual',
		universeText: 'Cuando el espacio habla el mismo lenguaje que la marca, la experiencia se vuelve más inmersiva y memorable.',
		ctaTitle: '¿Hablamos de tu proyecto?',
		ctaText:
			'Cada proyecto es diferente. Cuéntame qué tienes en mente y prepararemos una propuesta adaptada a tu marca, tus objetivos y la forma en la que quieres comunicar.',
		seo: {
			title: 'Decoración e Interiorismo | Gea Estudio',
			description:
				'Servicio de interior design para marcas: espacios coherentes con la identidad visual y la experiencia que quieres proyectar.'
		}
	},
	{
		slug: 'social-media',
		title: 'Redes Sociales',
		homeTitle: 'Redes Sociales',
		homeDescription: 'Contenido visual coherente para que cada publicación forme parte de la misma historia.',
		homeAlt: 'Social media profile displayed on a smartphone',
		homeSize: 'imageS',
		intro: 'Desarrollamos sistemas de contenido que mantienen la coherencia visual de marca en cada publicación.',
		heroImage: '/images/services/social-media/social-media-service.jpg',
		homeImage: '/images/services/social-media/social-media-home.jpg',
		sectionTitle: 'Construimos presencia visual continua',
		services: [
			'Dirección visual para redes',
			'Plantillas y sistema gráfico',
			'Calendario de contenidos',
			'Diseño de posts y carruseles',
			'Piezas para stories y reels',
			'Criterios de fotografía y vídeo',
			'Guía visual para community management'
		],
		universeTitle: 'Completa el universo visual',
		universeText: 'La consistencia en redes convierte cada pieza en una extensión natural del universo de marca.',
		ctaTitle: '¿Hablamos de tu proyecto?',
		ctaText:
			'Cada proyecto es diferente. Cuéntame qué tienes en mente y prepararemos una propuesta adaptada a tu marca, tus objetivos y la forma en la que quieres comunicar.',
		seo: {
			title: 'Social Media | Gea Estudio',
			description:
				'Servicio de social media orientado a mantener una identidad visual consistente y editorial en todos los canales.'
		}
	}
];
