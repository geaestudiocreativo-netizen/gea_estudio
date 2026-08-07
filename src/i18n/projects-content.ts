import type { Locale } from './site';

export const projectsPageContent = {
	es: {
		title: 'PROYECTOS',
		intro: 'Así es como construimos universos visuales para marcas.',
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
		previous: '← Proyecto anterior',
		next: 'Proyecto siguiente →',
		tabsAria: 'Navegacion de secciones del proyecto',
		projectCardAriaPrefix: 'Ver proyecto'
	},
	en: {
		sectionsAria: 'Project sections',
		navAria: 'Project navigation',
		previous: '← Previous project',
		next: 'Next project →',
		tabsAria: 'Project section navigation',
		projectCardAriaPrefix: 'View project'
	}
} as const;
