import type { ImageMetadata } from 'astro';

type ImageModule = { default: ImageMetadata };

const imageModules = import.meta.glob<ImageModule>('/public/images/**/*.{jpg,jpeg,JPG,JPEG,png,webp,avif}', {
	eager: true
});

const imageMap = new Map<string, ImageMetadata>();

for (const [modulePath, moduleValue] of Object.entries(imageModules)) {
	const publicPath = modulePath.replace(/^\/public/, '');
	imageMap.set(publicPath, moduleValue.default);
}

export const getOptimizedImageMetadata = (src: string): ImageMetadata | undefined => imageMap.get(src);
