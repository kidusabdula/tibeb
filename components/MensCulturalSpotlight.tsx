"use client";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CulturalSpotlight() {
  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-playfair text-center mb-8">
          The Tradition of Men&apos;s Habesha Clothing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Men&apos;s Habesha clothing, such as the traditional “Kamis” shirt
              and vests, holds a special place in Ethiopian culture. These
              garments are often worn during significant events like weddings,
              religious ceremonies, and cultural celebrations, symbolizing
              dignity and heritage.
            </p>
            <p className="mb-4">
              The Kamis is typically made from handwoven cotton, featuring a
              loose fit and intricate embroidery along the collar and hem.
              Paired with a vest or shawl, these outfits are both functional and
              elegant, suitable for Ethiopia&apos;s diverse climates.
            </p>
            <p>
              At Tibeb, we honor these traditions by working with skilled
              artisans to create men&apos;s clothing that blends timeless
              craftsmanship with modern design. Whether for a formal event or a
              cultural gathering, our pieces are designed to make you feel proud
              of your heritage.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/mens-cultural-image1.jpg"
              alt="Men's Habesha 1"
              className="w-full h-48 object-cover rounded"
            />
            <img
              src="/mens-cultural-image2.jpg"
              alt="Men's Habesha 2"
              className="w-full h-48 object-cover rounded"
            />
            <img
              src="/mens-cultural-image3.jpg"
              alt="Men's Habesha 3"
              className="w-full h-48 object-cover rounded"
            />
            <img
              src="/mens-cultural-image4.jpg"
              alt="Men's Habesha 4"
              className="w-full h-48 object-cover rounded"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
