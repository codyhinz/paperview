import React from 'react';
import contentCardBg from '../assets/contentcard.png';

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
      <div className="bg-[#D6D6C3] p-4 rounded-lg border-2 border-gray-300 space-y-4">
        <p className="text-gray-700">Welcome to PaperView - your comprehensive guide to Paper Mario: The Thousand-Year Door! This passion project was born from countless hours spent exploring the charming world of Rogueport and beyond. Since first experiencing this masterpiece on the GameCube as a child, I've completed hundreds of playthroughs and achieved 100% completion dozens of times, uncovering every secret and mastering every challenge this incredible game has to offer.</p>
        
        <p className="text-gray-700">With the exciting release on Nintendo Switch, a whole new generation of players can experience this timeless adventure. Whether you're a veteran returning to Rogueport or embarking on your first journey, this guide covers everything from basic mechanics to advanced strategies for both the original GameCube version and the Switch remaster. You'll find detailed walkthroughs, cooking recipes, badge combinations, and comprehensive Tattle Log entries that I've meticulously documented over years of gameplay.</p>
        
        <p className="text-gray-700">Select a section from the menu to begin your adventure. Together, we'll explore every corner of this paper-crafted world, from the depths of the Pit of 100 Trials to the heights of the Moon. Let's make your journey through The Thousand-Year Door as magical as possible!</p>
      </div>
    </div>
  </ContentPaperBlock>
);

export default ContentCard;