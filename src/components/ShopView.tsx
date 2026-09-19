import React, { useState, useMemo } from 'react';
import { Product, Currency, Category, Material, MetalFinish } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface ShopViewProps {
  products: Product[];
  currency: Currency;
  initialCategory?: Category;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onQuickAddToCart: (product: Product, size: string, finish: MetalFinish) => void;
  onSelectProduct: (product: Product) => void;
  onBackToHome: () => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  products,
  currency,
  initialCategory = 'all',
  wishlistIds,
  onToggleWishlist,
  onQuickAddToCart,
  onSelectProduct,
  onBackToHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [selectedMaterial, setSelectedMaterial] = useState<Material>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Jewelry' },
    { id: 'rings', label: 'Rings' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'bracelets', label: 'Bracelets' },
    { id: 'bangles', label: 'Bangles' },
    { id: 'chains', label: 'Chains' },
    { id: 'pendants', label: 'Pendants' },
    { id: 'sets', label: 'Sets' },
  ];

  const materials: { id: Material; label: string }[] = [
    { id: 'all', label: 'All Materials' },
    { id: '18k-vermeil', label: '18K Gold Vermeil' },
    { id: 'sterling-silver', label: '925 Sterling Silver' },
    { id: 'moissanite', label: 'Lab Moissanite' },
    { id: 'steel', label: 'Waterproof 316L Steel' },
  ];

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedMaterial !== 'all' && p.material !== selectedMaterial) return false;
      return true;
    });

    switch (sortBy) {
      case 'price-asc':
        return list.sort((a, b) => a.priceINR - b.priceINR);
      case 'price-desc':
        return list.sort((a, b) => b.priceINR - a.priceINR);
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating);
      case 'featured':
      default:
        return list;
    }
  }, [products, selectedCategory, selectedMaterial, sortBy]);

  return (
    <div className="pt-28 md:pt-32 pb-24 bg-[#fbf9f4] min-h-screen">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-label-caps text-[#747878] uppercase mb-6">
          <button onClick={onBackToHome} className="hover:text-black">Home</button>
          <span>/</span>
          <span className="text-[#1b1c19] font-bold">Catalog Archive</span>
        </div>

        {/* Page Title */}
        <div className="max-w-2xl mb-10 space-y-2">
          <span className="font-label-caps text-xs text-[#775928] tracking-[0.25em] uppercase font-semibold">
            THE ARCHIVE COLLECTION
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#1b1c19] tracking-tight">
            ALL JEWELLERY
          </h1>
          <p className="font-body-md text-sm md:text-base text-[#444748] leading-relaxed">
            Meticulously sculpted in 18K yellow gold vermeil, 925 sterling silver, and luminous baroque pearls. Designed to be stacked, lived in, and treasured.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 bg-white border border-[#eae8e3] rounded-xs mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-sm">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-label-caps uppercase whitespace-nowrap rounded-xs transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#121212] text-white font-semibold'
                    : 'bg-[#f5f3ee] text-[#444748] hover:bg-[#e4e2dd]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right Side: Material & Sorting */}
          <div className="flex items-center gap-3 self-end lg:self-auto shrink-0">
            {/* Material dropdown */}
            <div className="flex items-center gap-2 text-xs font-body-sm">
              <SlidersHorizontal size={14} className="text-[#775928]" />
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value as Material)}
                className="bg-[#f5f3ee] border border-[#e4e2dd] px-2.5 py-1.5 text-xs rounded-xs font-label-caps text-[#1b1c19] focus:outline-none"
              >
                {materials.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs font-body-sm">
              <ArrowUpDown size={14} className="text-[#775928]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#f5f3ee] border border-[#e4e2dd] px-2.5 py-1.5 text-xs rounded-xs font-label-caps text-[#1b1c19] focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-label-caps text-[#747878] mb-6">
          <span>SHOWING {filteredProducts.length} PIECES</span>
          {(selectedCategory !== 'all' || selectedMaterial !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedMaterial('all');
              }}
              className="text-[#775928] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
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
      </div>
    </div>
  );
};
