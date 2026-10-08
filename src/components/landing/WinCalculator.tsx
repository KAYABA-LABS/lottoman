import { useState } from "react";
import { CALC_BET_TYPES, PAYOUTS, PERM_COUNTS, STAKE, type BetType } from "../../config/games";
import { useCountUp } from "../../hooks/useCountUp";
import { formatMoney, formatNumber, nCr } from "../../lib/format";
import { GUTTER, SECTION_Y, SectionIntro } from "./shared";

const clampStake = (n: number) => Math.max(STAKE.min, Math.min(STAKE.max, Math.round(n) || STAKE.min));
const multiplier = (bt: BetType) => PAYOUTS[bt] ?? 0;

function describe(betType: BetType, permCount: number, stake: number): string {
  if (betType.startsWith("Perm")) {
    const pairs = nCr(permCount, 2);
    return `Pays ${STAKE.currency} ${formatNumber(stake * multiplier(betType))} per winning pair · ${pairs} possible pairs from ${permCount} numbers`;
  }
  if (betType === "Banker") {
    return `Banker ×${formatNumber(multiplier(betType))} applied per matched line on a ${STAKE.currency} ${stake} stake`;
  }
  return `${betType} pays ×${formatNumber(multiplier(betType))} on your ${STAKE.currency} ${stake} stake`;
}

export function WinCalculator() {
  const [betType, setBetType] = useState<BetType>("Direct 3");
  const [permCount, setPermCount] = useState(4);
  const [stake, setStake] = useState(5);
  const target = stake * multiplier(betType);
  const payout = useCountUp(target);
  const isPerm = betType.startsWith("Perm");

  return (
    <section id="calculator" className={`bg-dark-section text-white ${SECTION_Y} ${GUTTER}`}>
      <div className="mx-auto max-w-[1080px]">
        <SectionIntro
          eyebrow="Win Calculator"
          eyebrowClass="text-gold"
          title="See what a stake could return"
          subClass="text-on-dark"
          className="mb-10"
        >
          Pick a bet type and stake — no login needed. Figures are indicative.
        </SectionIntro>

        <div className="grid grid-cols-[1.1fr_.9fr] items-stretch gap-[26px] lt880:grid-cols-1">
          <div className="rounded-3xl border border-white/12 bg-white/5 p-7">
            <div className="label-dark mb-3" id="bet-type-label">Bet type</div>
            <div className="mb-6 grid grid-cols-3 gap-[9px]" role="group" aria-labelledby="bet-type-label">
              {CALC_BET_TYPES.map((bt) => {
                const active = bt === betType;
                return (
                  <button
                    key={bt}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setBetType(bt)}
                    className={`cursor-pointer rounded-xl border px-2 py-3 font-sans text-sm font-bold text-white transition-all duration-180 ease-in-out ${
                      active
                        ? "border-magenta bg-magenta shadow-[0_8px_20px_rgba(255,45,120,.4)]"
                        : "border-white/16 bg-white/4"
                    }`}
                  >
                    {bt}
                  </button>
                );
              })}
            </div>

            {isPerm && (
              <div className="mb-6">
                <div className="label-dark mb-3" id="perm-label">Numbers to perm</div>
                <div className="flex gap-[9px]" role="group" aria-labelledby="perm-label">
                  {PERM_COUNTS.map((k) => {
                    const active = k === permCount;
                    return (
                      <button
                        key={k}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setPermCount(k)}
                        className={`h-12 w-[52px] cursor-pointer rounded-xl border font-mono text-[17px] font-bold transition-all duration-180 ease-in-out ${
                          active ? "border-gold bg-gold/18 text-gold" : "border-white/16 bg-white/4 text-white"
                        }`}
                      >
                        {k}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mb-3 flex items-center justify-between">
              <label htmlFor="stake" className="label-dark">Your stake</label>
              <span className="font-mono text-xl font-bold text-mint">
                {STAKE.currency} {stake}
              </span>
            </div>
            <input
              id="stake"
              type="range"
              min={STAKE.min}
              max={STAKE.max}
              value={stake}
              onChange={(e) => setStake(clampStake(+e.target.value))}
              aria-valuetext={`${STAKE.currency} ${stake}`}
              className="h-1.5 w-full cursor-pointer accent-magenta"
            />
            <div className="mt-2 flex justify-between font-mono text-xs text-muted-dark">
              <span>{STAKE.currency} {STAKE.min} min</span>
              <span>{STAKE.currency} {STAKE.max} max</span>
            </div>
          </div>

          <div className="bg-payout-panel flex flex-col justify-center rounded-3xl border border-gold/30 p-8 text-center">
            <div className="label-dark mb-2">Potential win</div>
            <div
              className="num text-[clamp(38px,6vw,60px)] leading-none font-bold text-gold [text-shadow:0_8px_30px_rgba(255,184,0,.35)]"
              aria-hidden
            >
              {formatMoney(payout)}
            </div>
            <span className="sr-only" aria-live="polite">Potential win {formatMoney(target)}</span>
            <div className="mt-4 text-sm leading-[1.5] text-on-dark">{describe(betType, permCount, stake)}</div>
            <div className="mt-5 border-t border-white/12 pt-[18px] text-xs leading-[1.5] text-muted-dark">
              Indicative multipliers, pending official NLA payout confirmation. Not a guarantee of winnings.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
