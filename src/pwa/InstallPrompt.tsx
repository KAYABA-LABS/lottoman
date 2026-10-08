import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "lottoman:install-dismissed";

function wasDismissed() {
  try {
    return localStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberDismissed() {
  try {
    localStorage.setItem(DISMISS_KEY, "1");
  } catch {
    /* storage unavailable — prompt may show again next visit */
  }
}

const isStandalone = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  (navigator as Navigator & { standalone?: boolean }).standalone === true;

// iOS Safari never fires beforeinstallprompt; Chrome/Firefox on iOS also can't install.
const isIosSafari = () => {
  const ua = navigator.userAgent;
  const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return ios && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
};

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [iosHint, setIosHint] = useState(false);
  const [hidden, setHidden] = useState(() => isStandalone() || wasDismissed());

  useEffect(() => {
    if (hidden) return;
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => setHidden(true);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    const iosTimer = isIosSafari() ? setTimeout(() => setIosHint(true), 4000) : undefined;
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      clearTimeout(iosTimer);
    };
  }, [hidden]);

  if (hidden || (!deferred && !iosHint)) return null;

  const dismiss = () => {
    rememberDismissed();
    setHidden(true);
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    const { outcome } = await deferred.userChoice;
    setDeferred(null);
    if (outcome === "accepted") setHidden(true);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="install-title"
      className="fixed inset-x-0 bottom-0 z-60 flex justify-center px-4 pb-[max(16px,env(safe-area-inset-bottom))]"
    >
      <div className="flex w-full max-w-[520px] items-center gap-3.5 rounded-[22px] border border-white/14 bg-indigo/92 p-4 text-white shadow-[0_30px_70px_rgba(0,0,0,.35)] backdrop-blur-[14px]">
        <span
          className="gold-ball flex size-11 shrink-0 items-center justify-center rounded-full font-mono font-bold text-indigo shadow-[0_6px_18px_rgba(255,184,0,.5)]"
          aria-hidden
        >
          90
        </span>
        <div className="min-w-0 flex-1">
          <div id="install-title" className="font-display text-base font-bold">
            Install Lottoman
          </div>
          <div className="text-[13px] leading-[1.4] text-on-dark">
            {deferred ? (
              "Add Lottoman to your home screen. Play any draw in seconds."
            ) : (
              <>
                Tap <strong className="text-white">Share</strong>, then{" "}
                <strong className="text-white">Add to Home Screen</strong>.
              </>
            )}
          </div>
        </div>
        {deferred && (
          <button
            type="button"
            onClick={install}
            className="cursor-pointer rounded-full bg-magenta px-[18px] py-2.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(255,45,120,.45)]"
          >
            Install
          </button>
        )}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-xl text-muted-dark hover:bg-white/8"
        >
          ×
        </button>
      </div>
    </div>
  );
}
