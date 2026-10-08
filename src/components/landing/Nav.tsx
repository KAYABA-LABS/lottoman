import { LINKS } from "../../config/links";
import { GUTTER, Logo } from "./shared";

const NAV_LINKS = [
  { href: "#games", label: "Games" },
  { href: "#results", label: "Results" },
  { href: "#how", label: "How to Play" },
  { href: "#calculator", label: "Win Calculator" },
  { href: "#footer", label: "Support" },
];

export function Nav() {
  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between gap-[18px] border-b border-white/8 bg-indigo/82 py-3.5 backdrop-blur-[14px] ${GUTTER}`}
      aria-label="Main"
    >
      <a href="#top" className="flex items-center gap-[11px] text-white">
        <Logo />
      </a>
      <div className="hidden items-center gap-[26px] nav:flex">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="text-[15px] font-medium text-on-dark">
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2.5">
        <a href={LINKS.login} className="rounded-full border border-white/28 px-4 py-2.5 text-sm font-semibold text-white">
          Log In
        </a>
        <a
          href={LINKS.signup}
          className="rounded-full bg-magenta px-[18px] py-2.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(255,45,120,.45)]"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}
