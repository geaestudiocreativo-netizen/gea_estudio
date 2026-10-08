import type { Locale } from './site';

export const projectsPageContent = {
	es: {
		title: 'PROYECTOS',
		intro: 'Así como construimos universos visuales para marcas.',
		filterAria: 'Filtrar proyectos por servicio',
		allFilter: 'Todos',
		listAria: 'Listado de proyectos'
	},
	en: {
		title: 'PROJECTS',
		intro: 'This is how we build visual universes for brands.',
		filterAria: 'Filter projects by service',
		allFilter: 'All',
		listAria: 'Project list'
	}
} as const;

export const projectDetailContent = {
	es: {
		sectionsAria: 'Secciones del proyecto',
		navAria: 'Navegacion de proyectos',
		previous: 'Anterior',
		next: 'Siguiente',
		tabsAria: 'Navegacion de secciones del proyecto',
		projectCardAriaPrefix: 'Ver proyecto',
		visitWeb: 'Visitar web',
		brandStatement: 'Hechas a mano, pensadas para quedarse.',
	},
	en: {
		sectionsAria: 'Project sections',
		navAria: 'Project navigation',
		previous: 'Previous',
		next: 'Next',
		tabsAria: 'Project section navigation',
		projectCardAriaPrefix: 'View project',
		visitWeb: 'Visit website',
		brandStatement: 'Handmade, designed to last.',
	}
} as const;
