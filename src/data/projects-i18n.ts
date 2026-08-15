import { projects, type Project } from './projects';
import type { ServiceName } from './projects/types';
import type { Locale } from '../i18n/site';

const serviceTypeTranslations: Record<ServiceName, string> = {
	Branding: 'Branding',
	Web: 'Web',
	Fotografía: 'Photography',
	'Redes Sociales': 'Social Media',
	Papelería: 'Editorial',
	Cinematografía: 'Cinematography',
	Decoración: 'Interior Design'
};

const projectDescriptionTranslations: Record<string, string> = {
	'talleres-alonso': 'A strong identity for a workshop with more than 40 years of history.',
	g: 'An artisanal pastry brand with editorial sensitivity and contemporary character.',
	'gea-artesania': 'Handcrafted jewelry with design-led pieces made in polymer clay.',
	foc: 'Signature paellas reshaping how traditional Valencian cuisine is perceived.',
	margen: 'Clay through the lens of an authentic brand.'
};

export const localizeServiceType = (serviceType: string, locale: Locale): string => {
	if (locale === 'es') return serviceType;
	return serviceTypeTranslations[serviceType as ServiceName] ?? serviceType;
};

export const getLocalizedProjects = (locale: Locale): Project[] => {
	if (locale === 'es') return projects;

	return projects.map((project) => ({
		...project,
		description: projectDescriptionTranslations[project.slug] ?? project.description,
		services: project.services.map((service) => ({
			...service,
			type: localizeServiceType(service.type, locale)
		})) as Project['services']
	}));
};
