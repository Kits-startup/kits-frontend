<template>
  <div class="mainContainer">
    <div class="forUser" v-if="userMode === 'user'">
      <main-banner-vue /><theme-posting-vue :theme_posting="theme_1" />
      <div class="newsletter">
        뉴스레터를 구독해보시고 정보를 받아가세요!
        <div class="subscribe" @click="onBetaBlock" style="cursor: pointer">
          뉴스레터 구독하기
        </div>
      </div>
      <theme-posting-vue :theme_posting="theme_2" />
    </div>
    <div class="forCompany" v-else><talent-search /></div>
  </div>
</template>

<script>
import mainBannerVue from "@/components/mainPage/mainBanner.vue";
import themePostingVue from "@/components/mainPage/themePosting.vue";
import TalentSearch from "./TalentSearch.vue";
import { theme_posting_1, theme_posting_2 } from "@/data/mainpage_example";
export default {
  components: {
    mainBannerVue,
    themePostingVue,
    TalentSearch,
  },
  props: {},
  data() {
    return {
      userMode: localStorage.getItem("userMode") || "user",
      theme_1: theme_posting_1,
      theme_2: theme_posting_2,
    };
  },
  methods: {
    onBetaBlock() {
      window.alert("준비중인 기능입니다. 정식 업데이트를 기다려주세요!");
    },
  },
};
</script>

<style lang="scss" scoped>
.newsletter {
  background: #0376db;
  border-radius: 50px;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: white;
  width: max-content;
  margin: auto;
  display: flex;
  padding: 16px 72px;
  align-items: center;
  .subscribe {
    margin-left: 10px;
    color: #0376db;
    background: white;
    padding: 15px 26px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
