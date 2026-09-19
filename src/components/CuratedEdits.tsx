import React from 'react';
import { CURATED_EDITS } from '../data/products';
import { Category } from '../types';
import { ArrowRight } from 'lucide-react';

interface CuratedEditsProps {
  onSelectEdit: (category: Category) => void;
}

export const CuratedEdits: React.FC<CuratedEditsProps> = ({ onSelectEdit }) => {
  return (
    <section className="py-20 md:py-28 bg-[#fbf9f4] border-b border-[#eae8e3]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        <div className="text-center max-w-lg mx-auto mb-12 md:mb-16 space-y-2">
          <span className="font-label-caps text-xs text-[#775928] tracking-[0.25em] uppercase font-semibold">
            CURATED EDITS
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] tracking-tight">
            FOR EVERY RITUAL
          </h2>
          <div className="w-10 h-[1.5px] bg-[#775928] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURATED_EDITS.map((edit) => (
            <div
              key={edit.id}
              onClick={() => onSelectEdit(edit.category)}
              className="group cursor-pointer relative aspect-[3/4] rounded-xs overflow-hidden shadow-md flex flex-col justify-end p-6 md:p-8"
            >
              {/* Background Image */}
              <img
                src={edit.image}
                alt={edit.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 space-y-2 text-white">
                <span className="font-label-caps text-[10px] text-[#ffdeae] tracking-[0.2em] uppercase font-semibold">
                  {edit.tag}
                </span>
                <h3 className="font-headline-sm text-xl md:text-2xl text-white tracking-wide font-normal">
                  {edit.title}
                </h3>
                <p className="font-body-sm text-xs text-[#e4e2dd] line-clamp-2">
                  {edit.description}
                </p>
                <div className="pt-2 flex items-center gap-2 font-label-button text-[11px] text-[#ffdeae] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>EXPLORE EDIT</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
