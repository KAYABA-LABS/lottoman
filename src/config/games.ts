// Single source of truth for draws, payouts and stake limits.

/** NLA draws run on Africa/Accra time (GMT+0, no daylight saving). */
export const DRAW_TIMEZONE = "Africa/Accra";
export const DRAW_TIME = "19:30"; // Africa/Accra

export type Game = {
  id: string;
  /** Weekday, 0 = Sunday … 6 = Saturday. */
  day: number;
  name: string;
  tag: string;
  gradient: [string, string];
  /** "HH:MM" Accra time. Omit to use DRAW_TIME. Lets midday draws (Noon Rush, VAG) be added here later. */
  drawTime?: string;
};

export const GAMES: Game[] = [
  { id: "monday-special",        day: 1, name: "Monday Special",        tag: "Start the week lucky",       gradient: ["#6D28D9", "#FF2D78"] },
  { id: "lucky-tuesday",         day: 2, name: "Lucky Tuesday",         tag: "Midweek momentum",           gradient: ["#12E0B8", "#6D28D9"] },
  { id: "mid-week",              day: 3, name: "Mid Week",              tag: "Break the week open",        gradient: ["#4338CA", "#6D28D9"] },
  { id: "fortune-thursday",      day: 4, name: "Fortune Thursday",      tag: "Ghana's favourite draw",     gradient: ["#FFB800", "#FF2D78"] },
  { id: "friday-bonanza",        day: 5, name: "Friday Bonanza",        tag: "End the week big",           gradient: ["#FF2D78", "#6D28D9"] },
  { id: "national-weekly-lotto", day: 6, name: "National Weekly Lotto", tag: "The national draw",          gradient: ["#6D28D9", "#1E1B4B"] },
  { id: "sunday-aseda",          day: 0, name: "Sunday Aseda",          tag: "Give thanks, play grateful", gradient: ["#FFB800", "#16A34A"] },
  // NLA also runs midday "Noon Rush" and "VAG" draws — add them here with their own drawTime.
];

// Indicative payout multipliers (× stake) — placeholders only. null = not yet known.
// TODO: confirm against official NLA payout table before launch
export const PAYOUTS = {
  "Direct 1": null,
  "Direct 2": 240,
  "Direct 3": 2100,
  "Direct 4": 6000,
  "Direct 5": 44000,
  "Perm 2": 240,
  "Perm 3": null,
  "Banker": 240,
} as const satisfies Record<string, number | null>;

export type BetType = keyof typeof PAYOUTS;

/** Bet types offered in the landing-page Win Calculator. */
export const CALC_BET_TYPES = ["Direct 2", "Direct 3", "Direct 4", "Direct 5", "Perm 2", "Banker"] as const satisfies readonly BetType[];

/** How many numbers a player can perm in the calculator. */
export const PERM_COUNTS = [3, 4, 5, 6] as const;

export const STAKE = { min: 1, max: 200, currency: "GHS" } as const;

export const WEEKDAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;
