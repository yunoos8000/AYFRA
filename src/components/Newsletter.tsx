import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#121212] text-white border-b border-[#282727] relative overflow-hidden">
      {/* Subtle gold decorative gradient in corner */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#775928]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1c1b1b] border border-[#282727] rounded-full text-[#ffdeae]">
            <Sparkles size={12} />
            <span className="font-label-caps text-[10px] tracking-[0.25em] uppercase font-semibold">
              PRIVATE CLIENT CIRCLE
            </span>
          </div>

          <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            STAY IN THE LOOP
          </h2>

          <p className="font-body-md text-[#eae8e3] text-sm md:text-base leading-relaxed">
            Receive private invitations to numbered atelier drops, archival previews, and 10% off your inaugural acquisition.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="pt-2 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3.5 bg-[#1c1b1b] border border-[#3b3a3a] text-white placeholder-[#747878] font-body-sm text-sm focus:outline-none focus:border-[#ffdeae] rounded-xs"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#775928] hover:bg-[#8f6b31] text-white font-label-button text-xs uppercase tracking-[0.14em] font-medium transition-colors duration-200 flex items-center justify-center gap-2 shrink-0 rounded-xs"
                >
                  <span>JOIN ATELIER</span>
                  <ArrowRight size={14} />
                </button>
              </div>
              <p className="font-body-sm text-[11px] text-[#747878] mt-3">
                No spam. Unsubscribe with a single click at any time.
              </p>
            </form>
          ) : (
            <div className="p-6 bg-[#1c1b1b] border border-[#775928]/60 rounded-xs space-y-2 animate-in fade-in">
              <div className="flex items-center justify-center gap-2 text-[#ffdeae]">
                <CheckCircle2 size={18} />
                <span className="font-label-caps text-xs uppercase tracking-widest font-semibold">
                  WELCOME TO THE MAISON
                </span>
              </div>
              <p className="font-body-sm text-sm text-[#eae8e3]">
                Your invitation is on its way. Use code <span className="font-mono font-bold text-[#ffdeae] bg-black/40 px-2 py-0.5 rounded">AURELIA10</span> at checkout for 10% off today.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
