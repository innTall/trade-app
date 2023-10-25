<script setup>
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';
import { PAGE_WATCHLIST, PAGE_CHART, PAGE_OPTIONS, PAGE_TRADE } from './assets/constants.js';
import { normalizePageHash } from './assets/functions.js';
import WatchPage from './views/WatchPage.vue';
import ChartPage from './views/ChartPage.vue';
import OptionsPage from './views/OptionsPage.vue';
import TradePage from './views/TradePage.vue';
import { ref } from 'vue';
const currentPage = ref(normalizePageHash());
function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <HeaderBar :current-page="currentPage" @navigate="goTo($event)" @go-to-watchlist="goTo(PAGE_WATCHLIST)"/>
  <main class="flex flex-grow flex-col">
    <WatchPage v-show="currentPage === PAGE_WATCHLIST" />
    <ChartPage v-show="currentPage === PAGE_CHART" />
    <OptionsPage v-show="currentPage === PAGE_OPTIONS" />
    <TradePage v-show="currentPage === PAGE_TRADE" />
  </main>
  <FooterBar />
</template>

<style scoped></style>
