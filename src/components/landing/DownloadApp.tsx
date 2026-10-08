import { LINKS } from "../../config/links";
import { APP_BENEFITS } from "../../data/mock";
import { GUTTER, SECTION_Y } from "./shared";

const QUICK_PICKS = ["12", "45", "63"];
const QUICK_BALL = "flex size-[34px] items-center justify-center rounded-full";

function PhoneMockup() {
  return (
    <div
      className="flex h-[480px] w-[236px] flex-col gap-3 rounded-[38px] border-[9px] border-[#060517] bg-night px-3 py-3.5 shadow-[0_40px_80px_rgba(0,0,0,.5)]"
      aria-hidden
    >
      <div className="flex items-center justify-between px-1.5 py-0.5 font-mono text-[11px] text-muted-dark">
        <span>9:41</span>
        <span>Lottoman</span>
      </div>
      <div className="rounded-[18px] bg-[linear-gradient(135deg,#6D28D9,#FF2D78)] p-4 text-white">
        <div className="text-[11px] opacity-85">Wallet balance</div>
        <div className="font-mono text-[26px] font-bold">GHS 45.00</div>
        <div className="mt-2.5 rounded-[10px] bg-white/20 p-2 text-center text-xs font-bold">Fund with Mobile Money</div>
      </div>
      <div className="flex-1 rounded-2xl bg-white/6 p-3.5 text-white">
        <div className="mb-2.5 text-xs text-muted-dark">Quick play · Fortune Thursday</div>
        <div className="flex flex-wrap gap-[7px]">
          {QUICK_PICKS.map((n) => (
            <span key={n} className={`${QUICK_BALL} bg-gold font-mono text-[13px] font-bold text-indigo`}>
              {n}
            </span>
          ))}
          {[0, 1].map((i) => (
            <span key={i} className={`${QUICK_BALL} bg-white/14 text-base text-mint`}>
              +
            </span>
          ))}
        </div>
        <div className="mt-3.5 rounded-xl bg-magenta p-[11px] text-center text-sm font-bold">Confirm ticket</div>
      </div>
    </div>
  );
}

function StoreBadge({ href, top, name, iconClass }: { href: string; top: string; name: string; iconClass: string }) {
  return (
    <a href={href} className="flex items-center gap-[11px] rounded-[14px] bg-black px-5 py-3 text-white">
      <span className={`size-[26px] rounded-[7px] ${iconClass}`} aria-hidden />
      <span className="leading-[1.1]">
        <span className="text-[11px] opacity-75">{top}</span>
        <br />
        <span className="font-display text-[17px] font-bold">{name}</span>
      </span>
    </a>
  );
}

export function DownloadApp() {
  return (
    <section id="download" className={`mx-auto max-w-[1180px] ${SECTION_Y} ${GUTTER}`}>
      <div className="bg-download relative grid grid-cols-[1fr_.85fr] items-center gap-[clamp(28px,5vw,60px)] overflow-hidden rounded-[32px] p-[clamp(32px,5vw,60px)] text-white lt880:grid-cols-1">
        <div className="relative z-1">
          <div className="eyebrow mb-3.5 text-gold">The Lottoman App</div>
          <h2 className="h2 m-0 mb-[18px] leading-[1.05]">Play from your pocket, day or night</h2>
          <ul className="m-0 mb-7 flex list-none flex-col gap-3 p-0">
            {APP_BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-3 text-base text-[#E7E3FA]">
                <span
                  className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-mint text-sm font-extrabold text-[#0B3B32]"
                  aria-hidden
                >
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-3.5">
            {/* TODO: official App Store / Google Play badges */}
            <StoreBadge href={LINKS.appStore} top="Download on the" name="App Store" iconClass="bg-[linear-gradient(135deg,#444,#111)]" />
            <StoreBadge
              href={LINKS.googlePlay}
              top="GET IT ON"
              name="Google Play"
              iconClass="bg-[conic-gradient(from_45deg,#12E0B8,#FFB800,#FF2D78,#6D28D9,#12E0B8)]"
            />
            <div className="text-center">
              {/* TODO: real QR code */}
              <div className="flex size-[76px] items-center justify-center rounded-xl border-[3px] border-white bg-[repeating-linear-gradient(45deg,#1E1B4B_0_6px,#2A2266_6px_12px)] text-center font-mono text-[9px] leading-[1.2] text-gold">
                QR
                <br />
                CODE
              </div>
              <div className="mt-1.5 text-[11px] text-on-dark">Scan to install</div>
            </div>
          </div>
        </div>
        <div className="relative z-1 flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
