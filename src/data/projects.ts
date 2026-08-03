import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ProjectFolderMetadata, ServiceLayout } from './projects/types';

export interface ServiceGallery {
	name: string;
	images: string[];
	layout: ServiceLayout;
}

export interface Project {
	id: string;
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	year: string;
	client: string;
	location: string;
	services: string[];
	image: string;
	imageSize: 'small' | 'medium' | 'large';
	coverImage: string;
	logo: string;
	heroImage: string;
	serviceGalleries: ServiceGallery[];
	layouts: Partial<Record<string, ServiceLayout>>;
}

type ProjectModule = { default: ProjectFolderMetadata };

const PUBLIC_PROJECTS_DIR = fileURLToPath(new URL('../../public/images/projects', import.meta.url));
const IMAGE_FILE_RE = /\.(avif|gif|jpe?g|png|svg|webp)$/i;

const modules = import.meta.glob<ProjectModule>('./projects/*/project.ts', { eager: true });

const projectMetadata = Object.values(modules)
	.map((mod) => mod.default)
	.sort((a, b) => a.number.localeCompare(b.number, undefined, { numeric: true }));

const encodeSegments = (...segments: string[]) => segments.map((segment) => encodeURIComponent(segment)).join('/');

const toProjectImageUrl = (...segments: string[]) => `/images/projects/${encodeSegments(...segments)}`;

const resolveAssetPath = (meta: ProjectFolderMetadata, asset: string) => {
	if (asset.startsWith('/')) return asset;
	return toProjectImageUrl(meta.assetFolder, asset);
};

const toServiceFolderName = (serviceName: string) =>
	serviceName
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-');

const getServiceImages = (meta: ProjectFolderMetadata, serviceName: string) => {
	const folder = toServiceFolderName(serviceName);
	const folderPath = path.join(PUBLIC_PROJECTS_DIR, meta.assetFolder, folder);

	if (!existsSync(folderPath)) {
		return [];
	}

	return readdirSync(folderPath, { withFileTypes: true })
		.filter((entry) => entry.isFile() && IMAGE_FILE_RE.test(entry.name))
		.map((entry) => entry.name)
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
		.map((filename) => toProjectImageUrl(meta.assetFolder, folder, filename));
};

const getSubtitle = (meta: ProjectFolderMetadata) => meta.subtitle ?? meta.description;

export const projects: Project[] = projectMetadata.map((meta) => {
	const serviceGalleries = meta.services.map((serviceName) => ({
		name: serviceName,
		images: getServiceImages(meta, serviceName),
		layout: meta.layouts[serviceName] ?? 'stack'
	}));

	const coverImage = resolveAssetPath(meta, meta.coverImage);
	const cardImage = resolveAssetPath(meta, meta.cardImage ?? meta.coverImage);
	const heroImage = resolveAssetPath(meta, meta.heroImage);

	return {
		id: meta.number,
		slug: meta.slug,
		title: meta.title,
		subtitle: getSubtitle(meta),
		description: meta.description,
		year: String(meta.year),
		client: meta.client,
		location: meta.location,
		services: [...meta.services],
		image: cardImage,
		imageSize: meta.imageSize,
		coverImage,
		logo: resolveAssetPath(meta, meta.logo),
		heroImage,
		serviceGalleries,
		layouts: meta.layouts
	};
});
