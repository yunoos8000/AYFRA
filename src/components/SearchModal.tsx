import React, { useState, useMemo } from 'react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/format';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  currency: Currency;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  currency,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const popularQueries = ['Fluted Ring', 'Baroque Pearl', 'Croissant Hoops', 'Tennis Bracelet', '18k Vermeil'];

  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const lower = searchTerm.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.subtitle.toLowerCase().includes(lower) ||
        p.categoryLabel.toLowerCase().includes(lower) ||
        p.materialLabel.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower)
    );
  }, [searchTerm, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 flex items-start justify-center pt-20 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#fbf9f4] rounded-xs shadow-2xl border border-[#e4e2dd] overflow-hidden animate-in slide-in-from-top-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-5 bg-white border-b border-[#eae8e3] flex items-center gap-3">
          <Search size={20} className="text-[#775928] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search rings, earrings, vermeil, pearls..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-base text-[#1b1c19] placeholder-[#747878] font-body-md focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#747878] hover:text-[#1b1c19] p-1"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-label-caps uppercase tracking-wider text-[#444748] hover:text-black ml-2"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-4 bg-[#f5f3ee] border-b border-[#eae8e3] flex flex-wrap items-center gap-2">
          <span className="font-label-caps text-[11px] text-[#747878] uppercase mr-1">Trending:</span>
          {popularQueries.map((query) => (
            <button
              key={query}
              onClick={() => setSearchTerm(query)}
              className="px-2.5 py-1 bg-white hover:bg-[#121212] hover:text-white text-xs font-body-sm text-[#1b1c19] border border-[#e4e2dd] rounded-xs transition-colors"
            >
              {query}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-5">
          {searchTerm.trim() ? (
            results.length > 0 ? (
              <div className="space-y-3">
                <span className="font-label-caps text-[11px] text-[#747878] uppercase block mb-2">
                  FOUND {results.length} ARCHIVE MATCH{results.length > 1 ? 'ES' : ''}
                </span>
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(product);
                    }}
                    className="p-3 bg-white hover:bg-[#f0eee9] border border-[#eae8e3] rounded-xs flex items-center justify-between gap-4 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-[#f0eee9] rounded-xs overflow-hidden shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="font-label-caps text-[10px] text-[#775928] uppercase">
                          {product.categoryLabel}
                        </span>
                        <h4 className="font-title-md text-sm text-[#1b1c19] group-hover:text-[#775928] transition-colors">
                          {product.name}
                        </h4>
                        <p className="font-body-sm text-xs text-[#747878]">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 flex items-center gap-3">
                      <span className="font-body-md font-semibold text-sm text-[#1b1c19]">
                        {formatPrice(product.priceINR, currency)}
                      </span>
                      <ArrowRight size={14} className="text-[#747878] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-[#747878]">
                <p className="font-headline-sm text-lg text-[#1b1c19]">No archival designs found</p>
                <p className="font-body-sm text-xs mt-1">Try searching for "ring", "pearl", or "vermeil"</p>
              </div>
            )
          ) : (
            <div className="py-8 text-center text-[#747878]">
              <p className="font-body-sm text-sm">Type above to search through our curated demi-fine jewellery archive.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
