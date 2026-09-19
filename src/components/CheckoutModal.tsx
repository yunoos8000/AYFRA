import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/format';
import { X, ShieldCheck, CheckCircle2, Lock, Truck, CreditCard, Smartphone, Banknote, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  currency: Currency;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  currency,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [formData, setFormData] = useState({
    name: 'Meera Kapoor',
    email: 'meera.kapoor@example.com',
    phone: '+91 98201 44521',
    address: 'Flat 402, Horizon Towers, Linking Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
  });
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.priceINR * item.quantity, 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `AUR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setStep('success');
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#fbf9f4] w-full max-w-2xl rounded-xs overflow-hidden shadow-2xl border border-[#e4e2dd] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-white border-b border-[#eae8e3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock size={16} className="text-[#775928]" />
            <span className="font-label-caps text-xs text-[#1b1c19] tracking-widest uppercase font-semibold">
              ENCRYPTED ATELIER CHECKOUT
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#f0eee9] flex items-center justify-center text-[#444748]"
            aria-label="Close checkout"
          >
            <X size={18} />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleSubmitOrder} className="p-6 md:p-8 space-y-6">
            {/* Order Items Summary Strip */}
            <div className="p-4 bg-[#f5f3ee] border border-[#e4e2dd] rounded-xs flex items-center justify-between">
              <div>
                <span className="font-label-caps text-[11px] text-[#747878] uppercase">Order Summary</span>
                <p className="font-title-md text-base text-[#1b1c19]">
                  {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in Luxury Velvet Presentation Box
                </p>
              </div>
              <div className="text-right">
                <span className="font-label-caps text-[11px] text-[#747878] uppercase">Total</span>
                <p className="font-headline-sm text-lg text-[#1b1c19] font-bold">
                  {formatPrice(subtotal, currency)}
                </p>
              </div>
            </div>

            {/* Client Details */}
            <div className="space-y-4">
              <h4 className="font-label-caps text-xs text-[#775928] tracking-[0.16em] uppercase font-semibold">
                1. CLIENT CONTACT & DELIVERY
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-body-sm text-xs text-[#444748] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#e4e2dd] text-sm text-[#1b1c19] rounded-xs focus:outline-none focus:border-[#775928]"
                  />
                </div>
                <div>
                  <label className="block font-body-sm text-xs text-[#444748] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#e4e2dd] text-sm text-[#1b1c19] rounded-xs focus:outline-none focus:border-[#775928]"
                  />
                </div>
                <div>
                  <label className="block font-body-sm text-xs text-[#444748] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#e4e2dd] text-sm text-[#1b1c19] rounded-xs focus:outline-none focus:border-[#775928]"
                  />
                </div>
                <div>
                  <label className="block font-body-sm text-xs text-[#444748] mb-1">PIN / Postal Code</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#e4e2dd] text-sm text-[#1b1c19] rounded-xs focus:outline-none focus:border-[#775928]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-body-sm text-xs text-[#444748] mb-1">Delivery Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#e4e2dd] text-sm text-[#1b1c19] rounded-xs focus:outline-none focus:border-[#775928]"
                  />
                </div>
                <div>
                  <label className="block font-body-sm text-xs text-[#444748] mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#e4e2dd] text-sm text-[#1b1c19] rounded-xs focus:outline-none focus:border-[#775928]"
                  />
                </div>
                <div>
                  <label className="block font-body-sm text-xs text-[#444748] mb-1">State / Region</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#e4e2dd] text-sm text-[#1b1c19] rounded-xs focus:outline-none focus:border-[#775928]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              <h4 className="font-label-caps text-xs text-[#775928] tracking-[0.16em] uppercase font-semibold">
                2. PAYMENT PREFERENCE
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 border rounded-xs flex flex-col items-center text-center gap-1.5 transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-[#775928] bg-[#f5f3ee] text-[#1b1c19]'
                      : 'border-[#e4e2dd] bg-white text-[#747878] hover:border-[#1b1c19]'
                  }`}
                >
                  <Smartphone size={20} className={paymentMethod === 'upi' ? 'text-[#775928]' : ''} />
                  <span className="font-label-caps text-xs font-semibold">UPI & QR</span>
                  <span className="text-[10px] text-[#747878]">GPay, PhonePe, Paytm</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 border rounded-xs flex flex-col items-center text-center gap-1.5 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-[#775928] bg-[#f5f3ee] text-[#1b1c19]'
                      : 'border-[#e4e2dd] bg-white text-[#747878] hover:border-[#1b1c19]'
                  }`}
                >
                  <CreditCard size={20} className={paymentMethod === 'card' ? 'text-[#775928]' : ''} />
                  <span className="font-label-caps text-xs font-semibold">CARDS</span>
                  <span className="text-[10px] text-[#747878]">Visa, Master, Amex</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 border rounded-xs flex flex-col items-center text-center gap-1.5 transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-[#775928] bg-[#f5f3ee] text-[#1b1c19]'
                      : 'border-[#e4e2dd] bg-white text-[#747878] hover:border-[#1b1c19]'
                  }`}
                >
                  <Banknote size={20} className={paymentMethod === 'cod' ? 'text-[#775928]' : ''} />
                  <span className="font-label-caps text-xs font-semibold">PAY ON DELIVERY</span>
                  <span className="text-[10px] text-[#747878]">Doorstep Cash or UPI</span>
                </button>
              </div>
            </div>

            {/* Place Order CTA */}
            <div className="pt-4 border-t border-[#eae8e3] space-y-3">
              <button
                type="submit"
                className="w-full py-4 bg-[#121212] hover:bg-[#775928] text-white font-label-button text-xs uppercase tracking-[0.16em] font-medium transition-colors rounded-xs shadow-md flex items-center justify-center gap-2"
              >
                <Lock size={14} />
                <span>CONFIRM & PLACE ORDER • {formatPrice(subtotal, currency)}</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#747878]">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-[#775928]" />
                  256-bit SSL Protected
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Truck size={13} className="text-[#775928]" />
                  Express Insured Delivery
                </span>
              </div>
            </div>
          </form>
        ) : (
          /* Order Confirmation Screen */
          <div className="p-8 md:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#ffdeae]/40 text-[#775928] flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2">
              <span className="font-label-caps text-xs text-[#775928] tracking-[0.25em] uppercase font-semibold">
                CONGRATULATIONS
              </span>
              <h3 className="font-headline-lg text-3xl md:text-4xl text-[#1b1c19]">
                YOUR ORDER IS CONFIRMED
              </h3>
              <p className="font-body-md text-[#444748] text-sm max-w-md mx-auto">
                Thank you, {formData.name}. Our Jaipur master goldsmiths have received your bespoke request and will pack it in our bespoke emerald velvet chest.
              </p>
            </div>

            <div className="max-w-md mx-auto p-5 bg-white border border-[#e4e2dd] rounded-xs text-left space-y-2 text-xs font-body-sm">
              <div className="flex justify-between border-b border-[#f0eee9] pb-2">
                <span className="text-[#747878]">Order Reference:</span>
                <span className="font-mono font-bold text-[#1b1c19]">{orderId}</span>
              </div>
              <div className="flex justify-between border-b border-[#f0eee9] pb-2">
                <span className="text-[#747878]">Estimated Delivery:</span>
                <span className="font-medium text-[#1b1c19]">2-4 Business Days via Air Courier</span>
              </div>
              <div className="flex justify-between border-b border-[#f0eee9] pb-2">
                <span className="text-[#747878]">Destination:</span>
                <span className="font-medium text-[#1b1c19]">{formData.city}, {formData.state}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#747878]">Payment Method:</span>
                <span className="font-medium uppercase text-[#775928]">{paymentMethod}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-[#121212] hover:bg-[#775928] text-white font-label-button text-xs uppercase tracking-wider transition-colors rounded-xs"
              >
                RETURN TO ATELIER
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
