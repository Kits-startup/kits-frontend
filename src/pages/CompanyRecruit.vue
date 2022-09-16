<template>
  <div style="display: flex; justify-content: center">
    <div class="wholeContainer">
      <left-container-vue :id="id" :companyInfo="companyInfo" />
      <right-card-vue />
    </div>
  </div>
</template>

<script>
import leftContainerVue from "@/components/company/recruit/leftContainer.vue";
import rightCardVue from "@/components/company/recruit/rightCard.vue";
export default {
  components: { leftContainerVue, rightCardVue },
  props: ["id"],
  data: () => {
    return {
      companyInfo: {
        name: "아비즈",
        sub_name: "온라인 쇼핑몰",
        location: "경기 한국",
        tags: ["태그1", "태그2", "태그3"],
        descriptions: [
          {
            label: "주요업무",
            lists: [
              "아차키 및 신규 B2C/B2B 서비스 앱 개발",
              "앱 공통 아키텍처 설계",
              "서비스용 공통 모듈 개발",
              "아차키 및 신규 B2C/B2B 서비스 앱 개발",
              "앱 공통 아키텍처 설계",
            ],
          },
          {
            label: "우대사항",
            lists: [
              "Swift 언어에 대한 이해가 있는 분",
              "소프트웨어 아키텍처 패턴 경험이 있으신분",
              "Clean Architecture에 대한 이해가 있으신 분",
              "보안 및 네트워크에 대한 이해도를 보유하신 분",
              "소프트웨어 Localization 경험이 있으신 분",
              "Android 개발 경험이 있으신 분",
              "TDD 경험이 있으신 분,",
            ],
          },
          {
            label: "조직문화",
            lists: [
              "Swift 언어에 대한 이해가 있는 분",
              "소프트웨어 아키텍처 패턴 경험이 있으신분",
              "Clean Architecture에 대한 이해가 있으신 분",
              "보안 및 네트워크에 대한 이해도를 보유하신 분",
              "소프트웨어 Localization 경험이 있으신 분",
              "Android 개발 경험이 있으신 분",
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wholeContainer {
  display: flex;
  align-items: flex-start;
}
</style>
