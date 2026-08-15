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
			images?: string[];
	  }
	| {
			type: Exclude<ServiceName, 'Branding'>;
			gallery: 'stack' | 'fotografia';
			images?: string[];
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

const getSubtitle = (meta: ProjectFolderMetadata) => meta.subtitle ?? meta.description;

export const projects: Project[] = projectMetadata.map((meta) => {
	const services = meta.services.map((service): ProjectService => {
		if (service.gallery === 'branding') {
			return {
				type: service.type,
				gallery: 'branding',
				layout: service.layout,
				images: service.images
			};
		}

		return {
			type: service.type,
			gallery: service.gallery,
			images: service.images
		};
	});

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
			images: []
		}
	};
});
