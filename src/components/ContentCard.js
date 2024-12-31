import React from 'react';
import { ContentPaperBlock } from './common/PaperComponents';
import HomeContent from './pages/HomeContent';
import TipsAndTricks from './pages/TipsAndTricks';
import ExperienceFarmingGuide from './pages/ExperienceFarmingGuide';
import BadgesPage from './pages/BadgesPage';

// ComingSoon component for pages that aren't implemented yet
const ComingSoonContent = ({ section }) => (
  <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
    <p className="text-gray-700">
      The {section} section is coming soon! Check back later for detailed information and guides.
    </p>
  </div>
);

// Chapter content components
const ChapterContent = ({ number }) => (
  <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Chapter {number}</h2>
    <p className="text-gray-700">
      Detailed walkthrough for Chapter {number} coming soon. This will include enemy information, 
      item locations, and strategy guides.
    </p>
  </div>
);

const ContentCard = ({ currentPage, className = '' }) => {
  // Helper function to render chapter content
  const isChapter = (page) => {
    return page.startsWith('Chapter ');
  };

  const getChapterNumber = (page) => {
    return page.replace('Chapter ', '');
  };

  const renderContent = () => {
    // Check for chapter pages first
    if (isChapter(currentPage)) {
      return <ChapterContent number={getChapterNumber(currentPage)} />;
    }

    // Handle other pages
    switch (currentPage) {
      case 'Home':
        return <HomeContent />;
      case 'Tips & Tricks':
        return <TipsAndTricks />;
      case 'Experience Farms':
        return <ExperienceFarmingGuide />;
      case 'Badges':
        return <BadgesPage />;
      case 'Prologue':
        return (
          <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Prologue</h2>
            <p className="text-gray-700">
              The beginning of your adventure in Rogueport. Detailed walkthrough coming soon.
            </p>
          </div>
        );
      case 'Shops':
        return (
          <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop Locations</h2>
            <p className="text-gray-700">
              A comprehensive guide to all shops in the game. Coming soon.
            </p>
          </div>
        );
      case 'Recipes':
        return (
          <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cooking Recipes</h2>
            <p className="text-gray-700">
              Complete list of recipes and cooking locations coming soon.
            </p>
          </div>
        );
      case 'Tattle Log':
        return (
          <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tattle Log</h2>
            <p className="text-gray-700">
              Complete collection of Goombella's tattle information coming soon.
            </p>
          </div>
        );
      case 'Trouble Center':
        return (
          <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Trouble Center</h2>
            <p className="text-gray-700">
              Guide to all Trouble Center missions and rewards coming soon.
            </p>
          </div>
        );
      case 'Money Making':
        return (
          <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Money Making Guide</h2>
            <p className="text-gray-700">
              Best methods for earning coins coming soon.
            </p>
          </div>
        );
      case 'Pit of 100 Trials':
        return (
          <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pit of 100 Trials Guide</h2>
            <p className="text-gray-700">
              Complete strategy guide for conquering the Pit of 100 Trials coming soon.
            </p>
          </div>
        );
      case 'Badge Builds':
        return (
          <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Badge Builds</h2>
            <p className="text-gray-700">
              Popular and effective badge combinations for different playstyles coming soon.
            </p>
          </div>
        );
      default:
        return <ComingSoonContent section={currentPage} />;
    }
  };

  return (
    <ContentPaperBlock 
      color="bg-white"
      className={`transition-opacity duration-300 ${className}`}
    >
      <div className="p-6">
        <h2 className="text-3xl font-black mb-4 text-gray-800">{currentPage}</h2>
        {renderContent()}
      </div>
    </ContentPaperBlock>
  );
};

export default ContentCard;