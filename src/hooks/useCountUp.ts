import { useEffect, useRef, useState } from "react";

/** Tweens from the currently shown value to `target` with an ease-out cubic (700ms by default). */
export function useCountUp(target: number, duration = 700): number {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);

  useEffect(() => {
    const start = valueRef.current;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      valueRef.current = Math.round(start + (target - start) * e);
      setValue(valueRef.current);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}
