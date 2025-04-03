import React from 'react';

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 
        opacity-50 blur-3xl animate-aurora"></div>
    </div>
  );
};

export default AuroraBackground;