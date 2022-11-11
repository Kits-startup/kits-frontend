<template>
  <div class="modalContainer">
    <div class="box">
      <div class="topHeader">
        <div>환불 완료처리</div>
        <div class="xBtn" @click="sendBack(false)">X</div>
      </div>
      <div class="content">
        <div class="title">
          결제번호 {{ info.code }}의 결제금액을 원결제 수단으로 환불처리및
          환불완료로 환불상태를 변경합니다.
        </div>
        <div class="mainContent">
          <div class="eachLine">
            <div class="label">환불금액</div>
            <div class="value">
              <input
                type="number"
                class="kInput"
                placeholder="환불 금액을 입력해주세요."
                v-model="amount"
              />
            </div>
          </div>
          <div class="eachLine">
            <div class="label">총 결제금액</div>
            <div class="value">{{ info.totalAmount.toLocaleString() }}원</div>
          </div>
          <div class="eachLine">
            <div class="label">환불가능액</div>
            <div class="value">{{ info.possible.toLocaleString() }}원</div>
          </div>
        </div>
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
  name: "ApprovalFalseModal",
  methods: {
    sendBack(value) {
      this.$emit("emitAnswer", value);
      this.$emit("inputValue", this.amount);
    },
  },
  data() {
    return {
      amount: null,
    };
  },
  props: {
    info: Object,
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
      font-size: 24px;
      line-height: 38px;
      .title {
        margin-bottom: 47px;
        margin-right: 30px;
      }
      .mainContent {
        .eachLine {
          display: flex;
          margin-bottom: 28px;
          .label {
            width: 30%;
          }
          .value {
            .kInput {
              outline: none;
              border: 1px solid #878787;
              padding: 5px;
              font-size: 20px;
              width: 290px;
            }
          }
        }
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
