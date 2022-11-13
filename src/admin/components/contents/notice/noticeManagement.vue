<template>
  <div>
    <div class="topHelmet">
      <div class="blue">공지 관리</div>
      <div>홈 > 공지 관리 {{ tabDetail ? "> " : "" }}{{ tabDetail }}</div>
    </div>
    <notice-list v-if="tab.includes('list')" />
    <notice-register v-if="tab.includes('register')" />
  </div>
</template>

<script>
import NoticeList from "./noticeList.vue";
import NoticeRegister from "./noticeRegister.vue";
export default {
  components: {
    NoticeList,
    NoticeRegister,
  },
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
        this.tabDetail = "공지 목록";
      } else if (this.tab.includes("register")) {
        this.tabDetail = "공지 등록";
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
