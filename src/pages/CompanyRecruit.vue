<template>
  <div style="display: flex; align-items: center; flex-direction: column">
    <div class="wholeContainer">
      <left-container-vue :id="id" :companyInfo="companyInfo" />
      <right-card-vue :workInfo="workInfo" />
    </div>
    <similar-recruit-vue />
  </div>
</template>

<script>
import leftContainerVue from "@/components/company/recruit/leftContainer.vue";
import rightCardVue from "@/components/company/recruit/rightCard.vue";
import SimilarRecruitVue from "@/components/company/recruit/SimilarRecruit.vue";
export default {
  components: {
    leftContainerVue,
    rightCardVue,
    SimilarRecruitVue,
  },
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
        date: "2022.08.09",
        etc: "기타사항...",
        work_location: "경기도 성남시 분당구 느티로51번길 4-11 (정자동)",
      },
      workInfo: [
        { label: "직군", value: "개발자" },
        { label: "직무", value: "백엔드 개발자" },
        { label: "고용형태", value: "정규직" },
        { label: "연봉", value: "3,200만원" },
      ],
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
