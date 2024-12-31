import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown} from 'lucide-react';
import { BADGES } from '../data/badges';

const BADGE_TYPES = {
  ATTACK: 'Attack',
  DEFENSE: 'Defense',
  HEALTH_FP: 'Health & FP',
  PARTNER: 'Partner',
  STATUS: 'Status Effect',
  SPECIAL: 'Special',
  UTILITY: 'Utility'
};

const SORT_TYPES = {
  ID_ASC: 'ID (Ascending)',
  ID_DESC: 'ID (Descending)',
  NAME_ASC: 'Name (A-Z)',
  NAME_DESC: 'Name (Z-A)',
  BP_ASC: 'BP (Low to High)',
  BP_DESC: 'BP (High to Low)'
};

const PaperContainer = ({ children, color = 'bg-custom-blue', className = '' }) => (
  <div className="relative">
    <div className={`${color} rounded-lg border-4 border-black shadow-md ${className}`}>
      <div className="bg-gradient-to-br from-white/20 to-transparent rounded-lg">
        {children}
      </div>
    </div>
  </div>
);

const PaperInput = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <div className="relative border-2 border-white/20 rounded-lg overflow-hidden bg-custom-blue">
      <div className="relative flex items-center">
        <Icon className="absolute left-3 text-white/70 w-5 h-5" />
        <input
          {...props}
          className="w-full pl-10 pr-4 py-2 bg-black/20 text-white placeholder-white/50 focus:outline-none focus:bg-black/30 transition-colors"
        />
      </div>
    </div>
  </div>
);

const PaperSelect = ({ icon: Icon, children, ...props }) => (
  <div className="relative">
    <div className="relative border-2 border-white/20 rounded-lg overflow-hidden bg-custom-blue">
      <div className="relative flex items-center">
        <Icon className="absolute left-3 text-white/70 w-5 h-5" />
        <select
          {...props}
          className="w-full appearance-none pl-10 pr-8 py-2 bg-black/20 text-white focus:outline-none focus:bg-black/30 transition-colors"
        >
          {children}
        </select>
      </div>
    </div>
  </div>
);

const BadgeCard = ({ badge }) => (
  <div className={`${badge.color || 'bg-amber-500'} rounded-lg border-4 border-black p-4 shadow-md h-full`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold text-white">{badge.name}</h3>
      <span className="text-sm bg-black/30 px-2 py-1 rounded-full text-white/70">
        #{String(badge.id).padStart(3, '0')}
      </span>
    </div>

    <div className="space-y-4 bg-black/10 rounded-lg p-4">
      <div className="flex flex-wrap gap-2">
        <img 
          src={badge.image} 
          alt={badge.name} 
          className="w-10 h-10 object-contain bg-white/10 rounded-lg p-1"
        />
        {Array.isArray(badge.type) ? (
          badge.type.map((type, index) => (
            <span key={index} className="bg-black/20 px-3 py-1 rounded-full text-sm text-white">
              {type}
            </span>
          ))
        ) : (
          <span className="bg-black/20 px-3 py-1 rounded-full text-sm text-white">
            {badge.type}
          </span>
        )}
        <span className="bg-black/20 px-3 py-1 rounded-full text-sm text-white">
          {badge.bp} BP
        </span>
      </div>
      
      <p className="text-white/90 bg-black/20 p-3 rounded-lg">{badge.effect}</p>
      
      <div className="space-y-2">
        <h4 className="font-semibold text-white/90">Locations:</h4>
        <ul className="space-y-1 bg-black/20 rounded-lg p-3">
          {badge.locations.map((location, index) => (
            <li key={index} className="text-sm text-white/80">
              • {location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const BadgesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortType, setSortType] = useState(SORT_TYPES.ID_ASC);

  const filteredBadges = BADGES.filter(badge => {
    const matchesSearch = badge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         badge.effect.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === '' || 
      (Array.isArray(badge.type) 
        ? badge.type.includes(selectedType)
        : badge.type === selectedType);
    
    return matchesSearch && matchesType;
  });

  const sortedBadges = [...filteredBadges].sort((a, b) => {
    switch (sortType) {
      case SORT_TYPES.ID_ASC: return a.id - b.id;
      case SORT_TYPES.ID_DESC: return b.id - a.id;
      case SORT_TYPES.NAME_ASC: return a.name.localeCompare(b.name);
      case SORT_TYPES.NAME_DESC: return b.name.localeCompare(a.name);
      case SORT_TYPES.BP_ASC: return a.bp - b.bp;
      case SORT_TYPES.BP_DESC: return b.bp - a.bp;
      default: return 0;
    }
  });

  return (
    <div className="space-y-6">
      <div className="bg-[#D6D6C3] p-6 rounded-lg border-2 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Badge Collection</h2>
        <p className="text-gray-700">
          Badges are special items that grant powerful effects when equipped. Each badge requires Badge Points (BP) 
          to equip. Choose your badges wisely to create powerful combinations!
        </p>
      </div>

      <PaperContainer color="bg-custom-blue" className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <PaperInput
              icon={Search}
              type="text"
              placeholder="Search badges by name or effect..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="w-full md:w-48">
            <PaperSelect
              icon={Filter}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              {Object.values(BADGE_TYPES).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </PaperSelect>
          </div>
          
          <div className="w-full md:w-48">
            <PaperSelect
              icon={ArrowUpDown}
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              {Object.entries(SORT_TYPES).map(([key, value]) => (
                <option key={key} value={value}>{value}</option>
              ))}
            </PaperSelect>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 bg-black/20 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-white/70">Total Badges:</span>
            <span className="bg-black/20 px-2 py-1 rounded-full font-bold text-white">
              {BADGES.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/70">Showing:</span>
            <span className="bg-black/20 px-2 py-1 rounded-full font-bold text-white">
              {sortedBadges.length}
            </span>
          </div>
        </div>
      </PaperContainer>

      <div className="grid gap-6 md:grid-cols-2">
        {sortedBadges.map(badge => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>

      {sortedBadges.length === 0 && (
        <PaperContainer color="bg-rose-500" className="p-6">
          <div className="bg-black/20 rounded-lg p-4 text-center text-white">
            No badges found matching your search criteria.
          </div>
        </PaperContainer>
      )}
    </div>
  );
};

export default BadgesPage;