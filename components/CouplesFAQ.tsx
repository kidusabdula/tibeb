'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CouplesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What sizes are available for couples sets?',
      answer: 'Our couples sets are available in sizes XS to XXL for women and S to XXL for men. Custom sizing is also available—contact us for more details.',
    },
    {
      question: 'How do I care for our matching set?',
      answer: 'Hand wash with mild detergent and air dry to preserve the fabric and embroidery. Avoid machine washing to maintain the quality of both pieces.',
    },
    {
      question: 'Can we wear our set for non-traditional events?',
      answer: 'Yes! Our couples sets are versatile and can be styled for various occasions, from casual outings to formal events. Check our Style Guide for tips.',
    },
    {
      question: 'What is the shipping time for couples sets?',
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
