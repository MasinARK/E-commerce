// src/app/cart/page.tsx
'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';

export default function CartPage() {
  const { cart } = useCart();
  
  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Browse our products and add some items to your cart.</p>
        <Link 
          href="/products" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <CartSummary 
            subtotal={cart.subtotal} 
            tax={cart.tax} 
            total={cart.total} 
          />
          <div className="mt-6">
            <Link
              href="/checkout"
              className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// src/components/CartItem.tsx
'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/cart';
import { useCart } from '@/hooks/useCart';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;
  
  return (
    <div className="flex items-center border-b py-4">
      <div className="relative h-24 w-24 flex-shrink-0">
        {product.images.length > 0 && (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
        )}
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-gray-500">${(product.price / 100).toFixed(2)}</p>
      </div>
      
      <div className="flex items-center ml-6">
        <button
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="px-3 py-1 border rounded-l"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="px-4 py-1 border-t border-b">{quantity}</span>
        <button
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="px-3 py-1 border rounded-r"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      
      <div className="ml-6 text-right">
        <div className="text-lg font-medium">${((product.price * quantity) / 100).toFixed(2)}</div>
        <button
          onClick={() => removeItem(product.id)}
          className="text-red-600 hover:text-red-800 text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

// src/components/CartSummary.tsx
interface CartSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
}

export default function CartSummary({ subtotal, tax, total }: CartSummaryProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${(subtotal / 100).toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${(tax / 100).toFixed(2)}</span>
        </div>
        
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${(total / 100).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
