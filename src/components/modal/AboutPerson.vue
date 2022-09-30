<template>
  <div class="personModalContainer">
    <div class="modalBox">
      <span class="X">X</span>
      <div class="topContainer">
        <div class="profile">사진 첨부</div>
        <div class="basicInfo">
          <div class="name">이종빈<span>서울</span></div>
          <div class="mail">abc@naver.com</div>
          <div class="phone">010-0000-0000</div>
          <div class="iconContainer">git,insta</div>
        </div>
        <div class="btnContainer">
          <div class="kBtn">서류합격</div>
          <div class="kBtn gray">서류불합격</div>
        </div>
      </div>
      <div class="introduce">
        <div class="firstLine"><span>자기소개</span><span>+더보기</span></div>
        <p>
          안녕하세요저는 이종빈입니다.안녕하세요저는 이종빈입니다.안녕하세요저는
          이종빈입니다.안녕하세요저는 이종빈입니다.안녕하세요저는
          이종빈입니다.안녕하세요저는 이종빈입니다.안녕하세요저는
          이종빈입니다.안녕하세요저는 이종빈입니다.안녕하세요저는
          이종빈입니다.안녕하세요저는 이종빈입니다.안녕하세요저는
          이종빈입니다.안녕하세요저는 이종빈입니다.안녕하세요저는
          이종빈입니다.안녕하세요저는 이종빈입니다.안녕하세요저는
          이종빈입니다.안녕하세요저는 이종빈입니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPerson",
  props: {},
};
</script>

<style lang="scss" scoped>
.personModalContainer {
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
  .modalBox {
    width: 895px;
    background: white;
    padding: 100px 140px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    position: relative;
    .X {
      position: absolute;
      top: 43px;
      right: 45px;
    }
  }
  .topContainer {
    display: flex;
    width: 100%;
    justify-content: start;
    .profile {
      background: #eeeeee;
      border-radius: 5px;
      width: 15%;
      width: 100px;
      height: 100px;
      background: url("https://mblogthumb-phinf.pstatic.net/MjAyMDExMjRfOSAg/MDAxNjA2MjA1MDI5MzE1.FqSl8OtJxZxJm1IYKtRXrhFNum6Qfu5wMq7MAiZwhFgg.9RMA4C4GmAp8XFc04eqM6zuRfxrCcU1y7Z8fA2_NA38g.JPEG.sosohan_n/IMG_5374.JPG?type=w800");
      background-size: cover;
    }
    .basicInfo {
      width: 70%;
      padding-left: 20px;
      .name {
      }
      .mail {
      }
      .phone {
      }
    }
    .iconContainer {
    }
    .btnContainer {
      display: flex;
      flex-direction: column;
      width: 20%;
      justify-content: center;

      .kBtn {
        background: #0376db;
        font-size: 18px;
        line-height: 25px;
        color: white;
        padding: 12px 0;
        margin-bottom: 7px;
        text-align: center;
        border-radius: 3px;
      }
      .gray {
        background: #515151;
      }
    }
  }
}
</style>
