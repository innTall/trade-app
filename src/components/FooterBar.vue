<script setup>
import FooterIcons from "./layouts/FooterIcons.vue";
import {
    QuestionMarkCircleIcon,
    WrenchScrewdriverIcon,
    CurrencyDollarIcon,
} from "@heroicons/vue/24/outline";
const footerItems = {
    about: QuestionMarkCircleIcon,
    settings: WrenchScrewdriverIcon,
    info: CurrencyDollarIcon,
};
</script>

<template>
  <footer class="sticky bottom-0 z-10">
    <ul class="flex justify-around p-2 border-t border-green-600">
      <FooterIcons v-for="(icon, page) in footerItems" :key="page" :href="`#${page}`">
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </FooterIcons>
    </ul>
  </footer>
</template>
<style scoped></style>
