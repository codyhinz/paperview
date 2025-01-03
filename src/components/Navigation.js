import React from 'react';
import { 
  Star, 
  Heart, 
  Flower2, 
  Timer,
  Home,
  Book,
  Sword,
  ChevronLeft,
  ChevronRight,
  ChefHat,
  Medal,
  CircleDollarSign,
  ChartNoAxesCombined,
  TriangleAlert,
  MessageCircleWarning,
  Shield,
  HandCoins,
  Shell,
} from 'lucide-react';
import MenuItem from './MenuItem';
import PaperBlock from './PaperBlock';

const Navigation = ({ activePage, onPageChange, isNavOpen, onNavToggle }) => {
    const handlePageClick = (page) => {
      onPageChange(page);
      // Only close nav if it's a leaf item (not a parent with children) and on mobile
      if (window.innerWidth <= 768) {
        onNavToggle(false);
      }
    };
  
    const navigationItems = [
      { icon: Home, label: 'Home', color: 'bg-custom-pink', rotate: 1 },
      { 
        icon: Book, 
        label: 'Walkthrough', 
        color: 'bg-custom-orange', 
        rotate: -1, 
        children: [
          { icon: Star, label: 'Prologue', color: 'bg-custom-pink' },
          { icon: Star, label: 'Chapter 1', color: 'bg-slate-400' },
          { icon: Star, label: 'Chapter 2', color: 'bg-emerald-500' },
          { icon: Star, label: 'Chapter 3', color: 'bg-amber-500' },
          { icon: Star, label: 'Chapter 4', color: 'bg-rose-700' },
          { icon: Star, label: 'Chapter 5', color: 'bg-custom-blue' },
          { icon: Star, label: 'Chapter 6', color: 'bg-amber-600' },
          { icon: Star, label: 'Chapter 7', color: 'bg-slate-500' },
          { icon: Star, label: 'Chapter 8', color: 'bg-custom-maroon' }
        ]
      },
      { 
        icon: Shell, 
        label: 'Items', 
        color: 'bg-custom-green', 
        rotate: 0.5,
        children: [
          { icon: HandCoins, label: 'Shops', color: 'bg-custom-red' }
        ]
      },
      { 
        icon: Shield, 
        label: 'Badges', 
        color: 'bg-custom-blue', 
        rotate: 1,
        children: [
          { icon: Star, label: 'Badge Builds', color: 'bg-slate-700' }
        ]
      },
      { icon: ChefHat, label: 'Recipes', color: 'bg-custom-purple', rotate: 0.5 },
      { icon: Sword, label: 'Tattle Log', color: 'bg-custom-pink', rotate: -0.5 },
      { icon: MessageCircleWarning, label: 'Trouble Center', color: 'bg-custom-red', rotate: 1 },
      { 
        icon: Medal,
        label: 'Tips & Tricks', 
        color: 'bg-custom-blue', 
        rotate: 1,
        children: [
          { icon: CircleDollarSign, label: 'Money Making', color: 'bg-custom-orange' },
          { icon: ChartNoAxesCombined, label: 'Experience Farms', color: 'bg-custom-green' },
          { icon: TriangleAlert, label: 'Pit of 100 Trials', color: 'bg-slate-700' }
        ] 
      }
    ];

  const statsItems = [
    { icon: Heart, label: 'HP', value: '100/100' },
    { icon: Flower2, label: 'FP', value: '100/100' },
    { icon: Star, label: 'BP', value: '99' }
  ];

  return (
    <>
      <button
        onClick={() => onNavToggle(!isNavOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
      >
        {isNavOpen ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </button>

      <nav 
        className={`
          fixed md:static w-80 bg-gray-800/90
          transform transition-transform duration-300 ease-in-out z-40
          ${isNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-6 flex flex-col gap-6">
          <div className="flex-none">
            <PaperBlock color="bg-custom-red" rotate={-1} animationDelay={0.1}>
              <div className="p-4 text-white">
                <h1 className="text-2xl font-black mb-1">PaperView</h1>
                <div className="flex items-center gap-2 text-sm bg-black/20 p-2 rounded-lg">
                  <Timer className="w-4 h-4" />
                  <span>Play Time: 00:03</span>
                </div>
              </div>
            </PaperBlock>
          </div>

          <div className="space-y-4">
            {navigationItems.map((item, index) => (
              <MenuItem 
                key={item.label}
                {...item}
                isActive={activePage === item.label}
                onClick={handlePageClick}
                animationDelay={0.2 + index * 0.1}
                activePage={activePage}
                parentExpanded={item.children?.some(child => child.label === activePage)}
              />
            ))}
          </div>

          <div className="flex-none">
            <PaperBlock color="bg-rose-500" rotate={1} animationDelay={0.8}>
              <div className="p-4 text-white space-y-3">
                {statsItems.map(({ icon: Icon, label, value }, index) => (
                  <div 
                    key={label} 
                    className="flex items-center justify-between bg-black/20 p-2 rounded-lg"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-5 h-5" />
                      {label}
                    </span>
                    <span className="font-bold">{value}</span>
                  </div>
                ))}
              </div>
            </PaperBlock>
          </div>
        </div>
      </nav>

      {isNavOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => onNavToggle(false)}
        />
      )}
    </>
  );
};

export default Navigation;