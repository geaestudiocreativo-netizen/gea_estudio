// Pies de foto de las galerías de branding (estilo revista).
// La clave es el final de la ruta de la imagen: carpeta del proyecto / sección / archivo.
import type { Locale } from '../i18n/site';

type Caption = { es: string; en: string };

const captions: Record<string, Caption> = {
	// Talleres Alonso
	'01-talleres-alonso/branding/01.jpg': { es: 'Envase', en: 'Packaging' },
	'01-talleres-alonso/branding/02.jpg': { es: 'Logotipo', en: 'Logo' },
	'01-talleres-alonso/branding/03.jpg': { es: 'Tarjetas de visita', en: 'Business cards' },
	'01-talleres-alonso/branding/04.jpg': { es: 'Paleta de color', en: 'Colour palette' },
	'01-talleres-alonso/branding/06.svg': { es: 'Rotulación de fachada', en: 'Signage' },
	'01-talleres-alonso/branding/05.jpg': { es: 'El logotipo en el taller', en: 'The logo in the workshop' },
	// .G
	'02-punto-g/branding/Color_ivory.jpg': { es: 'Paleta · Ivory', en: 'Palette · Ivory' },
	'02-punto-g/branding/Color_brown.jpg': { es: 'Paleta · Dark brown', en: 'Palette · Dark brown' },
	'02-punto-g/branding/Mockup_poste.png': { es: 'Cartelería', en: 'Poster' },
	'02-punto-g/branding/Mockup_packaging_cajas.png': { es: 'Packaging', en: 'Packaging' },
	'02-punto-g/branding/Mockup_bolsa.png': { es: 'Bolsa', en: 'Shopping bag' },
	// Gea Artesanía
	'03-gea-artesania/branding/branding-02.jpg': { es: 'Tarjeta de producto', en: 'Product card' },
	'03-gea-artesania/branding/branding-03.png': { es: 'Editorial', en: 'Editorial' },
	'03-gea-artesania/branding/branding-05.jpg': { es: 'Tarjetas', en: 'Cards' },
	// Glow
	'04-glow/branding/02-glow-logo-color.jpg': { es: 'Logotipo', en: 'Logo' },
	'04-glow/branding/03-glow-champu.jpg': { es: 'Universo de marca', en: 'Brand imagery' },
	'04-glow/branding/glow-pelo.jpg': { es: 'Universo de marca', en: 'Brand imagery' },
	'04-glow/branding/04-glow-w22.jpg': { es: 'Construcción del logotipo', en: 'Logo construction' },
	'04-glow/branding/05-glow-silla.jpg': { es: 'Dirección de arte', en: 'Art direction' },
	'04-glow/branding/06-glow-frasco.jpg': { es: 'Dirección de arte', en: 'Art direction' }
};

export const getGalleryCaption = (src: string, locale: Locale = 'es') => {
	const path = decodeURIComponent(src);
	const key = Object.keys(captions).find((candidate) => path.endsWith(candidate));
	return key ? captions[key][locale] : undefined;
};

// Frase destacada que corta la galería de branding (una por proyecto).
// La clave es la carpeta del proyecto.
const statements: Record<string, Caption> = {
	'01-talleres-alonso': { es: 'Cuarenta años de oficio, ahora con una imagen a su altura.', en: 'Forty years of craft, now with an image to match.' },
	'02-punto-g': { es: 'Hechas a mano, pensadas para quedarse.', en: 'Handmade, designed to last.' },
	'04-glow': { es: 'Dos 22 que forman una firma.', en: 'Two 22s that make a signature.' }
};

export const getGalleryStatement = (src: string | undefined, locale: Locale = 'es') => {
	if (!src) return undefined;
	const path = decodeURIComponent(src);
	const key = Object.keys(statements).find((folder) => path.includes(`/${folder}/`));
	return key ? statements[key][locale] : undefined;
};
