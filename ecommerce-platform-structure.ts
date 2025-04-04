// File structure for our e-commerce platform
src/
  ├── app/
  │   ├── layout.tsx                // Root layout with navigation
  │   ├── page.tsx                  // Homepage
  │   ├── products/
  │   │   ├── page.tsx              // Product listing page
  │   │   └── [id]/
  │   │       └── page.tsx          // Product detail page
  │   ├── cart/
  │   │   └── page.tsx              // Shopping cart page
  │   ├── checkout/
  │   │   └── page.tsx              // Checkout page
  │   └── success/
  │       └── page.tsx              // Payment success page
  ├── components/
  │   ├── ui/                       // UI components
  │   │   ├── Button.tsx
  │   │   ├── Card.tsx
  │   │   ├── Input.tsx
  │   │   └── ...
  │   ├── ProductCard.tsx           // Product display component
  │   ├── ProductList.tsx           // Product list component
  │   ├── CartItem.tsx              // Cart item component
  │   ├── CartSummary.tsx           // Cart summary component
  │   ├── CheckoutForm.tsx          // Checkout form component
  │   └── Navigation.tsx            // Navigation bar component
  ├── lib/
  │   ├── db.ts                     // Database utilities
  │   └── stripe.ts                 // Stripe utilities
  ├── hooks/
  │   ├── useCart.ts                // Cart management hook
  │   └── useProducts.ts            // Product fetching hook
  ├── types/
  │   ├── product.ts                // Product type definitions
  │   └── cart.ts                   // Cart type definitions
  └── utils/
      ├── api.ts                    // API utilities
      └── formatters.ts             // Formatting utilities
