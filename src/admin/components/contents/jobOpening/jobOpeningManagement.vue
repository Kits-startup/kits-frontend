<template>
  <div>
    회원 관리 > 홈 > 채용 공고 관리 > 채용 공고 목록
    <job-opening-list v-if="tab && tab.includes('post_list')" />
    <category-management v-if="tab && tab.includes('category')" />
    <review-management v-if="tab && tab.includes('review')" />
    <register-job-opening v-if="tab && tab.includes('register')" />
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
      tab: null,
    };
  },
  methods: {
    setTab() {
      const url = this.$route.fullPath.split("/");
      this.tab = url[3];
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
