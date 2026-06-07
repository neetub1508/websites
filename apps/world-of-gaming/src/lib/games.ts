// ============================================================================
// Central games catalog. Both the homepage grid and each /play page read from
// this list, so adding or swapping a game means editing ONE place here (plus
// adding the matching src/pages/play/<slug>.astro page).
// ============================================================================
export interface Game {
  slug: string;
  title: string;
  tagline: string;
  description: string;   // 1–2 sentences, used for SEO meta + card
  emoji: string;
  category: string;
  gradient: string;      // tailwind gradient classes for the card art
  saves: boolean;        // does it remember your progress?
  controls: string;      // short how-to-play line
}

export const GAMES: Game[] = [
  {
    slug: 'block-world',
    title: 'Block World',
    tagline: 'Minecraft-style building sandbox',
    description:
      'A free block-building sandbox. Place grass, stone, wood, water and more to build anything you like — your world saves automatically and is still there when you come back.',
    emoji: '🧱',
    category: 'Sandbox',
    gradient: 'from-emerald-500 to-green-700',
    saves: true,
    controls: 'Pick a block, then tap or drag to build. Auto-saves.',
  },
  {
    slug: 'tower-obby',
    title: 'Tower Obby',
    tagline: 'Roblox-style parkour climb',
    description:
      'A free Roblox-style obstacle course. Jump and climb your way up the platforms to reach the flag on each level — your progress is saved so you resume where you stopped.',
    emoji: '🟥',
    category: 'Adventure',
    gradient: 'from-rose-500 to-red-700',
    saves: true,
    controls: 'Move with ← →, jump with Space / on-screen buttons.',
  },
  {
    slug: 'candy-match',
    title: 'Candy Match',
    tagline: 'Memory matching puzzle',
    description:
      'A free memory puzzle. Flip the cards two at a time and match every candy pair in as few moves as you can. Quick, relaxing, and great on mobile.',
    emoji: '🍬',
    category: 'Puzzle',
    gradient: 'from-pink-500 to-fuchsia-600',
    saves: false,
    controls: 'Tap two cards to find matching pairs.',
  },
  {
    slug: '2048',
    title: '2048',
    tagline: 'Slide & merge number puzzle',
    description:
      'The addictive sliding puzzle. Swipe to move every tile; when two with the same number touch they merge into one. Keep going and try to reach the 2048 tile.',
    emoji: '🔢',
    category: 'Puzzle',
    gradient: 'from-amber-400 to-orange-600',
    saves: true,
    controls: 'Swipe or use arrow keys to slide the tiles.',
  },
  {
    slug: 'snake',
    title: 'Neon Snake',
    tagline: 'The classic snake, glowed up',
    description:
      'The timeless arcade game. Guide the snake to eat the apples and grow as long as you can — but don’t hit the walls or your own tail. Speeds up as you score.',
    emoji: '🐍',
    category: 'Arcade',
    gradient: 'from-lime-400 to-green-600',
    saves: true,
    controls: 'Swipe or use arrow keys to steer the snake.',
  },
  {
    slug: 'brick-breaker',
    title: 'Brick Breaker',
    tagline: 'Bounce, smash, clear every brick',
    description:
      'A fast Breakout-style arcade game. Move the paddle to bounce the ball, smash every brick, and clear the board — then do it again, faster. Three lives to go as far as you can.',
    emoji: '🟦',
    category: 'Arcade',
    gradient: 'from-sky-400 to-indigo-600',
    saves: true,
    controls: 'Move the paddle with your finger or ← →; tap / Space to launch.',
  },
  {
    slug: 'sky-hopper',
    title: 'Sky Hopper',
    tagline: 'Tap to fly, dodge the pipes',
    description:
      'A one-tap arcade game. Tap to flap and keep your little bird in the air, weaving through the gaps between the pipes. Simple to learn, hard to master — how far can you go?',
    emoji: '🐤',
    category: 'Arcade',
    gradient: 'from-cyan-400 to-sky-600',
    saves: true,
    controls: 'Tap, click, or press Space to fly. Dodge the pipes.',
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    tagline: 'Beat the computer at noughts & crosses',
    description:
      'The classic game of Xs and Os against a smart computer opponent. Line up three in a row to win. Quick rounds, and your win-loss record is kept so you can chase a streak.',
    emoji: '⭕',
    category: 'Board',
    gradient: 'from-violet-400 to-purple-600',
    saves: true,
    controls: 'Tap a square to place your X and try to beat the computer.',
  },
  {
    slug: 'color-memory',
    title: 'Color Memory',
    tagline: 'Repeat the growing sequence',
    description:
      'A Simon-style memory game. Watch the colors light up, then tap them back in the same order. Each round adds one more — see how long a sequence you can remember.',
    emoji: '🎨',
    category: 'Memory',
    gradient: 'from-fuchsia-400 to-pink-600',
    saves: true,
    controls: 'Watch the sequence light up, then tap it back in order.',
  },
  {
    slug: 'planet-smash',
    title: 'Planet Smash',
    tagline: 'Blast planets to pieces',
    description:
      'A satisfying destruction sandbox. Pick a weapon — meteor, laser, or missile — and pound the planet until it cracks apart and explodes. Then spin up a fresh one and do it again.',
    emoji: '🪐',
    category: 'Sandbox',
    gradient: 'from-indigo-500 to-slate-800',
    saves: false,
    controls: 'Pick a weapon, then tap the planet to smash it.',
  },
  {
    slug: 'turbo-racer',
    title: 'Turbo Racer',
    tagline: 'Weave through traffic at top speed',
    description:
      'A fast top-down racing game. Steer your car through the traffic, grab the coins, and survive as long as you can while the road keeps speeding up. Your best distance is saved.',
    emoji: '🏎️',
    category: 'Racing',
    gradient: 'from-orange-500 to-red-600',
    saves: true,
    controls: 'Steer with your finger or ← →; grab coins, dodge cars.',
  },
  {
    slug: 'brain-riddles',
    title: 'Brain Riddles',
    tagline: 'Tricky questions to outsmart',
    description:
      'A quick-fire brain teaser. Answer a run of tricky riddles and trick questions — the obvious answer is usually wrong! See how many you can get right and beat your high score.',
    emoji: '🧠',
    category: 'Puzzle',
    gradient: 'from-teal-400 to-emerald-600',
    saves: true,
    controls: 'Read the riddle and tap the answer you think is right.',
  },
  {
    slug: 'trap-master',
    title: 'Trap Master',
    tagline: 'The level that fights back',
    description:
      'A devilish troll-platformer. The level looks simple — but hidden spikes spring up, floors vanish, and exits move the moment you trust them. Learn each trap, beat the level, and try not to rage. Your level is saved.',
    emoji: '😈',
    category: 'Adventure',
    gradient: 'from-rose-600 to-purple-900',
    saves: true,
    controls: 'Move with ← →, jump with Space / on-screen buttons. Expect tricks!',
  },
  {
    slug: 'one-line-draw',
    title: 'One Line Draw',
    tagline: 'Trace the shape in a single stroke',
    description:
      'A calming one-stroke puzzle. Draw over every line of the shape without lifting your finger or going over the same line twice. Each level adds a trickier figure. Your progress is saved.',
    emoji: '✏️',
    category: 'Puzzle',
    gradient: 'from-violet-500 to-indigo-700',
    saves: true,
    controls: 'Drag from a dot along the lines to cover every edge once.',
  },
  {
    slug: 'mole-mash',
    title: 'Mole Mash',
    tagline: 'Whack the moles before they hide',
    description:
      'A fast reaction game. Moles pop out of their holes — tap them as quickly as you can before they duck back down. You have 30 seconds to rack up the highest score you can.',
    emoji: '🐹',
    category: 'Action',
    gradient: 'from-lime-500 to-green-700',
    saves: true,
    controls: 'Tap the moles as they pop up. 30 seconds on the clock.',
  },
  {
    slug: 'four-in-a-row',
    title: 'Four in a Row',
    tagline: 'Connect four against the computer',
    description:
      'The classic disc-dropping strategy game. Take turns dropping discs and be the first to line up four in a row — across, down, or diagonally — against a smart computer. Your record is kept.',
    emoji: '🔴',
    category: 'Board',
    gradient: 'from-red-500 to-rose-700',
    saves: true,
    controls: 'Tap a column to drop your red disc and connect four.',
  },
  {
    slug: 'paddle-battle',
    title: 'Paddle Battle',
    tagline: 'Retro paddle tennis vs the CPU',
    description:
      'A retro paddle-tennis duel. Move your paddle to keep the ball in play and slip it past the computer. First to seven points wins the match — and the ball gets faster every rally.',
    emoji: '🏓',
    category: 'Arcade',
    gradient: 'from-slate-500 to-slate-800',
    saves: true,
    controls: 'Drag up/down (or ↑ ↓) to move your paddle. First to 7 wins.',
  },
  {
    slug: 'fruit-slash',
    title: 'Fruit Slash',
    tagline: 'Swipe to slice, dodge the bombs',
    description:
      'A juicy arcade slicer. Fruit flies up from the bottom — swipe across it to slice it for points, but whatever you do, don’t slice the bombs! Miss too much fruit and the game is over.',
    emoji: '🍉',
    category: 'Action',
    gradient: 'from-orange-400 to-red-600',
    saves: true,
    controls: 'Swipe across the fruit to slice it. Never slice a bomb!',
  },
  {
    slug: 'star-blaster',
    title: 'Star Blaster',
    tagline: 'Endless-wave space shooter',
    description:
      'A fast space shoot-’em-up. Pilot your fighter, auto-blast wave after wave of alien invaders, and dodge their fire. Each wave is bigger and faster than the last — survive as long as you can and beat your high score.',
    emoji: '🚀',
    category: 'Shooting',
    gradient: 'from-indigo-600 to-slate-900',
    saves: true,
    controls: 'Move with your finger or ← →. Your ship auto-fires — just dodge!',
  },
  {
    slug: 'bubble-shooter',
    title: 'Bubble Shooter',
    tagline: 'Aim, shoot, and pop the bubbles',
    description:
      'A classic aim-and-shoot puzzle. Fire bubbles up the board and match three or more of the same color to pop them. New rows keep dropping in, so clear them fast before they reach the bottom.',
    emoji: '🫧',
    category: 'Shooting',
    gradient: 'from-sky-400 to-cyan-600',
    saves: true,
    controls: 'Aim with your finger or mouse and tap to shoot a bubble.',
  },
];

export const getGame = (slug: string) => GAMES.find((g) => g.slug === slug);
export const otherGames = (slug: string) => GAMES.filter((g) => g.slug !== slug);
