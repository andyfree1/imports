import React from 'react';
import { motion } from 'framer-motion';

export default function Description() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl lg:text-2xl mb-12 text-[#A5D7E8] font-light max-w-2xl mx-auto leading-relaxed"
    >
      Pioneering the intersection of Sales, Technology, and Entertainment through{' '}
      <span className="relative inline-block px-2 group">
        <span>AI Innovation</span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A5D7E8]/50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </span>
    </motion.div>
  );
}