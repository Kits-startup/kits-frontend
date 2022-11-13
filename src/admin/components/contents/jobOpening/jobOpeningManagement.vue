<template>
  <div>
    <div class="topHelmet">
      <div class="blue">채용공고 관리</div>
      <div>홈 > 채용공고 관리 {{ tabDetail ? "> " : "" }}{{ tabDetail }}</div>
    </div>
    <job-opening-list v-if="tab.includes('post_list')" />
    <category-management v-if="tab.includes('category')" />
    <review-management v-if="tab.includes('review')" />
    <register-job-opening v-if="tab.includes('register')" />
  </div>
</template>

<script>
import CategoryManagement from "./categoryManagement.vue";
import JobOpeningList from "./jobOpeningList.vue";
import RegisterJobOpening from "./registerJobOpening.vue";
import ReviewManagement from "./reviewManagement.vue";
export default {
  components: {
    JobOpeningList,
    CategoryManagement,
    ReviewManagement,
    RegisterJobOpening,
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
      this.tab = url[3];

      if (this.tab.includes("post_list")) {
        this.tabDetail = "채용 공고 목록";
      } else if (this.tab.includes("category")) {
        this.tabDetail = "카테고리 관리";
      } else if (this.tab.includes("review")) {
        this.tabDetail = "리뷰 관리";
      } else if (this.tab.includes("register")) {
        this.tabDetail = "채용 공고 상세 (채용 공고)";
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
