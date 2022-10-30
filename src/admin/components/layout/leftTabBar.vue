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
  min-height: 700px;
  //border: 1px solid black;
  background: #f7f7f7;
  padding-left: 45px;
  padding-top: 36px;
  margin-right: 100px;
}
</style>
