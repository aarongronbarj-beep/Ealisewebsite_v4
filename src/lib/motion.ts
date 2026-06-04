import { useReducedMotion } from 'motion/react';

/**
 * True when entrance animations should be skipped and content rendered in its
 * final visible state:
 *   - the user prefers reduced motion (accessibility), or
 *   - the page is loaded with `?static` (deterministic screenshots / SSR-like).
 */
export function useStatic(): boolean {
  const reduced = useReducedMotion();
  const flagged =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).has('static');
  return Boolean(reduced) || flagged;
}

/** Standard calm reveal — y-rise + fade. Pair with useStatic(). */
export const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export const EASE = [0.22, 0.61, 0.36, 1] as const;
