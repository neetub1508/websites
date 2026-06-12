// Snake — vanilla TS, zero deps. Canvas-based, keyboard + on-screen D-pad
// + swipe support. Loaded only on /games/snake.

const GRID = 20; // 20x20 cells
const BASE_TICK_MS = 130;
const MIN_TICK_MS = 60;

type Dir = 'up' | 'down' | 'left' | 'right';

function bestKey(): string {
  return 'ka_snake_best';
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

function init() {
  const root = document.getElementById('snake-root');
  if (!root) return;

  const canvas = root.querySelector<HTMLCanvasElement>('#snake-canvas')!;
  const ctx = canvas.getContext('2d')!;
  const scoreEl = root.querySelector<HTMLElement>('#snake-score')!;
  const bestEl = root.querySelector<HTMLElement>('#snake-best')!;
  const startBtn = root.querySelector<HTMLButtonElement>('#snake-start')!;
  const pauseBtn = root.querySelector<HTMLButtonElement>('#snake-pause')!;
  const overlay = root.querySelector<HTMLDivElement>('#snake-overlay')!;
  const overlayTitle = root.querySelector<HTMLElement>('#snake-overlay-title')!;
  const overlayMsg = root.querySelector<HTMLElement>('#snake-overlay-msg')!;
  const dpadUp = root.querySelector<HTMLButtonElement>('#snake-up')!;
  const dpadDown = root.querySelector<HTMLButtonElement>('#snake-down')!;
  const dpadLeft = root.querySelector<HTMLButtonElement>('#snake-left')!;
  const dpadRight = root.querySelector<HTMLButtonElement>('#snake-right')!;

  let snake: { x: number; y: number }[] = [];
  let dir: Dir = 'right';
  let nextDir: Dir = 'right';
  let apple = { x: 0, y: 0 };
  let tickHandle: number | null = null;
  let score = 0;
  let state: 'idle' | 'running' | 'paused' | 'over' = 'idle';
  let lastStep = 0;

  // Theme tokens (re-read on every draw so the theme switcher recolors live)
  function themeColors() {
    const css = getComputedStyle(document.documentElement);
    const snakeHead = css.getPropertyValue('--snake-head').trim() || '#16a34a';
    const snakeTail = css.getPropertyValue('--snake-tail').trim() || '#34d399';
    const appleCol = css.getPropertyValue('--apple').trim() || '#ef4444';
    const gridCol = css.getPropertyValue('--board-grid').trim() || 'rgba(255,255,255,0.6)';
    return { snakeHead, snakeTail, apple: appleCol, grid: gridCol };
  }

  function fitCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (state === 'idle') draw();
  }
  window.addEventListener('resize', fitCanvas);

  function placeApple() {
    while (true) {
      const x = Math.floor(Math.random() * GRID);
      const y = Math.floor(Math.random() * GRID);
      if (!snake.some((s) => s.x === x && s.y === y)) {
        apple = { x, y };
        return;
      }
    }
  }

  function reset() {
    snake = [
      { x: 9, y: 10 },
      { x: 8, y: 10 },
      { x: 7, y: 10 },
    ];
    dir = 'right';
    nextDir = 'right';
    score = 0;
    placeApple();
    updateScore();
    draw();
  }

  function updateScore() {
    scoreEl.textContent = String(score);
    bestEl.textContent = String(readBest());
  }

  function tickMs(): number {
    return Math.max(MIN_TICK_MS, BASE_TICK_MS - score * 2);
  }

  function step() {
    dir = nextDir;
    const head = snake[0];
    const next = { x: head.x, y: head.y };
    if (dir === 'up') next.y -= 1;
    else if (dir === 'down') next.y += 1;
    else if (dir === 'left') next.x -= 1;
    else if (dir === 'right') next.x += 1;

    if (next.x < 0 || next.x >= GRID || next.y < 0 || next.y >= GRID) return gameOver();
    if (snake.slice(0, -1).some((s) => s.x === next.x && s.y === next.y)) return gameOver();

    snake.unshift(next);
    if (next.x === apple.x && next.y === apple.y) {
      score += 1;
      placeApple();
      updateScore();
    } else {
      snake.pop();
    }
    draw();
  }

  function loop(now: number) {
    if (state !== 'running') return;
    if (now - lastStep >= tickMs()) {
      lastStep = now;
      step();
    }
    tickHandle = requestAnimationFrame(loop);
  }

  function draw() {
    const rect = canvas.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height);
    const cell = size / GRID;
    const colors = themeColors();

    ctx.clearRect(0, 0, rect.width, rect.height);

    // grid
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    for (let i = 1; i < GRID; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cell, 0);
      ctx.lineTo(i * cell, GRID * cell);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * cell);
      ctx.lineTo(GRID * cell, i * cell);
      ctx.stroke();
    }

    // apple
    const ax = apple.x * cell + cell / 2;
    const ay = apple.y * cell + cell / 2;
    const r = cell * 0.38;
    const grad = ctx.createRadialGradient(ax, ay, 1, ax, ay, r);
    grad.addColorStop(0, '#fecaca');
    grad.addColorStop(1, colors.apple);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(ax, ay, r, 0, Math.PI * 2);
    ctx.fill();

    // snake
    snake.forEach((seg, i) => {
      const t = i / Math.max(snake.length - 1, 1);
      // linear-blend snake head → tail via canvas (simple)
      ctx.fillStyle = i === 0 ? colors.snakeHead : colors.snakeTail;
      const pad = cell * 0.06;
      const x = seg.x * cell + pad;
      const y = seg.y * cell + pad;
      const w = cell - pad * 2;
      const radius = cell * 0.22;
      roundedRect(ctx, x, y, w, w, radius);
      ctx.fill();
    });
  }

  function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function start() {
    if (state === 'running') return;
    reset();
    state = 'running';
    lastStep = performance.now();
    overlay.classList.add('hidden');
    tickHandle = requestAnimationFrame(loop);
  }

  function pause() {
    if (state !== 'running') return;
    state = 'paused';
    if (tickHandle !== null) cancelAnimationFrame(tickHandle);
    tickHandle = null;
    overlayTitle.textContent = 'Paused';
    overlayMsg.textContent = 'Press Start to keep playing.';
    overlay.classList.remove('hidden');
  }

  function gameOver() {
    state = 'over';
    if (tickHandle !== null) cancelAnimationFrame(tickHandle);
    tickHandle = null;
    const best = readBest();
    if (score > best) writeBest(score);
    updateScore();
    overlayTitle.textContent = 'Game over';
    overlayMsg.textContent = `Score: ${score} · Best: ${Math.max(score, best)}`;
    overlay.classList.remove('hidden');
  }

  function setDir(d: Dir) {
    if (d === 'up' && dir === 'down') return;
    if (d === 'down' && dir === 'up') return;
    if (d === 'left' && dir === 'right') return;
    if (d === 'right' && dir === 'left') return;
    nextDir = d;
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
      e.preventDefault();
      setDir('up');
    } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
      e.preventDefault();
      setDir('down');
    } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      e.preventDefault();
      setDir('left');
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      e.preventDefault();
      setDir('right');
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (state === 'idle' || state === 'over') start();
      else if (state === 'paused') start();
      else if (state === 'running') pause();
    }
  });

  dpadUp.addEventListener('click', () => setDir('up'));
  dpadDown.addEventListener('click', () => setDir('down'));
  dpadLeft.addEventListener('click', () => setDir('left'));
  dpadRight.addEventListener('click', () => setDir('right'));

  let touchStart: { x: number; y: number } | null = null;
  canvas.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    touchStart = { x: t.clientX, y: t.clientY };
  }, { passive: true });
  canvas.addEventListener('touchend', (e) => {
    if (!touchStart) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.x;
    const dy = t.clientY - touchStart.y;
    if (Math.abs(dx) < 20 && Math.abs(dy) < 20) {
      touchStart = null;
      return;
    }
    if (Math.abs(dx) > Math.abs(dy)) setDir(dx > 0 ? 'right' : 'left');
    else setDir(dy > 0 ? 'down' : 'up');
    touchStart = null;
  });

  startBtn.addEventListener('click', () => {
    if (state === 'running') return;
    start();
  });
  pauseBtn.addEventListener('click', () => {
    if (state === 'running') pause();
    else if (state === 'paused' || state === 'over') start();
  });

  // Redraw on theme change so colors update mid-pause
  const mo = new MutationObserver(() => draw());
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  fitCanvas();
  reset();
  overlayTitle.textContent = 'Snake';
  overlayMsg.textContent = 'Use arrow keys, WASD, the D-pad, or swipe to play.';
  overlay.classList.remove('hidden');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
