<script setup>
import { PAGE_WATCHLIST } from '../../assets/constants.js';
</script>

<template>
  <div class="flex gap-2">
    <a :href="`#${ PAGE_WATCHLIST }`">
      <img src="../../public/logo.png" alt="Logo" class="h-10" />
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
</template>
<style scoped></style>
