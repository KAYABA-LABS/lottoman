import { GAMES, PAYOUTS, WEEKDAY_NAMES, type Game } from "../../config/games";
import { LINKS } from "../../config/links";
import { useNow } from "../../hooks/useNow";
import { formatCountdown, formatDrawTime, msUntilNextDraw } from "../../lib/draws";
import { formatNumber } from "../../lib/format";
import { GUTTER, SECTION_Y, SectionIntro } from "./shared";

function GameCard({ game, now }: { game: Game; now: number }) {
  const cd = formatCountdown(msUntilNextDraw(game, now));
  const [g1, g2] = game.gradient;

  return (
    <article className="relative flex flex-col overflow-hidden rounded-[22px] border border-line bg-white shadow-card transition-all duration-250 ease-in-out hover:-translate-y-1.5 hover:shadow-card-hover motion-reduce:hover:translate-y-0">
      <div className="relative px-[22px] pt-[22px] pb-[26px] text-white" style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}>
        <div className="mb-3.5 flex items-center justify-between">
          <span className="rounded-full bg-white/22 px-3 py-[5px] text-xs font-bold tracking-[1px] uppercase">
            {WEEKDAY_NAMES[game.day]}
          </span>
          <span className="text-xs font-semibold opacity-85">{formatDrawTime(game.drawTime)}</span>
        </div>
        <h3 className="m-0 font-display text-[26px] leading-[1.05] font-extrabold tracking-[-0.5px]">{game.name}</h3>
        <div className="mt-1.5 text-[13px] opacity-90">{game.tag}</div>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-[22px] pt-5 pb-[22px]">
        <div className="flex items-center gap-2 text-[13px] text-muted">
          <span className="rounded-full bg-chip px-2.5 py-1 font-mono font-bold text-purple">5 / 90</span>
          <span>Match 5 from 1–90</span>
        </div>
        <div className="rounded-[14px] border border-line bg-cloud px-3.5 py-3">
          <div className="mb-2 text-xs text-muted">Next draw closes in</div>
          <div
            className="num text-xl font-bold tracking-[1px] text-ink"
            role="timer"
            aria-label={`${cd.d} days ${cd.h} hours ${cd.m} minutes until ${game.name}`}
          >
            {cd.d}d {cd.h}:{cd.m}:{cd.s}
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-[13px] text-muted">Direct 5 pays up to</span>
          <span className="font-mono text-[19px] font-bold text-gold-text">×{formatNumber(PAYOUTS["Direct 5"])}</span>
        </div>
        <div className="mt-auto flex gap-2.5">
          <a
            href={LINKS.play(game.id)}
            className="flex-1 rounded-xl bg-magenta p-[13px] text-center text-[15px] font-bold text-white"
            aria-label={`Play ${game.name}`}
          >
            Play
          </a>
          <a
            href={LINKS.gameDetails(game.id)}
            className="rounded-xl bg-chip px-4 py-[13px] text-[15px] font-semibold text-purple"
            aria-label={`${game.name} details`}
          >
            Details
          </a>
        </div>
      </div>
    </article>
  );
}

export function GamesGrid() {
  const now = useNow();
  return (
    <section id="games" className={`mx-auto max-w-[1180px] ${SECTION_Y} ${GUTTER}`}>
      <SectionIntro eyebrow="The Weekly Cycle" eyebrowClass="text-purple" title="Seven daily 5/90 draws">
        A branded draw every night at {formatDrawTime()}. Pick your numbers, choose your bet, and play any of them.
      </SectionIntro>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
        {GAMES.map((g) => (
          <GameCard key={g.id} game={g} now={now} />
        ))}
      </div>
    </section>
  );
}
