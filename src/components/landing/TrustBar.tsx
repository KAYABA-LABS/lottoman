import { AgeBadge, GUTTER } from "./shared";

const Divider = () => <span className="h-4 w-px bg-white/15" aria-hidden />;

export function TrustBar() {
  return (
    <div className={`bg-ink py-4 text-on-dark ${GUTTER}`}>
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-8 gap-y-3.5 text-sm font-medium">
        <span className="inline-flex items-center gap-[9px]">
          <span
            className="flex h-[30px] w-[26px] items-center justify-center bg-[linear-gradient(#FFB800,#E09E00)] font-mono text-[9px] font-bold text-indigo [clip-path:polygon(50%_0,100%_18%,100%_62%,50%_100%,0_62%,0_18%)]"
            aria-hidden
          >
            NLA
          </span>
          Licensed NLA 5/90 Agent
        </span>
        <Divider />
        <span className="inline-flex items-center gap-[9px]">
          <AgeBadge />
          Strictly 18 and over
        </span>
        <Divider />
        <span className="inline-flex items-center gap-[9px]">
          <span className="size-[9px] rounded-full bg-win shadow-[0_0_10px_#16A34A]" aria-hidden />
          Play Responsibly
        </span>
      </div>
    </div>
  );
}
