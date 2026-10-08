import { DRAW_TIME, type Game } from "../config/games";

/**
 * Milliseconds until the game's next weekly draw.
 * Africa/Accra is GMT+0 all year, so UTC arithmetic gives the right answer in any viewer timezone.
 * If today's draw has already passed, counts down to next week's.
 */
export function msUntilNextDraw(game: Game, now: number): number {
  const [hh, mm] = (game.drawTime ?? DRAW_TIME).split(":").map(Number);
  const d = new Date(now);
  let add = (game.day - d.getUTCDay() + 7) % 7;
  const at = (days: number) => Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + days, hh, mm);
  if (add === 0 && at(0) <= now) add = 7;
  return at(add) - now;
}

/** The game whose draw comes soonest. */
export function nextDraw(games: Game[], now: number): { game: Game; ms: number } {
  return games
    .map((game) => ({ game, ms: msUntilNextDraw(game, now) }))
    .reduce((a, b) => (a.ms < b.ms ? a : b));
}

export type Countdown = { d: number; h: string; m: string; s: string };

export function formatCountdown(ms: number): Countdown {
  const s = Math.max(0, Math.floor(ms / 1000));
  const p = (n: number) => String(n).padStart(2, "0");
  return { d: Math.floor(s / 86400), h: p(Math.floor((s % 86400) / 3600)), m: p(Math.floor((s % 3600) / 60)), s: p(s % 60) };
}

/** "19:30" → "7:30 PM" */
export function formatDrawTime(time: string = DRAW_TIME): string {
  const [hh, mm] = time.split(":").map(Number);
  return `${hh % 12 || 12}:${String(mm).padStart(2, "0")} ${hh < 12 ? "AM" : "PM"}`;
}
