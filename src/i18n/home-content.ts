import type { Locale } from './site';

export const heroContent = {
	es: {
		eyebrow: 'ESTUDIO CREATIVO',
		headingMain: 'Creamos universos visuales para marcas',
		headingSecondary:
			'Todo lo visual de tu marca en un solo estudio: diseño web, fotografía, vídeo, redes sociales y branding.',
		primaryImageAlt: 'Ángela, fundadora de Gea, revisando un libro de diseño en el estudio',
		secondaryImageAlt: 'Mujer con una orquídea moteada junto al rostro'
	},
	en: {
		eyebrow: 'CREATIVE STUDIO',
		headingMain: 'We create visual universes for brands',
		headingSecondary:
			'Everything visual for your brand in one studio: web design, photography, video, social media and branding.',
		primaryImageAlt: 'Ángela, founder of Gea, looking through a design book in the studio',
		secondaryImageAlt: 'Woman holding a spotted orchid to her face'
	}
} as const;

export const servicesSectionContent = {
	es: {
		heading: 'QUÉ',
		headingBreak: 'HACEMOS',
		headingAria: 'Ver servicios',
		serviceAriaPrefix: 'Ver servicio de'
	},

	en: {
		heading: 'WHAT',
		headingBreak: 'WE DO',
		headingAria: 'View services',
		serviceAriaPrefix: 'View'
	}
} as const;

export const projectsSectionContent = {
	es: {
		title: 'PROYECTOS',
		carouselLabel: 'Project portfolio carousel',
		cta: 'Ver todos los proyectos',
		ctaAria: 'Ver todos los proyectos'
	},
	en: {
		title: 'PROJECTS',
		carouselLabel: 'Project portfolio carousel',
		cta: 'View projects',
		ctaAria: 'View projects'
	}
} as const;

export const aboutSectionContent = {
	es: {
		title: 'SOBRE GEA',
		titleAria: 'Sobre Gea',
		intro: 'Soy Ángela,',
		introSecondLine: 'la persona detrás de Gea Estudio.',
		context:
			'Vengo de la ingeniería y la tecnología, pero siempre he necesitado crear y dar forma a las ideas de una manera más libre.',
		statement: 'Gea nace de esa mezcla entre lo técnico y lo creativo.',
		body:
			'Por eso me ocupo de todo lo visual de tu marca:',
		disciplines: 'branding, web, fotografía, filmmaking y dirección creativa.',
		contactTitle: '¿Hablamos sobre tu proyecto?',
		contactButton: '¿HABLAMOS DE TU PROYECTO?',
		contactButtonAria: '¿HABLAMOS DE TU PROYECTO?'
	},
	en: {
		title: 'ABOUT GEA',
		titleAria: 'About Gea',
		intro: 'I am Ángela,',
		introSecondLine: 'the person behind Gea Studio.',
		context:
			'I come from engineering and technology, but I have always needed to create and shape ideas in a freer way.',
		statement: 'Gea was born from that mix of the technical and the creative.',
		body:
			'That is why I take care of everything visual for your brand:',
		disciplines: 'branding, web, photography, filmmaking, and creative direction.',
		contactTitle: 'Shall we talk?',
		contactButton: 'Contact',
		contactButtonAria: 'Contact'
	}
} as const;

export const footerContent = {
	es: {
		instagramAria: 'Instagram de Gea Studio',
		footerNavAria: 'Enlaces de pie de pagina',
		privacy: 'POLITICA DE PRIVACIDAD'
	},
	en: {
		instagramAria: 'Gea Studio Instagram',
		footerNavAria: 'Footer links',
		privacy: 'PRIVACY POLICY'
	}
} as const;

export const visualChapterContent = {
	es: {
		ariaLabel: 'Capítulo visual',
		heading: 'Qué hacemos',
		lines: ['Seis disciplinas.', 'Un mismo universo visual.'],
		support: 'Todo lo visual de tu marca, en un solo estudio.'
	},
	en: {
		ariaLabel: 'Visual chapter',
		heading: 'What we do',
		lines: ['Six disciplines.', 'One visual universe.'],
		support: 'Everything visual for your brand, in one studio.'
	}
} as const;

export const serviceMarqueeContent = {
	es: {
		eyebrow: 'UNA MARCA NO SOLO',
		headline: ['SE DISEÑA.', 'SE CONSTRUYE.'],
		support: 'A través de la dirección creativa y el branding damos forma al universo visual de tu marca.',
		films: [
			{ title: 'Campaña de marca', meta: '' },
			{ title: 'Filmmaking', meta: '' },
			{ title: 'Fotografía', meta: '' },
			{ title: 'Redes sociales', meta: '' }
		]
	},
	en: {
		eyebrow: 'A BRAND IS NOT ONLY',
		headline: ['DESIGNED.', 'IT IS BUILT.'],
		support: 'Through creative direction and branding, we shape your brand visual universe.',
		films: [
			{ title: 'Brand campaign', meta: '' },
			{ title: 'Filmmaking', meta: '' },
			{ title: 'Photography', meta: '' },
			{ title: 'Social media', meta: '' }
		]
	}
} as const;

export const videoContent = {
	es: {
		sectionLabel: 'Vídeos',
		labels: ['Filmmaking', 'Sesión de fotos', 'Contenido para IG']
	},
	en: {
		sectionLabel: 'Videos',
		labels: ['Filmmaking', 'Photoshoot', 'Content for Instagram']
	}
} as const;
