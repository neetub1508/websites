// Whack-a-Mole — vanilla TS, zero deps. 3x3 grid, 30s rounds.
// Loaded only on /games/whack-a-mole.

const HOLES = 9;
const ROUND_MS = 30_000;
const MIN_UP_MS = 600;
const MAX_UP_MS = 1100;
const MIN_GAP_MS = 250;
const MAX_GAP_MS = 700;

function bestKey(): string {
  return 'ka_whack_best';
}

function readBest(): number {
  try {
    const raw = localStorage.getItem(bestKey());
    const n = raw ? parseInt(raw, 10) : 0;
    return Number.isFinite(n) ? n : 0;
  } catch {
    return 0;
  }
}

function writeBest(score: number) {
  try {
    localStorage.setItem(bestKey(), String(score));
  } catch {
    // ignore
  }
}

function randInt(lo: number, hi: number): number {
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

function init() {
  const root = document.getElementById('whack-root');
  if (!root) return;

  const boardEl = root.querySelector<HTMLDivElement>('#whack-board')!;
  const scoreEl = root.querySelector<HTMLElement>('#whack-score')!;
  const bestEl = root.querySelector<HTMLElement>('#whack-best')!;
  const timeEl = root.querySelector<HTMLElement>('#whack-time')!;
  const startBtn = root.querySelector<HTMLButtonElement>('#whack-start')!;
  const overlay = root.querySelector<HTMLDivElement>('#whack-overlay')!;
  const overlayTitle = root.querySelector<HTMLElement>('#whack-overlay-title')!;
  const overlayMsg = root.querySelector<HTMLElement>('#whack-overlay-msg')!;

  let activeHole: number | null = null;
  let activeUntil = 0;
  let popTimer: number | null = null;
  let gapTimer: number | null = null;
  let countdownTimer: number | null = null;
  let remaining = ROUND_MS;
  let score = 0;
  let state: 'idle' | 'running' | 'over' = 'idle';

  function readTheme(): { bg: string; rim: string; mole: string } {
    const css = getComputedStyle(document.documentElement);
    return {
      bg: css.getPropertyValue('--hole-bg').trim() || 'radial-gradient(circle at 50% 30%, #fde68a 0%, #b45309 90%)',
      rim: css.getPropertyValue('--hole-rim').trim() || 'rgba(180, 83, 9, 0.4)',
      mole: css.getPropertyValue('--mole').trim() || '#92400e',
    };
  }

  function updateScore() {
    scoreEl.textContent = String(score);
    bestEl.textContent = String(readBest());
  }

  function updateTime() {
    timeEl.textContent = Math.max(0, Math.ceil(remaining / 1000)).toString();
  }

  function buildBoard() {
    const { bg, rim } = readTheme();
    boardEl.innerHTML = Array.from({ length: HOLES }, (_, i) => `
      <button
        type="button"
        data-hole="${i}"
        aria-label="Hole ${i + 1}"
        class="whack-hole relative aspect-square rounded-2xl ka-glass overflow-hidden flex items-end justify-center transition-transform ka-hole"
        style="background: ${bg}; border: 2px solid ${rim};"
      >
        <span class="whack-mole absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-6xl sm:text-7xl select-none pointer-events-none transition-transform duration-150" aria-hidden="true">🐹</span>
      </button>
    `).join('');
    boardEl.querySelectorAll<HTMLButtonElement>('.whack-hole').forEach((btn) => {
      btn.addEventListener('click', () => onWhack(parseInt(btn.dataset.hole!, 10)));
    });
  }

  function popOne() {
    if (state !== 'running') return;
    let next: number;
    do {
      next = randInt(0, HOLES - 1);
    } while (activeHole !== null && next === activeHole);

    activeHole = next;
    const holeEl = boardEl.querySelector<HTMLButtonElement>(`[data-hole="${next}"]`);
    const mole = holeEl?.querySelector<HTMLElement>('.whack-mole');
    if (mole) mole.style.transform = 'translate(-50%, 8%)';

    activeUntil = Date.now() + randInt(MIN_UP_MS, MAX_UP_MS);
  }

  function hideActive() {
    if (activeHole === null) return;
    const holeEl = boardEl.querySelector<HTMLButtonElement>(`[data-hole="${activeHole}"]`);
    const mole = holeEl?.querySelector<HTMLElement>('.whack-mole');
    if (mole) mole.style.transform = 'translate(-50%, 100%)';
    activeHole = null;
  }

  function scheduleNext() {
    if (state !== 'running') return;
    popTimer = window.setTimeout(() => {
      if (state !== 'running') return;
      popOne();
      const upFor = Math.max(0, activeUntil - Date.now());
      gapTimer = window.setTimeout(() => {
        if (state !== 'running') return;
        hideActive();
        scheduleNext();
      }, upFor);
    }, randInt(MIN_GAP_MS, MAX_GAP_MS));
  }

  function onWhack(idx: number) {
    if (state !== 'running') return;
    if (idx !== activeHole) return;
    score += 1;
    updateScore();
    const holeEl = boardEl.querySelector<HTMLButtonElement>(`[data-hole="${idx}"]`);
    if (holeEl) {
      holeEl.classList.add('whack-hit');
      window.setTimeout(() => holeEl.classList.remove('whack-hit'), 150);
    }
    hideActive();
  }

  function start() {
    score = 0;
    remaining = ROUND_MS;
    state = 'running';
    updateScore();
    updateTime();
    overlay.classList.add('hidden');
    countdownTimer = window.setInterval(() => {
      remaining -= 100;
      if (remaining <= 0) {
        end();
        return;
      }
      updateTime();
    }, 100);
    scheduleNext();
  }

  function end() {
    state = 'over';
    if (popTimer !== null) window.clearTimeout(popTimer);
    if (gapTimer !== null) window.clearTimeout(gapTimer);
    if (countdownTimer !== null) window.clearInterval(countdownTimer);
    popTimer = null;
    gapTimer = null;
    countdownTimer = null;
    hideActive();
    const best = readBest();
    if (score > best) writeBest(score);
    updateScore();
    overlayTitle.textContent = 'Time!';
    overlayMsg.textContent = `Score: ${score} · Best: ${Math.max(score, best)}`;
    overlay.classList.remove('hidden');
  }

  // Hit flash style — uses the theme's accent-1 for the ring
  if (!document.getElementById('whack-styles')) {
    const style = document.createElement('style');
    style.id = 'whack-styles';
    style.textContent = `.whack-hit { transform: scale(0.95); box-shadow: 0 0 0 4px rgba(var(--accent-1), 0.5); }`;
    document.head.appendChild(style);
  }

  startBtn.addEventListener('click', start);

  // Re-build the board on theme change so the holes re-pick up the new colors
  const mo = new MutationObserver(() => {
    if (state !== 'running') buildBoard();
  });
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  buildBoard();
  updateScore();
  updateTime();
  overlayTitle.textContent = 'Whack-a-Mole';
  overlayMsg.textContent = 'Press Start to begin a 30-second round.';
  overlay.classList.remove('hidden');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
