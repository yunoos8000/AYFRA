import React from 'react';
import { REVIEWS_DATA } from '../data/products';
import { Star, CheckCircle2 } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f5f3ee] border-b border-[#eae8e3]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="font-label-caps text-xs text-[#775928] tracking-[0.25em] uppercase font-semibold">
            TESTIMONIALS
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] tracking-tight">
            LOVED BY YOU
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex text-[#775928]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <span className="font-label-caps text-xs text-[#444748] tracking-wider uppercase font-medium">
              4.92 / 5.0 RATING ACROSS 3,400+ PATRONS
            </span>
          </div>
          <div className="w-10 h-[1.5px] bg-[#775928] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-[#fbf9f4] p-8 border border-[#e4e2dd] rounded-xs flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex text-[#775928]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="font-display italic text-lg md:text-xl text-[#1b1c19] leading-relaxed">
                  {review.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0eee9] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-title-md text-sm font-semibold text-[#1b1c19]">
                      {review.author}
                    </span>
                    {review.verified && (
                      <CheckCircle2 size={13} className="text-[#775928]" />
                    )}
                  </div>
                  <p className="font-body-sm text-[11px] text-[#747878]">
                    {review.location}
                  </p>
                </div>
                <span className="font-label-caps text-[10px] text-[#775928] tracking-wider uppercase bg-[#ffdeae]/30 px-2 py-1 rounded-xs">
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
