<template>
  <div>
    회원 관리 > 홈 > 회원관리 > 회원목록
    <user-list v-if="tab.includes('list')" />
    <Approval_userList v-if="tab.includes('register')" />
  </div>
</template>

<script>
import Approval_userList from "./approval_userList.vue";
import userList from "./userList.vue";
export default {
  components: { userList, Approval_userList },
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    setTab() {
      const url = this.$route.fullPath.split("/");
      console.log(url);
      this.tab = url[3];
      console.log(this.tab);
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
