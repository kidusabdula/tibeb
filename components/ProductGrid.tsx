'use client';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import { useCart } from './CartContext';
import { CartItem } from '@/types';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05 },
};

export default function ProductGrid({ initialProducts }: { initialProducts: Product[] }) {
  const { addToCart } = useCart();

  const handleAddToCart = async (product: Product) => {
    if (product.stock <= 0) {
      alert('This product is out of stock.');
      return;
    }

    const cartItem: CartItem = {
      id: `cart-${Date.now()}`,
      user_id: '', // Will be set by the API
      product_id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    await addToCart(cartItem);
  };

  return (
    <section id="products" className="py-12 px-6 bg-secondaryBg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {initialProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            className="bg-white p-4 rounded shadow"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-accentGold">{`ETB ${product.price}`}</p>
            {product.is_sale && (
              <p className="text-highlightRed text-sm">Sale: ETB {product.sale_price}</p>
            )}
            {product.stock <= 0 && (
              <p className="text-red-600 text-sm">Out of Stock</p>
            )}
            <button
              onClick={() => handleAddToCart(product)}
              disabled={product.stock <= 0}
              className={`mt-2 px-4 py-2 rounded transition ${
                product.stock <= 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-accentGold text-primaryBg hover:bg-highlightRed'
              }`}
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}