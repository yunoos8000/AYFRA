import React from 'react';
import { INSTAGRAM_POSTS } from '../data/products';
import { Instagram, ArrowUpRight } from 'lucide-react';

interface InstagramFeedProps {
  onShopProduct: (productId: string) => void;
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ onShopProduct }) => {
  return (
    <section className="py-20 md:py-24 bg-[#fbf9f4] border-b border-[#eae8e3]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        <div className="text-center max-w-lg mx-auto mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#775928]">
            <Instagram size={16} />
            <span className="font-label-caps text-xs tracking-[0.25em] uppercase font-semibold">
              @AURELIAMAISON
            </span>
          </div>
          <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] tracking-tight">
            FOLLOW OUR STORY
          </h2>
          <p className="font-body-md text-[#444748] text-sm md:text-base">
            Tag <span className="font-semibold text-[#1b1c19]">#AureliaRituals</span> on Instagram to be featured in our lookbook.
          </p>
          <div className="w-10 h-[1.5px] bg-[#775928] mx-auto mt-4" />
        </div>

        {/* 6 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => onShopProduct(post.productId)}
              className="group cursor-pointer relative aspect-square overflow-hidden rounded-xs bg-[#f0eee9]"
            >
              <img
                src={post.image}
                alt={post.productName}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-white">
                <span className="font-label-caps text-[9px] text-[#ffdeae] uppercase tracking-widest mb-1">
                  SHOP THE LOOK
                </span>
                <p className="font-title-md text-xs font-medium line-clamp-2">
                  {post.productName}
                </p>
                <div className="mt-2 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
