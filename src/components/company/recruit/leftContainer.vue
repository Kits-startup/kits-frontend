<template>
  <div class="leftContainer">
    <info-container-vue :companyInfo="companyInfo" />
    <detail-vue
      v-for="(item, idx) in companyInfo.descriptions"
      v-bind:key="idx"
      :label="item.label"
      :lists="item.lists"
    />
  </div>
</template>

<script>
import DetailVue from "./Detail.vue";
import InfoContainerVue from "./InfoContainer.vue";
export default {
  name: "leftContainer",
  props: {
    companyInfo: Object,
  },
  components: {
    InfoContainerVue,
    DetailVue,
  },
};
</script>

<style lang="scss" scoped>
.leftContainer {
  width: 881px;
  height: 1945px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 50px;
  margin-bottom: 100px;
}
</style>
