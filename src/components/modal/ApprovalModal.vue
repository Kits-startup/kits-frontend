<template>
  <div class="deleteContainer">
    <div class="box">
      <div class="xBtn" style="text-align: right" @click="sendBack(false)">
        X
      </div>
      <div style="font-size: 22px; line-height: 38px; color: #515151">
        가입 승인을 진행 하시겠습니까?
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
  position: absolute;
  top: 0;
  right: 350px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    background: white;
    border: 2.37439px solid #0376db;
    box-shadow: 0px 9.49756px 59.3598px 2.37439px rgba(0, 0, 0, 0.25);
    border-radius: 35.6159px;
    width: 370px;
    height: 204px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .xBtn {
      align-self: flex-end;
      margin-right: 15px;
      color: #939393;
      font-size: 20px;
      margin-top: -20px;
      margin-bottom: 10px;
      cursor: pointer;
    }
    .btnContainer {
      margin-top: 35px;
      display: flex;
      width: 100%;
      justify-content: center;
      .checkBtn {
        width: 35%;
        text-align: center;
        border: 1.67287px solid #0376db;
        border-radius: 5.0186px;
        padding: 8px 0;
        margin: 0 10px;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        color: #515151;
        cursor: pointer;
      }
    }
  }
}
</style>
