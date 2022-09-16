<template>
  <div class="jobContainer">
    <div class="title">이 회사가 진행 중인 공고</div>
    <job-posting
      v-for="(item, index) in postLists"
      :key="index"
      :jobInfo="item"
    />
    <div class="moreBtn">채용 공고 더 보기</div>
  </div>
</template>

<script>
import JobPosting from "./JobPosting.vue";
export default {
  components: { JobPosting },
  data() {
    return {
      postLists: [
        { id: 1, leftDay: 7, position: "프론트" },
        { id: 2, leftDay: 5, position: "백엔드" },
        { id: 3, leftDay: 10, position: "기획자" },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.jobContainer {
  margin-left: 46px;
  width: 373px;
  border: 1px solid #0376db;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  .title {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 16px;
  }
  .moreBtn {
    background: #0376db;
    border-radius: 29.5px;
    margin-top: 30px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    color: white;
    text-align: center;
    padding: 14px;
  }
}
</style>
