export type Locale = 'es' | 'en';

export const defaultLocale: Locale = 'es';

export const getLocaleFromPath = (pathname: string): Locale =>
	pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';

export const getPathWithoutLocale = (pathname: string): string => {
	if (pathname === '/en') return '/';
	if (pathname.startsWith('/en/')) return pathname.slice(3);
	return pathname;
};

const toEnglishPath = (spanishPath: string): string => {
	if (spanishPath === '/') return '/en';
	if (spanishPath === '/proyectos') return '/en/projects';
	if (spanishPath.startsWith('/proyectos/')) return spanishPath.replace('/proyectos/', '/en/projects/');
	if (spanishPath.startsWith('/services/')) return spanishPath.replace('/services/', '/en/services/');
	return `/en${spanishPath}`;
};

const toSpanishPath = (englishPath: string): string => {
	if (englishPath === '/en' || englishPath === '/') return '/';
	if (englishPath === '/en/projects') return '/proyectos';
	if (englishPath.startsWith('/en/projects/')) return englishPath.replace('/en/projects/', '/proyectos/');
	if (englishPath.startsWith('/en/services/')) return englishPath.replace('/en/services/', '/services/');
	if (englishPath.startsWith('/en/')) return englishPath.slice(3);
	return englishPath;
};

export const getLocalizedPath = (locale: Locale, spanishPath: string): string => {
	return locale === 'en' ? toEnglishPath(spanishPath) : spanishPath;
};

export const getLanguageSwitchPath = (pathname: string, targetLocale: Locale): string => {
	const currentLocale = getLocaleFromPath(pathname);
	if (currentLocale === targetLocale) return pathname;
	return targetLocale === 'en' ? toEnglishPath(pathname) : toSpanishPath(pathname);
};

export const navLabels = {
	es: {
		services: 'Servicios',
		projects: 'Proyectos',
		studio: 'Studio',
		contact: 'Contacto'
	},
	en: {
		services: 'Services',
		projects: 'Projects',
		studio: 'Studio',
		contact: 'Contact'
	}
} as const;

export const menuFooterCopy = {
	es: {
		statement: 'Creamos universos visuales para marcas.',
		es: 'ES',
		en: 'EN'
	},
	en: {
		statement: 'Creating visual universes for brands.',
		es: 'ES',
		en: 'EN'
	}
} as const;
