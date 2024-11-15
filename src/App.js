import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import StatsBar from './components/StatsBar';
import ContentCard from './components/ContentCard';
import Footer from './components/Footer';
import paperMarioImg from './assets/papermario.png';
import './index.css';

const GameUI = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [activePage, setActivePage] = useState('Home');
  const [isNavOpen, setIsNavOpen] = useState(true);

  useEffect(() => {
    setIsNavOpen(window.innerWidth > 768);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex bg-gray-900 relative pb-16">
      {/* Paper Mario Image */}
      <div className="fixed bottom-16 right-0 w-64 h-64 z-10">
        <img 
          src={paperMarioImg}
          alt="Paper Mario"
          className="absolute bottom-0 right-0 object-contain"
        />
      </div>

      <Navigation 
        activePage={activePage}
        onPageChange={handlePageChange}
        isNavOpen={isNavOpen}
        onNavToggle={setIsNavOpen}
      />

      {/* Main Content Area - Added h-full and flex-col */}
      <div className="flex-1 p-6 md:p-6 pt-16 md:pt-6 relative z-20 flex flex-col h-full bg-gray-900">
        <StatsBar />
        <ContentCard currentPage={currentPage} className="flex-1" />
      </div>

      <Footer />
    </div>
  );
};

export default GameUI;