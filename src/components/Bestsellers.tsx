import React from 'react';
import { Product, Currency, MetalFinish } from '../types';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface BestsellersProps {
  products: Product[];
  currency: Currency;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onQuickAddToCart: (product: Product, size: string, finish: MetalFinish) => void;
  onSelectProduct: (product: Product) => void;
  onViewAll: () => void;
}

export const Bestsellers: React.FC<BestsellersProps> = ({
  products,
  currency,
  wishlistIds,
  onToggleWishlist,
  onQuickAddToCart,
  onSelectProduct,
  onViewAll,
}) => {
  const bestsellerProducts = products.filter((p) => p.isBestseller);

  return (
    <section className="py-16 md:py-24 bg-[#fbf9f4] border-b border-[#eae8e3]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="font-label-caps text-xs text-[#775928] tracking-[0.25em] uppercase font-semibold">
              MOST LOVED
            </span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] tracking-tight">
              OUR BESTSELLERS
            </h2>
            <p className="font-body-md text-[#444748] text-sm md:text-base leading-relaxed">
              Pieces that rarely stay in stock. Handcrafted in limited numbered drops to retain heirloom integrity.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="self-start md:self-auto inline-flex items-center gap-2 font-label-button text-xs uppercase tracking-[0.16em] text-[#121212] hover:text-[#775928] border-b border-[#121212] hover:border-[#775928] pb-1 transition-colors"
          >
            <span>SHOP ALL BESTSELLERS</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currency={currency}
              isWishlisted={wishlistIds.has(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickAddToCart={onQuickAddToCart}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
