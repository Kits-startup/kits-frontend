<template>
  <div>
    <admin-header-vue />
    <div class="mainBody">
      <div class="leftTabBar"><left-tab-bar /></div>
      <div class="rightContent">
        <router-view />
      </div>
    </div>
    <admin-footer />
  </div>
</template>

<script>
import AdminFooter from "./components/layout/adminFooter.vue";
import adminHeaderVue from "./components/layout/adminHeader.vue";
import LeftTabBar from "./components/layout/leftTabBar.vue";
export default {
  components: {
    adminHeaderVue,
    AdminFooter,
    LeftTabBar,
  },
};
</script>

<style lang="scss" scoped>
.mainBody {
  display: flex;
}
</style>
