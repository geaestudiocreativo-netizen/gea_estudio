export type ServiceName =
	| 'Branding'
	| 'Web'
	| 'Fotografía'
	| 'Redes Sociales'
	| 'Papelería'
	| 'Cinematografía'
	| 'Decoración';

export type BrandingLayout = 'branding-a' | 'branding-b' | 'branding-c';

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
	  }
	| {
			type: NonBrandingServiceName;
			gallery: 'stack';
	  };

export interface ProjectFolderMetadata {
	slug: string;
	number: string;
	title: string;
	client: string;
	location: string;
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
}
