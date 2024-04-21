<script setup>
import { useRoute } from 'vue-router';
import HeaderBar from './components/HeaderBar.vue';
const route = useRoute();
</script>

<template>
  <HeaderBar />
  <div>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped></style>.
