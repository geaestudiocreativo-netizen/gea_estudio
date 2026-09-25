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
		introSecondLine: 'la persona detrás de gea estudio.',
		context:
			'Mi formación empezó en la ingeniería y mi camino profesional ha estado muy ligado al mundo de la tecnología, un entorno de lógica, estructuras y soluciones. pero siempre he sentido una necesidad muy fuerte de crear, de explorar lo visual y de dar forma a las ideas de una manera más libre.',
		statement: 'GEA NACE DE AHÍ.',
		body:
			'De esa mezcla entre lo técnico y lo creativo, y de las ganas de construir un espacio donde poder explorar todo aquello que me inspira. en gea studio hago muchas de las cosas que más disfruto:',
		disciplines: 'branding, diseño web, fotografía, filmmaking y dirección creativa.',
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
			'My background began in engineering and my professional path has been closely linked to technology, a world of logic, structures, and solutions. But I have always felt a strong need to create, explore the visual, and shape ideas in a freer way.',
		statement: 'GEA WAS BORN FROM THAT.',
		body:
			'From that mix of the technical and the creative, and from the desire to build a space where I can explore everything that inspires me. At Gea Studio I do many of the things I enjoy most:',
		disciplines: 'branding, web design, photography, filmmaking, and creative direction.',
		contactTitle: 'Shall we talk?',
		contactButton: 'Contact',
		contactButtonAria: 'Contact'
	}
} as const;

export const footerContent = {
	es: {
		instagramAria: 'Instagram de Gea Estudio',
		footerNavAria: 'Enlaces de pie de pagina',
		privacy: 'POLITICA DE PRIVACIDAD'
	},
	en: {
		instagramAria: 'Gea Studio Instagram',
		footerNavAria: 'Footer links',
		privacy: 'PRIVACY POLICY'
	}
} as const;
