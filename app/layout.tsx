import type { Metadata } from 'next';
import { Space_Grotesk, DM_Sans } from 'next/font/google';
import './globals.css';
import { OrderProvider } from '@/lib/order-context';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Floaters } from '@/components/ui/Floaters';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'THE VAPE HUB UK | Premium Wholesale & Retail',
  description: "UK's Most Trusted Vape Wholesaler and Retailer Supplier. Premium cannabis and THC vape pens, carts, and disposables.",
  metadataBase: new URL('https://thevapehub.co.uk'),
  alternates: {
    canonical: 'https://thevapehub.co.uk/',
  },
  openGraph: {
    title: 'THE VAPE HUB UK',
    description: "UK's Most Trusted Vape Wholesaler and Retailer Supplier",
    siteName: 'The Vape Hub UK',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <meta name="google-site-verification" content="placeholder-gsc-verification" />
      </head>
      <body className="antialiased min-h-screen flex flex-col pt-32" suppressHydrationWarning>
        <OrderProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Floaters />
        </OrderProvider>
      </body>
    </html>
  );
}
