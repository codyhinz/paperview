import React from 'react';
import contentCardBg from '../assets/contentcard.png';

// Updated PaperBlock specifically for content
const ContentPaperBlock = ({ children, color, className = '' }) => (
  <div className={`relative ${className}`}>
    <div className={`${color} rounded-lg relative p-0.5
      border-4 border-[#C86660] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
    >
      <div 
        className="rounded-lg"
        style={{ 
          backgroundImage: `url(${contentCardBg})`,
          backgroundRepeat: 'repeat'
        }}
      >
        {children}
      </div>
    </div>
  </div>
);

const ContentCard = ({ currentPage }) => (
  <ContentPaperBlock 
    color="bg-white"
    className="transition-opacity duration-300"
  >
    <div className="p-6">
      <h2 className="text-3xl font-black mb-4 text-gray-800">{currentPage}</h2>
      <div className="bg-[#D6D6C3] p-4 rounded-lg border-2 border-gray-300">
        <p className="text-gray-700">Welcome to your Paper Mario guide! Select a section from the menu to begin your adventure.</p>
      </div>
    </div>
  </ContentPaperBlock>
);

export default ContentCard;