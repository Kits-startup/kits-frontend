<template>
  <div class="managementContainer">
    <tab-bar-vue />
    <router-view style="min-width: 1000px" />
  </div>
</template>

<script>
import TabBarVue from "@/components/company/management/TabBar.vue";
export default {
  components: {
    TabBarVue,
  },
};
</script>

<style lang="scss" scoped>
.managementContainer {
  display: flex;
  justify-content: center;
}
</style>
