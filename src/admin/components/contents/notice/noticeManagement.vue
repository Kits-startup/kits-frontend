<template>
  <div>
    <notice-list v-if="tab && tab.includes('list')" />
    <notice-register v-if="tab && tab.includes('register')" />
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
