import { LINKS } from "../../config/links";
import { RESULTS } from "../../data/mock";
import { GUTTER, SECTION_Y } from "./shared";

export function LatestResults() {
  return (
    <section id="results" className={`bg-ink text-white ${SECTION_Y} ${GUTTER}`}>
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow mb-2.5 text-mint">Latest Results</div>
            <h2 className="m-0 font-display text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-1px]">
              Recent winning numbers
            </h2>
          </div>
          <a href={LINKS.results} className="text-[15px] font-semibold text-mint">
            View all results →
          </a>
        </div>
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {RESULTS.map((r) => (
            <li
              key={r.game + r.date}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <div>
                <div className="font-display text-[17px] font-bold">{r.game}</div>
                <div className="font-mono text-[13px] text-muted-dark">{r.date}</div>
              </div>
              <div className="flex gap-[9px]" aria-label={`Winning numbers: ${r.nums.join(", ")}`}>
                {r.nums.map((n, i) => (
                  <span
                    key={i}
                    className="gold-ball flex size-11 items-center justify-center rounded-full font-mono text-base font-bold text-indigo shadow-[0_6px_14px_rgba(255,184,0,.3)]"
                    aria-hidden
                  >
                    {n}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
