<script setup>
import LogoItem from "./layouts/LogoItem.vue";
import HeaderIcons from "./layouts/HeaderIcons.vue";
import { ref } from 'vue';
import {
  QueueListIcon,
  ArrowTrendingUpIcon,
  TableCellsIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/outline";
import { PAGE_WATCHLIST, PAGE_CHART, PAGE_OPTIONS, PAGE_TRADE } from '../assets/constants.js';
const headerItems = {
  [PAGE_WATCHLIST]: QueueListIcon,
  [PAGE_CHART]: ArrowTrendingUpIcon,
  [PAGE_OPTIONS]: TableCellsIcon,
  [PAGE_TRADE]: ShoppingCartIcon,
};
const currentPage = ref(normalizePageHash());
function normalizePageHash() {
  const hash = window.location.hash.slice(1);
  if (Object.keys(headerItems).includes(hash)) {
    return hash
  }
  window.location.hash = PAGE_WATCHLIST
  return PAGE_WATCHLIST
}

</script>

<template>
  <header
    class="sticky top-0 z-20 flex justify-between items-center border-b border-green-600"
  >
    <LogoItem class="p-2"/>
    <ul class="flex pr-2 items-center gap-5">
      <HeaderIcons
        v-for="(icon, page) in headerItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-900 p-1 border border-green-600 pointer-events-none': page === currentPage }"
        @click="currentPage = page"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </HeaderIcons>
    </ul>
  </header>
</template>
<style scoped></style>
