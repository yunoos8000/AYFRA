import React from 'react';
import { ArrowRight, Award, Compass, Feather } from 'lucide-react';

interface AtelierStoryProps {
  onReadPledge: () => void;
}

export const AtelierStory: React.FC<AtelierStoryProps> = ({ onReadPledge }) => {
  return (
    <section className="py-20 md:py-28 bg-[#f5f3ee] border-b border-[#eae8e3]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Dual Atelier Workshop Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden rounded-xs bg-[#e4e2dd]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0SVX8clANI_T-a0OPfoZCQktUQu1o4nQ0oR0nj4l9Kd9a8buCsNAJIu025_0qyS45t6MFa6Frm28D-TxSrK5H_-8NZhSanZ4GuU2vL5EPFTYo8IsMBcPKDHwwUOCQjXbRnWNDhHtKUQxehPL9d1RpK6gjRr_sLsODno1e3SMSh0VY-E7zV9F5SqFkgoB9kJGaTAovuEmdULiS51h2PefppcRGcyUrf5zHhc_Sy5D4dRZwyRbbxNsJ"
                  alt="Aurelia Master Goldsmith at work"
                  className="w-full h-full object-cover filter contrast-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-[#fbf9f4] border border-[#e4e2dd] space-y-1">
                <span className="font-label-caps text-[10px] text-[#775928] uppercase tracking-wider block font-semibold">
                  BENCHWORK
                </span>
                <p className="font-body-sm text-xs text-[#444748]">
                  Hand-filed milgrain edges and pressure-tested claws.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 bg-[#121212] text-white border border-[#282727] space-y-1">
                <span className="font-label-caps text-[10px] text-[#ffdeae] uppercase tracking-wider block font-semibold">
                  PURITY STANDARD
                </span>
                <p className="font-body-sm text-xs text-[#eae8e3]">
                  92.5% certified silver with 18-karat electrolytic plating.
                </p>
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-xs bg-[#e4e2dd]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB8TQOBUeI4-x-j0UQnXU8BAxhcuK-zusTLmqFa_pzf5G0fGQdVggm2pKAlGPOxZN14YUe0V-xi5c-5XnNU7WVTeLjgjIiJ4RierTrVrNk24XAjYI_EomZRHJnmLHLUjLTzujk1XN03spLDCDkIPkoyEcuN-zVYV7ARxSEGDIkPil-fVgiWJRAQsQfmMOji_0BEr0CGbdeCAh51gFXY4pX7dWqzIFiNKDJlOG58aRBJ4PhKxl-k_LN"
                  alt="Jewellery polishing process"
                  className="w-full h-full object-cover filter contrast-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Atelier Manifesto */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-label-caps text-xs text-[#775928] tracking-[0.25em] uppercase font-semibold">
              THE ATELIER
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#1b1c19] tracking-tight leading-tight">
              MADE TO BE WORN. MADE TO BE REMEMBERED.
            </h2>

            <div className="space-y-4 font-body-md text-[#444748] text-base leading-relaxed">
              <p>
                In an industry divided between extortionate luxury traditional markups and ephemeral high-street brass, Aurelia was established in 2021 to redefine demi-fine jewelry.
              </p>
              <p>
                Our master bench jewelers in Jaipur fuse centuries-old royal goldsmithing traditions with modern clean Scandinavian lines. We partner exclusively with certified RJC (Responsible Jewellery Council) refineries using 100% recycled precious metals.
              </p>
            </div>

            {/* Credential badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e4e2dd]">
              <div className="space-y-1">
                <div className="text-[#775928]"><Award size={20} /></div>
                <h4 className="font-title-md text-sm text-[#1b1c19] font-medium">BIS Certified</h4>
                <p className="font-body-sm text-[11px] text-[#747878]">Government recognized hallmarking</p>
              </div>
              <div className="space-y-1">
                <div className="text-[#775928]"><Compass size={20} /></div>
                <h4 className="font-title-md text-sm text-[#1b1c19] font-medium">Fair Trade</h4>
                <p className="font-body-sm text-[11px] text-[#747878]">Zero-conflict ethical extraction</p>
              </div>
              <div className="space-y-1">
                <div className="text-[#775928]"><Feather size={20} /></div>
                <h4 className="font-title-md text-sm text-[#1b1c19] font-medium">Ultra Gentle</h4>
                <p className="font-body-sm text-[11px] text-[#747878]">Nickel-free for sensitive skin</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onReadPledge}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#121212] text-[#fbf9f4] font-label-button text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#775928] transition-colors duration-300"
              >
                <span>READ OUR ETHICAL PLEDGE</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
