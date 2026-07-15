import { products } from '@/lib/data';
import { ProductListClient } from './ProductListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products | THE VAPE HUB UK',
  description: 'Browse our full catalog of premium disposables, Pod Kits, E-Liquids, and bundles.',
  alternates: {
    canonical: 'https://www.thevapehub.co.uk/products',
  }
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
         <div>
           <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">All Products.</h1>
           <p className="text-gray-400">Premium supply of disposables and pod kits.</p>
         </div>
      </div>
      
      <ProductListClient initialProducts={products} />
      
      {/* Trust bar at bottom */}
      <div className="mt-24 border-t border-border pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-75">
        <div className="text-center font-bold font-sans text-sm">✓ Lab Tested</div>
        <div className="text-center font-bold font-sans text-sm">✓ Express Delivery</div>
        <div className="text-center font-bold font-sans text-sm">✓ Secure Payment</div>
        <div className="text-center font-bold font-sans text-sm">✓ Authentic Guarantee</div>
      </div>
    </div>
  );
}
