import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ProductContent } from './ProductPageClient';
import Script from 'next/script';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);
  if (!product) return {};
  
  return {
    title: `${product.name} | THE VAPE HUB UK`,
    description: product.description.substring(0, 160).replace(/\n/g, " "),
    alternates: {
      canonical: `https://www.thevapehub.co.uk/products/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description.substring(0, 160).replace(/\n/g, " "),
      images: [
        {
          url: `https://www.thevapehub.co.uk${product.image}`,
        }
      ]
    }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) return notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://www.thevapehub.co.uk${product.image}`,
    "description": product.description.substring(0, 160).replace(/\n/g, " "),
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "GBP",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "url": `https://www.thevapehub.co.uk/products/${product.slug}`
    },
    "brand": {
      "@type": "Brand",
      "name": "THE VAPE HUB UK"
    }
  };

  return (
    <>
      <Script id={`schema-prod-${product.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <ProductContent product={product} />
    </>
  );
}
