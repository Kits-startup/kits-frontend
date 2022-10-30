<template>
  <div>
    <admin-header-vue />
    <div class="mainBody">
      <div class="leftTabBar"><left-tab-bar /></div>
      <div class="rightContent">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import adminHeaderVue from "./components/layout/adminHeader.vue";
import LeftTabBar from "./components/layout/leftTabBar.vue";
export default {
  components: {
    adminHeaderVue,
    LeftTabBar,
  },
};
</script>

<style lang="scss" scoped>
.mainBody {
  display: flex;
}
.rightContent {
  margin-top: 30px;
}
</style>
