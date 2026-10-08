import { LINKS, SOCIALS } from "../../config/links";
import { AgeBadge, GUTTER, Logo } from "./shared";

const COLUMNS = [
  {
    title: "Play",
    links: [
      { href: "#games", label: "Games" },
      { href: "#calculator", label: "Win Calculator" },
      { href: "#results", label: "Results" },
      { href: "#download", label: "Download App" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#how", label: "How to Play" },
      { href: "#footer", label: "Support" },
      { href: "#footer", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: LINKS.terms, label: "Terms & Conditions" },
      { href: LINKS.privacy, label: "Privacy Policy" },
      { href: LINKS.responsibleGaming, label: "Responsible Gaming" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className={`bg-night pt-[clamp(48px,7vw,72px)] pb-8 text-on-dark ${GUTTER}`}>
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 border-b border-white/10 pb-9 lt880:grid-cols-2 lt540:grid-cols-1">
          <div>
            <div className="mb-4 flex items-center gap-[11px]">
              <Logo size="footer" />
            </div>
            <p className="m-0 mb-[18px] max-w-[300px] text-sm leading-[1.6] text-muted-dark">
              Ghana's lucky number. A licensed NLA 5/90 marketing agent. Play the daily draws, funded by mobile money.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex size-[38px] items-center justify-center rounded-full bg-white/8 font-display text-sm font-bold text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <div className="mb-4 font-display text-[15px] font-bold text-white">{col.title}</div>
              <div className="flex flex-col gap-[11px] text-sm">
                {col.links.map((l) => (
                  <a key={l.label} href={l.href} className="text-muted-dark">
                    {l.label}
                  </a>
                ))}
              </div>
            </nav>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <div className="flex items-center gap-3 text-[13px] text-muted-dark">
            <AgeBadge />
            You must be 18+ to play. Play responsibly — never bet more than you can afford to lose.
          </div>
          <div className="text-[13px] text-muted">© {new Date().getFullYear()} Lottoman. Licensed NLA 5/90 Agent.</div>
        </div>
      </div>
    </footer>
  );
}
