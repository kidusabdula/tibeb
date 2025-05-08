'use client';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import { useCart } from './CartContext';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05 },
};

export default function ProductGrid({ initialProducts }: { initialProducts: Product[] }) {
  const { addToCart } = useCart();

  const handleAddToCart = async (product: Product) => {
    const cartItem: CartItem = {
      id: `cart-${Date.now()}`, // Unique ID for the cart item
      product_id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
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
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-accentGold text-primaryBg px-4 py-2 rounded hover:bg-highlightRed transition"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
