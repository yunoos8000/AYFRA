import React from 'react';
import { CATEGORIES_DATA } from '../data/products';
import { Category } from '../types';

interface CategoryRailProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export const CategoryRail: React.FC<CategoryRailProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="py-16 md:py-20 bg-[#fbf9f4] border-b border-[#eae8e3]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        <div className="text-center max-w-lg mx-auto mb-10 md:mb-14 space-y-2">
          <span className="font-label-caps text-xs text-[#775928] tracking-[0.25em] uppercase font-semibold">
            CURATED ARCHIVE
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] tracking-tight">
            SHOP BY CATEGORY
          </h2>
          <div className="w-10 h-[1.5px] bg-[#775928] mx-auto mt-4" />
        </div>

        {/* 8 Circular categories */}
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id as Category)}
                className="group flex flex-col items-center text-center space-y-2.5 focus:outline-none"
              >
                <div 
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden p-1 transition-all duration-300 ${
                    isSelected 
                      ? 'ring-2 ring-[#775928] ring-offset-2 ring-offset-[#fbf9f4]' 
                      : 'ring-1 ring-[#e4e2dd] group-hover:ring-[#775928]'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#f0eee9]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <h3 className={`font-title-md text-sm md:text-base transition-colors ${
                    isSelected ? 'text-[#775928] font-bold' : 'text-[#1b1c19] group-hover:text-[#775928]'
                  }`}>
                    {cat.name}
                  </h3>
                  <p className="font-body-sm text-[11px] text-[#747878] hidden sm:block">
                    {cat.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
