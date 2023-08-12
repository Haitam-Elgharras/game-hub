/*
    - From this file wwe can store static data retrieve it from here and use it in our components
      we can use this approach to store data that is not going to change often like :
       * genres of games * platforms * etc...
 */
const genres = [
  {
    id: 4,
    name: "Action",
    slug: "action",
    games_count: 173810,
    image_background:
      "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
    games: [
      {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        added: 19859,
      },
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 19122,
      },
      {
        id: 5286,
        slug: "tomb-raider",
        name: "Tomb Raider (2013)",
        added: 15710,
      },
      {
        id: 4291,
        slug: "counter-strike-global-offensive",
        name: "Counter-Strike: Global Offensive",
        added: 15686,
      },
      {
        id: 12020,
        slug: "left-4-dead-2",
        name: "Left 4 Dead 2",
        added: 15262,
      },
      {
        id: 5679,
        slug: "the-elder-scrolls-v-skyrim",
        name: "The Elder Scrolls V: Skyrim",
        added: 15014,
      },
    ],
  },
  {
    id: 51,
    name: "Indie",
    slug: "indie",
    games_count: 54589,
    image_background:
      "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
    games: [
      {
        id: 1030,
        slug: "limbo",
        name: "Limbo",
        added: 12773,
      },
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11702,
      },
      {
        id: 422,
        slug: "terraria",
        name: "Terraria",
        added: 11649,
      },
      {
        id: 9767,
        slug: "hollow-knight",
        name: "Hollow Knight",
        added: 10099,
      },
      {
        id: 3612,
        slug: "hotline-miami",
        name: "Hotline Miami",
        added: 9800,
      },
      {
        id: 3790,
        slug: "outlast",
        name: "Outlast",
        added: 9735,
      },
    ],
  },
  {
    id: 3,
    name: "Adventure",
    slug: "adventure",
    games_count: 133505,
    image_background:
      "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
    games: [
      {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        added: 19859,
      },
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 19122,
      },
      {
        id: 5286,
        slug: "tomb-raider",
        name: "Tomb Raider (2013)",
        added: 15710,
      },
      {
        id: 13536,
        slug: "portal",
        name: "Portal",
        added: 15312,
      },
      {
        id: 28,
        slug: "red-dead-redemption-2",
        name: "Red Dead Redemption 2",
        added: 14468,
      },
      {
        id: 3439,
        slug: "life-is-strange-episode-1-2",
        name: "Life is Strange",
        added: 14322,
      },
    ],
  },
  {
    id: 5,
    name: "RPG",
    slug: "role-playing-games-rpg",
    games_count: 52981,
    image_background:
      "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
    games: [
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 19122,
      },
      {
        id: 5679,
        slug: "the-elder-scrolls-v-skyrim",
        name: "The Elder Scrolls V: Skyrim",
        added: 15014,
      },
      {
        id: 802,
        slug: "borderlands-2",
        name: "Borderlands 2",
        added: 14327,
      },
      {
        id: 58175,
        slug: "god-of-war-2",
        name: "God of War (2018)",
        added: 12708,
      },
      {
        id: 3070,
        slug: "fallout-4",
        name: "Fallout 4",
        added: 12669,
      },
      {
        id: 278,
        slug: "horizon-zero-dawn",
        name: "Horizon Zero Dawn",
        added: 12012,
      },
    ],
  },
  {
    id: 10,
    name: "Strategy",
    slug: "strategy",
    games_count: 53181,
    image_background:
      "https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg",
    games: [
      {
        id: 13633,
        slug: "civilization-v",
        name: "Sid Meier's Civilization V",
        added: 8841,
      },
      {
        id: 10243,
        slug: "company-of-heroes-2",
        name: "Company of Heroes 2",
        added: 8788,
      },
      {
        id: 13910,
        slug: "xcom-enemy-unknown",
        name: "XCOM: Enemy Unknown",
        added: 7839,
      },
      {
        id: 5525,
        slug: "brutal-legend",
        name: "Brutal Legend",
        added: 7766,
      },
      {
        id: 10065,
        slug: "cities-skylines",
        name: "Cities: Skylines",
        added: 7702,
      },
      {
        id: 11147,
        slug: "ark-survival-of-the-fittest",
        name: "ARK: Survival Of The Fittest",
        added: 7515,
      },
    ],
  },
  {
    id: 2,
    name: "Shooter",
    slug: "shooter",
    games_count: 59341,
    image_background:
      "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
    games: [
      {
        id: 4200,
        slug: "portal-2",
        name: "Portal 2",
        added: 18025,
      },
      {
        id: 4291,
        slug: "counter-strike-global-offensive",
        name: "Counter-Strike: Global Offensive",
        added: 15686,
      },
      {
        id: 12020,
        slug: "left-4-dead-2",
        name: "Left 4 Dead 2",
        added: 15262,
      },
      {
        id: 4062,
        slug: "bioshock-infinite",
        name: "BioShock Infinite",
        added: 14494,
      },
      {
        id: 802,
        slug: "borderlands-2",
        name: "Borderlands 2",
        added: 14327,
      },
      {
        id: 13537,
        slug: "half-life-2",
        name: "Half-Life 2",
        added: 13625,
      },
    ],
  },
  {
    id: 40,
    name: "Casual",
    slug: "casual",
    games_count: 46010,
    image_background:
      "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg",
    games: [
      {
        id: 9721,
        slug: "garrys-mod",
        name: "Garry's Mod",
        added: 9082,
      },
      {
        id: 326292,
        slug: "fall-guys",
        name: "Fall Guys: Ultimate Knockout",
        added: 8026,
      },
      {
        id: 9830,
        slug: "brawlhalla",
        name: "Brawlhalla",
        added: 6965,
      },
      {
        id: 356714,
        slug: "among-us",
        name: "Among Us",
        added: 6616,
      },
      {
        id: 1959,
        slug: "goat-simulator",
        name: "Goat Simulator",
        added: 5961,
      },
      {
        id: 16343,
        slug: "a-story-about-my-uncle",
        name: "A Story About My Uncle",
        added: 5597,
      },
    ],
  },
  {
    id: 14,
    name: "Simulation",
    slug: "simulation",
    games_count: 66286,
    image_background:
      "https://media.rawg.io/media/games/a88/a886c37bf112d009e318b106db9d420a.jpg",
    games: [
      {
        id: 10035,
        slug: "hitman",
        name: "Hitman",
        added: 10018,
      },
      {
        id: 654,
        slug: "stardew-valley",
        name: "Stardew Valley",
        added: 9194,
      },
      {
        id: 9721,
        slug: "garrys-mod",
        name: "Garry's Mod",
        added: 9082,
      },
      {
        id: 10243,
        slug: "company-of-heroes-2",
        name: "Company of Heroes 2",
        added: 8788,
      },
      {
        id: 9882,
        slug: "dont-starve-together",
        name: "Don't Starve Together",
        added: 8525,
      },
      {
        id: 22509,
        slug: "minecraft",
        name: "Minecraft",
        added: 7836,
      },
    ],
  },
  {
    id: 7,
    name: "Puzzle",
    slug: "puzzle",
    games_count: 97124,
    image_background:
      "https://media.rawg.io/media/games/9f4/9f418898f5415668ca47b5f4ab1ecfeb.jpg",
    games: [
      {
        id: 4200,
        slug: "portal-2",
        name: "Portal 2",
        added: 18025,
      },
      {
        id: 13536,
        slug: "portal",
        name: "Portal",
        added: 15312,
      },
      {
        id: 1030,
        slug: "limbo",
        name: "Limbo",
        added: 12773,
      },
      {
        id: 19709,
        slug: "half-life-2-episode-two",
        name: "Half-Life 2: Episode Two",
        added: 10167,
      },
      {
        id: 18080,
        slug: "half-life",
        name: "Half-Life",
        added: 9384,
      },
      {
        id: 1450,
        slug: "inside",
        name: "INSIDE",
        added: 7451,
      },
    ],
  },
  {
    id: 11,
    name: "Arcade",
    slug: "arcade",
    games_count: 22574,
    image_background:
      "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
    games: [
      {
        id: 3612,
        slug: "hotline-miami",
        name: "Hotline Miami",
        added: 9800,
      },
      {
        id: 17540,
        slug: "injustice-gods-among-us-ultimate-edition",
        name: "Injustice: Gods Among Us Ultimate Edition",
        added: 8958,
      },
      {
        id: 22509,
        slug: "minecraft",
        name: "Minecraft",
        added: 7836,
      },
      {
        id: 4003,
        slug: "grid-2",
        name: "GRID 2",
        added: 7056,
      },
      {
        id: 3408,
        slug: "hotline-miami-2-wrong-number",
        name: "Hotline Miami 2: Wrong Number",
        added: 5749,
      },
      {
        id: 16343,
        slug: "a-story-about-my-uncle",
        name: "A Story About My Uncle",
        added: 5597,
      },
    ],
  },
  {
    id: 83,
    name: "Platformer",
    slug: "platformer",
    games_count: 100624,
    image_background:
      "https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg",
    games: [
      {
        id: 1030,
        slug: "limbo",
        name: "Limbo",
        added: 12773,
      },
      {
        id: 422,
        slug: "terraria",
        name: "Terraria",
        added: 11649,
      },
      {
        id: 9767,
        slug: "hollow-knight",
        name: "Hollow Knight",
        added: 10099,
      },
      {
        id: 41,
        slug: "little-nightmares",
        name: "Little Nightmares",
        added: 10042,
      },
      {
        id: 18080,
        slug: "half-life",
        name: "Half-Life",
        added: 9384,
      },
      {
        id: 3144,
        slug: "super-meat-boy",
        name: "Super Meat Boy",
        added: 8900,
      },
    ],
  },
  {
    id: 59,
    name: "Massively Multiplayer",
    slug: "massively-multiplayer",
    games_count: 3301,
    image_background:
      "https://media.rawg.io/media/games/539/53911178036df07d518dd492ddc25289.jpg",
    games: [
      {
        id: 32,
        slug: "destiny-2",
        name: "Destiny 2",
        added: 12766,
      },
      {
        id: 10213,
        slug: "dota-2",
        name: "Dota 2",
        added: 11576,
      },
      {
        id: 766,
        slug: "warframe",
        name: "Warframe",
        added: 11473,
      },
      {
        id: 290856,
        slug: "apex-legends",
        name: "Apex Legends",
        added: 10270,
      },
      {
        id: 10533,
        slug: "path-of-exile",
        name: "Path of Exile",
        added: 9234,
      },
      {
        id: 10142,
        slug: "playerunknowns-battlegrounds",
        name: "PlayerUnknown’s Battlegrounds",
        added: 9095,
      },
    ],
  },
  {
    id: 1,
    name: "Racing",
    slug: "racing",
    games_count: 24101,
    image_background:
      "https://media.rawg.io/media/screenshots/69b/69bb243ea9896ddfc2e051b58e81624d.jpg",
    games: [
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11702,
      },
      {
        id: 4003,
        slug: "grid-2",
        name: "GRID 2",
        added: 7056,
      },
      {
        id: 2572,
        slug: "dirt-rally",
        name: "DiRT Rally",
        added: 6354,
      },
      {
        id: 58753,
        slug: "forza-horizon-4",
        name: "Forza Horizon 4",
        added: 5681,
      },
      {
        id: 5578,
        slug: "grid",
        name: "Race Driver: Grid",
        added: 5152,
      },
      {
        id: 19491,
        slug: "burnout-paradise-the-ultimate-box",
        name: "Burnout Paradise: The Ultimate Box",
        added: 4456,
      },
    ],
  },
  {
    id: 15,
    name: "Sports",
    slug: "sports",
    games_count: 20705,
    image_background:
      "https://media.rawg.io/media/games/b22/b227810b1a1bcbe9cf3dda22534c686e.jpg",
    games: [
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11702,
      },
      {
        id: 326292,
        slug: "fall-guys",
        name: "Fall Guys: Ultimate Knockout",
        added: 8026,
      },
      {
        id: 2572,
        slug: "dirt-rally",
        name: "DiRT Rally",
        added: 6354,
      },
      {
        id: 53341,
        slug: "jet-set-radio-2012",
        name: "Jet Set Radio",
        added: 4885,
      },
      {
        id: 9575,
        slug: "vrchat",
        name: "VRChat",
        added: 4237,
      },
      {
        id: 622492,
        slug: "forza-horizon-5",
        name: "Forza Horizon 5",
        added: 4179,
      },
    ],
  },
  {
    id: 6,
    name: "Fighting",
    slug: "fighting",
    games_count: 11701,
    image_background:
      "https://media.rawg.io/media/games/2c8/2c89e43515ed12aee51becc3dcfd8e7e.jpg",
    games: [
      {
        id: 17540,
        slug: "injustice-gods-among-us-ultimate-edition",
        name: "Injustice: Gods Among Us Ultimate Edition",
        added: 8958,
      },
      {
        id: 108,
        slug: "mortal-kombat-x",
        name: "Mortal Kombat X",
        added: 8263,
      },
      {
        id: 28179,
        slug: "sega-mega-drive-and-genesis-classics",
        name: "SEGA Mega Drive and Genesis Classics",
        added: 7600,
      },
      {
        id: 9830,
        slug: "brawlhalla",
        name: "Brawlhalla",
        added: 6965,
      },
      {
        id: 274480,
        slug: "mortal-kombat-11",
        name: "Mortal Kombat 11",
        added: 4988,
      },
      {
        id: 44525,
        slug: "yakuza-kiwami",
        name: "Yakuza Kiwami",
        added: 4237,
      },
    ],
  },
  {
    id: 19,
    name: "Family",
    slug: "family",
    games_count: 5390,
    image_background:
      "https://media.rawg.io/media/games/89a/89a700d3c6a76bd0610ca89ccd20da54.jpg",
    games: [
      {
        id: 3254,
        slug: "journey",
        name: "Journey",
        added: 8027,
      },
      {
        id: 2597,
        slug: "lego-lord-of-the-rings",
        name: "LEGO The Lord of the Rings",
        added: 5175,
      },
      {
        id: 3350,
        slug: "broken-age",
        name: "Broken Age",
        added: 4786,
      },
      {
        id: 3729,
        slug: "lego-the-hobbit",
        name: "LEGO The Hobbit",
        added: 4749,
      },
      {
        id: 1259,
        slug: "machinarium",
        name: "Machinarium",
        added: 4266,
      },
      {
        id: 1140,
        slug: "world-of-goo",
        name: "World of Goo",
        added: 4203,
      },
    ],
  },
  {
    id: 28,
    name: "Board Games",
    slug: "board-games",
    games_count: 8317,
    image_background:
      "https://media.rawg.io/media/screenshots/def/def72fbc44e21276ad86b49538e74e20.jpeg",
    games: [
      {
        id: 23557,
        slug: "gwent-the-witcher-card-game",
        name: "Gwent: The Witcher Card Game",
        added: 4466,
      },
      {
        id: 327999,
        slug: "dota-underlords",
        name: "Dota Underlords",
        added: 3754,
      },
      {
        id: 2055,
        slug: "adventure-capitalist",
        name: "AdVenture Capitalist",
        added: 3145,
      },
      {
        id: 758,
        slug: "hue",
        name: "Hue",
        added: 2097,
      },
      {
        id: 2306,
        slug: "poker-night-2",
        name: "Poker Night 2",
        added: 1978,
      },
      {
        id: 3187,
        slug: "armello",
        name: "Armello",
        added: 1889,
      },
    ],
  },
  {
    id: 34,
    name: "Educational",
    slug: "educational",
    games_count: 15648,
    image_background:
      "https://media.rawg.io/media/games/dfc/dfcb531e89791246e33fb6d46cb28127.jpg",
    games: [
      {
        id: 1358,
        slug: "papers-please",
        name: "Papers, Please",
        added: 6382,
      },
      {
        id: 1140,
        slug: "world-of-goo",
        name: "World of Goo",
        added: 4203,
      },
      {
        id: 2778,
        slug: "surgeon-simulator-cpr",
        name: "Surgeon Simulator",
        added: 3703,
      },
      {
        id: 9768,
        slug: "gameguru",
        name: "GameGuru",
        added: 2387,
      },
      {
        id: 13777,
        slug: "sid-meiers-civilization-iv-colonization",
        name: "Sid Meier's Civilization IV: Colonization",
        added: 2188,
      },
      {
        id: 6885,
        slug: "pirates-3",
        name: "Sid Meier's Pirates!",
        added: 2109,
      },
    ],
  },
  {
    id: 17,
    name: "Card",
    slug: "card",
    games_count: 4504,
    image_background:
      "https://media.rawg.io/media/games/fab/fabd57846a0d62144cdc1393a0cadc13.jpg",
    games: [
      {
        id: 23557,
        slug: "gwent-the-witcher-card-game",
        name: "Gwent: The Witcher Card Game",
        added: 4466,
      },
      {
        id: 28121,
        slug: "slay-the-spire",
        name: "Slay the Spire",
        added: 4462,
      },
      {
        id: 18852,
        slug: "poker-night-at-the-inventory",
        name: "Poker Night at the Inventory",
        added: 2626,
      },
      {
        id: 8923,
        slug: "faeria",
        name: "Faeria",
        added: 2066,
      },
      {
        id: 332,
        slug: "the-elder-scrolls-legends",
        name: "The Elder Scrolls: Legends",
        added: 2020,
      },
      {
        id: 2306,
        slug: "poker-night-2",
        name: "Poker Night 2",
        added: 1978,
      },
    ],
  },
];
export default genres;
