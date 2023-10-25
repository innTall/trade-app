<script setup>
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';
import { PAGE_WATCHLIST, PAGE_CHART, PAGE_OPTIONS, PAGE_TRADE } from './assets/constants.js';
import WatchPage from './views/WatchPage.vue';
import ChartPage from './views/ChartPage.vue';
import OptionsPage from './views/OptionsPage.vue';
import TradePage from './views/TradePage.vue';
import { ref } from 'vue';
const currentPage = ref(normalizePageHash());
function normalizePageHash() {
  const hash = window.location.hash.slice(1);
  if ([PAGE_WATCHLIST, PAGE_CHART, PAGE_OPTIONS, PAGE_TRADE].includes(hash)) {
    return hash
  }
  window.location.hash = PAGE_WATCHLIST
  return PAGE_WATCHLIST
}
</script>

<template>
  <HeaderBar :current-page="currentPage" @navigate="currentPage = $event"/>
  <main class="flex flex-grow flex-col">
    <WatchPage v-show="currentPage === PAGE_WATCHLIST" />
    <ChartPage v-show="currentPage === PAGE_CHART" />
    <OptionsPage v-show="currentPage === PAGE_OPTIONS" />
    <TradePage v-show="currentPage === PAGE_TRADE" />
  </main>
  <FooterBar />
</template>

<style scoped></style>
