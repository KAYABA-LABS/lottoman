import { useRegisterSW } from "virtual:pwa-register/react";

/** Registers the service worker and offers a reload when a new version is ready. */
export function UpdateToast() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div role="status" className="fixed top-[78px] right-4 z-60 flex items-center gap-3 rounded-2xl border border-white/14 bg-indigo/92 py-2.5 pr-2.5 pl-4 text-sm text-white shadow-[0_20px_50px_rgba(0,0,0,.35)] backdrop-blur-[14px]">
      New version available
      <button
        type="button"
        onClick={() => updateServiceWorker(true)}
        className="cursor-pointer rounded-full bg-white/12 px-3.5 py-1.5 font-semibold text-white"
      >
        Reload
      </button>
      <button
        type="button"
        onClick={() => setNeedRefresh(false)}
        aria-label="Dismiss"
        className="cursor-pointer px-1.5 text-lg text-muted-dark"
      >
        ×
      </button>
    </div>
  );
}
