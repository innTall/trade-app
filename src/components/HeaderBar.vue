<script setup>
import LogoItem from './layouts/LogoItem.vue';
import HeaderIcons from './layouts/HeaderIcons.vue';
import {
    QueueListIcon,
    ArrowTrendingUpIcon,
    TableCellsIcon,
    ShoppingCartIcon
} from "@heroicons/vue/24/outline";
const headerItems = {
  watchlist: QueueListIcon,
  chart: ArrowTrendingUpIcon,
  options: TableCellsIcon,
  trade: ShoppingCartIcon
};
</script>

<template>
  <header
    class="sticky top-0 p-2 z-20 flex justify-between items-center border-b border-green-600"
  >
    <LogoItem />
    <ul class="flex items-center gap-5">
      <HeaderIcons v-for="(icon, page) in headerItems" :key="page" :href="`#${page}`">
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </HeaderIcons>
    </ul>
  </header>
</template>

<style scoped></style>
