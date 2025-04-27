'use client';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function OurStory() {
  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-playfair text-primaryBg mb-8">Our Story</h2>
        <p className="mb-4">
          Tibeb was founded in 2020 with a simple yet profound mission: to preserve and celebrate the rich cultural heritage of Ethiopia through traditional Habesha clothing. Our journey began when our founder, Selamawit Abebe, noticed a growing disconnect among younger generations from their cultural roots. Inspired by her grandmother’s handwoven dresses, Selamawit set out to create a brand that bridges tradition with modernity.
        </p>
        <p className="mb-4">
          What started as a small workshop in Addis Ababa has grown into a globally recognized e-commerce platform, offering a wide range of handcrafted dresses, men’s wear, and couples’ sets. We work closely with local artisans, many of whom have been weaving for generations, to ensure that each piece tells a story of heritage, craftsmanship, and love.
        </p>
        <p>
          At Tibeb, we believe that clothing is more than just fabric—it’s a connection to our past, a celebration of our present, and a legacy for our future. Join us in honoring the beauty of Ethiopian culture, one garment at a time.
        </p>
      </motion.div>
    </section>
  );
}
