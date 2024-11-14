import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import StatsBar from './components/StatsBar';
import ContentCard from './components/ContentCard';
import './index.css';

const GameUI = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [activePage, setActivePage] = useState('Home');
  const [isNavOpen, setIsNavOpen] = useState(true);

  useEffect(() => {
    // Set initial nav state based on screen size
    setIsNavOpen(window.innerWidth > 768);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex bg-gray-900 relative">
      <Navigation 
        activePage={activePage}
        onPageChange={handlePageChange}
        isNavOpen={isNavOpen}
        onNavToggle={setIsNavOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-6 pt-16 md:pt-6">
        <StatsBar />
        <ContentCard currentPage={currentPage} />
      </div>
    </div>
  );
};

export default GameUI;