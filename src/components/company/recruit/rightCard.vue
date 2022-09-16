<template>
  <div class="rightContainer">
    <div class="topRight">
      {{ heart
      }}<img class="logo" src="@/assets/favorite_border.png" alt="heart" /><img
        src="@/assets/share.png"
        alt="heart"
        class="logo"
      />
    </div>
    <h1 class="title" style="font-size: 20px; line-height: 30px">채용 정보</h1>
    <div
      class="descriptionContainer"
      v-for="(item, idx) in workInfo"
      v-bind:key="idx"
    >
      <div class="label">{{ item.label }}</div>
      <div class="value">{{ item.value }}</div>
    </div>
    <div class="applyBtn">지원하기</div>
  </div>
</template>

<script>
export default {
  name: "rightCard",
  props: {
    workInfo: Array,
  },
  data() {
    return {
      heart: 30,
    };
  },
};
</script>

<style lang="scss" scoped>
.rightContainer {
  margin-left: 46px;
  width: 373px;
  border: 1px solid #0376db;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 26px;
  .topRight {
    display: flex;
    justify-content: end;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #0376db;
    margin-bottom: 5px;
    align-items: center;
    .logo {
      margin: 0 5px;
    }
  }
  .descriptionContainer {
    border: 1px solid #0376db;
    border-radius: 15px;
    padding: 17px 22px;
    margin: 16px 0;
    .label {
      font-size: 20px;
      line-height: 30px;
    }
    .value {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #515151;
    }
  }
  .applyBtn {
    background: #0376db;
    border-radius: 29.5px;
    color: white;
    text-align: center;
    padding: 14px 0;
    margin: 23px 0;
  }
}
</style>
