<template>
  <div>
    <div class="topHelmet">
      <div class="blue">회원 관리</div>
      <div>홈 > 회원 관리 {{ tabDetail ? "> " : "" }}{{ tabDetail }}</div>
    </div>
    <user-list v-if="tab.includes('user_list')" />
    <Approval_userList v-if="tab.includes('approval_list')" />
  </div>
</template>

<script>
import Approval_userList from "./approval_userList.vue";
import userList from "./userList.vue";
export default {
  components: { userList, Approval_userList },
  data() {
    return {
      tab: "",
      tabDetail: null,
    };
  },
  methods: {
    setTab() {
      const url = this.$route.fullPath.split("/");
      const { id } = this.$route.query;
      this.tab = url[3];
      if (id) {
        this.tabDetail = "회원목록 > 회원상세";
      } else {
        if (this.tab.includes("approval_list")) {
          this.tabDetail = "승인목록";
        } else if (this.tab.includes("user_list")) {
          this.tabDetail = "회원목록";
        }
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
