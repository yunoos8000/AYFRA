import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onShopNewArrivals: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNewArrivals, onExploreCollection }) => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-[#f0eee9] overflow-hidden pt-24 md:pt-28">
      {/* Editorial Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Demi-fine Gold Jewellery Model Portrait"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.96]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSTffFF4D_zJTtz9vry5--DtRXDWWBiPhr_hiX782sL-R6MGWR3YXyyHnVBPu-esq0UilniSqeYLu3dG1N_QBRyt-EYjFD2SgHhCkS7kPUk5Un-xHxILwNTVAMKh0j01FfC4AmVgyBZmab-v1pFzs728U5h5BuXfZPoUUU2b_T6DZYy3JPjSXdkckFYVzFrxsDuxWX9-GQER_I7BOcXasm0m7LYi-Lw1eKkK6nwXN97Ma3ee74QrIV"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f4] via-transparent to-black/20 md:bg-gradient-to-r md:from-[#fbf9f4]/95 md:via-[#fbf9f4]/50 md:to-transparent" />
      </div>

      <div className="max-w-[1360px] mx-auto w-full px-5 md:px-8 lg:px-6 relative z-10 py-16 md:py-24">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f5f3ee]/80 backdrop-blur-sm border border-[#eae8e3] rounded-full">
            <Sparkles size={13} className="text-[#775928]" />
            <span className="font-label-caps text-[11px] text-[#775928] tracking-[0.25em] uppercase font-semibold">
              THE MONOCHROME COLLECTION VOL. IV
            </span>
          </div>

          <h1 className="font-headline-lg text-4xl sm:text-5xl md:text-6xl text-[#1b1c19] tracking-tight leading-[1.08]">
            JEWELLERY MADE FOR YOUR EVERYDAY
          </h1>

          <p className="font-body-md text-[#444748] text-base md:text-lg max-w-md leading-relaxed">
            Solid 925 sterling silver dipped in 2.5 microns of 18K yellow gold. Water-resistant, hypoallergenic, and consciously made for timeless rituals.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onShopNewArrivals}
              className="px-8 py-4 bg-[#121212] text-[#fbf9f4] font-label-button text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#775928] transition-colors duration-300 flex items-center justify-center gap-3 group shadow-md"
            >
              <span>Shop New Arrivals</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreCollection}
              className="px-8 py-4 bg-transparent border border-[#1b1c19] text-[#1b1c19] font-label-button text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#1b1c19] hover:text-[#fbf9f4] transition-all duration-300 text-center"
            >
              Explore Collection
            </button>
          </div>

          <div className="pt-8 border-t border-[#dbdad5]/60 flex items-center gap-6 text-[#444748]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#775928]" />
              <span className="font-label-caps text-[11px] uppercase tracking-wider">18k Gold Vermeil</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#775928]" />
              <span className="font-label-caps text-[11px] uppercase tracking-wider">100% Water Resistant</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#775928]" />
              <span className="font-label-caps text-[11px] uppercase tracking-wider">BIS Hallmarked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
