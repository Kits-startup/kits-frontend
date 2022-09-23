<template>
  <div>
    <div class="topContainer">
      <div class="topHeader">
        <div class="topLine">
          <h1 class="title">진행 중인 공고 목록</h1>
          <span class="register" @click="onRegisterClick">+공고 등록</span>
        </div>
        <p class="subline">
          내 기업에서 현재 진행 중인 채용 공고의 리스트를 확인할 수 있습니다.
        </p>
        <div class="searchBox">검색하기</div>
      </div>
    </div>
    <div class="paginationBox">
      <div
        class="page"
        :class="{ active: clickedPage === i }"
        v-for="i in 5"
        v-bind:key="i"
        @click="clickPage(i)"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickedPage: 1,
    };
  },
  methods: {
    clickPage: function (index) {
      console.log(index);
      this.clickedPage = index;
    },
    onRegisterClick() {
      this.$router.push({ name: "Company Recruit Register" });
    },
  },
};
</script>

<style lang="scss" scoped>
.topContainer {
  width: 1008px;
  margin-left: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 30px 46px;
  .topHeader {
  }
  .topLine {
    display: flex;
    font-size: 26px;
    line-height: 35px;
    align-items: center;
    justify-content: space-between;
  }
  .title {
  }
  .register {
    color: #0376db;
    cursor: pointer;
  }
  .subline {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #515151;
  }
  .searchBox {
  }
}

.paginationBox {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  .page {
    width: 26px;
    height: 26px;
    border: 0.5px solid #e3e6e8;
    border-radius: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    color: #1042f1;
    cursor: pointer;
  }
  .active {
    color: white;
    background-color: #0376db;
  }
}
</style>
