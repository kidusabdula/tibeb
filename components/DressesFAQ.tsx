'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DressesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What sizes are available for Habesha dresses?',
      answer: 'Our dresses are available in sizes XS to XXL. We also offer custom sizing for a perfect fit—contact us for more details.',
    },
    {
      question: 'How do I care for my Habesha dress?',
      answer: 'We recommend hand washing with mild detergent and air drying to preserve the fabric and embroidery. Avoid harsh chemicals and machine washing.',
    },
    {
      question: 'Can I wear a Habesha dress for non-traditional events?',
      answer: 'Absolutely! Habesha dresses are versatile and can be styled for various occasions, from casual outings to formal events. Check our Style Guide for tips.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary by location. Within Ethiopia, expect 3-5 business days. International orders may take 7-14 business days, depending on customs.',
    },
  ];

  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={faqVariants}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-playfair text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-secondaryBg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left py-4 flex justify-between items-center"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}