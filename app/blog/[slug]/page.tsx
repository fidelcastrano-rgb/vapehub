import { blogPosts, products } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Info } from 'lucide-react';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) return {};
  
  const seoTitle = `${post.title} | Vape Guides & safety | THE VAPE HUB UK`;
  const seoDesc = `${post.excerpt} Read our comprehensive safety guide and expert analysis at THE VAPE HUB UK.`;

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: {
      canonical: `https://www.thevapehub.co.uk/blog/${post.slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      images: [
        {
          url: `https://www.thevapehub.co.uk${post.image}`,
        }
      ]
    }
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    }
  };

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Script id={`schema-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        
        <Breadcrumbs items={[
          { label: 'Blog', href: '/blog' },
          { label: post?.title || 'Blog Post' }
        ]} />
        
        <div className="mb-8">
          <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 inline-block">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 border-l-2 border-border pl-4">
            <span className="text-white font-medium">{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric'})}</span>
          </div>
          <div className="mt-4 text-xs text-gray-500 italic">Disclaimer: This content is for informational purposes only. You must be 18+ to purchase vaping products.</div>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-border shadow-2xl">
          <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover" priority referrerPolicy="no-referrer" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none font-sans text-gray-300 leading-relaxed space-y-6 animate-fade-in">
          <p className="text-xl text-gray-200 font-medium">{post.excerpt}</p>
          
          <div className="space-y-6">
            {post.content.split('\n\n').map((para, idx) => {
              if (para.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-2xl font-bold font-space-grotesk text-white mt-8 mb-4">
                    {para.replace('### ', '')}
                  </h3>
                );
              }
              if (para.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-3xl font-bold font-space-grotesk text-white mt-10 mb-6">
                    {para.replace('## ', '')}
                  </h2>
                );
              }
              if (/^\d+\.\s+/.test(para)) {
                const lines = para.split(/\n?(?=\d+\.\s+)/).filter(Boolean);
                return (
                  <ol key={idx} className="list-decimal pl-6 space-y-3 bg-surface/40 p-6 rounded-2xl border border-border/60 my-6">
                    {lines.map((line, lidx) => {
                      const cleanLine = line.replace(/^\d+\.\s+/, '');
                      if (cleanLine.includes(':')) {
                        const parts = cleanLine.split(':');
                        return (
                          <li key={lidx} className="text-gray-300">
                            <strong className="text-white">{parts[0]}:</strong>
                            {parts.slice(1).join(':')}
                          </li>
                        );
                      }
                      return (
                        <li key={lidx} className="text-gray-300">
                          {cleanLine}
                        </li>
                      );
                    })}
                  </ol>
                );
              }
              return <p key={idx} className="text-gray-300">{para}</p>;
            })}
          </div>

          <div className="bg-surface border-l-4 border-primary p-6 rounded-r-xl my-8">
             <h4 className="flex items-center gap-2 font-bold text-white mb-2"><Info className="w-5 h-5 text-primary"/> Verified Standards</h4>
             <p className="text-sm m-0">At THE VAPE HUB UK, we verify every single product batch with official COAs. Sourcing from certified distributors guarantees TPD-compliant, authentic hardware of the highest safety class.</p>
          </div>

          <div className="bg-error/10 border-l-4 border-error p-6 rounded-r-xl my-8">
             <h4 className="flex items-center gap-2 font-bold text-white mb-2"><AlertTriangle className="w-5 h-5 text-error"/> Safety Advisory</h4>
             <p className="text-sm m-0 text-error/80">Vaping products are strictly age-restricted to adults 18+. Avoid purchasing hardware from untrusted sellers or direct message groups with unsecure links to protect your safety and product integrity.</p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-24 bg-surface rounded-3xl border border-border p-8 md:p-12 text-center">
           <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">Ready to order verified stock?</h3>
           <p className="text-gray-400 mb-8 max-w-lg mx-auto">Skip the fakes. Get next-day UK delivery on authentic wholesale and retail orders.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="https://wa.me/447341056054" target="_blank" rel="noopener noreferrer" className="bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition">WhatsApp Order</a>
             <Link href="/products" className="bg-background border border-border hover:border-gray-500 text-white font-bold py-4 px-8 rounded-xl transition">Shop All</Link>
           </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-border">
            <h3 className="text-2xl font-bold font-space-grotesk mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(rel => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-primary transition">
                   <div className="relative aspect-video">
                     <Image src={rel.image} alt={rel.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition duration-500" referrerPolicy="no-referrer"/>
                   </div>
                   <div className="p-4">
                     <div className="text-[10px] text-primary font-bold uppercase mb-2">{rel.category}</div>
                     <h4 className="font-bold text-sm leading-tight text-gray-200 group-hover:text-white transition">{rel.title}</h4>
                   </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
}
