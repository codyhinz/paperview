// src/components/pages/ExperienceFarmingGuide.js
import React from 'react';
import { ChevronRight, Trophy, Star, Timer } from 'lucide-react';
import { TipCard } from '../common/PaperComponents';
import expFarmThumbnail from '../../assets/expfarmthumbnail.jpg';

const ExperienceFarmingGuide = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience Farming Guide</h2>
        <p className="text-gray-700 mb-4">
          There are several effective methods for gaining experience points quickly in Paper Mario: The Thousand-Year Door. This guide covers the most efficient farming locations and strategies.
        </p>
      </div>

      {/* Video Guide Section */}
      <TipCard title="Featured Strategy Guide" icon={Trophy} color="bg-custom-orange">
        <div className="space-y-4">
          <p>For a detailed video guide on experience farming strategies, check out:</p>
          <div className="bg-black/20 p-4 rounded-lg">
            <a 
              href="https://www.youtube.com/watch?v=C1rhAmpYKjs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block hover:opacity-90 transition-opacity"
            >
              <img 
                src={expFarmThumbnail}
                alt="Video thumbnail placeholder" 
                className="w-full rounded-lg mb-4"
              />
              <div className="text-center">
                <p className="font-bold mb-2">Paper Mario TTYD XP Farming Guide</p>
                <p className="text-sm text-white/80">by Austin John Plays</p>
              </div>
            </a>
          </div>
          <p className="text-sm">
            Special thanks to Austin John Plays for creating this comprehensive farming guide. 
            Visit his <a 
              href="https://www.youtube.com/@AustinJohnPlays" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white underline hover:no-underline"
            >YouTube channel</a> for more excellent content.
          </p>
        </div>
      </TipCard>

      {/* Best Farming Locations */}
      <TipCard title="Best Farming Locations" icon={Star} color="bg-custom-purple">
        <div className="space-y-4">
          <div className="bg-black/20 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-bold">The Pit of 100 Trials</h3>
            <ul className="space-y-2">
              {[
                "Perfect for late-game grinding (Floor 50+)",
                "Higher floors provide better XP returns",
                "Strong enemies offer substantial rewards",
                "Save blocks available every 10 floors",
                "Great source of rare badges and items"
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/80" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mt-6">Twilight Trail</h3>
            <ul className="space-y-2">
              {[
                "Accessible mid-game location",
                "High enemy density",
                "Quick reset by leaving and re-entering",
                "Safe for lower-level farming",
                "Close to save point and inn"
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/80" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TipCard>

      {/* Preparation Tips */}
      <TipCard title="Essential Preparation" icon={Timer} color="bg-custom-green">
        <div className="space-y-4">
          <h3 className="font-bold">Before You Start Farming:</h3>
          <ul className="space-y-2">
            {[
              "Stock up on healing items (Mushrooms, Super Shrooms)",
              "Bring FP restoration items (Honey Syrup, Maple Syrup)",
              "Equip HP Plus and FP Plus badges if available",
              "Consider bringing Quick Change badge for partner swapping",
              "Pack a few Life Shrooms for emergency revival",
              "Bring Maple Super for extended farming sessions"
            ].map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/80" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>

          <div className="bg-black/20 p-4 rounded-lg mt-4">
            <h4 className="font-bold mb-2">Recommended Badge Setup:</h4>
            <ul className="space-y-2">
              {[
                "Power Plus (P) - Increases hammer and jump damage",
                "Defend Plus (P) - Reduces damage taken",
                "Happy Heart (P) - Regenerate HP while walking",
                "Happy Flower (P) - Regenerate FP while walking",
                "Quick Change - Swap partners without using a turn"
              ].map((badge, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/80" />
                  <span>{badge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TipCard>

      {/* General Tips */}
      <TipCard title="Time-Saving Tips" icon={Timer} color="bg-custom-red">
        <ul className="space-y-2">
          {[
            "Use multi-target attacks for groups of enemies",
            "Keep track of your progress with notes or a spreadsheet",
            "Take breaks every hour to prevent fatigue",
            "Consider farming during Danger Mario setup for efficiency",
            "Use partners strategically for different enemy types",
            "Remember to save frequently during long sessions"
          ].map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/80" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </TipCard>
    </div>
  );
};

export default ExperienceFarmingGuide;