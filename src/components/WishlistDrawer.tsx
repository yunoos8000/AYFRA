import React from 'react';
import { Product, Currency, MetalFinish } from '../types';
import { formatPrice } from '../utils/format';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  currency: Currency;
  onRemoveWishlist: (product: Product) => void;
  onMoveToCart: (product: Product, size: string, finish: MetalFinish) => void;
  onSelectProduct: (product: Product) => void;
  onExploreShop: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  currency,
  onRemoveWishlist,
  onMoveToCart,
  onSelectProduct,
  onExploreShop,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#fbf9f4] h-full shadow-2xl flex flex-col justify-between border-l border-[#e4e2dd] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#eae8e3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Heart size={18} className="text-[#775928]" fill="currentColor" />
            <h3 className="font-headline-sm text-xl text-[#1b1c19] tracking-tight">
              MY WISHLIST ({wishlistProducts.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#f0eee9] flex items-center justify-center text-[#444748]"
            aria-label="Close wishlist"
          >
            <X size={18} />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 p-8">
              <div className="w-16 h-16 rounded-full bg-[#f0eee9] flex items-center justify-center text-[#747878]">
                <Heart size={28} />
              </div>
              <div className="space-y-1">
                <h4 className="font-headline-sm text-xl text-[#1b1c19]">Your wishlist is empty</h4>
                <p className="font-body-sm text-sm text-[#747878]">
                  Save your favorite architectural jewellery pieces to review later.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onExploreShop();
                }}
                className="px-6 py-3 bg-[#121212] text-white font-label-button text-xs uppercase tracking-wider hover:bg-[#775928] transition-colors rounded-xs"
              >
                EXPLORE NEW IN
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 p-3 bg-white border border-[#eae8e3] rounded-xs group"
              >
                {/* Image */}
                <div 
                  onClick={() => {
                    onClose();
                    onSelectProduct(product);
                  }}
                  className="w-20 h-20 bg-[#f0eee9] rounded-xs overflow-hidden shrink-0 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 
                        onClick={() => {
                          onClose();
                          onSelectProduct(product);
                        }}
                        className="font-title-md text-sm text-[#1b1c19] font-medium line-clamp-1 hover:text-[#775928] cursor-pointer"
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveWishlist(product)}
                        className="text-[#747878] hover:text-red-600 transition-colors p-0.5"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="font-body-sm text-xs text-[#747878] mt-0.5">
                      {product.materialLabel}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#f0eee9]">
                    <span className="font-body-md text-sm font-semibold text-[#1b1c19]">
                      {formatPrice(product.priceINR, currency)}
                    </span>
                    <button
                      onClick={() => {
                        onMoveToCart(product, product.sizes[0] || 'One Size', product.finishes[0]?.id || '18k-gold');
                        onRemoveWishlist(product);
                      }}
                      className="px-3 py-1.5 bg-[#121212] hover:bg-[#775928] text-white text-[11px] font-label-button uppercase tracking-wider rounded-xs flex items-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag size={12} />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
