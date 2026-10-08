import { STATS, WINNERS } from "../../data/mock";
import { GUTTER } from "./shared";

export function Winners() {
  return (
    <section className={`bg-dark-section py-[clamp(48px,7vw,80px)] text-white ${GUTTER}`} aria-labelledby="winners-title">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-10 grid grid-cols-3 gap-4 text-center lt540:grid-cols-1">
          {STATS.map((st) => (
            <div key={st.l} className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-6">
              <div className="num text-[clamp(26px,3.4vw,38px)] font-bold text-gold">{st.v}</div>
              <div className="mt-1.5 text-[13px] text-muted-dark">{st.l}</div>
            </div>
          ))}
        </div>
        <h3 id="winners-title" className="m-0 mb-6 text-center font-display text-[22px] font-bold">
          Recent winners across Ghana
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          {WINNERS.map((w) => (
            <div key={w.ini + w.town} className="flex items-center gap-3.5 rounded-2xl border border-mint/20 bg-white/5 p-[18px]">
              <div className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#6D28D9,#FF2D78)] font-display text-sm font-bold">
                {w.ini}
              </div>
              <div>
                <div className="font-mono text-[19px] font-bold text-gold">{w.amt}</div>
                <div className="text-xs text-muted-dark">
                  {w.town} · {w.game}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="m-0 mt-6 text-center text-xs text-muted-dark">
          Winners anonymised. Amounts illustrative and pending official verification.
        </p>
      </div>
    </section>
  );
}
