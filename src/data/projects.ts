import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type {
	BrandingLayout,
	EditorialLayoutName,
	ProjectFolderMetadata,
	ServiceName
} from './projects/types';

type ProjectService =
	| {
			type: 'Branding';
			gallery: 'branding';
			layout: BrandingLayout;
			images: string[];
	  }
	| {
			type: Exclude<ServiceName, 'Branding'>;
			gallery: 'stack';
			images: string[];
	  };

export interface Project {
	id: string;
	slug: string;
	assetsFolder: string;
	title: string;
	subtitle: string;
	description: string;
	year: string;
	client: string;
	location: string;
	services: ProjectService[];
	image: string;
	imageSize: 'small' | 'medium' | 'large';
	coverImage: string;
	logo: string;
	heroImage: string;
	gallery: {
		layouts: EditorialLayoutName[];
		images: string[];
	};
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
	return toProjectImageUrl(meta.assetsFolder, asset);
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
	const folderPath = path.join(PUBLIC_PROJECTS_DIR, meta.assetsFolder, folder);

	if (!existsSync(folderPath)) {
		return [];
	}

	return readdirSync(folderPath, { withFileTypes: true })
		.filter((entry) => entry.isFile() && IMAGE_FILE_RE.test(entry.name))
		.map((entry) => entry.name)
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
		.map((filename) => toProjectImageUrl(meta.assetsFolder, folder, filename));
};

const collectNestedProjectImages = (rootPath: string, relativeDir = ''): string[] => {
	const currentPath = relativeDir ? path.join(rootPath, relativeDir) : rootPath;

	if (!existsSync(currentPath)) {
		return [];
	}

	const entries = readdirSync(currentPath, { withFileTypes: true });
	const images: string[] = [];

	for (const entry of entries) {
		const nextRelativePath = relativeDir ? path.join(relativeDir, entry.name) : entry.name;

		if (entry.isDirectory()) {
			images.push(...collectNestedProjectImages(rootPath, nextRelativePath));
			continue;
		}

		if (!entry.isFile() || !IMAGE_FILE_RE.test(entry.name) || !relativeDir) {
			continue;
		}

		images.push(nextRelativePath);
	}

	return images;
};

const getProjectGalleryImages = (meta: ProjectFolderMetadata) => {
	const projectPath = path.join(PUBLIC_PROJECTS_DIR, meta.assetsFolder);

	return collectNestedProjectImages(projectPath)
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
		.map((relativePath) => toProjectImageUrl(meta.assetsFolder, ...relativePath.split(path.sep)));
};

const getSubtitle = (meta: ProjectFolderMetadata) => meta.subtitle ?? meta.description;

export const projects: Project[] = projectMetadata.map((meta) => {
	const services = meta.services.map((service): ProjectService => {
		if (service.gallery === 'branding') {
			return {
				type: service.type,
				gallery: 'branding',
				layout: service.layout,
				images: getServiceImages(meta, service.type)
			};
		}

		return {
			type: service.type,
			gallery: 'stack',
			images: getServiceImages(meta, service.type)
		};
	});
	const galleryImages = getProjectGalleryImages(meta);

	const coverImage = resolveAssetPath(meta, meta.coverImage);
	const cardImage = resolveAssetPath(meta, meta.cardImage ?? meta.coverImage);
	const heroImage = resolveAssetPath(meta, meta.heroImage);

	return {
		id: meta.number,
		slug: meta.slug,
		assetsFolder: meta.assetsFolder,
		title: meta.title,
		subtitle: getSubtitle(meta),
		description: meta.description,
		year: String(meta.year),
		client: meta.client,
		location: meta.location,
		services,
		image: cardImage,
		imageSize: meta.imageSize,
		coverImage,
		logo: resolveAssetPath(meta, meta.logo),
		heroImage,
		gallery: {
			layouts: [...meta.gallery.layouts],
			images: galleryImages
		}
	};
});
