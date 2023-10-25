<script setup>
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
  <ul class="flex items-center gap-5">
    <li v-for="(icon, page) in headerItems" :key="page" class="flex-1">
      <a
        :href="`#${page}`"
        class="flex flex-col text-xs capitalize items-center"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </a>
    </li>
  </ul>
</template>
<style scoped></style>
