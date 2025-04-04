// src/lib/db.ts
import { Product } from '@/types/product';

// Mock database with sample products
// In a real application, you would use a database like MongoDB, PostgreSQL, etc.
const products: Product[] = [
  {
    id: '1',
    name: 'Premium Headphones',
    description: 'High-quality wireless headphones with noise cancellation technology and premium sound.',
    price: 19999, // $199.99
    images: ['/api/placeholder/400/400'],
    category: 'Electronics',
    stock: 15,
    featured: true
  },
  {
    id: '2',
    name: 'Fitness Smartwatch',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    price: 14999, // $149.99
    images: ['/api/placeholder/400/400'],
    category: 'Electronics',
    stock: 20
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and eco-friendly cotton t-shirt, perfect for everyday wear.',
    price: 2999, // $29.99
    images: ['/api/placeholder/400/400'],
    category: 'Clothing',
    stock: 50
  },
  {
    id: '4',
    name: 'Stainless Steel Water Bottle',
    description: 'Keep your drinks hot or cold with this durable, leak-proof stainless steel bottle.',
    price: 2499, // $24.99
    images: ['/api/placeholder/400/400'],
    category: 'Accessories',
    stock: 35
  },
  {
    id: '5',
    name: 'Premium Yoga Mat',
    description: 'Non-slip, eco-friendly yoga mat with perfect cushioning for your practice.',
    price: 5999, // $59.99
    images: ['/api/placeholder/400/400'],
    category: 'Fitness',
    stock: 25,
    featured: true
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with rich sound and 12-hour battery life.',
    price: 8999, // $89.99
    images: ['/api/placeholder/400/400'],
    category: 'Electronics',
    stock: 18
  },
];

// Get all products
export async function getProducts(): Promise<Product[]> {
  // Simulate database fetch delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return products;
}

// Get product by ID
export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate database fetch delay
  await new Promise(resolve => setTimeout(resolve, 200));
  return products.find(product => product.id === id);
}

// Get featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate database fetch delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return products.filter(product => product.featured);
}

// Get products by category
export async function getProductsByCategory(category: string): Promise<Product[]> {
  // Simulate database fetch delay
  await new Promise(resolve => setTimeout(resolve, 400));
  return products.filter(product => product.category === category);
}

// Search products
export async function searchProducts(query: string): Promise<Product[]> {
  // Simulate database fetch delay
  await new Promise(resolve => setTimeout(resolve, 600));
  const lowerCaseQuery = query.toLowerCase();
  
  return products.filter(
    product => 
      product.name.toLowerCase().includes(lowerCaseQuery) || 
      product.description.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery)
  );
}
