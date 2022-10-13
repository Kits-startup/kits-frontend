<template>
  <div>
    관리자 관리,{{ tab }}
    <admin-list-vue v-if="tab === 'list'" />
    <admin-register v-if="tab === 'register'" />
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
