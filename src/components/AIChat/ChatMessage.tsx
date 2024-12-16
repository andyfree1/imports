import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../../hooks/useAIChat';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${message.isBot ? 'items-start' : 'items-start flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        message.isBot ? 'bg-primary-light' : 'bg-white/10'
      }`}>
        {message.isBot ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
      </div>
      <div className={`max-w-[80%] rounded-xl px-4 py-2 ${
        message.isBot ? 'bg-white/10 text-white' : 'bg-primary-light text-white'
      }`}>
        <div 
          className="text-sm prose prose-invert"
          dangerouslySetInnerHTML={{ __html: message.text }}
        />
      </div>
    </div>
  );
}