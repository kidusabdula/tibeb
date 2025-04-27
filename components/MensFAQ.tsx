'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MensFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What sizes are available for men&apos;s Habesha clothing?',
      answer: 'Our men&apos;s clothing is available in sizes S to XXL. Custom sizing is also available—contact us for more details.',
    },
    {
      question: 'How do I care for my Kamis shirt?',
      answer: 'Hand wash with mild detergent and air dry to maintain the fabric&apos;s quality. Avoid machine washing to preserve the embroidery.',
    },
    {
      question: 'Can I wear a Kamis shirt casually?',
      answer: 'Yes! Pair it with trousers or jeans for a modern, casual look. Check our Style Guide for more tips.',
    },
    {
      question: 'What is the shipping time for men&apos;s clothing?',
      answer: 'Within Ethiopia, expect 3-5 business days. International orders may take 7-14 business days, depending on customs.',
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
