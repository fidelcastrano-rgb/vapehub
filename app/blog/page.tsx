import { blogPosts } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Safety Guides | THE VAPE HUB UK',
  description: 'Latest news, statutory safety regulations, and product reviews in the UK vaping scene.',
  alternates: {
    canonical: 'https://thevapehub.co.uk/blog',
  }
};

export default function BlogIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-4 tracking-tight">The Vape Hub Blog.</h1>
        <p className="text-xl text-gray-400">Industry news, safety guides, and product comparisons.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <article key={post.slug} className="group flex flex-col bg-surface border border-border rounded-2xl overflow-hidden hover:border-gray-600 transition">
            <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
            </Link>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric'})}</span>
              </div>
              <h2 className="text-xl font-bold font-space-grotesk mb-3 group-hover:text-primary transition leading-tight">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-400 line-clamp-3 mb-6 flex-1">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="mt-auto text-sm font-bold flex items-center gap-2 hover:text-primary transition">
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
