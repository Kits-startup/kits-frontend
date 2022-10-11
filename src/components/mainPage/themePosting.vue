<template>
  <div class="themeContainer">
    <div class="header">
      <div class="title">테마로 보는 요즘 채용</div>
      <span>더보기</span>
    </div>
    <div class="contentContainer">
      <b-row>
        <b-col cols="3" v-for="(item, index) in 8" :key="index">
          <each-posting-vue />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import eachPostingVue from "./eachPosting.vue";
export default {
  components: {
    eachPostingVue,
  },
};
</script>

<style lang="scss" scoped>
.themeContainer {
  padding-top: 100px;
  width: 1300px;
  margin: auto;
}
.header {
  display: flex;
  align-items: center;
  .title {
    text-align: center;
    margin: auto;
    font-size: 32px;
    line-height: 44px;
  }
  span {
    text-align: right;
    font-size: 20px;
    line-height: 27px;
  }
  margin-bottom: 40px;
}
.contentContainer {
}
</style>
