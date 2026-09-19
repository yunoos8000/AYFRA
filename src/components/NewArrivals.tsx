import React, { useState } from 'react';
import { Product, Currency, MetalFinish } from '../types';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface NewArrivalsProps {
  products: Product[];
  currency: Currency;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onQuickAddToCart: (product: Product, size: string, finish: MetalFinish) => void;
  onSelectProduct: (product: Product) => void;
  onViewAll: () => void;
}

type TabType = 'all' | '18k-vermeil' | 'sterling-silver' | 'moissanite';

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  products,
  currency,
  wishlistIds,
  onToggleWishlist,
  onQuickAddToCart,
  onSelectProduct,
  onViewAll,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'all', label: 'ALL NEW' },
    { id: '18k-vermeil', label: '18K VERMEIL' },
    { id: 'sterling-silver', label: 'STERLING SILVER' },
    { id: 'moissanite', label: 'MOISSANITE GEMS' },
  ];

  const filteredProducts = products.filter((p) => {
    if (!p.isNewArrival) return false;
    if (activeTab === 'all') return true;
    if (activeTab === '18k-vermeil') return p.material === '18k-vermeil';
    if (activeTab === 'sterling-silver') return p.material === 'sterling-silver' || p.finishes.some(f => f.id === 'silver-925');
    if (activeTab === 'moissanite') return p.material === 'moissanite';
    return true;
  });

  return (
    <section className="py-16 md:py-24 bg-[#fbf9f4] border-b border-[#eae8e3]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="font-label-caps text-xs text-[#775928] tracking-[0.25em] uppercase font-semibold">
              AUTUMN / WINTER RELEASES
            </span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] tracking-tight">
              NEW ARRIVALS
            </h2>
            <p className="font-body-md text-[#444748] text-sm md:text-base leading-relaxed">
              Freshly minted in our atelier. Architectural silhouettes in luminous 18K gold vermeil and solid 925 sterling silver.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#e4e2dd] pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-label-caps text-[11px] uppercase tracking-wider px-3 py-1.5 transition-all relative ${
                  activeTab === tab.id
                    ? 'text-[#121212] font-bold after:content-[\'\'] after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-[2px] after:bg-[#775928]'
                    : 'text-[#747878] hover:text-[#1b1c19]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 font-label-button text-xs uppercase tracking-[0.16em] text-[#121212] hover:text-[#775928] border-b border-[#121212] hover:border-[#775928] pb-1 transition-colors"
          >
            <span>VIEW ALL NEW ARRIVALS</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
