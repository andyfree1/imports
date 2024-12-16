import React from 'react';

interface VideoContainerProps {
  children: React.ReactNode;
}

export default function VideoContainer({ children }: VideoContainerProps) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-gray-900" style={{ paddingBottom: '56.25%' }}>
      {children}
    </div>
  );
}