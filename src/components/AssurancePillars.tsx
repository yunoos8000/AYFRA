import React from 'react';
import { Gem, Lock, RotateCcw, Truck } from 'lucide-react';

export const AssurancePillars: React.FC = () => {
  const pillars = [
    {
      icon: <Gem size={22} className="text-[#775928]" />,
      title: 'PREMIUM QUALITY',
      desc: '18K Gold Vermeil & 925 Sterling Silver guaranteed.',
    },
    {
      icon: <Lock size={22} className="text-[#775928]" />,
      title: 'SECURE PAYMENT',
      desc: 'Encrypted 256-bit SSL checkout & UPI protection.',
    },
    {
      icon: <RotateCcw size={22} className="text-[#775928]" />,
      title: 'EASY RETURNS',
      desc: '14-day zero-friction doorstep returns & exchanges.',
    },
    {
      icon: <Truck size={22} className="text-[#775928]" />,
      title: 'FAST DELIVERY',
      desc: 'Complimentary express air shipping on orders above ₹999.',
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-[#fbf9f4] border-b border-[#eae8e3]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#f0eee9] group-hover:bg-[#ffdeae]/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                {pillar.icon}
              </div>
              <div className="space-y-0.5">
                <h4 className="font-label-caps text-xs text-[#1b1c19] tracking-wider uppercase font-semibold">
                  {pillar.title}
                </h4>
                <p className="font-body-sm text-xs text-[#444748] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
