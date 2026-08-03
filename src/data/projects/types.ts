export type ServiceName =
	| 'Branding'
	| 'Web'
	| 'Fotografía'
	| 'Redes Sociales'
	| 'Papelería'
	| 'Cinematografía'
	| 'Decoración';

export type ServiceLayout = 'editorial-a' | 'editorial-b' | 'editorial-c' | 'stack';

export interface ProjectFolderMetadata {
	slug: string;
	number: string;
	title: string;
	client: string;
	location: string;
	year: number;
	description: string;
	subtitle?: string;
	services: ServiceName[];
	assetFolder: string;
	coverImage: string;
	logo: string;
	heroImage: string;
	layouts: Partial<Record<ServiceName, ServiceLayout>>;
	imageSize: 'small' | 'medium' | 'large';
	cardImage?: string;
}
