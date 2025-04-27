'use client';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function OurImpact() {
  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-playfair text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              At Tibeb, we’re more than just a clothing brand—we’re a movement to preserve Ethiopian culture and empower communities. Since our founding, we’ve worked with over 50 local artisans, providing them with fair wages and opportunities to showcase their craft on a global stage.
            </p>
            <p className="mb-4">
              We’ve also partnered with local organizations to support education and training programs for young weavers, ensuring that traditional techniques are passed down to future generations. By choosing eco-friendly materials, we minimize our environmental footprint while celebrating the beauty of handwoven fabrics.
            </p>
            <p>
              Through every purchase, you’re helping us sustain these initiatives, making a meaningful impact on the lives of artisans and the preservation of Ethiopian heritage. Together, we’re weaving a brighter future.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/impact-image1.jpg" alt="Impact 1" className="w-full h-48 object-cover rounded" />
            <img src="/impact-image2.jpg" alt="Impact 2" className="w-full h-48 object-cover rounded" />
            <img src="/impact-image3.jpg" alt="Impact 3" className="w-full h-48 object-cover rounded" />
            <img src="/impact-image4.jpg" alt="Impact 4" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
