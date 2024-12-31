import React from 'react';
import { Star, Sword, Shield, Timer, ChevronRight, Heart, Flower2 } from 'lucide-react';
import { TipCard } from '../common/PaperComponents';

const TipItem = ({ children }) => (
  <li className="flex items-start gap-2">
    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

const TipsAndTricks = () => (
  <div className="space-y-6">
    <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
      <p className="text-gray-700 mb-4">
        Welcome to the Tips & Tricks section! Here you'll find advanced strategies, 
        time-saving techniques, and hidden mechanics that will help you master 
        Paper Mario: The Thousand-Year Door.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 auto-rows-min"> {/* Added auto-rows-min */}
      <div className="h-fit"> {/* Wrap each TipCard in a h-fit div */}
        <TipCard title="Combat Basics" icon={Sword} color="bg-custom-red">
          <ul className="space-y-2">
            <TipItem>Time your Action Commands! Press A just before impact for extra damage.</TipItem>
            <TipItem>Guard with A to reduce damage. Perfect guards (pressed just before hit) reduce more!</TipItem>
            <TipItem>Superguarding (press B with perfect timing) negates ALL damage!</TipItem>
            <TipItem>Crowd Control effects (sleep, dizzy, confusion, freeze, immobilize, etc) are all very effective for buying you more time!</TipItem>
          </ul>
        </TipCard>
      </div>

      <div className="h-fit">
        <TipCard title="Star Power Management" icon={Star} color="bg-custom-orange">
          <ul className="space-y-2">
            <TipItem>Appeal (press C-stick) during battle to slowly fill Star Power.</TipItem>
            <TipItem>Stylish moves (press A with good timing after attacks) give extra Star Power!</TipItem>
            <TipItem>Save Star Power for boss battles - Sweet Treat is great for emergencies.</TipItem>
          </ul>
        </TipCard>
      </div>

      <div className="h-fit">
        <TipCard title="Resource Management" icon={Heart} color="bg-custom-blue">
          <ul className="space-y-2">
            <TipItem>Cook items at Zess T.'s kitchen to create powerful healing items.</TipItem>
            <TipItem>Hot Dog Stand in Rogueport restores 1 HP/FP for only 1 coin each!</TipItem>
            <TipItem>Life Shrooms auto-revive you with 10 HP - keep one equipped!</TipItem>
          </ul>
        </TipCard>
      </div>

      <div className="h-fit">
        <TipCard title="Time Savers" icon={Timer} color="bg-custom-purple">
          <ul className="space-y-2">
            <TipItem>Use Spin Jump to move faster and break yellow blocks!</TipItem>
            <TipItem>Quick-swap partners with C-stick without opening menu.</TipItem>
            <TipItem>Hold Y while running to auto-perform Paper Tube move.</TipItem>
          </ul>
        </TipCard>
      </div>

      <div className="h-fit">
        <TipCard title="Badge Strategies" icon={Shield} color="bg-custom-green">
          <ul className="space-y-2">
            <TipItem>Power Plus and Defense Plus stack - equip multiples!</TipItem>
            <TipItem>Most Ability badges stack and do more damage at the cost of double FP. EX: 2 Power Smashes costs 4FP but does double the damage!</TipItem>
            <TipItem>Quick Change lets you swap partners mid-turn - incredibly useful!</TipItem>
            <TipItem>Close Call + Pretty Lucky + Lucky Day = High evasion build!</TipItem>
          </ul>
        </TipCard>
      </div>

      <div className="h-fit">
        <TipCard title="FP Conservation" icon={Flower2} color="bg-custom-pink">
          <ul className="space-y-2">
            <TipItem>Normal attacks don't use FP - good for weaker enemies.</TipItem>
            <TipItem>FP Drain badges help sustain special moves in long fights.</TipItem>
            <TipItem>Flower Saver reduces all FP costs by 1 - very efficient!</TipItem>
          </ul>
        </TipCard>
      </div>
    </div>
  </div>
);

export default TipsAndTricks;