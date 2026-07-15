import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';
import { products, faqs, blogPosts } from '@/lib/data';
import { CheckCircle2, ShieldCheck, Zap, Truck, Star, Send } from 'lucide-react';
import { ProductCard } from '@/components/ui/ProductCard';
import { AccordionItem } from '@/components/ui/AccordionItem';

export const metadata: Metadata = {
  title: 'DMT Vapes, Lost Mary, Elf Bar Pods & Hayati | The Vape Hub UK',
  description: 'Buy authentic DMT Vapes, Lost Mary Vape, Elf Bar, Elf Bar Pods, Hayati Pro Max, and Hayati Pro Ultra at The Vape Hub UK. Enjoy premium flavours and next day UK delivery.',
  alternates: {
    canonical: 'https://www.thevapehub.co.uk/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'DMT Vapes, Lost Mary, Elf Bar Pods & Hayati | The Vape Hub UK',
    description: 'Buy authentic DMT Vapes, Lost Mary Vape, Elf Bar, Elf Bar Pods, Hayati Pro Max, and Hayati Pro Ultra at The Vape Hub UK. Enjoy premium flavours and next day UK delivery.',
    url: 'https://www.thevapehub.co.uk/',
    siteName: 'The Vape Hub UK',
    images: [
      {
        url: 'https://www.thevapehub.co.uk/images/premium_vape_hero.png',
        width: 1200,
        height: 630,
        alt: 'The Vape Hub UK - DMT Vapes, Lost Mary Vape, Elf Bar & Hayati Series',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMT Vapes, Lost Mary, Elf Bar Pods & Hayati | The Vape Hub UK',
    description: 'Buy authentic DMT Vapes, Lost Mary Vape, Elf Bar, Elf Bar Pods, Hayati Pro Max, and Hayati Pro Ultra at The Vape Hub UK. Enjoy premium flavours and next day UK delivery.',
    images: ['https://www.thevapehub.co.uk/images/premium_vape_hero.png'],
  },
};

export default function Home() {
  const featuredProducts = products.slice(0, 12);

  const homepageSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.thevapehub.co.uk/#organization",
      "name": "The Vape Hub UK",
      "url": "https://www.thevapehub.co.uk",
      "logo": "https://www.thevapehub.co.uk/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+447341056054",
        "contactType": "customer service",
        "email": "sales@thevapehub.co.uk",
        "areaServed": "GB",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://t.me/TheVapeHubUK"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.thevapehub.co.uk/#website",
      "name": "The Vape Hub UK",
      "url": "https://www.thevapehub.co.uk",
      "publisher": {
        "@id": "https://www.thevapehub.co.uk/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.thevapehub.co.uk/products?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.thevapehub.co.uk/#webpage",
      "name": "DMT Vapes, Lost Mary, Elf Bar Pods & Hayati | The Vape Hub UK",
      "url": "https://www.thevapehub.co.uk",
      "description": "Buy authentic DMT Vapes, Lost Mary Vape, Elf Bar, Elf Bar Pods, Hayati Pro Max, and Hayati Pro Ultra at The Vape Hub UK. Enjoy premium flavours and next day UK delivery.",
      "isPartOf": {
        "@id": "https://www.thevapehub.co.uk/#website"
      },
      "about": {
        "@id": "https://www.thevapehub.co.uk/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://www.thevapehub.co.uk/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.thevapehub.co.uk"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.thevapehub.co.uk/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are Lost Mary Vape devices rechargeable and legal in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, advanced big-puff devices like the Lost Mary BM6000 feature rechargeable devices via USB-C charging and a smart 10ml refill container system that complies with UK TPD limits. Single-use Lost Mary devices like the QM600 are disposable vape devices that are ready to use out of the box and do not require recharging."
          }
        },
        {
          "@type": "Question",
          "name": "How do Elf Bar Pods and prefilled systems compare to disposables?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elf Bar Pods are prefilled pod systems that provide a reusable, cost-effective, and eco-friendly alternative to disposable vapes. By utilizing rechargeable devices and premium nicotine salt e-liquid (such as the Elf Bar ELFLIQ range), they deliver the same rich flavour ranges and smooth throat hits at a fraction of the cost."
          }
        },
        {
          "@type": "Question",
          "name": "What is the puff count and e-liquid capacity of the Hayati Pro Max?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Hayati Pro Max is a premium draw-activated disposable vape device that offers a substantial puff count of up to 4000 puffs. It leverages advanced mesh coil technology to ensure consistent vapour production and robust flavour extraction from the first inhale to the very last."
          }
        },
        {
          "@type": "Question",
          "name": "Can I recharge the Hayati Pro Ultra, and how long does it last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Hayati Pro Ultra is designed as a high-capacity rechargeable device with integrated USB-C charging. It provides a massive puff count of up to 25,000 puffs by combining a rechargeable internal battery with double-refillable e-liquid chambers, allowing you to easily swap between chambers for maximum longevity."
          }
        },
        {
          "@type": "Question",
          "name": "Are DMT Vapes on your store authentic and lab-tested?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our DMT Vapes are 100% authentic and sourced directly from audited production batches. Each DMT Vape Pen is built with strict quality controls, a reliable slim internal battery, and advanced safety standards to ensure smooth performance, consistent draw activation, and absolute purity."
          }
        },
        {
          "@type": "Question",
          "name": "How does The Vape Hub UK ensure the authenticity of its products?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At The Vape Hub UK, product authenticity is our highest priority. We source directly from official, audited manufacturer batches. Every Elf Bar, Lost Mary Vape, and Hayati device features a unique, secure QR code authenticator on its packaging, allowing customers to easily verify its lab-tested authenticity before use."
          }
        }
      ]
    }
  ];

  const seoFaqs = [
    {
      q: "Are Lost Mary Vape devices rechargeable and legal in the UK?",
      a: "Yes, advanced big-puff devices like the Lost Mary BM6000 feature rechargeable devices via USB-C charging and a smart 10ml refill container system that complies with UK TPD limits. Single-use Lost Mary devices like the QM600 are disposable vape devices that are ready to use out of the box and do not require recharging."
    },
    {
      q: "How do Elf Bar Pods and prefilled systems compare to disposables?",
      a: "Elf Bar Pods are prefilled pod systems that provide a reusable, cost-effective, and eco-friendly alternative to disposable vapes. By utilizing rechargeable devices and premium nicotine salt e-liquid (such as the Elf Bar ELFLIQ range), they deliver the same rich flavour ranges and smooth throat hits at a fraction of the cost."
    },
    {
      q: "What is the puff count and e-liquid capacity of the Hayati Pro Max?",
      a: "The Hayati Pro Max is a premium draw-activated disposable vape device that offers a substantial puff count of up to 4000 puffs. It leverages advanced mesh coil technology to ensure consistent vapour production and robust flavour extraction from the first inhale to the very last."
    },
    {
      q: "Can I recharge the Hayati Pro Ultra, and how long does it last?",
      a: "Yes, the Hayati Pro Ultra is designed as a high-capacity rechargeable device with integrated USB-C charging. It provides a massive puff count of up to 25,000 puffs by combining a rechargeable internal battery with double-refillable e-liquid chambers, allowing you to easily swap between chambers for maximum longevity."
    },
    {
      q: "How does The Vape Hub UK ensure the authenticity of its products?",
      a: "At The Vape Hub UK, product authenticity is our highest priority. We source directly from official, audited manufacturer batches. Every Elf Bar, Lost Mary Vape, and Hayati device features a unique, secure QR code authenticator on its packaging, allowing customers to easily verify its lab-tested authenticity before use."
    },
    {
      q: "Are the DMT Vapes authentic and how do they perform?",
      a: "Yes, the DMT Vape Pen at The Vape Hub UK is fully verified, authentic, and sourced directly from audited manufacturer batches. It is designed as a premium, slim-battery disposable vape pen engineered with advanced safety features and smooth airflow to deliver clean, robust, and consistent performance with every puff."
    }
  ];

  return (
    <div className="w-full">
      <Script id="homepage-entity-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchemas) }} />
      {/* 3. Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-10">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-5">
          <div className="text-[20vw] font-bold whitespace-nowrap leading-none select-none text-white font-space-grotesk tracking-tighter mix-blend-overlay">
            THE VAPE HUB
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-2 bg-surface border border-border px-4 py-1.5 rounded-full text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              UK&apos;s Most Trusted Supplier
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk leading-tight tracking-tight">
              Authentic <span className="text-primary">DMT Vapes</span>, Lost Mary, Elf Bar &amp; Hayati.
            </h1>
            
            <p className="text-lg text-gray-400 md:max-w-lg leading-relaxed">
              Find fully verified, lab-tested stock of premium DMT Vapes, Lost Mary Vape, Elf Bar, Elf Bar Pods, Hayati Pro Max, and Hayati Pro Ultra. Sourced directly, dispatched next day across London and the UK.
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
                <ShieldCheck className="w-5 h-5 text-whatsapp" /> 100% Authentic QR Verified
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Truck className="w-5 h-5 text-whatsapp" /> Next Day UK Dispatch
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-auto md:h-[600px] w-full mt-12 md:mt-0">
            <Image 
              src="/images/hero11.jpg" 
              alt="Buy Authentic Lost Mary Vape and Elf Bar Pods in UK" 
              title="The Vape Hub Premium Brands"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl border border-border/50 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
               <div className="bg-primary p-2 rounded-full"><Star className="w-6 h-6 text-white"/></div>
               <div>
                 <div className="font-bold text-lg leading-none">4.9/5</div>
                 <div className="text-xs text-gray-400">Based on 2,000+ Verified Reviews</div>
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
              <span>View &amp; Join Channel</span>
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
             <span>🛡️ 100% Authentic Brand Stock</span>
             <span>•</span>
             <span>⚡ Premium DMT Vapes</span>
             <span>•</span>
             <span>💨 Lost Mary Vape &amp; Elf Bar</span>
             <span>•</span>
             <span>💎 Hayati Pro Max &amp; Ultra</span>
             <span>•</span>
             <span>🚀 Next Day UK Dispatch</span>
             <span>•</span>
             <span>🛡️ 100% Authentic Brand Stock</span>
             <span>•</span>
             <span>⚡ Premium DMT Vapes</span>
             <span>•</span>
             <span>💨 Lost Mary Vape &amp; Elf Bar</span>
             <span>•</span>
             <span>💎 Hayati Pro Max &amp; Ultra</span>
        </div>
      </section>

      {/* 5. Features / Precision */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-auto h-[500px] w-full">
            <Image 
              src="/images/hero2.webp" 
              alt="Hayati Pro Max and Lost Mary Vape Selection" 
              title="Premium Vape Quality Control"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">Premium Vaping Experience, Guaranteed.</h2>
            <p className="text-gray-400 leading-relaxed max-w-lg mb-8">
              We focus on delivering high-performance disposable vape devices, slim pens, and prefilled pod systems that represent the pinnacle of industry standards. Every DMT Vape Pen, Lost Mary Vape, Elf Bar, and Hayati Pro Max is checked via strict authenticators, ensuring you receive 100% genuine devices.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold mb-1 text-white">Full-Spectrum Product Authenticity</h3>
                  <p className="text-sm text-gray-400">Zero compromises. Sourced strictly from audited manufacturing batches with batch-tested verification certificates for all DMT Vapes and premium disposable devices.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                <Zap className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold mb-1 text-white">Advanced Mesh Coil &amp; Battery Tech</h3>
                  <p className="text-sm text-gray-400">Featured in Hayati Pro Max, Lost Mary Vape, and our slim-battery DMT Vape Pens to unlock exceptional consistency, rich vapor, and eliminate dry hits.</p>
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

      {/* 9.5. Buying Guide & Comparison Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 border-t border-border">
        <div className="mb-12">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">Expert Advice</span>
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mt-2 mb-4">Device Comparison &amp; Buying Guide</h2>
          <p className="text-gray-400 max-w-2xl">
            Struggling to choose between a premium **DMT Vape**, a compact **Lost Mary Vape**, a traditional **Elf Bar**, or the long-lasting **Hayati Pro Ultra**? Our side-by-side comparison simplifies your purchase decision.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-background/50">
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-400">Device Model</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-400">Device Type</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-400">Puff Count</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-400">Battery &amp; Charging</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-400">Key Feature</th>
                <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-400">Best Suited For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr className="hover:bg-background/20 transition">
                <td className="p-4 font-bold text-white">
                  <Link href="/products/dmt-vape-pen" className="hover:text-primary transition">DMT Vape Pen</Link>
                </td>
                <td className="p-4 text-gray-300">Slim-Battery Disposable</td>
                <td className="p-4 text-primary font-bold">Premium Delivery</td>
                <td className="p-4 text-gray-300">Integrated battery (Draw-Activated)</td>
                <td className="p-4 text-gray-300">Slim form factor, leak-proof safety seals</td>
                <td className="p-4 text-gray-300">Users seeking highly reliable, premium, and authentic slim-profile devices.</td>
              </tr>
              <tr className="hover:bg-background/20 transition">
                <td className="p-4 font-bold text-white">
                  <Link href="/products/lost-mary-bm6000" className="hover:text-primary transition">Lost Mary Vape (BM6000)</Link>
                </td>
                <td className="p-4 text-gray-300">Big-Puff Disposable</td>
                <td className="p-4 text-primary font-bold">Up to 6,000</td>
                <td className="p-4 text-gray-300">650mAh (Rechargeable, USB-C)</td>
                <td className="p-4 text-gray-300">Smart 10ml auto-feed container</td>
                <td className="p-4 text-gray-300">Flavour enthusiasts wanting legal high-capacity options.</td>
              </tr>
              <tr className="hover:bg-background/20 transition">
                <td className="p-4 font-bold text-white">
                  <Link href="/products/elf-bar-600" className="hover:text-primary transition">Elf Bar 600</Link>
                </td>
                <td className="p-4 text-gray-300">Single-Use Disposable</td>
                <td className="p-4 text-primary font-bold">Up to 600</td>
                <td className="p-4 text-gray-300">360mAh (Pre-charged)</td>
                <td className="p-4 text-gray-300">Classic draw activation</td>
                <td className="p-4 text-gray-300">Beginners or vapers looking for pocket-sized simplicity.</td>
              </tr>
              <tr className="hover:bg-background/20 transition">
                <td className="p-4 font-bold text-white">
                  <Link href="/products" className="hover:text-primary transition">Elf Bar Pods (Prefilled)</Link>
                </td>
                <td className="p-4 text-gray-300">Prefilled Pod System</td>
                <td className="p-4 text-primary font-bold">Infinite (Reusable device)</td>
                <td className="p-4 text-gray-300">Rechargeable (Device sold separately)</td>
                <td className="p-4 text-gray-300">Eco-friendly magnetic click-fit pods</td>
                <td className="p-4 text-gray-300">Daily users wanting to reduce environmental impact.</td>
              </tr>
              <tr className="hover:bg-background/20 transition">
                <td className="p-4 font-bold text-white">
                  <Link href="/products/hayati-pro-max" className="hover:text-primary transition">Hayati Pro Max</Link>
                </td>
                <td className="p-4 text-gray-300">Premium Mid-Capacity</td>
                <td className="p-4 text-primary font-bold">Up to 4,000</td>
                <td className="p-4 text-gray-300">1400mAh (Non-rechargeable)</td>
                <td className="p-4 text-gray-300">Mesh coil technology</td>
                <td className="p-4 text-gray-300">Consistent, rich vapor and bold flavour ranges.</td>
              </tr>
              <tr className="hover:bg-background/20 transition">
                <td className="p-4 font-bold text-white">
                  <Link href="/products/hayati-pro-ultra-25k" className="hover:text-primary transition">Hayati Pro Ultra</Link>
                </td>
                <td className="p-4 text-gray-300">High-Puff Dual-Tank</td>
                <td className="p-4 text-primary font-bold">Up to 25,000</td>
                <td className="p-4 text-gray-300">850mAh (Rechargeable, USB-C)</td>
                <td className="p-4 text-gray-300">Dual 12ml prefilled chambers</td>
                <td className="p-4 text-gray-300">Heavy vapers searching for unmatched longevity.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. Brand Focus / SEO Text */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="bg-surface rounded-[40px] border border-border p-8 md:p-16">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">UK&apos;s Leading Supplier of Premium Brands.</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Welcome to The Vape Hub UK, the ultimate online supply house designed around the exact products and brands you search for. We understand that finding genuine **DMT Vapes**, **Lost Mary Vape**, **Elf Bar**, **Elf Bar Pods**, **Hayati Pro Max**, and **Hayati Pro Ultra** can be a challenge with so many cheap imitations online. That is why we commit to 100% product authenticity, lab-tested security, and next-day UK delivery.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether you are an individual shopper looking to buy a couple of devices or a retail store operator looking for competitive wholesale pricing, we structure our collections to facilitate easy browsing and fast checkouts. No fluff, no endless search walls. Just clean layouts, real specifications, and reliable deliveries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-2xl p-8 border border-border group hover:border-primary/50 transition">
              <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">DMT Vapes</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                The **DMT Vapes** selection is built for users who prioritize absolute purity, robust hardware, and reliable delivery. Sourced strictly from verified production lines, these slim pens feature top-tier safety mechanisms.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Each <Link href="/products/dmt-vape-pen" className="text-primary hover:underline font-bold">DMT Vape Pen</Link> is fully checked to offer exceptionally smooth draws, long battery life, and complete satisfaction for collectors and daily users seeking authentic, premium-grade builds.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border group hover:border-primary/50 transition">
              <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">Lost Mary Vape</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                The **Lost Mary Vape** range represents a breakthrough in both visual elegance and flavour consistency. Known for their pocket-friendly, ergonomic designs, these devices rely on sophisticated mesh coil technology to fully vaporize premium nicotine salt e-liquid.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                From the classic Lost Mary QM600 to the high-capacity, TPD-compliant <Link href="/products/lost-mary-bm6000" className="text-primary hover:underline font-bold">Lost Mary BM6000</Link> offering a generous puff count of 6000, we maintain a complete inventory of outstanding flavour ranges. Explore smooth hits, quick draw activation, and consistent output.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border group hover:border-primary/50 transition">
              <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">Elf Bar &amp; Elf Bar Pods</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                The name **Elf Bar** has become synonymous with hassle-free vaping. The <Link href="/products/elf-bar-600" className="text-primary hover:underline font-bold">Elf Bar 600</Link> is celebrated for its lightweight, cylindrical chassis and extensive selection of crisp fruit, menthol, and soda profiles.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                For a more sustainable and wallet-friendly setup, vapers are increasingly turning to **Elf Bar Pods**. These prefilled pod systems combine a reusable, rechargeable device with modular, magnetic pods, filled with the famous ELFLIQ nicotine salt e-liquid to preserve the legendary flavor profile without waste.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border group hover:border-primary/50 transition lg:mt-0 md:mt-4">
              <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">Hayati Pro Max &amp; Ultra</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                The Hayati range is designed for those who demand superior build quality and bold styling. The <Link href="/products/hayati-pro-max" className="text-primary hover:underline font-bold">Hayati Pro Max</Link> provides an unmatched draw-activated experience, featuring a crystal-clear outer body, advanced airflow, and up to 4000 puffs of pure flavour.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                For heavy users looking to maximize longevity, the <Link href="/products/hayati-pro-ultra-25k" className="text-primary hover:underline font-bold">Hayati Pro Ultra</Link> introduces a massive 25,000 puff capacity. This rechargeable device utilizes USB-C charging and an ingenious double-chamber rotating pod structure, allowing you to flip flavours and chambers instantly.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-border/50 text-center max-w-3xl mx-auto text-sm text-gray-500 font-medium">
            <p className="mb-4">
              The Vape Hub UK is structured around standardizing the online buying experience. We provide a clean, secure environment where customers can quickly analyze, compare, and order the exact products they require. By managing our supply chains directly and conducting thorough product audits, we protect you from counterfeit or faulty stock.
            </p>
            <p>
              If your daily setup relies on a **DMT Vape**, a **Lost Mary Vape**, a standard **Elf Bar**, a modular **Elf Bar Pods** system, or the durable **Hayati Pro Max** and **Hayati Pro Ultra**, we are your trusted UK source. Shop today and experience why we maintain an excellent reputation for product knowledge and customer support.
            </p>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-24 border-t border-border">
        <div className="text-center mb-12">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">Got Questions?</span>
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our premium selection, compatibility, and ordering policies.</p>
        </div>
        <div className="flex flex-col gap-4">
          {seoFaqs.map((faq, i) => (
            <AccordionItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>
      
      {/* 12. Final CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
          <div className="bg-primary rounded-[40px] p-12 text-center text-white relative overflow-hidden flex flex-col items-center min-h-[400px] justify-center">
            <Image
              src="/images/vape_wholesale_boxes.png"
              alt="Wholesale Elf Bar and Lost Mary Vape Supply UK"
              title="Bulk Vape Supplies Warehouse"
              fill
              sizes="100vw"
              className="object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40"></div>
           <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk z-10 mb-6">Restock Fast &amp; Secure.</h2>
           <p className="z-10 max-w-xl mx-auto text-lg mb-10 opacity-90">
             Whether you need a single disposable or a wholesale bulk package, The Vape Hub UK is your trusted source for authentic **DMT Vapes**, **Lost Mary Vape**, **Elf Bar**, **Elf Bar Pods**, **Hayati Pro Max**, and **Hayati Pro Ultra**. 
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
