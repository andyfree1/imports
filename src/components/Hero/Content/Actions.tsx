import React from 'react';
import { Bot, Code } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActionsProps {
  onChatClick: () => void;
}

export default function Actions({ onChatClick }: ActionsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-wrap gap-6 justify-center"
    >
      <a
        href="#portfolio"
        className="group px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/20 relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-primary-light/0 via-primary-light/30 to-primary-light/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <Code className="w-5 h-5 relative z-10" />
        <span className="relative z-10">View Portfolio</span>
      </a>
      
      <button
        onClick={onChatClick}
        className="group px-8 py-3 bg-[#A5D7E8]/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-[#A5D7E8]/20 transition-all duration-300 flex items-center gap-2 border border-[#A5D7E8]/20 relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#A5D7E8]/0 via-[#A5D7E8]/30 to-[#A5D7E8]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <Bot className="w-5 h-5 relative z-10" />
        <span className="relative z-10">Chat with AI Assistant</span>
      </button>
    </motion.div>
  );
}