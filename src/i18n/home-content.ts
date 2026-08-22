import type { Locale } from './site';

export const heroContent = {
	es: {
		eyebrow: 'ESTUDIO CREATIVO',
		headingMain: 'Creamos universos visuales para marcas',
		headingSecondary:
			'Diseñamos identidades que cobran vida a través del branding, la fotografía, el diseño web, el editorial, la decoración y las redes sociales.',
		primaryImageAlt: 'Person by a vintage car at sunset',
		secondaryImageAlt: 'Close-up architectural texture'
	},
	en: {
		eyebrow: 'CREATIVE STUDIO',
		headingMain: 'We create visual universes for brands',
		headingSecondary:
			'We design identities that come alive through branding, photography, web design, editorial design, interior styling, and social media.',
		primaryImageAlt: 'Person by a vintage car at sunset',
		secondaryImageAlt: 'Close-up architectural texture'
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
		cta: 'Ver proyectos',
		ctaAria: 'Ver proyectos'
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
		text:
			'Soy Ángela Contreras, ingeniera de formación y directora creativa de Gea. Tras varios años trabajando en tecnología, encontré en el diseño mi verdadera forma de crear. Hoy ayudo a marcas y emprendedores a construir una identidad coherente a través del branding, el diseño web, la fotografía y la dirección creativa, desarrollando proyectos donde la estrategia, la funcionalidad y la estética conviven de forma natural.',
		contactTitle: '¿Hablamos?',
		contactButton: 'Contactar',
		contactButtonAria: 'Contactar'
	},
	en: {
		title: 'ABOUT GEA',
		titleAria: 'About Gea',
		text:
			'I am Angela Contreras, an engineer by training and the creative director of Gea. After several years in technology, I found in design my truest way of creating. Today I help brands and founders build coherent identities through branding, web design, photography, and creative direction, developing projects where strategy, functionality, and aesthetics coexist naturally.',
		contactTitle: 'Shall we talk?',
		contactButton: 'Contact',
		contactButtonAria: 'Contact'
	}
} as const;

export const footerContent = {
	es: {
		instagramAria: 'Instagram de Gea Estudio',
		footerNavAria: 'Enlaces de pie de pagina',
		contact: 'Contacto',
		privacy: 'Privacidad',
		cookies: 'Cookies'
	},
	en: {
		instagramAria: 'Gea Studio Instagram',
		footerNavAria: 'Footer links',
		contact: 'Contact',
		privacy: 'Privacy',
		cookies: 'Cookies'
	}
} as const;
