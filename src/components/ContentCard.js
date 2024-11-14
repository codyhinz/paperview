import React from 'react';
import PaperBlock from './PaperBlock';

const ContentCard = ({ currentPage }) => (
  <PaperBlock 
    color="bg-white" 
    rotate={1} 
    className="transform hover:scale-[1.01] transition-transform"
    animationDelay={1.3}
  >
    <div className="p-6">
      <h2 className="text-3xl font-black mb-4 text-gray-800">{currentPage}</h2>
      <div className="bg-gray-100 p-4 rounded-lg border-2 border-gray-300 unfold-vertical"
           style={{ animationDelay: '1.4s' }}>
        <p className="text-gray-700">Welcome to your Paper Mario guide! Select a section from the menu to begin your adventure.</p>
      </div>
    </div>
  </PaperBlock>
);

export default ContentCard;
