// src/app/success/page.tsx (continued)
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/hooks/useCart';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();
  
  useEffect(() => {
    // Clear the cart when the success page is loaded
    clearCart();
    
    // You could also verify the session and save order to your database here
    if (sessionId) {
      // Optional: Verify payment and create order in DB
      // verifyPaymentAndCreateOrder(sessionId);
    }
  }, [clearCart, sessionId]);
  
  return (
    <div className="container mx-auto py-16 text-center">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Successful!</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase.</p>
        
        {sessionId && (
          <p className="mb-6">
            Your order confirmation number: <span className="font-semibold">{sessionId}</span>
          </p>
        )}
        
        <p className="text-gray-600 mb-8">
          We've sent a confirmation email with your order details and tracking information.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
          <Link
            href="/account/orders" // You would implement this page for order history
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            View Order
          </Link>
        </div>
      </div>
    </div>
  );
}
