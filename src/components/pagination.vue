<template>
  <div class="paginationBox">
    <div
      class="page"
      :class="{ active: clickedPage === i }"
      v-for="i in 5"
      v-bind:key="i"
      @click="clickPage(i)"
    >
      {{ i }}
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
