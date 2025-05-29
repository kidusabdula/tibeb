'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import { useCart } from '@/components/CartContext';

const BASE_URL = 'http://localhost:3000';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`${BASE_URL}/api/products/${params.id}`, { cache: 'no-store' });
      if (!res.ok) {
        router.push('/not-found');
        return;
      }
      const data = await res.json();
      if (!data) {
        router.push('/not-found');
        return;
      }
      setProduct(data);
    };
    fetchProduct();
  }, [params.id, router]);

  if (!product) {
    return <div className="min-h-screen bg-secondaryBg text-textDark py-12 px-6">Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      user_id: '', // This should be populated with actual user ID
      product_id: product.id,
      quantity,
      ...product
    });
  };

  return (
    <div className="min-h-screen bg-secondaryBg text-textDark py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Main Image */}
        <div className="w-full md:w-2/5">
          <img src={product.image} alt={product.name} className="w-full h-196 object-cover rounded-lg" />
        </div>
        {/* Product Details */}
        <div className="w-full md:w-3/5 bg-primaryBg p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-playfair text-accentGold mb-4">{product.name}</h1>
          <p className="text-2xl text-white mb-4">${product.price}</p>
          <p className="mb-4 text-white">{product.description}</p>
          {/* Size Selection */}
          <div className="mb-4">
            <label className="block text-white mb-2">Size</label>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map((size) => (
                <button key={size} className="px-4 py-2 border rounded hover:bg-accentGold hover:text-white">
                  {size}
                </button>
              ))}
              <button className="px-4 py-2 border rounded hover:bg-accentGold hover:text-white">Custom Made</button>
            </div>
          </div>
          {/* Quantity and Add to Cart */}
          <div className="mb-4 flex items-center gap-4">
            <label className="text-white">Qty</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              min={1}
              className="w-16 p-1 border rounded"
            />
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-accentGold text-primaryBg rounded hover:bg-opacity-90"
            >
              Add to Cart
            </button>
          </div>
          {/* Delivery Info */}
          <ul className="text-sm text-white mt-4">
            <li>Free worldwide delivery</li>
            <li>Processing time to 4 days</li>
            <li>Delivery time to 4 weeks</li>
            <li>Includes netela/shawl</li>
            <li>Hand wash/dry cleaning</li>
          </ul>
          <div className="mt-4 p-2 bg-gray-100 rounded text-center">
            <p className="text-sm">FREE SHIPPING & EASY RETURNS</p>
            <p className="text-sm">Delivered to your door, on us</p>
          </div>
        </div>
      </div>
    </div>
  );
}