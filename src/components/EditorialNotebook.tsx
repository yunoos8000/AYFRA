import React from 'react';
import { ArrowRight, Sparkles, Droplets, Shield } from 'lucide-react';

interface EditorialNotebookProps {
  onExploreCollection: () => void;
}

export const EditorialNotebook: React.FC<EditorialNotebookProps> = ({ onExploreCollection }) => {
  return (
    <section className="py-20 md:py-28 bg-[#f5f3ee] border-b border-[#eae8e3]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Visual with Floating Quote */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:max-w-none overflow-hidden rounded-xs shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSAhe6T5bzj-EKN9NnNEBGhHWnw50fjmjj02VH4HnFf_6FnhoLp0bM5Ys9rdUi5gmjQfl3dIA9vMn5E8g9nrDLqgQDjX3_m1PsfyFBGsOgbcHU8gWRUo494U8vRPS0T8tWOxm0Mg3iG23jNc3uF_mDThEfjyP7ggnccSV3E4A3vUErpSGy2qg0jeGkuQq5u1gZGiqJfizui_DUAL-pJlk0ThvBMQ8bD2-0f77YhCNAursjsdgJ-nV3"
                alt="Aurelia Editorial Jewellery Model"
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Manifesto Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 max-w-xs bg-[#fbf9f4] p-5 md:p-6 shadow-xl border border-[#e4e2dd] hidden sm:block">
              <p className="font-display italic text-base md:text-lg text-[#1b1c19] leading-snug">
                “Jewellery is not reserved for occasions. It is the occasion.”
              </p>
              <p className="font-label-caps text-[10px] text-[#775928] tracking-[0.2em] uppercase font-semibold mt-3">
                — AURELIA ATELIER MANIFESTO
              </p>
            </div>
          </div>

          {/* Editorial Content & 3 Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-label-caps text-xs text-[#775928] tracking-[0.25em] uppercase font-semibold">
                EVERYDAY LUXURY
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#1b1c19] tracking-tight leading-tight">
                WHY DEMI-FINE MATTERS
              </h2>
              <p className="font-body-md text-[#444748] text-base md:text-lg leading-relaxed pt-2">
                Fine jewelry is locked in bank safes; fast-fashion turns skin green after two wears. Aurelia was founded on the radical premise that you deserve heirlooms made to accompany morning flat whites, warm ocean dips, and high-stakes boardrooms.
              </p>
            </div>

            {/* The 3 Pillars */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#eae8e3] flex items-center justify-center shrink-0 text-[#775928]">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-title-md text-base md:text-lg text-[#1b1c19] font-medium">
                    100% RECYCLED 925 SILVER
                  </h3>
                  <p className="font-body-sm text-sm text-[#444748] mt-1 leading-relaxed">
                    Every core begins as ethically refined solid sterling silver, ensuring substantial tactile weight and hypoallergenic comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#eae8e3] flex items-center justify-center shrink-0 text-[#775928]">
                  <Droplets size={18} />
                </div>
                <div>
                  <h3 className="font-title-md text-base md:text-lg text-[#1b1c19] font-medium">
                    2.5 MICRON VERMEIL
                  </h3>
                  <p className="font-body-sm text-sm text-[#444748] mt-1 leading-relaxed">
                    5x thicker than standard flash gold plating. Guaranteed to retain its rich warmth through daily showers and workouts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#eae8e3] flex items-center justify-center shrink-0 text-[#775928]">
                  <Shield size={18} />
                </div>
                <div>
                  <h3 className="font-title-md text-base md:text-lg text-[#1b1c19] font-medium">
                    2-YEAR COLOR GUARANTEE
                  </h3>
                  <p className="font-body-sm text-sm text-[#444748] mt-1 leading-relaxed">
                    Every creation arrives with an atelier warranty card. Should your piece lose its luster, we re-dip or replace it with zero friction.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreCollection}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#121212] text-[#fbf9f4] font-label-button text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#775928] transition-colors duration-300"
              >
                <span>EXPLORE ALL ARCHIVES</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
