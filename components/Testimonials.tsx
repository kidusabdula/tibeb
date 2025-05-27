'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials({ testimonials }: { testimonials: { quote: string; name: string; photo: string }[] }) {
  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded shadow"
          >
            <p className="text-textDark mb-4">&quot;{testimonial.quote}&quot;</p>
            <div className="flex items-center">
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mr-4"
                priority
              />
              <span className="font-medium">{testimonial.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}