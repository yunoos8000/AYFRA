import React, { useState } from 'react';
import { Product, Currency, MetalFinish } from '../types';
import { formatPrice, calcDiscountPercent } from '../utils/format';
import { Heart, Star, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickAddToCart: (product: Product, size: string, finish: MetalFinish) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  isWishlisted,
  onToggleWishlist,
  onQuickAddToCart,
  onSelectProduct,
}) => {
  const [selectedFinish, setSelectedFinish] = useState<MetalFinish>(product.finishes[0]?.id || '18k-gold');
  const [addedSize, setAddedSize] = useState<string | null>(null);

  const discount = calcDiscountPercent(product.priceINR, product.originalPriceINR);

  const handleQuickAdd = (size: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAddToCart(product, size, selectedFinish);
    setAddedSize(size);
    setTimeout(() => setAddedSize(null), 1500);
  };

  return (
    <div 
      onClick={() => onSelectProduct(product)}
      className="group cursor-pointer flex flex-col bg-[#fbf9f4] border border-transparent hover:border-[#eae8e3] transition-all duration-300 rounded-sm overflow-hidden"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-square w-full bg-[#f0eee9] overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <span className="bg-[#121212] text-[#fbf9f4] font-label-caps text-[10px] px-2.5 py-0.5 tracking-[0.18em] uppercase font-semibold">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-[#775928] text-white font-label-caps text-[9px] px-2 py-0.5 tracking-wider uppercase font-semibold">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            isWishlisted 
              ? 'bg-[#775928] text-white' 
              : 'bg-white/85 text-[#1b1c19] hover:bg-white hover:text-[#775928] shadow-sm'
          }`}
        >
          <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>

        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:opacity-0 transition-opacity duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover Lifestyle Image */}
        <img
          src={product.hoverImage}
          alt={`${product.name} lifestyle`}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
          loading="lazy"
        />

        {/* Quick Add Sizes Overlay on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-1.5 z-10">
          <p className="font-label-caps text-[10px] text-white/90 uppercase tracking-widest text-center">
            QUICK ADD
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {product.sizes.map((size) => {
              const isJustAdded = addedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={(e) => handleQuickAdd(size, e)}
                  className={`px-2 py-1 text-[11px] font-label-caps uppercase transition-colors rounded-xs ${
                    isJustAdded 
                      ? 'bg-[#775928] text-white' 
                      : 'bg-white/95 text-[#121212] hover:bg-[#121212] hover:text-white'
                  }`}
                >
                  {isJustAdded ? <Check size={12} className="inline mr-1" /> : null}
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Meta Content */}
      <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] text-[#747878] font-label-caps uppercase tracking-wider">
            <span>{product.materialLabel}</span>
            <div className="flex items-center gap-1 text-[#775928]">
              <Star size={12} fill="currentColor" />
              <span className="font-semibold">{product.rating.toFixed(1)}</span>
              <span className="text-[#c4c7c7]">({product.reviewsCount})</span>
            </div>
          </div>

          <h3 className="font-title-md text-base md:text-lg text-[#1b1c19] group-hover:text-[#775928] transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          <p className="font-body-sm text-[12px] text-[#444748] line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing and Finishes */}
        <div className="pt-2 border-t border-[#f0eee9] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-body-md font-semibold text-[#1b1c19] text-base">
              {formatPrice(product.priceINR, currency)}
            </span>
            {product.originalPriceINR > product.priceINR && (
              <span className="font-body-sm text-xs text-[#747878] line-through">
                {formatPrice(product.originalPriceINR, currency)}
              </span>
            )}
          </div>

          {/* Color Finish dots */}
          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            {product.finishes.map((finish) => (
              <button
                key={finish.id}
                type="button"
                onClick={() => setSelectedFinish(finish.id)}
                title={finish.name}
                className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  selectedFinish === finish.id 
                    ? 'scale-125 ring-1 ring-[#121212] ring-offset-1 ring-offset-[#fbf9f4]' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: finish.colorHex, borderColor: '#c4c7c7' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
