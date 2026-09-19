'use client';

import React, { useState, useEffect } from 'react';
import { ActiveScreen, Category, Currency, MetalFinish, Product, CartItem } from './types';
import { PRODUCTS_DATA } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryRail } from './components/CategoryRail';
import { NewArrivals } from './components/NewArrivals';
import { EditorialNotebook } from './components/EditorialNotebook';
import { Bestsellers } from './components/Bestsellers';
import { CuratedEdits } from './components/CuratedEdits';
import { AtelierStory } from './components/AtelierStory';
import { AssurancePillars } from './components/AssurancePillars';
import { CustomerReviews } from './components/CustomerReviews';
import { InstagramFeed } from './components/InstagramFeed';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { RingSizeGuideModal } from './components/RingSizeGuideModal';
import { AccountModal } from './components/AccountModal';
import { ShopView } from './components/ShopView';
import { AboutView } from './components/AboutView';
import { Check, Sparkles } from 'lucide-react';

export function App({ initialScreen = 'home' }: { initialScreen?: ActiveScreen } = {}) {
  const [currentScreen, setCurrentScreen] = useState<ActiveScreen>(initialScreen);
  const [currency, setCurrency] = useState<Currency>('INR');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<Category>('all');
  
  // Modals & Drawers
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [wishlistOpen, setWishlistOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [sizingGuideOpen, setSizingGuideOpen] = useState<boolean>(false);
  const [accountOpen, setAccountOpen] = useState<boolean>(false);

  // Cart & Wishlist state with realistic initial items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS_DATA[0], // Aurelia Fluted Dome Ring
      selectedSize: 'US 7',
      selectedFinish: '18k-gold',
      quantity: 1,
    },
  ]);

  const [wishlistIds, setWishlistIds] = useState<Set<string>>(
    new Set(['etoile-baroque-pearl-pendant', 'sculptural-bold-croissant-hoops'])
  );

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Scroll to top upon screen navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  // Wishlist handler
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast(`Removed ${product.name} from Wishlist`);
      } else {
        next.add(product.id);
        showToast(`Added ${product.name} to Wishlist`);
      }
      return next;
    });
  };

  // Add to cart handler
  const handleAddToCart = (
    product: Product,
    size: string,
    finish: MetalFinish,
    quantity: number = 1
  ) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedFinish === finish
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            selectedSize: size,
            selectedFinish: finish,
            quantity,
          },
        ];
      }
    });

    showToast(`Added ${quantity}x ${product.name} (${size}) to Bag`);
  };

  // Cart quantity updater
  const handleUpdateQuantity = (
    productId: string,
    size: string,
    finish: string,
    delta: number
  ) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedFinish === finish
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string, size: string, finish: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedFinish === finish
          )
      )
    );
  };

  const wishlistProducts = PRODUCTS_DATA.filter((p) => wishlistIds.has(p.id));
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fbf9f4] text-[#1b1c19] flex flex-col selection:bg-[#ffdeae] selection:text-[#281800]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-white px-5 py-3 rounded-xs shadow-2xl flex items-center gap-3 border border-[#282727] animate-in slide-in-from-bottom-3 duration-300">
          <Sparkles size={16} className="text-[#ffdeae]" />
          <span className="font-body-sm text-xs tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Global Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          if (screen === 'bestsellers') {
            setCurrentScreen('home');
            setTimeout(() => {
              const el = document.getElementById('bestsellers-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            setCurrentScreen(screen);
          }
        }}
        currency={currency}
        onToggleCurrency={setCurrency}
        wishlistCount={wishlistIds.size}
        cartCount={totalCartCount}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        onOpenAccount={() => setAccountOpen(true)}
      />

      {/* Screen Router */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <div>
            {/* Section 1: Hero */}
            <Hero
              onShopNewArrivals={() => {
                setSelectedCategoryFilter('all');
                setCurrentScreen('shop');
              }}
              onExploreCollection={() => {
                const el = document.getElementById('curated-edits-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Section 2: Shop by Category */}
            <CategoryRail
              selectedCategory={selectedCategoryFilter}
              onSelectCategory={(category) => {
                setSelectedCategoryFilter(category);
                setCurrentScreen('shop');
              }}
            />

            {/* Section 3: New Arrivals */}
            <NewArrivals
              products={PRODUCTS_DATA}
              currency={currency}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onQuickAddToCart={(product, size, finish) => {
                handleAddToCart(product, size, finish, 1);
              }}
              onSelectProduct={setActiveProductDetail}
              onViewAll={() => {
                setSelectedCategoryFilter('all');
                setCurrentScreen('shop');
              }}
            />

            {/* Section 4: Everyday Luxury Editorial Notebook */}
            <EditorialNotebook
              onExploreCollection={() => {
                setSelectedCategoryFilter('all');
                setCurrentScreen('shop');
              }}
            />

            {/* Section 5: Bestsellers */}
            <div id="bestsellers-section">
              <Bestsellers
                products={PRODUCTS_DATA}
                currency={currency}
                wishlistIds={wishlistIds}
                onToggleWishlist={handleToggleWishlist}
                onQuickAddToCart={(product, size, finish) => {
                  handleAddToCart(product, size, finish, 1);
                }}
                onSelectProduct={setActiveProductDetail}
                onViewAll={() => {
                  setSelectedCategoryFilter('all');
                  setCurrentScreen('shop');
                }}
              />
            </div>

            {/* Section 6: Curated Edits for Every Ritual */}
            <div id="curated-edits-section">
              <CuratedEdits
                onSelectEdit={(category) => {
                  setSelectedCategoryFilter(category);
                  setCurrentScreen('shop');
                }}
              />
            </div>

            {/* Section 7: Atelier Story */}
            <AtelierStory
              onReadPledge={() => setCurrentScreen('about-the-atelier')}
            />

            {/* Section 8: Why Shop With Us Assurance Pillars */}
            <AssurancePillars />

            {/* Section 9: Customer Reviews */}
            <CustomerReviews />

            {/* Section 10: Instagram Feed */}
            <InstagramFeed
              onShopProduct={(productId) => {
                const found = PRODUCTS_DATA.find((p) => p.id === productId);
                if (found) setActiveProductDetail(found);
              }}
            />

            {/* Section 11: Private Client Circle Newsletter */}
            <Newsletter />
          </div>
        )}

        {currentScreen === 'shop' && (
          <ShopView
            products={PRODUCTS_DATA}
            currency={currency}
            initialCategory={selectedCategoryFilter}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onQuickAddToCart={(product, size, finish) => {
              handleAddToCart(product, size, finish, 1);
            }}
            onSelectProduct={setActiveProductDetail}
            onBackToHome={() => setCurrentScreen('home')}
          />
        )}

        {currentScreen === 'collections' && (
          <div className="pt-28 md:pt-32 pb-24 bg-[#fbf9f4]">
            <CuratedEdits
              onSelectEdit={(category) => {
                setSelectedCategoryFilter(category);
                setCurrentScreen('shop');
              }}
            />
            <div className="mt-8">
              <Bestsellers
                products={PRODUCTS_DATA}
                currency={currency}
                wishlistIds={wishlistIds}
                onToggleWishlist={handleToggleWishlist}
                onQuickAddToCart={(product, size, finish) => {
                  handleAddToCart(product, size, finish, 1);
                }}
                onSelectProduct={setActiveProductDetail}
                onViewAll={() => {
                  setSelectedCategoryFilter('all');
                  setCurrentScreen('shop');
                }}
              />
            </div>
          </div>
        )}

        {currentScreen === 'about-the-atelier' && (
          <AboutView
            onExploreShop={() => {
              setSelectedCategoryFilter('all');
              setCurrentScreen('shop');
            }}
            onBackToHome={() => setCurrentScreen('home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setCurrentScreen}
        onFilterCategory={(cat) => {
          setSelectedCategoryFilter(cat);
          setCurrentScreen('shop');
        }}
        onOpenSizingGuide={() => setSizingGuideOpen(true)}
      />

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={activeProductDetail}
        currency={currency}
        isWishlisted={activeProductDetail ? wishlistIds.has(activeProductDetail.id) : false}
        onClose={() => setActiveProductDetail(null)}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={(product, size, finish, qty) => {
          handleAddToCart(product, size, finish, qty);
        }}
        onOpenSizingGuide={() => setSizingGuideOpen(true)}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
        onExploreShop={() => {
          setSelectedCategoryFilter('all');
          setCurrentScreen('shop');
        }}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        currency={currency}
        onOrderSuccess={() => {
          setCartItems([]);
        }}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        currency={currency}
        onRemoveWishlist={handleToggleWishlist}
        onMoveToCart={(product, size, finish) => {
          handleAddToCart(product, size, finish, 1);
        }}
        onSelectProduct={setActiveProductDetail}
        onExploreShop={() => {
          setSelectedCategoryFilter('all');
          setCurrentScreen('shop');
        }}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={PRODUCTS_DATA}
        currency={currency}
        onSelectProduct={setActiveProductDetail}
      />

      <RingSizeGuideModal
        isOpen={sizingGuideOpen}
        onClose={() => setSizingGuideOpen(false)}
      />

      <AccountModal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
        onViewWishlist={() => {
          setAccountOpen(false);
          setWishlistOpen(true);
        }}
      />
    </div>
  );
}

export default App;
