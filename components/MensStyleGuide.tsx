'use client';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function StyleGuide() {
  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-playfair text-center mb-8">How to Style Men&apos;s Habesha Clothing</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">1. Add a Traditional Vest</h3>
              <p>
                Pair your Kamis shirt with a handwoven vest for a polished look. The vest adds structure and elegance, making it perfect for formal occasions like weddings or cultural events.
              </p>
            </div>
            <img src="/mens-style-guide1.jpg" alt="Vest" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-last">
              <h3 className="text-xl font-medium mb-2">2. Accessorize with a Shawl</h3>
              <p>
                A lightweight shawl draped over the shoulder adds a traditional touch to your outfit. Choose a shawl with subtle embroidery to complement the Kamis shirt.
              </p>
            </div>
            <img src="/mens-style-guide2.jpg" alt="Shawl" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">3. Complete with Leather Shoes</h3>
              <p>
                Traditional leather shoes in black or brown pair beautifully with men&apos;s Habesha clothing. For a modern twist, opt for loafers or dress shoes in a neutral tone.
              </p>
            </div>
            <img src="/mens-style-guide3.jpg" alt="Shoes" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
