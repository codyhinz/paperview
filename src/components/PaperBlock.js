import React from 'react';

const PaperBlock = ({ children, color, isActive, className = '', rotate = 0, animationDelay = 0 }) => (
  <div 
    className={`relative group ${className}`}
    style={{ 
      '--rotation': `${rotate}deg`,
      animation: 'paperFold 0.5s ease-out forwards',
      animationDelay: `${animationDelay}s`
    }}
  >
    {/* Stacked paper effect - multiple layers */}
    <div 
      className={`absolute inset-0 ${color} rounded-lg transform translate-x-1 translate-y-1`}
      style={{ '--rotation': `${rotate + 2}deg` }}
    />
    <div 
      className={`absolute inset-0 ${color} rounded-lg transform translate-x-0.5 translate-y-0.5`}
      style={{ '--rotation': `${rotate + 1}deg` }}
    />
    
    {/* Main content with thick cartoon border */}
    <div className={`${color} rounded-lg relative p-0.5 hover-lift
      ${isActive ? 'ring-4 ring-white/50' : ''}
      border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
      style={{ '--rotation': `${rotate}deg` }}
    >
      <div className="bg-gradient-to-br from-white/20 to-transparent rounded-lg">
        {children}
      </div>
    </div>
  </div>
);

export default PaperBlock;