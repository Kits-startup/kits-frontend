<template>
  <div class="managementContainer"><tab-bar-vue /><router-view /></div>
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
