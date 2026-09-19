import React, { useState } from 'react';
import { Product, Currency, MetalFinish } from '../types';
import { formatPrice, calcDiscountPercent } from '../utils/format';
import { X, Star, Heart, ShieldCheck, Droplets, Sparkles, Truck, RotateCcw, Check } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  currency: Currency;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string, finish: MetalFinish, quantity: number) => void;
  onOpenSizingGuide: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currency,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
  onOpenSizingGuide,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedFinish, setSelectedFinish] = useState<MetalFinish>(product.finishes[0]?.id || '18k-gold');
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'One Size');
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const discount = calcDiscountPercent(product.priceINR, product.originalPriceINR);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedFinish, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#fbf9f4] w-full max-w-4xl rounded-xs overflow-hidden shadow-2xl border border-[#e4e2dd] my-8 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 hover:bg-white text-[#1b1c19] rounded-full flex items-center justify-center shadow-md transition-colors"
          aria-label="Close product modal"
        >
          <X size={18} />
        </button>

        {/* Left Column: Visual Gallery */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-[#f0eee9]">
          <div className="aspect-square w-full rounded-xs overflow-hidden bg-white relative">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-[#121212] text-[#fbf9f4] font-label-caps text-[10px] px-2.5 py-0.5 tracking-wider uppercase font-semibold">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => setActiveImage(product.image)}
              className={`w-16 h-16 rounded-xs overflow-hidden border-2 transition-all ${
                activeImage === product.image ? 'border-[#775928] scale-105' : 'border-[#e4e2dd] opacity-75'
              }`}
            >
              <img src={product.image} alt="Studio angle" className="w-full h-full object-cover" />
            </button>
            <button
              onClick={() => setActiveImage(product.hoverImage)}
              className={`w-16 h-16 rounded-xs overflow-hidden border-2 transition-all ${
                activeImage === product.hoverImage ? 'border-[#775928] scale-105' : 'border-[#e4e2dd] opacity-75'
              }`}
            >
              <img src={product.hoverImage} alt="Model lifestyle angle" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        {/* Right Column: Information & Options */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="font-label-caps text-[11px] text-[#775928] uppercase tracking-[0.2em] font-semibold">
                {product.categoryLabel}
              </span>
              <h2 className="font-headline-md text-2xl md:text-3xl text-[#1b1c19] tracking-tight">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 pt-1">
                <div className="flex text-[#775928]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <span className="font-body-sm text-xs font-semibold text-[#1b1c19]">{product.rating}</span>
                <span className="text-xs text-[#747878]">({product.reviewsCount} verified reviews)</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="font-body-lg font-bold text-2xl text-[#1b1c19]">
                {formatPrice(product.priceINR, currency)}
              </span>
              {product.originalPriceINR > product.priceINR && (
                <>
                  <span className="font-body-md text-base text-[#747878] line-through">
                    {formatPrice(product.originalPriceINR, currency)}
                  </span>
                  <span className="bg-[#ffdeae] text-[#281800] text-xs font-label-caps font-bold px-2 py-0.5 rounded-xs">
                    SAVE {discount}%
                  </span>
                </>
              )}
            </div>

            <p className="font-body-sm text-sm text-[#444748] leading-relaxed">
              {product.description}
            </p>

            {/* Metal Finish Option */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-label-caps">
                <span className="text-[#1b1c19] font-medium tracking-wider uppercase">
                  METAL FINISH: <span className="font-semibold">{product.finishes.find(f => f.id === selectedFinish)?.name}</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                {product.finishes.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 border rounded-xs font-body-sm text-xs transition-all ${
                      selectedFinish === finish.id 
                        ? 'border-[#121212] bg-[#f0eee9] font-medium' 
                        : 'border-[#e4e2dd] hover:border-[#747878]'
                    }`}
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-[#c4c7c7]"
                      style={{ backgroundColor: finish.colorHex }} 
                    />
                    <span>{finish.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-label-caps text-[#1b1c19] font-medium tracking-wider uppercase">
                  SELECT SIZE: <span className="font-semibold">{selectedSize}</span>
                </span>
                {(product.category === 'rings' || product.sizes.some(s => s.startsWith('US'))) && (
                  <button
                    onClick={onOpenSizingGuide}
                    className="text-[#775928] hover:underline font-label-caps text-[11px] uppercase tracking-wider"
                  >
                    Sizing Guide
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3.5 py-1.5 text-xs font-label-caps uppercase transition-all rounded-xs border ${
                      selectedSize === size
                        ? 'bg-[#121212] text-white border-[#121212]'
                        : 'bg-white text-[#1b1c19] border-[#e4e2dd] hover:border-[#775928]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Features Bullet List */}
            <div className="pt-2 border-t border-[#eae8e3] space-y-1.5">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#444748] font-body-sm">
                  <Check size={13} className="text-[#775928] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row: Quantity + Add to Bag + Wishlist */}
          <div className="pt-4 border-t border-[#eae8e3] space-y-3">
            <div className="flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center border border-[#e4e2dd] bg-white rounded-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-10 flex items-center justify-center text-[#444748] hover:text-black"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-semibold text-[#1b1c19]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-10 flex items-center justify-center text-[#444748] hover:text-black"
                >
                  +
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAdd}
                className={`flex-1 h-10 font-label-button text-xs uppercase tracking-[0.14em] font-medium transition-all duration-200 flex items-center justify-center gap-2 rounded-xs ${
                  isAdded
                    ? 'bg-[#775928] text-white'
                    : 'bg-[#121212] hover:bg-[#775928] text-white'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={16} />
                    <span>ADDED TO SHOPPING BAG</span>
                  </>
                ) : (
                  <span>ADD TO BAG • {formatPrice(product.priceINR * quantity, currency)}</span>
                )}
              </button>

              {/* Wishlist toggle */}
              <button
                onClick={() => onToggleWishlist(product)}
                className={`w-10 h-10 border rounded-xs flex items-center justify-center transition-colors ${
                  isWishlisted
                    ? 'bg-[#775928] text-white border-[#775928]'
                    : 'border-[#e4e2dd] text-[#1b1c19] hover:text-[#775928] bg-white'
                }`}
                aria-label="Wishlist toggle"
              >
                <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Micro guarantees */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-[#747878] font-label-caps uppercase text-center">
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck size={12} className="text-[#775928]" />
                <span>BIS 916 CERTIFIED</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <RotateCcw size={12} className="text-[#775928]" />
                <span>14-DAY RETURNS</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Truck size={12} className="text-[#775928]" />
                <span>AIR EXPRESS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
