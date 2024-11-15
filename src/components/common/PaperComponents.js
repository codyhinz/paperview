// src/components/common/PaperComponents.js
import React from 'react';
import contentCardBg from '../../assets/contentcard.png';

export const PaperBlock = ({ children, color, isActive, className = '', rotate = 0, animationDelay = 0 }) => (
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

export const ContentPaperBlock = ({ children, color, className = '' }) => (
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

export const TipCard = ({ title, icon: Icon, children, color = "bg-custom-red" }) => (
  <div className="relative group mb-6">
    <div className={`absolute inset-0 ${color} rounded-lg transform translate-x-1 translate-y-1`} />
    <div className={`${color} rounded-lg relative p-0.5 hover-lift
      border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
      <div className="bg-gradient-to-br from-white/20 to-transparent rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-black/20 p-2 rounded-full">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <div className="bg-black/10 rounded-lg p-4 text-white/90">
          {children}
        </div>
      </div>
    </div>
  </div>
);