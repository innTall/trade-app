<script setup>
import LogoItem from './layouts/LogoItem.vue';
import HeaderIcons from './layouts/HeaderIcons.vue';
</script>

<template>
  <header
    class="sticky top-0 p-2 z-20 flex justify-between items-center border-b border-green-600"
  >
    <LogoItem />
    <HeaderIcons />
  </header>
</template>
<style scoped></style>
