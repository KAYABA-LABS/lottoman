import type { CSSProperties } from "react";
import { GAMES } from "../../config/games";
import { useNow } from "../../hooks/useNow";
import { formatCountdown, formatDrawTime, nextDraw } from "../../lib/draws";
import { GUTTER } from "./shared";

// [top %, left %, colour, number] — positions from the approved design.
const BALLS: [number, number, string, string][] = [
  [9, 8, "#FFB800", "07"],
  [16, 84, "#FF2D78", "21"],
  [66, 12, "#12E0B8", "45"],
  [72, 78, "#6D28D9", "63"],
  [38, 92, "#FFB800", "12"],
  [80, 40, "#FF2D78", "88"],
  [30, 66, "#12E0B8", "34"],
];

function HeroBalls() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {BALLS.map(([top, left, color, num], i) => {
        const size = 56 + (i % 3) * 12;
        const style = {
          top: `${top}%`,
          left: `${left}%`,
          width: size,
          height: size,
          fontSize: size * 0.34,
          background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,.7), ${color})`,
          boxShadow: `0 12px 34px ${color}55, inset 0 -6px 14px rgba(0,0,0,.25)`,
          "--float-dur": `${5 + i * 0.7}s`,
          "--float-delay": `${i * 0.4}s`,
        } as CSSProperties;
        return (
          <div
            key={num}
            className="ball-float pointer-events-none absolute flex items-center justify-center rounded-full font-mono font-bold text-indigo opacity-85"
            style={style}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
}

function NextDrawCard() {
  const now = useNow();
  const { game, ms } = nextDraw(GAMES, now);
  const cd = formatCountdown(ms);
  const cells = [
    { v: cd.d, l: "DAYS", gold: true },
    { v: cd.h, l: "HRS", gold: true },
    { v: cd.m, l: "MIN", gold: true },
    { v: cd.s, l: "SEC", gold: false },
  ];

  return (
    <div className="rounded-[26px] border border-white/14 bg-white/6 p-7 shadow-[0_30px_70px_rgba(0,0,0,.35)] backdrop-blur-[10px]">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="label-dark">Next draw</span>
        <span className="text-[13px] font-semibold text-mint">{formatDrawTime(game.drawTime)}</span>
      </div>
      <div className="mb-[18px] font-display text-2xl font-bold">{game.name}</div>
      <div
        className="grid grid-cols-4 gap-2 text-center"
        role="timer"
        aria-label={`${cd.d} days ${cd.h} hours ${cd.m} minutes until ${game.name}`}
      >
        {cells.map((c) => (
          <div key={c.l} className="rounded-[14px] bg-indigo/55 px-1.5 py-3.5" aria-hidden>
            <div className={`num text-[30px] font-bold ${c.gold ? "text-gold" : "text-magenta"}`}>{c.v}</div>
            <div className="text-[11px] tracking-[1px] text-muted-dark">{c.l}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-[13px] text-on-dark">
        <span className="rounded-full bg-mint/14 px-2.5 py-1 font-semibold text-mint">5 from 1–90</span>
        <span>Draws every night</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header
      id="top"
      className={`bg-hero relative overflow-hidden pt-[clamp(48px,8vw,96px)] pb-[clamp(64px,9vw,120px)] text-white ${GUTTER}`}
    >
      <HeroBalls />
      <div className="relative z-1 mx-auto grid max-w-[1180px] grid-cols-[1.15fr_.85fr] items-center gap-[clamp(28px,4vw,56px)] lt880:grid-cols-1">
        <div>
          <div className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/14 px-3.5 py-[7px] text-[13px] font-semibold text-gold">
            <span className="size-[7px] rounded-full bg-mint shadow-[0_0_10px_#12E0B8]" />
            Licensed NLA 5/90 Agent
          </div>
          <h1 className="m-0 mb-4 font-display text-[clamp(38px,6vw,68px)] leading-[1.02] font-extrabold tracking-[-1.5px]">
            Ghana's lucky number is{" "}
            <span className="bg-[linear-gradient(100deg,#FFB800,#FF2D78)] bg-clip-text text-transparent">Lottoman</span>.
          </h1>
          <p className="m-0 mb-[30px] max-w-[520px] text-[clamp(16px,1.6vw,20px)] leading-[1.5] text-on-dark">
            Seven daily 5/90 draws. Pick your numbers, fund with mobile money, and play in seconds — winning is one tap
            away.
          </p>
          <div className="mb-[18px] flex flex-wrap gap-3.5">
            <a href="#games" className="cta-pulse rounded-full bg-magenta px-[30px] py-4 text-[17px] font-bold text-white">
              Play Now
            </a>
            <a
              href="#download"
              className="rounded-full border border-white/28 bg-white/8 px-7 py-4 text-[17px] font-semibold text-white"
            >
              Download the App
            </a>
          </div>
          <p className="m-0 text-[13px] text-muted-dark">18+ only · Play responsibly · Winning is never guaranteed.</p>
        </div>
        <NextDrawCard />
      </div>
    </header>
  );
}
