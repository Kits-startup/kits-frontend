<template>
  <div>
    회원 관리 > 홈 > 승인관리 > 승인목록
    <search-option-box-approval />
    <approval-posting-list v-if="tab && tab.includes('post_list')" />
    <approval-review-list v-if="tab && tab.includes('review_list')" />
  </div>
</template>

<script>
import SearchOptionBoxApproval from "../../search/searchOptionBoxApproval.vue";
import ApprovalPostingList from "./approvalPostingList.vue";
import ApprovalReviewList from "./approvalReviewList.vue";
export default {
  components: {
    ApprovalPostingList,
    ApprovalReviewList,
    SearchOptionBoxApproval,
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
