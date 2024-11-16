import React, { useState, memo, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { PaperBlock } from './common/PaperComponents';

const MenuItem = memo(({ 
  icon: Icon, 
  label, 
  children, 
  color, 
  isActive, 
  onClick, 
  rotate = 0, 
  animationDelay = 0, 
  depth = 0,
  activePage,
  parentExpanded
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children && children.length > 0;

  // Automatically open the menu if a child is active
  useEffect(() => {
    if (parentExpanded) {
      setIsOpen(true);
    }
  }, [parentExpanded]);

  const handleClick = (e) => {
    e.stopPropagation();
    
    if (hasChildren) {
      setIsOpen(!isOpen);
      onClick?.(label);
    } else {
      onClick?.(label);
    }
  };

  const handleChildClick = (childLabel) => {
    onClick?.(childLabel);
  };

  // Determine if this item should show as active
  const isCurrentlyActive = activePage === label;
  const shouldShowActive = isCurrentlyActive || (hasChildren && children.some(child => child.label === activePage));

  return (
    <div className={`relative ${depth === 0 ? 'mb-4' : 'mb-2'}`}>
      <PaperBlock 
        color={color} 
        isActive={isCurrentlyActive}
        rotate={rotate}
        animationDelay={animationDelay}
      >
        <button
          onClick={handleClick}
          className={`w-full flex items-center gap-2 p-4 text-white font-bold relative z-10
            ${shouldShowActive ? 'bg-black/10 rounded-lg' : ''}`}
        >
          <div className="bg-black/20 p-2 rounded-full">
            <Icon className="w-5 h-5" />
          </div>
          <span className="flex-1 text-left text-lg">{label}</span>
          {hasChildren && (
            <div className={`bg-black/20 p-1 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </div>
          )}
        </button>
      </PaperBlock>
      
      {hasChildren && (
        <div className={`
          pl-6 mt-3 
          relative 
          transition-all duration-300 ease-out overflow-hidden
          ${isOpen ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}
        `}>
          {/* File tree line */}
          <div className="absolute left-6 top-0 bottom-4 w-px bg-white/20" />
          
          <div className="space-y-3">
            {children?.map((childItem, index) => (
              <div key={childItem.label} className="relative">
                {/* Horizontal connector line */}
                <div className="absolute left-[-24px] top-1/2 w-6 h-px bg-white/20" />
                <MenuItem 
                  {...childItem}
                  color={childItem.color || color}
                  rotate={-1 + Math.random() * 2}
                  className="menu-item-enter"
                  animationDelay={index * 0.1}
                  onClick={() => handleChildClick(childItem.label)}
                  depth={depth + 1}
                  activePage={activePage}
                  isActive={childItem.label === activePage}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;