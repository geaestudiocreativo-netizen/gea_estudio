import { projects, type Project } from './projects';
import type { ServiceName } from './projects/types';
import type { Locale } from '../i18n/site';

const serviceTypeTranslations: Record<ServiceName, string> = {
	Branding: 'Branding',
	Web: 'Web',
	Fotografía: 'Photography',
	'Redes Sociales': 'Social Media',
	Papelería: 'Editorial',
	Filmmaking: 'Filmmaking',
	Decoración: 'Interior Design'
};

const projectDescriptionTranslations: Record<string, string> = {
	'talleres-alonso': 'A family workshop in Las Rozas with more than 40 years of history that still lacked an image to match. We refreshed its logo and built a clear website, so customers can find it and trust it before walking in.',
	g: 'Artisan cakes that deserved to look as good as they taste. We created a simple identity, two photo shoots and an editorial website, plus cards and stickers for everyday use.',
	glow: 'A professional hair and beauty shop that did not exist yet. We designed its logo, a geometric signature where the W is two 22s, and the website it opens its doors with.',
	mercurio: 'A molten-silver jewellery brand created to explore a visual language of its own. Art direction, photography and a video campaign, from the painter\'s studio to the museum.',
	'gea-artesania': 'Where Gea began: my own brand of polymer clay earrings. Logo, product photography and Instagram; this is where I learned to build a brand from scratch.'
};

export const getLocalizedProjectDescription = (project: Project, locale: Locale): string =>
	locale === 'en' ? projectDescriptionTranslations[project.slug] ?? project.description : project.description;

export const localizeServiceType = (serviceType: string, locale: Locale): string => {
	if (locale === 'es') return serviceType;
	return serviceTypeTranslations[serviceType as ServiceName] ?? serviceType;
};

export const getLocalizedProjects = (locale: Locale): Project[] => {
	if (locale === 'es') return projects;

	return projects.map((project) => ({
		...project,
		description: getLocalizedProjectDescription(project, locale)
	}));
};
