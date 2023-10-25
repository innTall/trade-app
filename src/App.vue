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
const headerItems = ['watchlist', 'chart', 'options', 'trade'];
const footerItems = ['about', 'settings', 'info'];
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
      <li v-for="page in headerItems" :key="page" class="flex-1">
        <a :href="`#${page}`" class="flex flex-col text-xs capitalize items-center">
          <QueueListIcon v-if="page === 'watchlist'" class="h-6 w-6" />
          <ArrowTrendingUpIcon v-else-if="page === 'chart'" class="h-6 w-6" />
          <TableCellsIcon v-else-if="page === 'options'" class="h-6 w-6" />
          <ShoppingCartIcon v-else class="h-6 w-6" /> {{ page }}
        </a>
      </li>
    </ul>
  </header>
  <main class="flex flex-grow flex-col"></main>
  <footer class="sticky bottom-0 z-10">
    <ul class="flex justify-around p-2 border-t border-green-600">
      <li v-for="page in footerItems" :key="page" class="flex-1">
        <a :href="`#${page}`" class="flex flex-col text-xs capitalize items-center">
          <QuestionMarkCircleIcon v-if="page === 'about'" class="h-6 w-6" />
          <WrenchScrewdriverIcon v-else-if="page === 'settings'" class="h-6 w-6" />
          <CurrencyDollarIcon v-else class="h-6 w-6" /> {{ page }}
        </a> 
      </li>
    </ul>
  </footer>
</template>

<style scoped></style>
