import React, { useState, useEffect } from 'react';
import { Currency, ActiveScreen } from '../types';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentScreen: ActiveScreen;
  onNavigate: (screen: ActiveScreen) => void;
  currency: Currency;
  onToggleCurrency: (curr: Currency) => void;
  wishlistCount: number;
  cartCount: number;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
  onOpenAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  currency,
  onToggleCurrency,
  wishlistCount,
  cartCount,
  onOpenSearch,
  onOpenWishlist,
  onOpenCart,
  onOpenAccount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; screen: ActiveScreen }[] = [
    { label: 'NEW IN', screen: 'home' },
    { label: 'SHOP', screen: 'shop' },
    { label: 'COLLECTIONS', screen: 'collections' },
    { label: 'BESTSELLERS', screen: 'bestsellers' },
    { label: 'ABOUT', screen: 'about-the-atelier' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. Announcement bar */}
      <div className="bg-[#1c1b1b] text-[#fbf9f4] px-4 md:px-8 py-2 flex items-center justify-center border-b border-[#282727]">
        <p className="font-label-caps text-[11px] uppercase text-center tracking-[0.2em] text-[#eae8e3] flex items-center gap-2">
          <span>FREE SHIPPING ON ORDERS ABOVE {currency === 'INR' ? '₹999' : '$30'}</span>
          <span className="text-[#775928] mx-1">•</span>
          <span>COMPLIMENTARY LUXURY GIFT PACKAGING</span>
        </p>
      </div>

      {/* 2. Main Navigation bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#fbf9f4]/98 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(23,23,23,0.06)] py-3.5' 
            : 'bg-[#fbf9f4]/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-6 flex items-center justify-between">
          {/* Mobile menu toggle & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 text-[#1b1c19] hover:text-[#775928] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 group text-left"
              aria-label="Aurelia Maison Homepage"
            >
              <img
                alt="Aurelia Maison Logo"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
                src="https://lh3.googleusercontent.com/aida/AEtjO1U8i7CyP88OHNm0c5KuQXvc8WccEPS5_FQnBItGVUvpzYF9_edpSQFydw_Bny-Ud4Bz0FFm12FMlJEwQT3_6dXcR7kgOLSPDOvX3nvv4ov2MT3hb-j7DgrF3q9CySA2vdUK3LWVonWRglkKyK4vLjKjTQunizOSUtsD6UB4WPMN8Ea5u4BYFzpgdvBAN8Pn0rnmM2qv5j6AnJ25lbb9zJ_xjbW488QErVsCK48HPpYMjkeLombdDYe5Xuw"
              />
              <span className="font-headline-sm text-[22px] md:text-[26px] tracking-tight text-[#000000] uppercase font-medium">
                Aurelia Maison
              </span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              return (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.screen)}
                  className={`font-label-nav text-[14px] tracking-[0.08em] uppercase py-1 transition-colors relative ${
                    isActive ? 'text-[#000000] font-semibold' : 'text-[#444748] hover:text-[#1b1c19]'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#775928] transition-all duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Clusters */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Currency selector */}
            <div className="hidden sm:flex items-center font-label-caps text-[11px] text-[#444748] uppercase tracking-widest bg-[#f5f3ee] px-2.5 py-1 rounded-sm border border-[#e4e2dd]">
              <button
                onClick={() => onToggleCurrency('INR')}
                className={`transition-colors font-semibold px-1 ${currency === 'INR' ? 'text-[#000000]' : 'text-[#444748]/60 hover:text-[#000000]'}`}
              >
                INR ₹
              </button>
              <span className="text-[#c4c7c7] mx-0.5">/</span>
              <button
                onClick={() => onToggleCurrency('USD')}
                className={`transition-colors font-semibold px-1 ${currency === 'USD' ? 'text-[#000000]' : 'text-[#444748]/60 hover:text-[#000000]'}`}
              >
                USD $
              </button>
            </div>

            {/* Search */}
            <button
              onClick={onOpenSearch}
              aria-label="Search Catalog"
              className="w-9 h-9 flex items-center justify-center text-[#444748] hover:text-[#000000] transition-colors rounded-full hover:bg-[#f0eee9]"
              type="button"
            >
              <Search size={19} />
            </button>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              className="relative w-9 h-9 flex items-center justify-center text-[#444748] hover:text-[#000000] transition-colors rounded-full hover:bg-[#f0eee9]"
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#775928] text-[#ffffff] font-label-caps text-[9px] flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping Bag"
              className="relative w-9 h-9 flex items-center justify-center text-[#444748] hover:text-[#000000] transition-colors rounded-full hover:bg-[#f0eee9]"
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#000000] text-[#ffffff] font-label-caps text-[9px] flex items-center justify-center rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Account / Concierge */}
            <button
              onClick={onOpenAccount}
              aria-label="Client Account"
              className="w-8 h-8 rounded-full bg-[#000000] hover:bg-[#1c1b1b] text-white flex items-center justify-center transition-transform hover:scale-105"
            >
              <User size={16} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#fbf9f4] border-t border-[#e4e2dd] px-5 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.screen);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-label-nav text-[14px] tracking-[0.1em] uppercase py-2 border-b border-[#f0eee9] ${
                    currentScreen === item.screen ? 'text-[#775928] font-bold' : 'text-[#1b1c19]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 flex items-center justify-between text-[12px] font-label-caps text-[#444748]">
                <span>CURRENCY:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => onToggleCurrency('INR')}
                    className={`px-3 py-1 border ${currency === 'INR' ? 'bg-[#000000] text-white border-[#000000]' : 'border-[#c4c7c7]'}`}
                  >
                    INR ₹
                  </button>
                  <button
                    onClick={() => onToggleCurrency('USD')}
                    className={`px-3 py-1 border ${currency === 'USD' ? 'bg-[#000000] text-white border-[#000000]' : 'border-[#c4c7c7]'}`}
                  >
                    USD $
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
