<template>
  <div style="margin-top: 50px">
    <div class="eachline">
      <span class="label">설립일: </span>
      <span class="data">{{ date }}</span>
    </div>
    <div class="eachline">
      <span class="label">기타사항: </span>
      <span class="data">{{ etc }}</span>
    </div>
    <div class="eachline">
      <span class="label">근무지역: </span>
      <span class="data">{{ location }}</span>
    </div>
    <ka-kao-map-vue />
  </div>
</template>

<script>
import KaKaoMapVue from "../detail/intro/KaKaoMap.vue";
export default {
  name: "BottomContainer",
  props: {
    date: String,
    etc: String,
    location: String,
  },
  components: {
    KaKaoMapVue,
  },
};
</script>

<style lang="scss" scoped>
.eachline {
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 11px;
  .data {
    font-weight: 400;
    color: #515151;
  }
}
</style>
