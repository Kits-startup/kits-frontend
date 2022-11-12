<template>
  <div>
    <banner-list v-if="tab && tab.includes('list')" />
    <banner-register v-if="tab && tab.includes('register')" />
  </div>
</template>

<script>
import bannerList from "./bannerList.vue";
import BannerRegister from "./bannerRegister.vue";
export default {
  components: { bannerList, BannerRegister },
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
