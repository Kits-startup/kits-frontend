<template>
  <div class="leftContainer">
    <info-container-vue :companyInfo="companyInfo" />
    <detail-vue
      v-for="(item, idx) in companyInfo.descriptions"
      v-bind:key="idx"
      :label="item.label"
      :lists="item.lists"
    />
    <div
      class="label"
      style="font-size: 24px; line-height: 33px; margin-bottom: 20px"
    >
      선호성향
    </div>
    <div class="listbox">
      <div
        class="list"
        style="
          font-weight: 400;
          font-size: 20px;
          line-height: 27px;
          color: #515151;
        "
      >
        • 내향성이 높으신 분을 선호합니다.
      </div>
    </div>
    <div class="sep" />
    <bottom-container-vue
      :date="companyInfo.date"
      :etc="companyInfo.etc"
      :location="companyInfo.work_location"
    />
  </div>
</template>

<script>
import BottomContainerVue from "./BottomContainer.vue";
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
    BottomContainerVue,
  },
};
</script>

<style lang="scss" scoped>
.leftContainer {
  width: 881px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 50px;
  margin-bottom: 100px;
}
.sep {
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-top: 53px;
}
</style>
