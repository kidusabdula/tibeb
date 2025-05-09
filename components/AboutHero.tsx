'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <div className="relative h-[80vh]">
      {/* Video for desktop */}
      <div className="hidden md:block absolute inset-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="https://eftwxcqecemhuvobwvtb.supabase.co/storage/v1/object/public/videos//hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Image for mobile */}
      <div className="md:hidden absolute inset-0">
        <Image src="/about-hero-image.jpg" alt="About Hero" layout="fill" objectFit="cover" priority />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-playfair mb-4">
          About Tibeb
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-2xl mb-8 max-w-2xl">
          Preserving the Beauty of Ethiopian Culture Through Traditional Habesha Clothing
        </motion.p>
      </motion.div>
    </div>
  );
}
