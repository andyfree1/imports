import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={disabled}
        placeholder="Ask me anything..."
        className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent"
      />
      <button
        type="submit"
        disabled={disabled || !message.trim()}
        className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-light/80 transition-colors"
      >
        <Send className="w-5 h-5 text-white" />
      </button>
    </form>
  );
}