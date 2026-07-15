import { faqs } from '@/lib/data';
import { FAQClient } from './FAQClient';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Help & Support | THE VAPE HUB UK',
  description: 'Find answers to common questions about wholesale ordering, shipping, authentic products, and lab test reports.',
  alternates: {
    canonical: 'https://www.thevapehub.co.uk/faq',
  }
};

export default function FAQPage() {
  const allQuestions = faqs.flatMap(f => f.questions.map(q => ({ ...q, category: f.category })));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(q => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a
      }
    }))
  };

  return (
    <>
      <Script 
        id="faq-dynamic-schema" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 -mb-16">
        <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
      </div>
      <FAQClient faqs={faqs} />
    </>
  );
}
