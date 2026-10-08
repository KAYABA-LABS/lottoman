import type { ReactNode } from "react";

/** Horizontal page gutter used by every section. */
export const GUTTER = "px-[clamp(18px,5vw,60px)]";
/** Vertical padding for full sections. */
export const SECTION_Y = "py-[clamp(56px,8vw,96px)]";

export function Logo({ size = "nav" }: { size?: "nav" | "footer" }) {
  const nav = size === "nav";
  return (
    <>
      <span
        className={`gold-ball flex items-center justify-center rounded-full font-mono font-bold text-indigo ${
          nav ? "size-[38px] shadow-[0_6px_18px_rgba(255,184,0,.5)]" : "size-9"
        }`}
        aria-hidden
      >
        90
      </span>
      <span
        className={`font-display font-extrabold ${nav ? "text-[22px] tracking-[-0.5px]" : "text-[20px] text-white"}`}
      >
        Lottoman
      </span>
    </>
  );
}

export function AgeBadge() {
  return (
    <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-magenta text-[11px] font-bold text-white">
      18+
    </span>
  );
}

export function SectionIntro({ eyebrow, eyebrowClass, title, subClass = "text-muted", className = "mb-11", children }: {
  eyebrow: string;
  eyebrowClass: string;
  title: string;
  subClass?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`text-center ${className}`}>
      <div className={`eyebrow mb-2.5 ${eyebrowClass}`}>{eyebrow}</div>
      <h2 className={`h2 m-0 ${children ? "mb-3" : ""}`}>{title}</h2>
      {children && <p className={`mx-auto my-0 max-w-[560px] text-[17px] ${subClass}`}>{children}</p>}
    </div>
  );
}
