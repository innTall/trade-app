import {
  PAGE_WATCHLIST,
  PAGE_CHART,
  PAGE_OPTIONS,
  PAGE_TRADE,
} from "./constants.js";

export function normalizePageHash() {
  const hash = window.location.hash.slice(1);
  if ([PAGE_WATCHLIST, PAGE_CHART, PAGE_OPTIONS, PAGE_TRADE].includes(hash)) {
    return hash;
  }
  window.location.hash = PAGE_WATCHLIST;
  return PAGE_WATCHLIST;
}
