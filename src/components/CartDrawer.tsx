import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/format';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Check, Tag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  currency: Currency;
  onUpdateQuantity: (productId: string, size: string, finish: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string, finish: string) => void;
  onProceedToCheckout: () => void;
  onExploreShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onExploreShop,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const freeShippingThreshold = currency === 'INR' ? 999 : 30;
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.priceINR * item.quantity, 0);
  const discountRate = discountApplied ? 0.1 : 0;
  const discountAmount = subtotal * discountRate;
  const finalTotal = subtotal - discountAmount;
  const freeShippingEligible = (currency === 'INR' ? subtotal : subtotal / 84.5) >= freeShippingThreshold;
  const progressPercent = Math.min(
    100,
    ((currency === 'INR' ? subtotal : subtotal / 84.5) / freeShippingThreshold) * 100
  );

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'AURELIA10') {
      setDiscountApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid promo code. Try "AURELIA10"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#fbf9f4] h-full shadow-2xl flex flex-col justify-between border-l border-[#e4e2dd] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#eae8e3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-[#775928]" />
            <h3 className="font-headline-sm text-xl text-[#1b1c19] tracking-tight">
              SHOPPING BAG ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#f0eee9] flex items-center justify-center text-[#444748] hover:text-[#1b1c19]"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress bar */}
        <div className="px-5 py-3 bg-[#f5f3ee] border-b border-[#eae8e3] space-y-1.5">
          <div className="flex items-center justify-between text-xs font-label-caps text-[#444748]">
            {freeShippingEligible ? (
              <span className="text-[#775928] font-bold flex items-center gap-1">
                <Sparkles size={13} />
                COMPLIMENTARY AIR EXPRESS SHIPPING UNLOCKED
              </span>
            ) : (
              <span>
                ADD {formatPrice(freeShippingThreshold * (currency === 'INR' ? 1 : 84.5) - subtotal, currency)} MORE FOR FREE SHIPPING
              </span>
            )}
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#e4e2dd] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#775928] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 p-8">
              <div className="w-16 h-16 rounded-full bg-[#f0eee9] flex items-center justify-center text-[#747878]">
                <ShoppingBag size={28} />
              </div>
              <div className="space-y-1">
                <h4 className="font-headline-sm text-xl text-[#1b1c19]">Your bag is empty</h4>
                <p className="font-body-sm text-sm text-[#747878]">
                  Discover architectural demi-fine pieces made for everyday wear.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onExploreShop();
                }}
                className="px-6 py-3 bg-[#121212] text-white font-label-button text-xs uppercase tracking-wider hover:bg-[#775928] transition-colors rounded-xs"
              >
                EXPLORE CATALOG
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedFinish}-${index}`}
                className="flex gap-4 p-3 bg-white border border-[#eae8e3] rounded-xs"
              >
                {/* Image */}
                <div className="w-20 h-20 bg-[#f0eee9] rounded-xs overflow-hidden shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-start justify-between">
                      <h4 className="font-title-md text-sm text-[#1b1c19] font-medium line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedSize, item.selectedFinish)}
                        className="text-[#747878] hover:text-red-600 transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#747878] font-body-sm flex gap-2">
                      <span>Size: {item.selectedSize}</span>
                      <span>•</span>
                      <span>{item.selectedFinish.replace('-', ' ').toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#e4e2dd] rounded-xs bg-[#fbf9f4]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedFinish, -1)}
                        className="w-6 h-6 flex items-center justify-center text-xs text-[#444748] hover:text-black"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedFinish, 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs text-[#444748] hover:text-black"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-body-md text-sm font-semibold text-[#1b1c19]">
                      {formatPrice(item.product.priceINR * item.quantity, currency)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Action */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#eae8e3] bg-white space-y-4">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="space-y-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag size={13} className="absolute left-3 top-3 text-[#747878]" />
                  <input
                    type="text"
                    placeholder="Promo code (try AURELIA10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={discountApplied}
                    className="w-full pl-8 pr-3 py-2 bg-[#f5f3ee] border border-[#e4e2dd] text-xs font-body-sm text-[#1b1c19] uppercase tracking-wider rounded-xs focus:outline-none focus:border-[#775928]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={discountApplied}
                  className="px-4 py-2 bg-[#1c1b1b] text-white text-xs font-label-button uppercase rounded-xs hover:bg-[#775928] disabled:opacity-60"
                >
                  {discountApplied ? <Check size={14} /> : 'APPLY'}
                </button>
              </div>
              {discountApplied && (
                <p className="text-[11px] text-green-700 font-body-sm">
                  10% Atelier inaugural discount applied!
                </p>
              )}
              {couponError && (
                <p className="text-[11px] text-red-600 font-body-sm">{couponError}</p>
              )}
            </form>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs font-body-sm text-[#444748] pt-2 border-t border-[#f0eee9]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal, currency)}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-green-700">
                  <span>Privilege Circle (-10%)</span>
                  <span>-{formatPrice(discountAmount, currency)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Luxury Velvet Packaging & Express Shipping</span>
                <span className="text-[#775928] font-medium">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#1b1c19] pt-2 border-t border-[#e4e2dd]">
                <span>Estimated Total</span>
                <span className="text-base">{formatPrice(finalTotal, currency)}</span>
              </div>
            </div>

            {/* Proceed to Checkout CTA */}
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-4 bg-[#121212] hover:bg-[#775928] text-white font-label-button text-xs uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-3 rounded-xs shadow-md"
            >
              <span>PROCEED TO SECURE CHECKOUT</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
