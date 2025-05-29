'use client';
import Link from 'next/link';
import { useCart } from './CartContext';
import { Product } from '@/types';

export default function ProductGrid({ initialProducts }: { initialProducts: Product[] }) {
  const { addToCart } = useCart();

  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">Our Dresses</h2>
      <div data-testid="product-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {initialProducts.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="block">
            <div className="bg-white p-4 rounded shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h4 className="text-lg font-medium">{product.name}</h4>
              <p className="text-accentGold">{`ETB ${product.price}`}</p>
              <button
                onClick={(e) => { 
                  e.preventDefault(); 
                  addToCart({
                    user_id: '', // This should be populated with actual user ID
                    product_id: product.id,
                    quantity: 1,
                    ...product
                  }); 
                }}
                className="mt-2 px-4 py-2 bg-accentGold text-primaryBg rounded hover:bg-opacity-90 transition w-full"
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}