import { Currency } from '../types';

export const USD_EXCHANGE_RATE = 84.5;

export function formatPrice(amountINR: number, currency: Currency): string {
  if (currency === 'USD') {
    const amountUSD = Math.round((amountINR / USD_EXCHANGE_RATE) * 10) / 10;
    return `$${amountUSD.toFixed(0)}`;
  }
  return `₹${amountINR.toLocaleString('en-IN')}`;
}

export function calcDiscountPercent(price: number, originalPrice: number): number {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
