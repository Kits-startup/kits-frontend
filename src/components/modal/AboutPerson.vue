<template>
  <div class="personModalContainer">
    <div class="modalBox">
      <span class="X" @click="$emit('close', true)">X</span>
      <div class="topContainer">
        <div class="profile">사진 첨부</div>
        <div class="basicInfo">
          <div class="name">이종빈<span>서울</span></div>
          <div class="mail">abc@naver.com</div>
          <div class="phone">010-0000-0000</div>
          <div class="iconContainer">
            <img src="@/assets/github.png" alt="github link" class="icon" />
            <img src="@/assets/insta.png" alt="insta link" class="icon" />
          </div>
        </div>
        <div class="btnContainer">
          <div class="kBtn">서류합격</div>
          <div class="kBtn gray">서류불합격</div>
        </div>
      </div>
      <div class="introduce">
        <div class="firstLine">
          <span>자기소개</span><span class="blue">+더보기</span>
        </div>
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
        <div class="label">학력</div>
        <div class="content">
          <span class="name">대한국민대학교</span>
          <span class="state" style="margin: 0 24px">졸업</span>
          <span class="rate">4.06/4.5</span>
        </div>
        <div class="content">
          <span class="specific">시각디자인 학과</span>
          <span class="date">2022.01~2023.04</span>
        </div>
        <div class="label">경력사항</div>
        <div class="content" style="display: flex">
          <div
            class="name"
            style="
              width: 140px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              margin-right: 5px;
            "
          >
            네이버 클라우드
          </div>
          <span class="date_spec">2022.01~2023.04</span>
          <span class="state" style="margin-left: 10px">재직중</span>
        </div>
        <div class="content" style="display: flex">
          <div
            class="name"
            style="
              width: 140px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              margin-right: 5px;
            "
          >
            카카오 웹툰
          </div>
          <span class="date_spec">2022.01~2023.04</span>
        </div>
        <div class="label">보유기술</div>
        <div class="content">
          <b-row>
            <b-col
              cols="4"
              v-for="(item, idx) in skillList"
              :key="idx"
              class="eachBox"
              ><span class="skillName">{{ item.name }}</span
              ><span class="level" style="margin-right: 30px">{{
                item.level
              }}</span></b-col
            >
          </b-row>
        </div>
        <div class="label">자격증</div>
        <div class="content">
          <b-row>
            <b-col
              cols="4"
              v-for="(item, idx) in authList"
              :key="idx"
              class="eachBox"
              ><span class="skillName">{{ item.name }}</span
              ><span class="level" style="margin-right: 30px">{{
                item.level
              }}</span></b-col
            >
          </b-row>
        </div>
        <div class="label">수상경력</div>
        <div class="content" style="display: flex">
          <div
            class="name"
            style="
              width: 140px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              margin-right: 5px;
            "
          >
            네이버 클라우드
          </div>
          <span class="date_spec">2022.01~2023.04</span>
          <span class="state" style="margin-left: 10px">재직중</span>
        </div>
        <div class="content" style="display: flex">
          <div
            class="name"
            style="
              width: 140px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              margin-right: 5px;
            "
          >
            카카오 웹툰
          </div>
          <span class="date_spec">2022.01~2023.04</span>
        </div>
        <div class="label">성향</div>
        <b-form-input type="range" readonly></b-form-input>
        <div class="label">기타 증빙서류</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPerson",
  props: {
    close: Function,
  },
  data() {
    return {
      skillList: [
        { name: "Java", level: "상" },
        { name: "Java", level: "상" },
        { name: "python", level: "상" },
        { name: "python", level: "상" },
        { name: "python", level: "상" },
        { name: "Node.js", level: "상" },
        { name: "Node.js", level: "상" },
        { name: "React", level: "상" },
        { name: "Typescript", level: "상" },
      ],
      authList: [
        { name: "포토샵", level: "1급" },
        { name: "중국어 신hsk", level: "6급" },
        { name: "정보처리기사", level: "실기" },
        { name: "중국어 신hsk", level: "6급" },
        { name: "정보처리기사", level: "실기" },
        { name: "정보처리기사", level: "실기" },
      ],
    };
  },
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
    height: 800px;
    overflow: auto;
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
      color: #515151;
      .name {
        display: flex;
        align-items: center;
        font-size: 22px;
        line-height: 30px;
        span {
          font-size: 16px;
          line-height: 22px;
          color: #7c7c7c;
        }
      }
      .mail .phone {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
      }
    }
    .iconContainer {
      .icon {
        margin-right: 14px;
      }
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
  .introduce {
    .firstLine {
      margin-top: 27px;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      line-height: 27px;
      .blue {
        font-size: 16px;
        line-height: 160%;
        color: #0376db;
      }
    }
    p {
      margin-top: 13px;
    }
    .label {
      margin-top: 44px;
      font-size: 20px;
      line-height: 27px;
      margin-bottom: 16px;
    }
    .content {
      margin-bottom: 14px;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: #515151;
    }
    .state {
      color: #0376db;
    }
    .date {
      margin-left: 20px;
    }
    .eachBox {
      display: flex;
      justify-content: space-between;
      margin-bottom: 13px;
    }
  }
}
.modalBox::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}
</style>
