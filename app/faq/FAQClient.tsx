'use client';

import { useState } from 'react';
import { AccordionItem } from '@/components/ui/AccordionItem';
import { Search } from 'lucide-react';
import Link from 'next/link';

export function FAQClient({ faqs }: { faqs: any[] }) {
  const [search, setSearch] = useState('');
  
  // Flatten all faqs to search them
  const allQuestions = faqs.flatMap((f: any) => f.questions.map((q: any) => ({ ...q, category: f.category })));
  const filtered = search.trim() ? allQuestions.filter((q: any) => 
    q.q.toLowerCase().includes(search.toLowerCase()) || 
    q.a.toLowerCase().includes(search.toLowerCase())
  ) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 animate-fade-in">Frequently Asked Questions.</h1>
        <div className="max-w-xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search for answers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface border border-border text-white px-6 py-4 rounded-full pl-14 focus:outline-none focus:border-primary transition"
          />
          <Search className="w-6 h-6 text-gray-500 absolute left-5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-12">
        {/* Sticky Sidebar */}
        <div className="md:col-span-3 hidden md:block">
          <div className="sticky top-24 bg-surface border border-border p-6 rounded-2xl">
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {faqs.map((cat: any) => (
                <li key={cat.category}>
                  <a href={`#cat-${cat.category.replace(/\s+/g, '-')}`} className="hover:text-primary transition">{cat.category}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="md:col-span-9 flex flex-col gap-12">
          {search.trim() ? (
            <div>
              <h3 className="text-xl font-bold font-space-grotesk mb-6 text-primary">Search Results ({filtered.length})</h3>
              {filtered.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {filtered.map((item: any, i: number) => (
                    <AccordionItem key={i} question={item.q} answer={item.a} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No matching questions found.</p>
              )}
            </div>
          ) : (
            faqs.map((cat: any) => (
              <div key={cat.category} id={`cat-${cat.category.replace(/\s+/g, '-')}`} className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-space-grotesk mb-6">{cat.category}</h2>
                <div className="flex flex-col gap-4">
                  {cat.questions.map((q: any, i: number) => (
                    <AccordionItem key={i} question={q.q} answer={q.a} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-24 bg-surface border border-border rounded-2xl p-12 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold font-space-grotesk mb-4">Still have questions?</h2>
        <p className="text-gray-400 mb-8 max-w-lg">Our support team is available via email or WhatsApp to help with any ordering or product specific inquiries.</p>
        <Link href="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
