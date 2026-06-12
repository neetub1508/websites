// Memory Match — vanilla TS, zero deps, self-initializing module.
// Loaded only on /games/memory-match. No global leakage.

interface Card {
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

const EMOJIS = ['🐶', '🐱', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯'];
const PAIR_COUNT = 8; // 4x4 grid

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildBoard(): Card[] {
  const picks = shuffle(EMOJIS).slice(0, PAIR_COUNT);
  return shuffle([...picks, ...picks]).map((emoji) => ({ emoji, flipped: false, matched: false }));
}

function bestKey(): string {
  return 'ka_memory_best';
}

interface Best {
  moves: number;
  time: number;
}

function readBest(): Best | null {
  try {
    const raw = localStorage.getItem(bestKey());
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Best;
    if (typeof parsed.moves === 'number' && typeof parsed.time === 'number') return parsed;
  } catch {
    // ignore
  }
  return null;
}

function writeBest(b: Best) {
  try {
    localStorage.setItem(bestKey(), JSON.stringify(b));
  } catch {
    // ignore
  }
}

// Theme integration — read the --card-back-bg / --card-back-border CSS vars
// and use them as inline styles. This lets the theme switcher re-skin cards
// live without rebuilding the page.
function readCardBackColors(): { bg: string; border: string } {
  const root = getComputedStyle(document.documentElement);
  const bg = root.getPropertyValue('--card-back-bg').trim() || 'rgba(244, 114, 182, 0.18)';
  const border = root.getPropertyValue('--card-back-border').trim() || 'rgba(244, 114, 182, 0.45)';
  return { bg, border };
}

function init() {
  const root = document.getElementById('memory-root');
  if (!root) return;

  let board = buildBoard();
  let firstIdx: number | null = null;
  let secondIdx: number | null = null;
  let busy = false;
  let moves = 0;
  let matches = 0;
  let timerHandle: number | null = null;
  let startedAt = 0;
  let elapsed = 0;
  let won = false;

  const boardEl = root.querySelector<HTMLDivElement>('#memory-board')!;
  const movesEl = root.querySelector<HTMLElement>('#memory-moves')!;
  const timeEl = root.querySelector<HTMLElement>('#memory-time')!;
  const bestEl = root.querySelector<HTMLElement>('#memory-best')!;
  const newBtn = root.querySelector<HTMLButtonElement>('#memory-new')!;
  const winModal = root.querySelector<HTMLDivElement>('#memory-win')!;
  const winStats = root.querySelector<HTMLElement>('#memory-win-stats')!;
  const winClose = root.querySelector<HTMLButtonElement>('#memory-win-close')!;
  const prevBestEl = root.querySelector<HTMLElement>('#memory-prev-best')!;

  function render() {
    const { bg, border } = readCardBackColors();
    boardEl.innerHTML = board
      .map(
        (c, i) => `
        <button
          type="button"
          data-idx="${i}"
          aria-label="Card ${i + 1}"
          class="memory-card relative aspect-square rounded-2xl ka-glass text-5xl sm:text-6xl font-bold flex items-center justify-center select-none transition-transform duration-300 ka-card-back ${c.matched ? 'memory-card-matched' : ''}"
          style="background: ${bg}; border: 2px solid ${border};"
        >
          <span class="memory-card-inner">${c.flipped || c.matched ? c.emoji : ''}</span>
        </button>`,
      )
      .join('');

    boardEl.querySelectorAll<HTMLButtonElement>('.memory-card').forEach((btn) => {
      btn.addEventListener('click', () => onFlip(parseInt(btn.dataset.idx!, 10)));
    });
  }

  function startTimer() {
    if (timerHandle !== null) return;
    startedAt = Date.now() - elapsed;
    timerHandle = window.setInterval(() => {
      elapsed = Date.now() - startedAt;
      timeEl.textContent = formatTime(elapsed);
    }, 200);
  }

  function stopTimer() {
    if (timerHandle !== null) {
      window.clearInterval(timerHandle);
      timerHandle = null;
    }
  }

  function formatTime(ms: number): string {
    const total = Math.floor(ms / 1000);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function showBest() {
    const best = readBest();
    if (best) {
      bestEl.textContent = `${formatTime(best.time)} · ${best.moves} moves`;
    } else {
      bestEl.textContent = '—';
    }
  }

  function onFlip(idx: number) {
    if (busy || won) return;
    const card = board[idx];
    if (!card || card.flipped || card.matched) return;

    if (firstIdx === null) {
      card.flipped = true;
      firstIdx = idx;
      startTimer();
      render();
      return;
    }

    if (idx === firstIdx) return;
    card.flipped = true;
    secondIdx = idx;
    moves += 1;
    movesEl.textContent = String(moves);
    render();

    const a = board[firstIdx];
    const b = board[secondIdx];
    if (a.emoji === b.emoji) {
      a.matched = true;
      b.matched = true;
      matches += 1;
      firstIdx = null;
      secondIdx = null;
      if (matches === PAIR_COUNT) onWin();
    } else {
      busy = true;
      window.setTimeout(() => {
        a.flipped = false;
        b.flipped = false;
        firstIdx = null;
        secondIdx = null;
        busy = false;
        render();
      }, 700);
    }
  }

  function onWin() {
    won = true;
    stopTimer();
    const prev = readBest();
    const isNewBest = !prev || moves < prev.moves || (moves === prev.moves && elapsed < prev.time);
    if (isNewBest) {
      writeBest({ moves, time: elapsed });
    }
    showBest();
    winStats.textContent = `${formatTime(elapsed)} · ${moves} moves`;
    prevBestEl.textContent = prev ? `${formatTime(prev.time)} · ${prev.moves} moves` : 'No previous best';
    winModal.classList.remove('hidden');
  }

  function reset() {
    stopTimer();
    board = buildBoard();
    firstIdx = null;
    secondIdx = null;
    busy = false;
    moves = 0;
    matches = 0;
    startedAt = 0;
    elapsed = 0;
    won = false;
    movesEl.textContent = '0';
    timeEl.textContent = '0:00';
    winModal.classList.add('hidden');
    render();
  }

  // Inject small flip + matched styles, themed to current accent.
  if (!document.getElementById('memory-styles')) {
    const style = document.createElement('style');
    style.id = 'memory-styles';
    style.textContent = `
      .memory-card:hover { transform: translateY(-2px); }
      .memory-card .memory-card-inner { transition: opacity .2s ease, transform .25s ease; }
      .memory-card:not(.memory-card-matched) .memory-card-inner { opacity: 0; }
      .memory-card-flipped { /* legacy hook */ }
      .memory-card-matched { background: rgba(var(--accent-1), 0.18) !important; border-color: rgba(var(--accent-1), 0.55) !important; }
    `;
    document.head.appendChild(style);
  }

  newBtn.addEventListener('click', reset);
  winClose.addEventListener('click', () => {
    winModal.classList.add('hidden');
    reset();
  });

  // Re-render when the theme changes (cards re-pick up the new back colors)
  const mo = new MutationObserver(() => render());
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  showBest();
  render();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
