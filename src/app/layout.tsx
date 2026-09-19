import type { Metadata, Viewport } from 'next';
import { EB_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Aurelia Maison | Demi-Fine Jewellery',
  description:
    'Architectural demi-fine jewellery crafted with purposeful quiet luxury in 18K gold vermeil and solid 925 sterling silver.',
  openGraph: {
    title: 'Aurelia Maison | Demi-Fine Jewellery',
    description:
      'Architectural demi-fine jewellery crafted with purposeful quiet luxury in 18K gold vermeil and solid 925 sterling silver.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${ebGaramond.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fbf9f4] text-[#1b1c19] antialiased selection:bg-[#ffdeae] selection:text-[#281800]">
        {children}
      </body>
    </html>
  );
}
