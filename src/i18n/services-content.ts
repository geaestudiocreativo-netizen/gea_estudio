import type { Locale } from './site';

export const servicePageContent = {
	es: {
		relatedAria: 'Otros servicios',
		viewProjects: 'Explorar proyectos',
		viewProjectsAria: 'Explorar proyectos',
		consultation: 'Solicitar una consulta',
		consultationAria: 'Solicitar una consulta'
	},
	en: {
		relatedAria: 'Other services',
		viewProjects: 'Explore projects',
		viewProjectsAria: 'Explore projects',
		consultation: 'Request a consultation',
		consultationAria: 'Request a consultation'
	}
} as const;

export const getServicesSeoDefaults = (locale: Locale) => {
	if (locale === 'en') {
		return {
			title: 'Gea Studio | Branding, Web Design, Photography, Editorial, Interior Design and Social Media',
			description:
				'Gea Studio is a creative studio focused on branding, web design, photography, editorial systems, interior design, and social media direction for brands.'
		};
	}

	return {
		title: 'Gea | Estudio creativo de branding, diseño web, fotografía, papelería, decoración, cinematografía y redes sociales.',
		description:
			'Gea es un estudio creativo especializado en branding, diseño web, fotografía, decoración, cinematografía, papelería, redes sociales y dirección creativa para marcas y empresas.'
	};
};
