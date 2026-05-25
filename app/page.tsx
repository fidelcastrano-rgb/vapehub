import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';
import { products, faqs, blogPosts } from '@/lib/data';
import { CheckCircle2, ShieldCheck, Zap, Truck, Star, Send } from 'lucide-react';
import { ProductCard } from '@/components/ui/ProductCard';
import { AccordionItem } from '@/components/ui/AccordionItem';

export const metadata: Metadata = {
  title: 'THE VAPE HUB UK | Premium Wholesale & Retail',
  description: "UK's Most Trusted Vape Wholesaler and Retailer Supplier. Premium cannabis and THC vape pens, carts, and disposables.",
  alternates: {
    canonical: 'https://thevapehub.co.uk/',
  },
};

export default function Home() {
  const featuredProducts = products.slice(0, 12);
  const homeFaqs = faqs.flatMap(f => f.questions).slice(0, 5);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Vape Hub UK",
    "url": "https://thevapehub.co.uk",
    "logo": "https://thevapehub.co.uk/images/logo.png",
    "image": "https://thevapehub.co.uk/images/premium_vape_hero.png",
    "description": "UK's Most Trusted Vape Wholesaler and Retailer. Sourcing authentic disposable vapes, pod kits, and e-liquids across London, Manchester, Belfast, and Birmingham.",
    "telephone": "+447341056054",
    "email": "sales@thevapehub.co.uk",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    },
    "areaServed": [
      { "@type": "City", "name": "London" },
      { "@type": "City", "name": "Belfast" },
      { "@type": "City", "name": "Manchester" },
      { "@type": "City", "name": "Birmingham" },
      { "@type": "City", "name": "Leeds" },
      { "@type": "City", "name": "Glasgow" },
      { "@type": "Country", "name": "United Kingdom" }
    ],
    "sameAs": [
      "https://t.me/TheVapeHubUK"
    ]
  };

  return (
    <div className="w-full">
      <Script id="homepage-entity-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {/* 3. Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-10">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-5">
          <h1 className="text-[20vw] font-bold whitespace-nowrap leading-none select-none text-white font-space-grotesk tracking-tighter mix-blend-overlay">
            THE VAPE HUB
          </h1>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-2 bg-surface border border-border px-4 py-1.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            UK&apos;s Most Trusted Wholesaler
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk leading-tight tracking-tight">
              Premium <span className="text-primary">Vape</span> & <br />Distillate Supply.
            </h1>
            
            <p className="text-lg text-gray-400 md:max-w-lg leading-relaxed">
              Serving London, Northern Ireland and all of UK. Strict verification. Guaranteed authentic stock.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link href="/products" className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-md transition transform hover:-translate-y-1">
                Shop Collection
              </Link>
              <Link href="/contact" className="bg-transparent border border-border hover:border-primary text-white font-bold py-4 px-8 rounded-md transition">
                Wholesale Inquiry
              </Link>
            </div>
            
            <div className="flex items-center gap-6 mt-8 opacity-75">
              <div className="flex items-center gap-2 text-sm font-medium">
                <ShieldCheck className="w-5 h-5 text-whatsapp" /> 100% Authentic
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Truck className="w-5 h-5 text-whatsapp" /> Next Day Delivery
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-auto md:h-[600px] w-full mt-12 md:mt-0">
            <img 
              src="/images/premium_vape_hero.png" 
              alt="Premium Disposable Vape UK" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl border border-border/50 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
               <div className="bg-primary p-2 rounded-full"><Star className="w-6 h-6 text-white"/></div>
               <div>
                 <div className="font-bold text-lg leading-none">4.9/5</div>
                 <div className="text-xs text-gray-400">Based on 2,000+ Reviews</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Community Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-12 mb-12">
        <a href="https://t.me/TheVapeHubUK" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden bg-gradient-to-r from-[#2AABEE] to-[#229ED9] rounded-3xl p-8 md:p-12 text-white shadow-2xl hover:shadow-blue-900/20 transition-all hover:-translate-y-1 group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-white/20 p-4 rounded-full w-fit">
                <Send className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold font-space-grotesk tracking-tight mb-2">Join our Official Telegram Channel</h3>
                <p className="text-blue-100 max-w-lg text-lg">
                  Get exclusive wholesale drops, flash sales, and live stock updates. Connect directly with our community of verified members.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center justify-center bg-white text-[#229ED9] font-bold px-8 py-4 rounded-xl shadow-lg group-hover:bg-gray-50 transition-colors">
              <span>View & Join Channel</span>
              <span className="ml-2" aria-hidden="true">&rarr;</span>
            </div>
          </div>
        </a>
      </section>

      {/* 4. Horizontal scroll strip */}
      <section className="border-t border-b border-border bg-surface py-6 px-4 overflow-hidden my-24">
        <div className="flex gap-12 items-center scrolling-marquee font-bold text-xl tracking-wider text-gray-500 uppercase">
             <span>🚀 Next Day UK Dispatch</span>
             <span>•</span>
             <span>🛡️ Lab Tested Products</span>
             <span>•</span>
             <span>💨 4000+ Puffs Range</span>
             <span>•</span>
             <span>💎 Wholesale Pricing</span>
             <span>•</span>
             <span>🚀 Next Day UK Dispatch</span>
             <span>•</span>
             <span>🛡️ Lab Tested Products</span>
             <span>•</span>
             <span>💨 4000+ Puffs Range</span>
             <span>•</span>
             <span>💎 Wholesale Pricing</span>
        </div>
      </section>

      {/* 5. Features / Precision */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-auto h-[500px] w-full">
            <img 
              src="/images/vape_quality_control.png" 
              alt="Vape Quality Control" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">Engineered for <br/>Maximum Precision.</h2>
          <p className="text-gray-400 leading-relaxed max-w-lg mb-8">
            We don&apos;t do cheap knock-offs. Every product on our shelves is verified via QR code authenticator before dispatch. If it doesn&apos;t meet our strict standards, it doesn&apos;t get sold.
          </p>
          <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">COA Verified Distillate</h4>
                  <p className="text-sm text-gray-400">All THC and CBD products undergo full panel lab testing.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                <Zap className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Advanced Mesh Coils</h4>
                  <p className="text-sm text-gray-400">Experience richer flavor profiles and zero burnt hits.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Products Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 bg-surface rounded-[40px] border border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
           <div>
             <h2 className="text-4xl font-bold font-space-grotesk mb-4">Trending Supply.</h2>
             <p className="text-gray-400">Our highest velocity SKUs verified for this week.</p>
           </div>
           <Link href="/products" className="text-primary hover:text-white font-bold transition flex items-center gap-2">
             View All Inventory <span aria-hidden="true">&rarr;</span>
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 9. Proven stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
             { num: '50k+', label: 'Orders Shipped' },
             { num: '4.9/5', label: 'TrustScore' },
             { num: '24hr', label: 'Average Dispatch' },
             { num: '100%', label: 'Authentic Verified' }
          ].map((stat, i) => (
             <div key={i} className="flex flex-col items-center justify-center p-8 bg-surface rounded-2xl border border-border text-center">
               <div className="text-4xl md:text-5xl font-bold font-space-grotesk text-primary mb-2">{stat.num}</div>
               <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">{stat.label}</div>
             </div>
          ))}
        </div>
      </section>

      {/* 10. Brand Focus / SEO Text */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="bg-surface rounded-[40px] border border-border p-8 md:p-16">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">Built Around The Brands You Want.</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Welcome to The Vape Hub, where we keep our focus on the products shoppers actually want. If you are looking for Lost Mary Vape, Elf Bar, Elf Bar Pods, Hayati Pro Max, or Hayati Pro Ultra, you are in the right place. We stock the brands that customers ask for most, and we keep the site built around clear choices, easy ordering, and a simple buying experience.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              At The Vape Hub, we know what matters to vape shoppers. You want trusted products, strong flavour, reliable performance, and a shop that makes the process straightforward. That is exactly how we run our business. We built our store for customers who want a direct route to the latest disposable vapes and pod products without wasting time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl p-8 border border-border group hover:border-primary/50 transition">
              <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">Lost Mary Vape</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Lost Mary Vape remains one of the most popular choices on our site because customers trust the brand and know what to expect. It is known for compact design, rich flavour, and easy use. Many shoppers come back to Lost Mary Vape because they want a device that works well and delivers a smooth experience from the first puff to the last.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border group hover:border-primary/50 transition">
              <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">Elf Bar & Pods</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                Elf Bar is another major part of our range. It continues to be one of the most searched names in vaping because of its familiar design and broad flavour appeal. Customers who shop with us for Elf Bar products usually want a device that is simple to use and easy to enjoy. We keep Elf Bar in stock because we know it is a name people search for with intention.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Elf Bar Pods are also an important part of what we offer. Some customers prefer pods over disposables, and we make sure those buyers have access to the right options. When people search for Elf Bar Pods, they are usually looking for convenience, compatibility, and a product they can rely on. We aim to make that search easy by keeping our product pages clear and our stock organised.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border group hover:border-primary/50 transition lg:mt-0 md:mt-4">
              <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">Hayati Series</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                Hayati Pro Max has quickly become one of the standout products in the market. Shoppers choose it because they want a high puff vape with strong flavour and modern design. At The Vape Hub, we make Hayati Pro Max easy to find because it is one of the products our customers ask for most. It fits the needs of buyers who want a longer lasting disposable and a more premium feel.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Hayati Pro Ultra is another popular option for customers who want more from their vape. It appeals to shoppers who want a larger capacity device, strong flavour output, and a device that feels current. We stock Hayati Pro Ultra for the same reason we stock our other top brands. Our customers want the products that are trending now, and we keep our store matched to that demand.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-border/50 text-center max-w-3xl mx-auto text-sm text-gray-500 font-medium">
            <p className="mb-4">
              The Vape Hub is built around the idea that shopping should be simple. No clutter. No confusion. Just the products you want, presented clearly, with an easy path to order. We know customers compare brands and look for the best option before they buy, so we keep our categories focused and our range relevant.
            </p>
            <p>
              If you are looking for Lost Mary Vape, Elf Bar, Elf Bar Pods, Hayati Pro Max, or Hayati Pro Ultra, The Vape Hub gives you one place to browse trusted products and make a straightforward purchase. We keep our business focused on the brands shoppers search for most, because that is what our customers expect from us.
            </p>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-4">Common Questions</h2>
        </div>
        <div className="flex flex-col gap-4">
          {homeFaqs.map((faq, i) => (
            <AccordionItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>
      
      {/* 12. Final CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
          <div className="bg-primary rounded-[40px] p-12 text-center text-white relative overflow-hidden flex flex-col items-center min-h-[400px] justify-center">
            <img
              src="/images/vape_wholesale_boxes.png"
              alt="Vape Wholesale"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40"></div>
           <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk z-10 mb-6">Restock Fast & Secure.</h2>
           <p className="z-10 max-w-xl mx-auto text-lg mb-10 opacity-90">
             Whether you need a single disposable or a wholesale bulk package, The Vape Hub UK is your trusted source. 
           </p>
           <div className="z-10 flex gap-4">
             <Link href="/products" className="bg-background text-white hover:bg-gray-800 py-4 px-8 rounded-lg font-bold transition shadow-2xl">
               Start Order Now
             </Link>
           </div>
         </div>
      </section>
    </div>
  );
}
