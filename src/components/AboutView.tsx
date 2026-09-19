import React from 'react';
import { Award, ShieldCheck, Gem, Sparkles, Droplets, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onExploreShop: () => void;
  onBackToHome: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onExploreShop, onBackToHome }) => {
  return (
    <div className="pt-28 md:pt-32 pb-24 bg-[#fbf9f4] min-h-screen">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-label-caps text-[#747878] uppercase mb-6">
          <button onClick={onBackToHome} className="hover:text-black">Home</button>
          <span>/</span>
          <span className="text-[#1b1c19] font-bold">The Atelier & Craft</span>
        </div>

        {/* Hero Banner */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="font-label-caps text-xs text-[#775928] tracking-[0.25em] uppercase font-semibold">
            THE ATELIER PHILOSOPHY
          </span>
          <h1 className="font-headline-lg text-4xl sm:text-5xl md:text-6xl text-[#1b1c19] tracking-tight leading-tight">
            PURPOSEFUL LUXURY FOR MODERN RITUALS
          </h1>
          <p className="font-body-md text-base md:text-lg text-[#444748] leading-relaxed">
            Founded in 2021, Aurelia Maison bridges the gap between fleeting high-street brass and prohibitively priced heritage gold. We create demi-fine heirlooms crafted to withstand everyday life.
          </p>
        </div>

        {/* Workshop Dual Imagery with story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-xs bg-[#f0eee9]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0SVX8clANI_T-a0OPfoZCQktUQu1o4nQ0oR0nj4l9Kd9a8buCsNAJIu025_0qyS45t6MFa6Frm28D-TxSrK5H_-8NZhSanZ4GuU2vL5EPFTYo8IsMBcPKDHwwUOCQjXbRnWNDhHtKUQxehPL9d1RpK6gjRr_sLsODno1e3SMSh0VY-E7zV9F5SqFkgoB9kJGaTAovuEmdULiS51h2PefppcRGcyUrf5zHhc_Sy5D4dRZwyRbbxNsJ"
                alt="Jaipur master jeweler benchwork"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-xs bg-[#f0eee9] mt-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB8TQOBUeI4-x-j0UQnXU8BAxhcuK-zusTLmqFa_pzf5G0fGQdVggm2pKAlGPOxZN14YUe0V-xi5c-5XnNU7WVTeLjgjIiJ4RierTrVrNk24XAjYI_EomZRHJnmLHLUjLTzujk1XN03spLDCDkIPkoyEcuN-zVYV7ARxSEGDIkPil-fVgiWJRAQsQfmMOji_0BEr0CGbdeCAh51gFXY4pX7dWqzIFiNKDJlOG58aRBJ4PhKxl-k_LN"
                alt="Finishing and polishing process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-headline-md text-3xl text-[#1b1c19]">
              Centuries of Goldsmithing, Reimagined
            </h2>
            <div className="space-y-4 font-body-md text-[#444748] text-base leading-relaxed">
              <p>
                Our pieces are brought to life in Jaipur—the legendary gemstone capital of Rajasthan—where master artisans carry forward generations of royal bench jewelers' knowledge.
              </p>
              <p>
                Rather than stamping thin mass-market pieces out of cheap base metals like zinc or nickel brass, every single Aurelia ring, earring, and necklace starts with certified 100% recycled 925 sterling silver.
              </p>
              <p>
                The resulting creations possess tactile weight in hand, an organic ergonomic curve against the skin, and an undeniable golden warmth that never feels brassy or artificial.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Comparison Table: Vermeil vs Standard Plating */}
        <div className="mb-20 p-8 md:p-12 bg-white border border-[#e4e2dd] rounded-xs space-y-6 shadow-sm">
          <div className="max-w-xl space-y-2">
            <span className="font-label-caps text-xs text-[#775928] tracking-[0.2em] uppercase font-semibold">
              MATERIAL HONESTY
            </span>
            <h3 className="font-headline-md text-2xl md:text-3xl text-[#1b1c19]">
              HOW AURELIA COMPARES
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-body-sm">
              <thead className="bg-[#f5f3ee] border-b border-[#e4e2dd] font-label-caps text-xs text-[#1b1c19]">
                <tr>
                  <th className="p-4">SPECIFICATION</th>
                  <th className="p-4 text-[#775928] font-bold">AURELIA VERMEIL</th>
                  <th className="p-4 text-[#747878]">FAST FASHION JEWELLERY</th>
                  <th className="p-4 text-[#747878]">SOLID 18K GOLD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eae8e3]">
                <tr>
                  <td className="p-4 font-semibold text-[#1b1c19]">Base Metal</td>
                  <td className="p-4 text-[#775928] font-semibold">Solid 925 Sterling Silver</td>
                  <td className="p-4 text-[#747878]">Brass / Zinc Alloy</td>
                  <td className="p-4 text-[#747878]">Solid 18K Gold</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1b1c19]">Gold Thickness</td>
                  <td className="p-4 text-[#775928] font-semibold">2.5 Microns (5x Industry Avg)</td>
                  <td className="p-4 text-[#747878]">0.1–0.5 Micron Flash</td>
                  <td className="p-4 text-[#747878]">100% Solid Gold</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1b1c19]">Skin Reaction</td>
                  <td className="p-4 text-[#775928] font-semibold">100% Hypoallergenic, Zero Green</td>
                  <td className="p-4 text-[#747878]">Turns Skin Green within days</td>
                  <td className="p-4 text-[#747878]">Hypoallergenic</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1b1c19]">Water Resistance</td>
                  <td className="p-4 text-[#775928] font-semibold">Shower & Gym Proof</td>
                  <td className="p-4 text-[#747878]">Tarnishes with moisture</td>
                  <td className="p-4 text-[#747878]">Waterproof</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1b1c19]">Pricing Tier</td>
                  <td className="p-4 text-[#775928] font-semibold">Accessible (₹2,199 – ₹7,850)</td>
                  <td className="p-4 text-[#747878]">Disposable (₹500 – ₹1,500)</td>
                  <td className="p-4 text-[#747878]">Prohibitive (₹40,000+)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA to explore shop */}
        <div className="p-10 md:p-14 bg-[#121212] text-white rounded-xs text-center space-y-6">
          <h2 className="font-headline-lg text-3xl md:text-4xl">
            EXPERIENCE THE ATELIER PIECES FIRST-HAND
          </h2>
          <p className="font-body-md text-sm md:text-base text-[#eae8e3] max-w-lg mx-auto">
            All pieces arrive in our custom emerald-green suede travel case with complimentary luxury gift packaging.
          </p>
          <button
            onClick={onExploreShop}
            className="px-8 py-4 bg-[#775928] hover:bg-[#8f6b31] text-white font-label-button text-xs uppercase tracking-[0.16em] font-medium transition-colors inline-flex items-center gap-2 rounded-xs"
          >
            <span>SHOP THE ARCHIVE</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
