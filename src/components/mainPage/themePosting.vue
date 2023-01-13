<template>
  <div class="themeContainer">
    <div class="header">
      <div class="title">테마로 보는 요즘 채용</div>
      <span @click="gotoPostingLists" style="cursor: pointer">더보기</span>
    </div>
    <div class="contentContainer">
      <b-row>
        <b-col cols="3" v-for="(item, index) in theme_posting" :key="index">
          <each-posting-vue :id="item.id" :companyInfo="item" />
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
  methods: {
    gotoPostingLists() {
      this.$router.push("/posting_list");
    },
  },
  props: {
    theme_posting: Array,
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
