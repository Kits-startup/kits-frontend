<template>
  <div class="bottomContainer">
    <div class="comment good">
      <span style="font-weight: 700"
        >{{ companyInfo.goodComment.percent }}%</span
      >의 사람들이 {{ companyInfo.goodComment.content }}을(를) 칭찬합니다.
    </div>
    <div class="comment bad">
      <span style="font-weight: 700">{{ companyInfo.badComment.percent }}%</span
      >의 사람들이 {{ companyInfo.goodComment.content }}을(를) 아쉬워합니다.
    </div>
    <div class="rateDetailContainer">
      <div
        class="eachRate"
        v-for="(item, index) in companyInfo.rateDetail"
        v-bind:key="index"
      >
        <div class="star">
          <span v-for="i in 5 - index" v-bind:key="i">⭐</span>
        </div>
        <b-progress :value="item" :max="100"></b-progress>
        <div class="percent">{{ item }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companyInfo: Object,
  },
};
</script>

<style lang="scss" scoped>
.bottomContainer {
  margin-top: 30px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 30px;
  .comment {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
  }
  .strong {
    font-weight: 700;
  }
}
.rateDetailContainer {
  margin-top: 30px;
  .eachRate {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .star {
      width: 15%;
    }
    .progress {
      width: 300px;
    }
    .percent {
      margin-left: 10px;
    }
  }
  .percentBox {
    margin-left: 20px;
    margin-right: 10px;
    display: flex;
    width: 300px;
    background: #9b9b9b;
    height: 10px;
    .blue {
      background: #0376db;
      width: 50%;
    }
  }
}
</style>
