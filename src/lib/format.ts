import { STAKE } from "../config/games";

export const formatNumber = (n: number) => Math.round(n).toLocaleString("en-US");

export const formatMoney = (n: number) => `${STAKE.currency} ${formatNumber(n)}`;

export function nCr(n: number, r: number): number {
  if (r > n) return 0;
  let x = 1;
  for (let i = 0; i < r; i++) x = (x * (n - i)) / (i + 1);
  return Math.round(x);
}
