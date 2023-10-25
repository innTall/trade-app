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
const headerItems = {
  watchlist: QueueListIcon,
  chart: ArrowTrendingUpIcon,
  options: TableCellsIcon,
  trade: ShoppingCartIcon,
};
const currentPage = ref('watchlist');
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
