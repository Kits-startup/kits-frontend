<template>
  <div>
    <div class="topHelmet">
      <div class="blue">관리자 관리</div>
      <div>홈 > 관리자 관리 {{ tabDetail ? "> " : "" }}{{ tabDetail }}</div>
    </div>
    <admin-list-vue v-if="tab.includes('list')" />
    <admin-register v-if="tab.includes('register')" />
  </div>
</template>

<script>
import adminListVue from "./adminList.vue";
import AdminRegister from "./adminRegister.vue";
export default {
  components: {
    adminListVue,
    AdminRegister,
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
      const { num } = this.$route.query;
      this.tab = url[3];
      if (num) {
        this.tabDetail = "관리자상세";
      } else {
        if (this.tab.includes("register")) {
          this.tabDetail = "관리자등록";
        } else if (this.tab.includes("list")) {
          this.tabDetail = "관리자목록";
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

<style lang="scss">
.topHelmet {
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  color: #878787;
  margin-bottom: 33px;
  .blue {
    color: #0376db;
    margin-right: 16px;
  }
}
</style>
