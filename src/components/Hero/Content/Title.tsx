import React from 'react';
import { motion } from 'framer-motion';

export default function Title() {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-7xl lg:text-8xl font-bold mb-6 text-white relative"
    >
      <span className="relative inline-block">
        Andrew Freeman
        <span className="absolute -inset-1 bg-gradient-to-r from-primary-light/0 via-primary-light/30 to-primary-light/0 blur-sm animate-shimmer" />
      </span>
    </motion.h1>
  );
}