import React from 'react';
import { X, Crown, Package, MapPin, Heart, ShieldCheck, PhoneCall } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewWishlist: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onViewWishlist,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div 
        className="relative bg-[#fbf9f4] w-full max-w-lg rounded-xs overflow-hidden shadow-2xl border border-[#e4e2dd] p-6 md:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-[#f0eee9] flex items-center justify-center text-[#444748]"
          aria-label="Close client concierge"
        >
          <X size={18} />
        </button>

        {/* Client Header */}
        <div className="flex items-center gap-4 border-b border-[#eae8e3] pb-5">
          <div className="w-14 h-14 rounded-full bg-[#121212] text-white flex items-center justify-center font-headline-sm text-2xl font-bold">
            MK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-title-md text-lg text-[#1b1c19] font-medium">
                Meera Kapoor
              </h3>
              <span className="inline-flex items-center gap-1 bg-[#ffdeae] text-[#281800] text-[10px] font-label-caps px-2 py-0.5 rounded-full font-bold">
                <Crown size={11} />
                PLATINUM PATRON
              </span>
            </div>
            <p className="font-body-sm text-xs text-[#747878]">
              meera.kapoor@example.com • +91 98201 44521
            </p>
          </div>
        </div>

        {/* Loyalty Reward Progress */}
        <div className="p-4 bg-[#f5f3ee] border border-[#e4e2dd] rounded-xs space-y-2">
          <div className="flex justify-between text-xs font-label-caps">
            <span className="text-[#1b1c19] font-semibold">MAISON REWARD CREDITS</span>
            <span className="text-[#775928] font-bold">1,450 PTS (₹1,450 VALUE)</span>
          </div>
          <div className="w-full h-1.5 bg-[#e4e2dd] rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-[#775928] rounded-full" />
          </div>
          <p className="font-body-sm text-[11px] text-[#747878]">
            Earn 1 point for every ₹10 spent. Redeemable anytime at checkout.
          </p>
        </div>

        {/* Recent Atelier Deliveries */}
        <div className="space-y-3">
          <h4 className="font-label-caps text-xs text-[#1b1c19] tracking-wider uppercase font-semibold">
            RECENT ARCHIVAL ORDERS
          </h4>
          <div className="p-3.5 bg-white border border-[#eae8e3] rounded-xs space-y-2 text-xs font-body-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package size={15} className="text-[#775928]" />
                <span className="font-medium text-[#1b1c19]">Order #AUR-49210</span>
              </div>
              <span className="text-green-700 bg-green-50 px-2 py-0.5 font-label-caps text-[10px] uppercase font-bold rounded-xs">
                DELIVERED
              </span>
            </div>
            <p className="text-[#747878]">
              Aurelia Fluted Dome Ring (US 7) in 18k Vermeil
            </p>
            <div className="pt-1 text-[11px] text-[#747878] flex justify-between">
              <span>Delivered 12 Oct 2025</span>
              <span className="text-[#775928] underline cursor-pointer">Download Invoice</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onViewWishlist();
            }}
            className="p-3 bg-white hover:bg-[#f0eee9] border border-[#e4e2dd] rounded-xs flex items-center justify-center gap-2 text-xs font-label-caps uppercase text-[#1b1c19] transition-colors"
          >
            <Heart size={14} className="text-[#775928]" />
            <span>Saved Wishlist</span>
          </button>
          <div className="p-3 bg-white border border-[#e4e2dd] rounded-xs flex items-center justify-center gap-2 text-xs font-label-caps uppercase text-[#1b1c19]">
            <MapPin size={14} className="text-[#775928]" />
            <span>Mumbai, IN</span>
          </div>
        </div>

        {/* Concierge Hotline */}
        <div className="p-4 bg-[#121212] text-white rounded-xs flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="font-label-caps text-[10px] text-[#ffdeae] uppercase tracking-wider block font-semibold">
              PRIVATE CONCIERGE HOTLINE
            </span>
            <p className="font-body-sm text-xs text-[#eae8e3]">
              Direct assistance with sizing or bespoke engraving.
            </p>
          </div>
          <a
            href="tel:+919820144521"
            className="p-2.5 bg-[#775928] hover:bg-[#8f6b31] rounded-full transition-colors shrink-0"
            aria-label="Call concierge"
          >
            <PhoneCall size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};
