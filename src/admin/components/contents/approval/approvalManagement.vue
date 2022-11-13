<template>
  <div>
    <div class="topHelmet">
      <div class="blue">승인 관리</div>
      <div>홈 > 승인 관리 {{ tabDetail ? "> " : "" }}{{ tabDetail }}</div>
    </div>
    <search-option-box-approval />
    <approval-posting-list v-if="tab.includes('post_list')" />
    <approval-review-list v-if="tab.includes('review_list')" />
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
      tab: "",
      tabDetail: null,
    };
  },
  methods: {
    setTab() {
      const url = this.$route.fullPath.split("/");
      this.tab = url[3];
      if (this.tab.includes("post_list")) {
        this.tabDetail = "승인목록";
      } else if (this.tab.includes("review_list")) {
        this.tabDetail = "리뷰목록";
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
