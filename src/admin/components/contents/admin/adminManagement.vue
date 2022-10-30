<template>
  <div>
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
      tab: null,
    };
  },
  methods: {
    setTab() {
      const url = this.$route.fullPath.split("/");
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
