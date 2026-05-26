'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useOrder } from '@/lib/order-context';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items } = useOrder();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const totalItems = items.reduce((acc, i) => acc + i.qty, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="bg-primary text-white text-xs py-1.5 px-4 font-sans font-medium text-center overflow-hidden">
        <div className="scrolling-marquee">
          ⚠️ FLASH SALE: 35% OFF ALL PRODUCTS THIS WEEK ONLY! PRICES WILL REVERT NEXT WEEK. ⚠️ • NOW SHIPPING TO UK, IRELAND, EUROPE, NEW ZEALAND, & AUSTRALIA • SAME DAY DISPATCH BEFORE 2PM
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/logo.png" 
              alt="The Vape Hub UK Logo" 
              width={160}
              height={40}
              priority
              className="h-10 w-auto object-contain" 
            />
          </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? 'text-primary' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <Link 
              href="/contact?order=true" 
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-md text-sm font-bold transition flex items-center gap-2"
            >
              Order Now
            </Link>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col">
          <div className="p-6 flex justify-end">
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8 text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={pathname === link.href ? 'text-primary font-bold' : 'text-white'}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
