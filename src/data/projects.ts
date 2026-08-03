export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  services: string[];
  image: string;
  imageSize: 'small' | 'medium' | 'large';
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'talleres-alonso',
    title: 'Talleres Alonso',
    description: 'Una identidad sólida para un taller con más de 40 años de historia.',
    services: ['Branding', 'Web'],
    image: 'project-01.jpg',
    imageSize: 'large'
  },
  {
    id: '02',
    slug: 'g',
    title: '.G',
    description: 'Una marca de tartas artesanales creada para celebrar momentos especiales.',
    services: ['Branding', 'Web', 'Fotografía'],
    image: 'project-02.jpg',
    imageSize: 'small'
  },
  {
    id: '03',
    slug: 'gea-artesania',
    title: 'Gea Artesanía',
    description: 'Bisutería artesanal con piezas de diseño hechas en arcilla polimérica.',
    services: ['Branding', 'Web', 'Fotografía'],
    image: 'project-03.jpg',
    imageSize: 'large'
  },
  {
    id: '04',
    slug: 'foc',
    title: 'Foc',
    description: 'Paellas de autor que revolucionan la forma de ver la comida tradicional valenciana.',
    services: ['Redes Sociales', 'Fotografía', 'Cinematografía', 'Papelería'],
    image: 'project-04.jpg',
    imageSize: 'medium'
  },
  {
    id: '05',
    slug: 'margen',
    title: 'Margen',
    description: 'Arcilla a través de una marca auténtica.',
    services: ['Redes Sociales',  'Cinematografía'],
    image: 'project-05.jpg',
    imageSize: 'small'
  },
  {
    id: '06',
    slug: 'trop',
    title: 'Trop',
    description: 'Este proyecto gastronómico revoluciona la forma de ver la comida.',
    services: ['Redes Sociales', 'Fotografía', 'Cinematografía'],
    image: 'project-06.jpg',
    imageSize: 'medium'
  }
];