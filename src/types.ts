export type Category = 
  | 'all'
  | 'rings'
  | 'earrings'
  | 'necklaces'
  | 'bracelets'
  | 'bangles'
  | 'chains'
  | 'pendants'
  | 'sets';

export type Material = 'all' | '18k-vermeil' | 'sterling-silver' | 'moissanite' | 'steel';

export type MetalFinish = '18k-gold' | 'silver-925' | 'rose-gold';

export interface Product {
  id: string;
  name: string;
  category: Category;
  categoryLabel: string;
  material: Material;
  materialLabel: string;
  subtitle: string;
  priceINR: number;
  originalPriceINR: number;
  rating: number;
  reviewsCount: number;
  badge?: 'NEW' | 'BESTSELLER' | 'WATERPROOF' | 'LIMITED' | 'CULT PICK' | 'ALL-TIME BEST';
  image: string;
  hoverImage: string;
  description: string;
  features: string[];
  finishes: {
    id: MetalFinish;
    name: string;
    colorHex: string;
  }[];
  sizes: string[];
  isNewArrival?: boolean;
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedFinish: MetalFinish;
  quantity: number;
}

export type Currency = 'INR' | 'USD';

export type ActiveScreen = 'home' | 'shop' | 'collections' | 'bestsellers' | 'about-the-atelier';
