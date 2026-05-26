import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/images/logo.png" 
                alt="The Vape Hub UK Logo" 
                width={160}
                height={40}
                className="h-10 w-auto object-contain" 
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              UK&apos;s Most Trusted Vape Wholesaler and Retailer Supplier. Premium devices and strict authenticity protocols.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 font-sans text-white">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/products?category=disposables" className="hover:text-primary transition-colors">Disposables</Link></li>
              <li><Link href="/products?category=carts" className="hover:text-primary transition-colors">THC Carts</Link></li>
              <li><Link href="/products?category=cbd" className="hover:text-primary transition-colors">CBD Products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 font-sans text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & News</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 font-sans text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/returns" className="hover:text-primary transition-colors">Returns Policy</Link></li>
              <li className="mt-4">
                <div className="p-3 bg-background border border-border rounded-md text-xs">
                  <strong className="text-error">Age Restriction:</strong> You must be 18+ to purchase.
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} The Vape Hub UK. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            <span className="font-bold text-gray-400">Accepted Payments:</span>
            <span>Crypto (BTC, USDT, USDC, ETH)</span>
            <span>•</span>
            <span>Bank Transfer (£100+)</span>
          </div>
          <div className="flex gap-4">
            <span>London</span>
            <span>•</span>
            <span>Northern Ireland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
