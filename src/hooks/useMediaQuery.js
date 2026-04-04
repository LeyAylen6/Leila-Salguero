import { useSyncExternalStore } from 'react';

/**
 * @param {string} query CSS media query, ej. '(max-width: 900px)'
 */
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onStoreChange);
      return () => mql.removeEventListener('change', onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
