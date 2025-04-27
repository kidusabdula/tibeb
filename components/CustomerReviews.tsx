'use client';
import { motion } from 'framer-motion';

const reviewVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function CustomerReviews({ reviews }: { reviews: { quote: string; name: string; photo: string }[] }) {
  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            variants={reviewVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 rounded shadow"
          >
            <p className="text-textDark mb-4">"{review.quote}"</p>
            <div className="flex items-center">
              <img src={review.photo} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
              <span className="font-medium">{review.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}