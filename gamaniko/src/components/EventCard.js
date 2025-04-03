import React from 'react';

const InfiniteMenu = ({ items }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border-y border-gray-700 overflow-hidden">
      <div className="container mx-auto px-4 py-4">
        <div className="flex space-x-8 animate-scroll">
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {item}
              </span>
            </div>
          ))}
          {/* Duplicate items for infinite scroll effect */}
          {items.map((item, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0">
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMenu; 