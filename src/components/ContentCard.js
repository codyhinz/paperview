// src/components/ContentCard.js
import React from 'react';
import { ContentPaperBlock } from './common/PaperComponents';
import HomeContent from './pages/HomeContent';
import TipsAndTricks from './pages/TipsAndTricks';

const ComingSoonContent = ({ section }) => (
  <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
    <p className="text-gray-700">
      The {section} section is coming soon! Check back later for detailed information and guides.
    </p>
  </div>
);

const ContentCard = ({ currentPage }) => {
  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <HomeContent />;
      case 'Tips & Tricks':
        return <TipsAndTricks />;
      default:
        return <ComingSoonContent section={currentPage} />;
    }
  };

  return (
    <ContentPaperBlock 
      color="bg-white"
      className="transition-opacity duration-300"
    >
      <div className="p-6">
        <h2 className="text-3xl font-black mb-4 text-gray-800">{currentPage}</h2>
        {renderContent()}
      </div>
    </ContentPaperBlock>
  );
};

export default ContentCard;