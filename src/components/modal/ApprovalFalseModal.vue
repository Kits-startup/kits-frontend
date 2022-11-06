<template>
  <div class="modalContainer">
    <div class="box">
      <div class="topHeader">
        <div>가입 미승인 사유</div>
        <div class="xBtn">X</div>
      </div>
      <div class="content">
        <textarea rows="15" placeholder="가입 미승인 사유를 작성해주세요." />
      </div>
      <div class="btnContainer">
        <div class="kBtn cancel" @click="sendBack(false)">취소하기</div>
        <div class="kBtn save" @click="sendBack(true)">저장하기</div>
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
.modalContainer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(38, 38, 38, 0.67);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    background: white;
    width: 628px;
    height: 600px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    justify-content: center;
    overflow: hidden;
    .topHeader {
      background: #0376db;
      height: 80px;
      display: flex;
      justify-content: space-between;
      color: white;
      padding: 26px 25px 21px 41px;
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
    }
    .content {
      margin-left: 41px;
      margin-right: 25px;
      textarea {
        resize: none;
        width: 100%;
        border: 1px solid #878787;
        padding: 5px 10px;
        outline: none;
      }
      margin-bottom: 24px;
    }
    .btnContainer {
      display: flex;
      justify-content: center;
      .kBtn {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #0376db;
        width: 142px;
        height: 57px;
        border: 1px solid #0376db;
        border-radius: 28.5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 6px;
        cursor: pointer;
      }
      .cancel {
      }
      .save {
        color: white;
        background: #0376db;
      }
    }
  }
}
</style>
