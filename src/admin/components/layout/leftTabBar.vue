<template>
  <div class="leftTabContainer"><admin-tab /></div>
</template>

<script>
import AdminTab from "../AdminTab.vue";
export default {
  components: { AdminTab },
};
</script>

<style lang="scss" scoped>
.leftTabContainer {
  width: 310px;
  height: 100%;
  //border: 1px solid black;
  min-height: 600px;
  background: #f7f7f7;
  padding-left: 45px;
  padding-top: 36px;
}
</style>
