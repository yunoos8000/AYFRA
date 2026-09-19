import React from 'react';
import { ActiveScreen, Category } from '../types';
import { ShieldCheck, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ActiveScreen) => void;
  onFilterCategory?: (category: Category) => void;
  onOpenSizingGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onFilterCategory,
  onOpenSizingGuide,
}) => {
  return (
    <footer className="bg-[#1c1b1b] text-[#eae8e3] pt-16 md:pt-20 pb-12 border-t border-[#282727]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 pb-16 border-b border-[#282727]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                alt="Aurelia Maison Logo"
                className="h-8 w-auto object-contain filter invert opacity-90"
                src="https://lh3.googleusercontent.com/aida/AEtjO1U8i7CyP88OHNm0c5KuQXvc8WccEPS5_FQnBItGVUvpzYF9_edpSQFydw_Bny-Ud4Bz0FFm12FMlJEwQT3_6dXcR7kgOLSPDOvX3nvv4ov2MT3hb-j7DgrF3q9CySA2vdUK3LWVonWRglkKyK4vLjKjTQunizOSUtsD6UB4WPMN8Ea5u4BYFzpgdvBAN8Pn0rnmM2qv5j6AnJ25lbb9zJ_xjbW488QErVsCK48HPpYMjkeLombdDYe5Xuw"
              />
              <span className="font-headline-sm text-2xl tracking-tight text-white uppercase font-medium">
                Aurelia Maison
              </span>
            </div>
            <p className="font-body-sm text-sm text-[#c4c7c7] max-w-sm leading-relaxed">
              Architectural demi-fine jewellery in 18K gold vermeil and solid 925 sterling silver. Made for mindful everyday luxury and timeless rituals.
            </p>
            <div className="pt-2 flex items-center gap-3 text-[#ffdeae] text-xs font-label-caps uppercase">
              <div className="flex items-center gap-1.5">
                <Award size={14} />
                <span>BIS 916 HALLMARKED</span>
              </div>
              <span className="text-[#747878]">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} />
                <span>RJC CERTIFIED ETHICS</span>
              </div>
            </div>
          </div>

          {/* Column 1: Collections */}
          <div className="space-y-3">
            <h4 className="font-label-caps text-xs text-white uppercase tracking-[0.16em] font-semibold">
              COLLECTIONS
            </h4>
            <ul className="space-y-2 text-sm text-[#c4c7c7]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bestsellers')}
                  className="hover:text-white transition-colors"
                >
                  Bestsellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors"
                >
                  The Monochrome Edit
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onFilterCategory) onFilterCategory('rings');
                    onNavigate('shop');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Sculptural Rings
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onFilterCategory) onFilterCategory('pendants');
                    onNavigate('shop');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Baroque Pearls
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Concierge */}
          <div className="space-y-3">
            <h4 className="font-label-caps text-xs text-white uppercase tracking-[0.16em] font-semibold">
              CLIENT CONCIERGE
            </h4>
            <ul className="space-y-2 text-sm text-[#c4c7c7]">
              <li>
                <button
                  onClick={onOpenSizingGuide}
                  className="hover:text-white transition-colors text-left"
                >
                  Ring Sizing Guide
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Jewellery Care Guide
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Track Your Order
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  14-Day Returns & Exchanges
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Bespoke Inquiries
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: The Maison */}
          <div className="space-y-3">
            <h4 className="font-label-caps text-xs text-white uppercase tracking-[0.16em] font-semibold">
              THE MAISON
            </h4>
            <ul className="space-y-2 text-sm text-[#c4c7c7]">
              <li>
                <button
                  onClick={() => onNavigate('about-the-atelier')}
                  className="hover:text-white transition-colors"
                >
                  Our Jaipur Atelier
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  2.5 Micron Vermeil Process
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Recycled Silver Sourcing
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Brand Journal & Press
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Careers at Aurelia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#747878] font-body-sm">
          <p>© 2026 AURELIA MAISON DEMI-FINE JEWELLERY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#eae8e3] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#eae8e3] cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-[#eae8e3] cursor-pointer">BIS Hallmark Lic. #RJ-44128</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
