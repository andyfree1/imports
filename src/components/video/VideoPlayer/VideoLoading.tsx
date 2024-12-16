import React from 'react';
import { Loader } from 'lucide-react';

export default function VideoLoading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Loader className="w-12 h-12 text-white animate-spin" />
    </div>
  );
}