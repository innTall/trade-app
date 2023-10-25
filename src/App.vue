<script setup>
import {
    QueueListIcon,
    ArrowTrendingUpIcon,
    TableCellsIcon,
    ShoppingCartIcon,
    QuestionMarkCircleIcon,
    WrenchScrewdriverIcon,
    CurrencyDollarIcon,
} from "@heroicons/vue/24/outline";
const headerItems = {
  watchlist: QueueListIcon,
  chart: ArrowTrendingUpIcon,
  options: TableCellsIcon,
  trade: ShoppingCartIcon
};
const footerItems = {
  about: QuestionMarkCircleIcon,
  settings: WrenchScrewdriverIcon,
  info: CurrencyDollarIcon
};
</script>

<template>
  <header
    class="sticky top-0 p-2 z-20 flex justify-between items-center border-b border-green-600"
  >
    <div class="flex gap-2">
      <a href="#">
        <img src="./public/logo.png" alt="Logo" class="h-10" />
      </a>
      <div class="text-green-700">
        <a href="#" class="">
          <div class="text-sm font-bold">TradeApp</div>
        </a>
        <a href="#" class="">
          <div class="text-xs">Trade is easy!</div>
        </a>
      </div>
    </div>
    <ul class="flex items-center gap-5">
      <li v-for="icon, page in headerItems" :key="page" class="flex-1">
        <a :href="`#${page}`" class="flex flex-col text-xs capitalize items-center">
          <component :is="icon" class="h-6 w-6" /> {{ page }}
        </a>
      </li>
    </ul>
  </header>
  <main class="flex flex-grow flex-col"></main>
  <footer class="sticky bottom-0 z-10">
    <ul class="flex justify-around p-2 border-t border-green-600">
      <li v-for="icon, page in footerItems" :key="page" class="flex-1">
        <a :href="`#${page}`" class="flex flex-col text-xs capitalize items-center">
          <component :is="icon" class="h-6 w-6" /> {{ page }}
        </a> 
      </li>
    </ul>
  </footer>
</template>

<style scoped></style>
