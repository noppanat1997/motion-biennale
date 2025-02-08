"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Creating Spaces<br />
            That Inspire
          </motion.h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Award-winning architectural studio crafting innovative and sustainable spaces.
          </p>
        </div>
        <div className="relative h-[60vh]">
          <Image
            src="/images/house1.avif"
            alt="Featured architecture"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
};
