import {
  QueueListIcon,
  ArrowTrendingUpIcon,
  TableCellsIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/outline";

export const PAGE_WATCHLIST = "watchlist";
export const PAGE_CHART = "chart";
export const PAGE_OPTIONS = "options";
export const PAGE_TRADE = "trade";

export const HEADER_ITEMS = {
  [PAGE_WATCHLIST]: QueueListIcon,
  [PAGE_CHART]: ArrowTrendingUpIcon,
  [PAGE_OPTIONS]: TableCellsIcon,
  [PAGE_TRADE]: ShoppingCartIcon,
};

import {
  QuestionMarkCircleIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
} from "@heroicons/vue/24/outline";

export const PAGE_ABOUT = "about";
export const PAGE_SETTINGS = "settings";
export const PAGE_INFO = "info";

export const FOOTER_ITEMS = {
  [PAGE_ABOUT]: QuestionMarkCircleIcon,
  [PAGE_SETTINGS]: WrenchScrewdriverIcon,
  [PAGE_INFO]: CurrencyDollarIcon,
};