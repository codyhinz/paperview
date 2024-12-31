export const BADGE_TYPES = {
  ATTACK: 'Attack',
  DEFENSE: 'Defense',
  FP: 'FP',
  STATUS: 'Status Effect',
  PARTNER: 'Partner',
  SPECIAL: 'Special',
  HEALTH: 'Health'
};

export const BADGES = [
  {
    id: 1,
    name: 'Power Jump',
    type: BADGE_TYPES.ATTACK,
    bp: 1,
    effect: 'Increases Jump attack power by 2.',
    locations: [
      "Merlee's Mansion",
      "Charlieton (20 coins)",
      "Pianta Parlor (30 Pianta Tokens)"
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 2,
    name: 'Multibounce',
    type: BADGE_TYPES.ATTACK,
    bp: 2,
    effect: 'Allows Mario to jump on all enemies in a row. Uses 2 FP.',
    locations: [
      'Rogueport Sewers',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 3,
    name: 'Power Smash',
    type: BADGE_TYPES.ATTACK,
    bp: 1,
    effect: 'Increases Hammer attack power by 2.',
    locations: [
      'Rogueport Shop',
      'Charlieton (25 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 4,
    name: 'Quake Hammer',
    type: BADGE_TYPES.ATTACK,
    bp: 2,
    effect: 'Allows Mario to hit all ground-bound enemies with his hammer. Uses 2 FP.',
    locations: [
      'Hooktail Castle',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 5,
    name: 'HP Plus',
    type: BADGE_TYPES.HEALTH,
    bp: 3,
    effect: 'Increases maximum HP by 5.',
    locations: [
      'Rogueport Shop',
      'Pianta Parlor (150 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 6,
    name: 'FP Plus',
    type: BADGE_TYPES.FP,
    bp: 3,
    effect: 'Increases maximum FP by 5.',
    locations: [
      'Rogueport Shop',
      'Pianta Parlor (150 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 7,
    name: 'Defense Plus',
    type: BADGE_TYPES.DEFENSE,
    bp: 5,
    effect: 'Increases Defense by 1.',
    locations: [
      'Glitzville Shop',
      'Pianta Parlor (200 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 8,
    name: 'Feeling Fine',
    type: BADGE_TYPES.STATUS,
    bp: 4,
    effect: 'Prevents all negative status effects.',
    locations: [
      'Twilight Town Shop',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 9,
    name: 'Happy Heart',
    type: BADGE_TYPES.HEALTH,
    bp: 3,
    effect: 'Recovers 1 HP every few steps while walking.',
    locations: [
      'Rogueport Sewers',
      'Pianta Parlor (100 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 10,
    name: 'Happy Flower',
    type: BADGE_TYPES.FP,
    bp: 3,
    effect: 'Recovers 1 FP every few steps while walking.',
    locations: [
      'Boggly Woods',
      'Pianta Parlor (100 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 11,
    name: 'Close Call',
    type: BADGE_TYPES.SPECIAL,
    bp: 1,
    effect: 'When HP is low, occasionally makes enemies miss their attacks.',
    locations: [
      'Glitzville',
      'Charlieton (40 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 12,
    name: 'Pretty Lucky',
    type: BADGE_TYPES.SPECIAL,
    bp: 2,
    effect: 'Occasionally makes enemies miss their attacks.',
    locations: [
      'Great Tree',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 13,
    name: 'Lucky Day',
    type: BADGE_TYPES.SPECIAL,
    bp: 7,
    effect: 'Frequently makes enemies miss their attacks.',
    locations: [
      'Keelhaul Key',
      'Pianta Parlor (300 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 14,
    name: 'Quick Change',
    type: BADGE_TYPES.SPECIAL,
    bp: 1,
    effect: 'Allows Mario to switch partners without using a turn in battle.',
    locations: [
      'Twilight Town',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 15,
    name: 'Power Plus',
    type: BADGE_TYPES.ATTACK,
    bp: 6,
    effect: 'Increases Attack power by 1.',
    locations: [
      'Glitzville Shop',
      'Pianta Parlor (200 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 16,
    name: 'Super Appeal',
    type: BADGE_TYPES.SPECIAL,
    bp: 1,
    effect: 'Makes the audience go wild when Mario appeals.',
    locations: [
      'Glitzville',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 17,
    name: 'Jumpman',
    type: BADGE_TYPES.ATTACK,
    bp: 7,
    effect: 'Increases Jump attack power by 2, but prevents use of Hammer attacks.',
    locations: [
      'Pit of 100 Trials (Floor 50)',
      'Pianta Parlor (500 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 18,
    name: 'Hammerman',
    type: BADGE_TYPES.ATTACK,
    bp: 7,
    effect: 'Increases Hammer attack power by 2, but prevents use of Jump attacks.',
    locations: [
      'Pit of 100 Trials (Floor 80)',
      'Pianta Parlor (500 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 19,
    name: 'Ice Power',
    type: BADGE_TYPES.STATUS,
    bp: 2,
    effect: 'Adds ice element to Jump and Hammer attacks.',
    locations: [
      'Fahr Outpost Shop',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 20,
    name: 'Last Stand',
    type: BADGE_TYPES.SPECIAL,
    bp: 1,
    effect: 'When HP is low, reduces damage taken by 1.',
    locations: [
      'Creepy Steeple',
      'Charlieton (40 coins)'
    ],
    image: '/api/placeholder/32/32'
  }
,
  {
    id: 21,
    name: 'Flower Saver',
    type: BADGE_TYPES.FP,
    bp: 4,
    effect: 'Reduces FP consumption of all moves by 1.',
    locations: [
      'Great Tree',
      'Pianta Parlor (200 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 22,
    name: 'Fire Drive',
    type: BADGE_TYPES.STATUS,
    bp: 2,
    effect: 'Adds fire element to Hammer attacks.',
    locations: [
      'Glitzville Shop',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 23,
    name: 'Spike Shield',
    type: BADGE_TYPES.DEFENSE,
    bp: 3,
    effect: 'Prevents damage when jumping on spiked enemies.',
    locations: [
      'Riverside Station',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 24,
    name: 'Double Pain',
    type: BADGE_TYPES.SPECIAL,
    bp: -4,
    effect: 'Doubles damage taken but grants 4 BP.',
    locations: [
      'Pit of 100 Trials (Floor 30)',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 25,
    name: 'Power Rush',
    type: BADGE_TYPES.ATTACK,
    bp: 1,
    effect: 'When HP is at 1, Attack power increases by 2.',
    locations: [
      'Pit of 100 Trials (Floor 40)',
      'Charlieton (100 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 26,
    name: 'P-Up, D-Down',
    type: BADGE_TYPES.SPECIAL,
    bp: 2,
    effect: 'Increases Attack power by 1 but decreases Defense by 1.',
    locations: [
      'Pianta Parlor (150 Pianta Tokens)',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 27,
    name: 'All or Nothing',
    type: BADGE_TYPES.SPECIAL,
    bp: 8,
    effect: 'If Action Commands are performed perfectly, Attack power increases by 2. If not, Attack power decreases by 2.',
    locations: [
      'Pit of 100 Trials (Floor 90)',
      'Pianta Parlor (999 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 28,
    name: 'Mega Rush',
    type: BADGE_TYPES.ATTACK,
    bp: 1,
    effect: 'When HP is at 1, Attack power increases by 4.',
    locations: [
      'Pit of 100 Trials (Floor 70)',
      'Charlieton (100 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 29,
    name: 'Double Dip',
    type: BADGE_TYPES.SPECIAL,
    bp: 2,
    effect: 'Allows use of two items in one turn.',
    locations: [
      'Keelhaul Key',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 30,
    name: 'Charge',
    type: BADGE_TYPES.ATTACK,
    bp: 1,
    effect: 'Allows charging up power for the next attack. Uses 2 FP.',
    locations: [
      'Glitzville Shop',
      'Charlieton (40 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 31,
    name: 'Super Charge',
    type: BADGE_TYPES.ATTACK,
    bp: 2,
    effect: 'Stronger version of Charge that adds more attack power. Uses 4 FP.',
    locations: [
      'X-Naut Fortress',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 32,
    name: 'Piercing Blow',
    type: BADGE_TYPES.ATTACK,
    bp: 1,
    effect: 'Hammer attacks pierce defense.',
    locations: [
      'Keelhaul Key',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 33,
    name: 'First Attack',
    type: BADGE_TYPES.SPECIAL,
    bp: 1,
    effect: 'Increases Attack power for first strike attacks.',
    locations: [
      'Petal Meadows',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 34,
    name: 'HP Drain',
    type: BADGE_TYPES.HEALTH,
    bp: 2,
    effect: 'Recovers 1 HP when dealing damage to enemies.',
    locations: [
      'Palace of Shadow',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 35,
    name: 'FP Drain',
    type: BADGE_TYPES.FP,
    bp: 2,
    effect: 'Recovers 1 FP when dealing damage to enemies.',
    locations: [
      'Palace of Shadow',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 36,
    name: 'Sleep Stomp',
    type: BADGE_TYPES.STATUS,
    bp: 1,
    effect: 'Jump attacks may cause Sleep status.',
    locations: [
      'Boggly Woods',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 37,
    name: 'Dizzy Stomp',
    type: BADGE_TYPES.STATUS,
    bp: 1,
    effect: 'Jump attacks may cause Dizzy status.',
    locations: [
      'Twilight Trail',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 38,
    name: 'Soft Stomp',
    type: BADGE_TYPES.STATUS,
    bp: 1,
    effect: 'Jump attacks may lower enemy Defense.',
    locations: [
      'Twilight Trail',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 39,
    name: 'Simplifier',
    type: BADGE_TYPES.SPECIAL,
    bp: 1,
    effect: 'Makes Action Commands easier to perform.',
    locations: [
      'Rogueport Sewers',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 40,
    name: 'Unsimplifier',
    type: BADGE_TYPES.SPECIAL,
    bp: -1,
    effect: 'Makes Action Commands harder but grants 1 BP.',
    locations: [
      'Pit of 100 Trials (Floor 20)',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  }
,
  {
    id: 41,
    name: 'Damage Dodge',
    type: BADGE_TYPES.DEFENSE,
    bp: 2,
    effect: 'Reduces damage taken when Action Command is successfully performed.',
    locations: [
      'Rogueport Sewers',
      'Charlieton (40 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 42,
    name: 'Super Dodge',
    type: BADGE_TYPES.DEFENSE,
    bp: 4,
    effect: 'Greatly reduces damage taken when Action Command is successfully performed.',
    locations: [
      'X-Naut Fortress',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 43,
    name: 'Money Money',
    type: BADGE_TYPES.SPECIAL,
    bp: 3,
    effect: 'Doubles coins earned from battle.',
    locations: [
      'Excess Express',
      'Pianta Parlor (300 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 44,
    name: 'Head Rattle',
    type: BADGE_TYPES.STATUS,
    bp: 1,
    effect: 'Hammer attacks may cause Confusion status.',
    locations: [
      'Boggly Woods',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 45,
    name: 'Hammer Throw',
    type: BADGE_TYPES.ATTACK,
    bp: 2,
    effect: 'Allows Mario to throw his hammer at flying enemies. Uses 2 FP.',
    locations: [
      'Glitzville Shop',
      'Charlieton (40 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 46,
    name: 'Return Postage',
    type: BADGE_TYPES.SPECIAL,
    bp: 7,
    effect: 'Returns some damage back to attacking enemies.',
    locations: [
      'Pit of 100 Trials (Floor 100)',
      'Pianta Parlor (999 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 47,
    name: 'Power Bounce',
    type: BADGE_TYPES.ATTACK,
    bp: 3,
    effect: 'Allows Mario to jump repeatedly on an enemy. Uses 3 FP.',
    locations: [
      'Great Tree',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 48,
    name: 'Chill Out',
    type: BADGE_TYPES.SPECIAL,
    bp: 1,
    effect: 'Prevents enemy first strikes.',
    locations: [
      'Rogueport Shop',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 49,
    name: 'Timing Tutor',
    type: BADGE_TYPES.SPECIAL,
    bp: 1,
    effect: 'Shows when to press the button for Action Commands.',
    locations: [
      'Rogueport Shop',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 50,
    name: 'Auto-Command',
    type: BADGE_TYPES.SPECIAL,
    bp: 8,
    effect: 'Automatically performs Action Commands perfectly.',
    locations: [
      'Pit of 100 Trials (Floor 60)',
      'Pianta Parlor (999 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 51,
    name: 'Zap Tap',
    type: BADGE_TYPES.SPECIAL,
    bp: 3,
    effect: 'Damages enemies that contact Mario.',
    locations: [
      'Palace of Shadow',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 52,
    name: 'Double Pain',
    type: BADGE_TYPES.SPECIAL,
    bp: -4,
    effect: 'Doubles damage taken but grants 4 BP.',
    locations: [
      'Pit of 100 Trials (Floor 30)',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 53,
    name: 'Happy Heart P',
    type: BADGE_TYPES.PARTNER,
    bp: 3,
    effect: 'Partner recovers 1 HP every few steps while walking.',
    locations: [
      'Excess Express',
      'Pianta Parlor (100 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 54,
    name: 'HP Plus P',
    type: BADGE_TYPES.PARTNER,
    bp: 3,
    effect: 'Increases partner maximum HP by 5.',
    locations: [
      'Rogueport Shop',
      'Pianta Parlor (150 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 55,
    name: 'Defense Plus P',
    type: BADGE_TYPES.PARTNER,
    bp: 6,
    effect: 'Increases partner Defense by 1.',
    locations: [
      'Glitzville Shop',
      'Pianta Parlor (200 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 56,
    name: 'Power Plus P',
    type: [BADGE_TYPES.PARTNER, BADGE_TYPES.ATTACK],
    bp: 6,
    effect: 'Increases partner Attack power by 1.',
    locations: [
      'Glitzville Shop',
      'Pianta Parlor (200 Pianta Tokens)'
    ],
    color: 'bg-custom-red',
    image: '/api/placeholder/32/32'
  },
  {
    id: 57,
    name: 'P-Down, D-Up',
    type: BADGE_TYPES.SPECIAL,
    bp: 2,
    effect: 'Decreases Attack power by 1 but increases Defense by 1.',
    locations: [
      'Pianta Parlor (150 Pianta Tokens)',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 58,
    name: 'P-Down, D-Up P',
    type: BADGE_TYPES.PARTNER,
    bp: 2,
    effect: 'Decreases partner Attack power by 1 but increases partner Defense by 1.',
    locations: [
      'Pianta Parlor (150 Pianta Tokens)',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 59,
    name: 'Last Stand P',
    type: BADGE_TYPES.PARTNER,
    bp: 1,
    effect: 'When partner HP is low, reduces damage taken by 1.',
    locations: [
      'Creepy Steeple',
      'Charlieton (40 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 60,
    name: 'Power Rush P',
    type: BADGE_TYPES.PARTNER,
    bp: 1,
    effect: 'When partner HP is at 1, Attack power increases by 2.',
    locations: [
      'Pit of 100 Trials (Floor 45)',
      'Charlieton (100 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 61,
    name: 'Mega Rush P',
    type: BADGE_TYPES.PARTNER,
    bp: 1,
    effect: 'When partner HP is at 1, Attack power increases by 4.',
    locations: [
      'Pit of 100 Trials (Floor 75)',
      'Charlieton (100 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 62,
    name: 'P-Up, D-Down P',
    type: BADGE_TYPES.PARTNER,
    bp: 2,
    effect: 'Increases partner Attack power by 1 but decreases partner Defense by 1.',
    locations: [
      'Pianta Parlor (150 Pianta Tokens)',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 63,
    name: 'Double Pain P',
    type: BADGE_TYPES.PARTNER,
    bp: -4,
    effect: 'Doubles damage taken by partner but grants 4 BP.',
    locations: [
      'Pit of 100 Trials (Floor 35)',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 64,
    name: 'Super Jump Charge',
    type: BADGE_TYPES.ATTACK,
    bp: 4,
    effect: 'Strongest version of Charge that greatly increases Jump attack power. Uses 6 FP.',
    locations: [
      'Palace of Shadow',
      'Pianta Parlor (500 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 65,
    name: 'Super Hammer Charge',
    type: BADGE_TYPES.ATTACK,
    bp: 4,
    effect: 'Strongest version of Charge that greatly increases Hammer attack power. Uses 6 FP.',
    locations: [
      'Palace of Shadow',
      'Pianta Parlor (500 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 66,
    name: 'Triple Dip',
    type: BADGE_TYPES.SPECIAL,
    bp: 4,
    effect: 'Allows use of three items in one turn.',
    locations: [
      'Palace of Shadow',
      'Pianta Parlor (999 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 67,
    name: 'Bump Attack',
    type: BADGE_TYPES.SPECIAL,
    bp: 5,
    effect: 'Damages enemies that Mario touches while exploring.',
    locations: [
      'X-Naut Fortress',
      'Pianta Parlor (300 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 68,
    name: 'Fire Shield',
    type: BADGE_TYPES.DEFENSE,
    bp: 4,
    effect: 'Reduces damage from fire attacks.',
    locations: [
      'Glitzville Shop',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 69,
    name: 'Ice Shield',
    type: BADGE_TYPES.DEFENSE,
    bp: 4,
    effect: 'Reduces damage from ice attacks.',
    locations: [
      'Fahr Outpost Shop',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 70,
    name: 'Tornado Jump',
    type: BADGE_TYPES.ATTACK,
    bp: 2,
    effect: 'Allows Mario to perform a spinning jump attack that hits all enemies. Uses 3 FP.',
    locations: [
      'X-Naut Fortress',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  }
,
  {
    id: 71,
    name: 'Quake Hammer P',
    type: BADGE_TYPES.PARTNER,
    bp: 2,
    effect: 'Partner can hit all ground enemies with one attack. Uses 2 FP.',
    locations: [
      'Hooktail Castle',
      'Charlieton (30 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 72,
    name: 'Feeling Fine P',
    type: BADGE_TYPES.PARTNER,
    bp: 4,
    effect: 'Prevents all negative status effects on partner.',
    locations: [
      'Twilight Town Shop',
      'Charlieton (50 coins)'
    ],
    image: '/api/placeholder/32/32'
  },
  {
    id: 73,
    name: 'Lucky Start',
    type: BADGE_TYPES.SPECIAL,
    bp: 4,
    effect: 'Starts battles with a random positive status effect.',
    locations: [
      'Palace of Shadow',
      'Pianta Parlor (300 Pianta Tokens)'
    ],
    image: '/api/placeholder/32/32'
  }
];