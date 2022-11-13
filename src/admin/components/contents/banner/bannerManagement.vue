<template>
  <div>
    <div class="topHelmet">
      <div class="blue">배너 관리</div>
      <div>홈 > 배너 관리 {{ tabDetail ? "> " : "" }}{{ tabDetail }}</div>
    </div>
    <banner-list v-if="tab.includes('list')" />
    <banner-register v-if="tab.includes('register')" />
  </div>
</template>

<script>
import bannerList from "./bannerList.vue";
import BannerRegister from "./bannerRegister.vue";
export default {
  components: { bannerList, BannerRegister },
  data() {
    return {
      tab: "",
      tabDetail: null,
    };
  },
  methods: {
    setTab() {
      const url = this.$route.fullPath.split("/");
      this.tab = url.slice(-1)[0];
      if (this.tab.includes("list")) {
        this.tabDetail = "배너 목록";
      } else if (this.tab.includes("register")) {
        this.tabDetail = "배너 등록";
      }
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
