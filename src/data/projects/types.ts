export type ServiceName =
	| 'Branding'
	| 'Web'
	| 'Fotografía'
	| 'Redes Sociales'
	| 'Papelería'
	| 'Filmmaking'
	| 'Decoración';

export type BrandingLayout = 'branding-a' | 'branding-b' | 'branding-c' | 'branding-d';

export type ServiceGalleryType = 'branding' | 'stack';

export type EditorialLayoutName = 'editorial' | 'hero' | 'gallery';

export interface ProjectGalleryMetadata {
	layouts: EditorialLayoutName[];
}

type NonBrandingServiceName = Exclude<ServiceName, 'Branding'>;

export type ProjectServiceMetadata =
	| {
			type: 'Branding';
			gallery: 'branding';
			layout: BrandingLayout;
			images?: string[];
			videos?: string[];
	  }
	| {
			type: 'Web';
			gallery: 'web';
			images?: string[];
			background?: string;
			video?: string;
			videos?: string[];
			url?: string;
	  }
	| {
			type: NonBrandingServiceName;
			gallery: 'stack' | 'fotografia' | 'redes-sociales';
			images?: string[];
			videos?: string[];
	  };

export interface ProjectFolderMetadata {
	slug: string;
	number: string;
	title: string;
	client: string;
	location: string;
	sector?: string;
	sectorEn?: string;
	year: number;
	description: string;
	subtitle?: string;
	services: ProjectServiceMetadata[];
	gallery: ProjectGalleryMetadata;
	assetsFolder: string;
	coverImage: string;
	logo: string;
	heroImage: string;
	imageSize: 'small' | 'medium' | 'large';
	cardImage?: string;
	/** object-position de la imagen en la tarjeta del listado (p. ej. 'center 60%') */
	cardPosition?: string;
	concept?: boolean;
}
