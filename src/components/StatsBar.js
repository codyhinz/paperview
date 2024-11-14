import React from 'react';
import { Heart, Star, Timer } from 'lucide-react';
import PaperBlock from './PaperBlock';

const StatsBar = () => (
  <div className="flex gap-4 mb-6 -rotate-1 overflow-x-auto pb-2">
    {[
      { icon: Heart, value: '10/10', color: 'bg-rose-500' },
      { icon: Star, value: '73', color: 'bg-amber-500' },
      { icon: Timer, value: '00:03', color: 'bg-blue-500' }
    ].map(({ icon: Icon, value, color }, index) => (
      <PaperBlock 
        key={index} 
        color={color} 
        rotate={index - 1}
        animationDelay={1 + index * 0.1}
      >
        <div className="p-3 flex items-center gap-3 text-white font-bold">
          <Icon className="w-6 h-6" />
          <span>{value}</span>
        </div>
      </PaperBlock>
    ))}
  </div>
);

export default StatsBar;