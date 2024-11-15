import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800/90 text-white text-xs px-4 py-2 text-center z-30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <p>Paper Mario™ and all related content are trademarks of Nintendo® and Intelligent Systems. ©1985-2024 Nintendo. All rights reserved.</p>
        <p className="mt-1 text-gray-400">
          This is an unofficial fan site and is not affiliated with, maintained, authorized, endorsed, or sponsored by Nintendo or any of its affiliates.
        </p>
      </div>
    </footer>
  );
};

export default Footer;