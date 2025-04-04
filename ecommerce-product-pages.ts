// src/app/products/page.tsx
import { Suspense } from 'react';
import ProductList from '@/components/ProductList';
import { getProducts } from '@/lib/db';

export default async function ProductsPage() {
  const products = await getProducts();
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductList products={products} />
      </Suspense>
    </div>
  );
}

// src/app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductById } from '@/lib/db';
import AddToCartButton from '@/components/AddToCartButton';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);
  
  if (!product) {
    notFound();
  }
  
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          {product.images.length > 0 && (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain"
            />
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-2xl font-bold mb-6">${(product.price / 100).toFixed(2)}</div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
