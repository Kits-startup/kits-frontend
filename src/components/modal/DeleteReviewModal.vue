<template>
  <div class="deleteContainer">
    <div class="box">
      <img src="@/assets/warning.png" alt="" />
      <div
        style="
          font-weight: 500;
          font-size: 28px;
          line-height: 41px;
          color: #515151;
        "
      >
        리뷰를 삭제 하시겠습니까?
      </div>
      <div class="btnContainer">
        <div class="left checkBtn" @click="sendBack(true)">예</div>
        <div class="right checkBtn" @click="sendBack(false)">아니오</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteReviewModal",
  methods: {
    sendBack(value) {
      this.$emit("emitAnswer", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.deleteContainer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(85, 85, 85);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    background: white;
    border: 2.37439px solid #0376db;
    box-shadow: 0px 9.49756px 59.3598px 2.37439px rgba(0, 0, 0, 0.25);
    border-radius: 35.6159px;
    width: 486px;
    height: 278px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btnContainer {
      margin-top: 35px;
      display: flex;
      width: 100%;
      justify-content: center;
      .checkBtn {
        width: 30%;
        text-align: center;
        border: 1.67287px solid #0376db;
        border-radius: 5.0186px;
        padding: 10px 0;
        margin: 0 10px;
        font-weight: 400;
        font-size: 28px;
        line-height: 41px;
        color: #515151;
        cursor: pointer;
      }
    }
  }
}
</style>
