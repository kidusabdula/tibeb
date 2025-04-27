'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GeneralFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Tibeb?',
      answer: 'Tibeb is an e-commerce platform dedicated to preserving Ethiopian culture through traditional Habesha clothing. We offer a wide range of handcrafted dresses, men’s wear, and couples’ sets.',
    },
    {
      question: 'Where are your products made?',
      answer: 'All our products are made in Ethiopia by skilled local artisans who use traditional weaving and embroidery techniques passed down through generations.',
    },
    {
      question: 'How can I contact Tibeb?',
      answer: 'You can reach us via email at support@tibeb.com or by phone at +251-912-345-678. We’re also available through our Contact Us page.',
    },
  ];

  return (
    <section className="py-12 px-6 bg-secondaryBg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={faqVariants}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-playfair text-primaryBg text-center mb-8">General Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-primaryBg">
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
