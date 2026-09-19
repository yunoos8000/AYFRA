import React from 'react';
import { X, Ruler, HelpCircle } from 'lucide-react';

interface RingSizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RingSizeGuideModal: React.FC<RingSizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const ringSizes = [
    { us: 'US 5', in: 'Size 10', diameter: '15.7 mm', circ: '49.3 mm' },
    { us: 'US 6', in: 'Size 12', diameter: '16.5 mm', circ: '51.8 mm' },
    { us: 'US 7', in: 'Size 14', diameter: '17.3 mm', circ: '54.4 mm' },
    { us: 'US 8', in: 'Size 16', diameter: '18.1 mm', circ: '56.9 mm' },
    { us: 'US 9', in: 'Size 18', diameter: '18.9 mm', circ: '59.5 mm' },
    { us: 'US 10', in: 'Size 20', diameter: '19.8 mm', circ: '62.1 mm' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
      <div 
        className="relative bg-[#fbf9f4] w-full max-w-xl rounded-xs overflow-hidden shadow-2xl border border-[#e4e2dd] p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-[#f0eee9] flex items-center justify-center text-[#444748]"
          aria-label="Close sizing guide"
        >
          <X size={18} />
        </button>

        <div className="space-y-4">
          <div className="space-y-1">
            <span className="font-label-caps text-xs text-[#775928] tracking-[0.2em] uppercase font-semibold">
              ATELIER MEASUREMENT GUIDE
            </span>
            <h3 className="font-headline-md text-2xl text-[#1b1c19] tracking-tight">
              RING SIZING CHART
            </h3>
            <p className="font-body-sm text-sm text-[#444748]">
              All Aurelia Maison rings are crafted with an ergonomic comfort-fit curved band interior.
            </p>
          </div>

          {/* Size Conversion Table */}
          <div className="overflow-x-auto border border-[#e4e2dd] rounded-xs bg-white">
            <table className="w-full text-left text-xs font-body-sm">
              <thead className="bg-[#f5f3ee] border-b border-[#e4e2dd] font-label-caps text-[#1b1c19]">
                <tr>
                  <th className="p-3">US SIZE</th>
                  <th className="p-3">INDIAN SIZE</th>
                  <th className="p-3">DIAMETER</th>
                  <th className="p-3">CIRCUMFERENCE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eae8e3]">
                {ringSizes.map((row) => (
                  <tr key={row.us} className="hover:bg-[#fbf9f4]">
                    <td className="p-3 font-semibold text-[#1b1c19]">{row.us}</td>
                    <td className="p-3 text-[#444748]">{row.in}</td>
                    <td className="p-3 text-[#747878]">{row.diameter}</td>
                    <td className="p-3 text-[#775928] font-medium">{row.circ}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Measuring Advice */}
          <div className="p-4 bg-[#f5f3ee] border border-[#e4e2dd] rounded-xs space-y-2">
            <div className="flex items-center gap-2 text-[#775928] font-label-caps text-xs font-semibold uppercase">
              <Ruler size={14} />
              <span>HOW TO MEASURE AT HOME</span>
            </div>
            <ul className="text-xs text-[#444748] space-y-1.5 list-disc list-inside font-body-sm">
              <li>Wrap a string or strip of paper snugly around the base of your chosen finger.</li>
              <li>Mark where the ends meet with a pen and measure the flat millimeter length with a ruler.</li>
              <li>If you are between sizes, we recommend sizing up for wider fluted bands (like our Fluted Dome Ring).</li>
            </ul>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#121212] hover:bg-[#775928] text-white font-label-button text-xs uppercase tracking-wider rounded-xs transition-colors"
            >
              GOT IT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
