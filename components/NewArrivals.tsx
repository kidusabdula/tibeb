'use client';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import Image from 'next/image';

export default function NewArrivals({ products }: { products: Product[] }) {
  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded shadow"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={192}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-accentGold">{`ETB ${product.price}`}</p>
            <button className="mt-2 bg-accentGold text-primaryBg px-4 py-2 rounded hover:bg-highlightRed transition">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}