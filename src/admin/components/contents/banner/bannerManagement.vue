<template>
  <div>배너 관리!{{ tab }}</div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    setTab() {
      console.log("change!");
      const url = this.$route.fullPath.split("/");
      console.log(url.slice(-1));
      this.tab = url.slice(-1)[0];
    },
  },
  mounted() {
    this.setTab();
  },
  watch: {
    $route() {
      this.setTab();
    },
  },
};
</script>

<style lang="scss" scoped></style>
