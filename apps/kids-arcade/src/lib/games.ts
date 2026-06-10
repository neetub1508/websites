// Single source of truth for the games catalog. The homepage grid, search,
// footer, and sitemap all read from this. Adding a game = add a row + a page.

export interface Game {
  /** Stable id, also used for the localStorage high-score key. */
  id: 'memory' | 'snake' | 'whack';
  title: string;
  slug: string;
  description: string;
  shortBlurb: string;
  tags: string[];
  emoji: string;
  /** Tailwind gradient classes for the card accent blob. */
  accent: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  /** "How to play" steps rendered on the game's page. */
  howToPlay: string[];
  /** Bullet-style benefit copy rendered on the game's page. */
  benefits: string[];
  /** Per-game FAQ. */
  faqs: { q: string; a: string }[];
}

export const GAMES: Game[] = [
  {
    id: 'memory',
    title: 'Memory Match',
    slug: 'memory-match',
    description: 'Flip cards, find pairs, race the clock. Sharpen focus and recall with this classic matching game.',
    shortBlurb: 'Classic card-matching game that strengthens memory and concentration.',
    tags: ['Puzzle', 'Memory', 'Cards', 'Brain'],
    emoji: '🧠',
    accent: 'from-fuchsia-300 to-rose-300',
    difficulty: 'Easy',
    howToPlay: [
      'Click or tap any card to flip it over and reveal the emoji.',
      'Flip a second card. If the two match, they stay face up. If not, they flip back after a moment.',
      'Match every pair on the grid in as few moves and as little time as possible.',
      'Use the New Game button to reshuffle and play again.',
    ],
    benefits: [
      'Builds visual memory and concentration — great for kids and adults alike.',
      'No timer pressure by default; a "best time" tracker motivates repeat play without stress.',
      'Works with a mouse, a touchscreen, or the keyboard — perfect on any device.',
    ],
    faqs: [
      {
        q: 'Is Memory Match good for young kids?',
        a: 'Yes. The default 4×4 grid uses friendly, familiar emojis and has no time limit, so children as young as 4 can play on their own. Older kids can challenge themselves by tracking their move count and best time.',
      },
      {
        q: 'How do you win?',
        a: 'Match every pair of cards. The game records the time and number of moves it took; your best score is saved on this device so you can try to beat it next round.',
      },
      {
        q: 'Can I play with one hand on a phone?',
        a: 'Absolutely. Just tap cards in any order. The board scales to fit your screen and works in both portrait and landscape orientations.',
      },
    ],
  },
  {
    id: 'snake',
    title: 'Snake',
    slug: 'snake',
    description: 'Eat the apple, grow longer, avoid the walls and your own tail. The timeless arcade classic, reborn.',
    shortBlurb: 'Eat, grow, and avoid your own tail in this timeless arcade classic.',
    tags: ['Arcade', 'Classic', 'Action', 'Retro'],
    emoji: '🐍',
    accent: 'from-emerald-300 to-sky-300',
    difficulty: 'Medium',
    howToPlay: [
      'Use the arrow keys or WASD on a keyboard.',
      'On mobile, swipe in any direction — or use the on-screen D-pad below the board.',
      'Eat the red apple to grow longer and add to your score.',
      'The game speeds up as you grow. Avoid running into the walls or your own tail.',
    ],
    benefits: [
      'Refines hand–eye coordination and reaction time.',
      'Quick rounds (30 seconds to a few minutes) make it perfect for short breaks.',
      'High-score tracking on this device gives kids a personal goal to beat.',
    ],
    faqs: [
      {
        q: 'How do I control the snake on a phone?',
        a: 'You can either swipe in the direction you want to go, or tap the on-screen D-pad beneath the board. Both work the same way.',
      },
      {
        q: 'Does the snake get faster?',
        a: 'Yes. The game gradually speeds up as your score climbs, so it stays challenging even for experienced players.',
      },
      {
        q: 'What happens when the game ends?',
        a: 'A game-over screen shows your final score and best score. Tap "Play again" to start a new round instantly.',
      },
    ],
  },
  {
    id: 'whack',
    title: 'Whack-a-Mole',
    slug: 'whack-a-mole',
    description: 'Moles pop up — tap them fast! A 30-second reaction game that rewards quick reflexes.',
    shortBlurb: 'Tap the moles as they pop up. A 30-second reaction-speed challenge.',
    tags: ['Action', 'Reaction', 'Arcade', 'Quick'],
    emoji: '🔨',
    accent: 'from-amber-300 to-rose-300',
    difficulty: 'Hard',
    howToPlay: [
      'Press Start to begin a 30-second round.',
      'Moles pop up from one of nine holes. Tap or click them as fast as you can.',
      'Each whack is worth one point. Missing a mole costs you nothing — but every second counts.',
      'When the timer hits zero, see your final score and try again to beat it.',
    ],
    benefits: [
      'Improves reaction time, focus, and quick decision-making.',
      'Fast, fun rounds — perfect for two-minute breaks or quick sibling face-offs.',
      'Works equally well on touch screens and with a mouse.',
    ],
    faqs: [
      {
        q: 'How long is each round?',
        a: 'Exactly 30 seconds. The countdown is shown clearly at the top of the board so kids can pace themselves.',
      },
      {
        q: 'Can I miss on purpose?',
        a: 'You can — but every second a mole stays up is a second you could be scoring. The game rewards speed, not strategy.',
      },
      {
        q: 'Does the game save my best score?',
        a: 'Yes. Your best score is saved on this device, so each player can try to beat their own record.',
      },
    ],
  },
];
