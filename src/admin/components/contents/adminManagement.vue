<template>
  <div>관리자 관리,{{ tab }}</div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
  watch: {
    $route() {
      console.log("change!");
      const url = this.$route.fullPath.split("/");
      console.log(url.slice(-1));
      this.tab = url.slice(-1)[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
