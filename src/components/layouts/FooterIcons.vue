<script>
export default {
  inheritAttrs: false
}
</script>

<template>
  <li class="flex-1">
    <a :="$attrs" class="flex flex-col text-xs capitalize items-center">
      <slot></slot>  
    </a>
  </li>
</template>
<style scoped></style>
