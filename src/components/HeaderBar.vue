<script setup>
import LogoItem from "./layouts/LogoItem.vue";
import HeaderIcons from "./layouts/HeaderIcons.vue";
import { HEADER_ITEMS } from '../assets/constants.js';
defineProps(['currentPage']);
const emit = defineEmits(['navigate', 'goToWatchlist']);

</script>

<template>
  <header
    class="sticky top-0 z-20 flex justify-between items-center border-b border-green-600"
  >
    <LogoItem @click="emit('goToWatchlist')" class="p-2"/>
    <ul class="flex pr-2 items-center gap-5">
      <HeaderIcons
        v-for="(icon, page) in HEADER_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-900 p-1 border border-green-600 pointer-events-none': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </HeaderIcons>
    </ul>
  </header>
</template>
<style scoped></style>
