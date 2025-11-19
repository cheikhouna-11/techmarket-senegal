export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Congélateur Coffre 200L',
    category: 'Congélateurs',
    description: 'Idéal pour conserver vos aliments en grande quantité.',
    price: '150 000 FCFA',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-freezers-i8f194a-1763560775204.webp',
  },
  {
    id: 2,
    name: 'Climatiseur Split 12000 BTU',
    category: 'Climatiseurs',
    description: 'Rafraîchissez votre intérieur efficacement et silencieusement.',
    price: '250 000 FCFA',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-ac-kntyji2-1763560782997.webp',
  },
  {
    id: 3,
    name: 'Réfrigérateur Combiné 300L',
    category: 'Réfrigérateurs',
    description: 'Design moderne et grande capacité de stockage.',
    price: '300 000 FCFA',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-fridges-tbdm5yh-1763560793403.webp',
  },
  {
    id: 4,
    name: 'Smart TV LED 4K 55 pouces',
    category: 'Téléviseurs',
    description: 'Une expérience visuelle immersive avec des couleurs éclatantes.',
    price: '450 000 FCFA',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-tvs-cul0j6x-1763560802594.webp',
  },
  {
    id: 5,
    name: 'Ordinateur Portable Core i5',
    category: 'Ordinateurs portables',
    description: 'Performances et portabilité pour le travail et les loisirs.',
    price: '550 000 FCFA',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-laptops-8shjq4h-1763560810343.webp',
  },
  {
    id: 6,
    name: 'PC de Bureau Gamer Ryzen 5',
    category: 'Ordinateurs de bureau',
    description: 'Puissance de jeu ultime avec des composants de dernière génération.',
    price: '850 000 FCFA',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-desktops-xicdarv-1763560818342.webp',
  },
  {
    id: 7,
    name: 'Pack Accessoires Gaming',
    category: 'Accessoires informatiques',
    description: 'Clavier, souris et casque pour une expérience de jeu complète.',
    price: '75 000 FCFA',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-accessories-jevkio0-1763560825505.webp',
  },
];

export const categories = [
  { name: 'Congélateurs', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-freezers-i8f194a-1763560775204.webp' },
  { name: 'Climatiseurs', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-ac-kntyji2-1763560782997.webp' },
  { name: 'Réfrigérateurs', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-fridges-tbdm5yh-1763560793403.webp' },
  { name: 'Téléviseurs', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-tvs-cul0j6x-1763560802594.webp' },
  { name: 'Ordinateurs portables', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-laptops-8shjq4h-1763560810343.webp' },
  { name: 'Ordinateurs de bureau', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-desktops-xicdarv-1763560818342.webp' },
  { name: 'Accessoires informatiques', imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/category-accessories-jevkio0-1763560825505.webp' },
];