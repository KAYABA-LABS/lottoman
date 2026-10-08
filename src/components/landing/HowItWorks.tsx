import { STEPS } from "../../data/mock";
import { GUTTER, SECTION_Y, SectionIntro } from "./shared";

export function HowItWorks() {
  return (
    <section id="how" className={`mx-auto max-w-[1080px] ${SECTION_Y} ${GUTTER}`}>
      <SectionIntro eyebrow="How it works" eyebrowClass="text-purple" title="Three taps to your first ticket" />
      <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 p-0">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className="rounded-[22px] border border-line bg-white p-[30px] shadow-[0_14px_34px_rgba(30,27,75,.06)]"
          >
            <div
              className="mb-5 flex size-[52px] items-center justify-center rounded-2xl font-display text-[22px] font-extrabold text-white"
              style={{ background: s.bg }}
              aria-hidden
            >
              {s.n}
            </div>
            <h3 className="m-0 mb-2.5 font-display text-xl font-bold">{s.title}</h3>
            <p className="m-0 text-[15px] leading-[1.55] text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
