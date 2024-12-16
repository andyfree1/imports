import React, { useState, useRef, useEffect } from 'react';
import { X, Bot, Loader } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useAIChat } from '../../hooks/useAIChat';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, isTyping, sendMessage } = useAIChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isOpen) {
    return (
      <button
        onClick={onClose}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary-light flex items-center justify-center shadow-lg hover:bg-primary-light/80 transition-colors z-50 group"
      >
        <div className="absolute -top-12 right-0 px-4 py-2 bg-white rounded-lg text-primary-dark font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with AI
        </div>
        <Bot className="w-6 h-6 text-white" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-primary-dark rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
      <div className="p-4 bg-primary-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-white" />
          <h3 className="text-white font-semibold">AI Assistant (GPT-4)</h3>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        {isTyping && (
          <div className="flex gap-2 items-center text-white/50">
            <Loader className="w-4 h-4 animate-spin" />
            <span>AI is thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-white/10">
        <ChatInput onSend={sendMessage} disabled={isTyping} />
      </div>
    </div>
  );
}