<template>
  <div class="personModalContainer" @click="onBGClick">
    <b-modal id="requestModal" hide-footer hide-header centered>
      <div class="requestModalContainer">
        <div class="closeX" @click="$bvModal.hide('requestModal')">X</div>
        <div class="title">면접 보내기</div>
        <div class="positionNDetail">
          <div class="position pBox">
            <div class="label">직군</div>
            <select-box-vue :options="option.position" />
          </div>
          <div class="detail pBox">
            <div class="label">직무</div>
            <select-box-vue :options="option.detail" />
          </div>
        </div>
        <div class="location">
          <div class="label">근무지 주소 설정</div>
          <div style="display: flex; align-items: stretch">
            <input
              type="text"
              class="kInput"
              placeholder="예)판교대로 123"
              :value="addressSet.final"
              :readonly="true"
              style="width: 806px"
            />
            <input
              class="submit searchBtn"
              @click="execDaumPostcode()"
              type="submit"
              value="검색"
            />
          </div>
          <input
            type="text"
            class="kInput"
            placeholder="상세주소를 입력해주세요"
            v-model="detailAdress"
            style="width: 100%; margin-top: 20px"
          />
        </div>
        <div class="money">
          <div class="label" style="margin-top: 43px">연봉</div>
          <input
            class="kInput"
            type="text"
            v-model="money"
            style="width: 100%"
          />
        </div>
        <div class="suggest">
          <div class="label" style="margin-top: 50px">제안 메세지</div>
          <textarea
            class="kInput"
            name="suggest_message"
            rows="5"
            placeholder="면접 제안 메시지를 입력해주세요."
            style="width: 100%; resize: none"
            v-model="message"
          />
          <div class="length">{{ message.length }}/300</div>
        </div>
        <div class="sendSuggest" @click="onMessageSend">면접제안 보내기</div>
      </div>
    </b-modal>
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
          <div class="stateModal" v-if="showModalVisible">
            <div class="text">면접 제안을 요청하시겠습니까?</div>
            <div class="yesOrNo">
              <div class="yes" @click="clickYN(true)">예</div>
              <div class="no" @click="clickYN(false)">아니오</div>
            </div>
          </div>
          <div class="kBtn" @click="clickStateChange">면접제안</div>
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
        <div class="eachMBTI" v-for="(e, i) in mbti" :key="i">
          <div style="display: flex; justify-content: space-between">
            <span>{{ e.left }}</span
            ><span>{{ e.right }}</span>
          </div>
          <b-form-input
            type="range"
            disabled
            :value="e.value"
            min="-100"
            max="100"
            class="range"
          />
          <div class="percent center" v-if="-50 <= e.value && e.value <= 50">
            {{ Math.abs(e.value) }}%
          </div>
          <div class="percent left" v-if="e.value < -50">{{ e.value }}%</div>
          <div class="percent right" v-if="e.value > 50">{{ e.value }}%</div>
        </div>
        <div class="label">기타 증빙서류</div>
        <div class="file">
          <span class="file_name">이종빈_이력서.pdf</span
          ><span class="downloadBtn"
            >다운로드<svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z"
                fill="#0376DB"
              />
            </svg>
          </span>
        </div>
        <div class="file">
          <span class="file_name">이종빈_이력서.pdf</span
          ><span class="downloadBtn"
            >다운로드<svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z"
                fill="#0376DB"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { opt_dev_detail, opt_type } from "@/data/options";
import SelectBoxVue from "../select/SelectBox.vue";
export default {
  name: "AboutPerson",
  components: {
    SelectBoxVue,
    // SendMeetingRequestVue,
  },
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
      mbti: [
        { left: "외향형", right: "내향형", value: 30 },
        { left: "감각형", right: "직관형", value: -40 },
        { left: "사고형", right: "감정형", value: 60 },
        { left: "판단형", right: "인식형", value: -100 },
      ],
      showModalVisible: false,
      showRequestModal: false,
      option: {
        position: opt_type,
        detail: opt_dev_detail,
      },
      addressSet: {
        inputDisable: false,
        postcode: "",
        address: "",
        final: "",
        extraAddress: "",
      },
      money: "",
      message: "",
    };
  },
  methods: {
    onBGClick(e) {
      if (e.target.className === "personModalContainer") {
        this.$emit("close", true);
      }
    },
    clickStateChange() {
      this.showModalVisible = true;
    },
    clickYN(ans) {
      if (ans) {
        console.log("요청하기");
        this.$bvModal.show("requestModal");
      } else {
        console.log("요청 취소");
      }
      this.showModalVisible = false;
    },
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.addressSet.extraAddress !== "") {
            this.addressSet.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            this.addressSet.address = data.roadAddress;
          } else {
            this.addressSet.address = data.jibunAddress;
          }
          if (data.userSelectedType === "R") {
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.addressSet.extraAddress += data.bname;
            }
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.addressSet.extraAddress +=
                this.addressSet.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            if (this.addressSet.extraAddress !== "") {
              this.addressSet.extraAddress = `(${this.addressSet.extraAddress})`;
            }
          } else {
            this.addressSet.extraAddress = "";
          }
          this.addressSet.postcode = data.zonecode;
          this.addressSet.final =
            this.addressSet.address + " [" + this.addressSet.postcode + "]";
        },
      }).open();
    },
    onMessageSend() {
      this.$bvModal.hide("requestModal");
      this.$emit("close", true);
    },
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
    //overflow: auto;
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
      justify-content: start;
      position: relative;
      .stateModal {
        top: 5px;
        left: 140px;
        position: absolute;
        background: #ffffff;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        width: 450px;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
        .text {
          padding: 60px;
          padding-bottom: 40px;
          //word-break: keep-all;
        }
        .yesOrNo {
          border-top: #0376db 1px solid;
          display: flex;
          div {
            width: 50%;
            padding: 25px 0;
            color: #0376db;
            cursor: pointer;
          }
          .yes {
            border-right: #0376db 1px solid;
          }
          .no {
          }
        }
      }
      .kBtn {
        background: #0376db;
        font-size: 18px;
        line-height: 25px;
        color: white;
        padding: 12px 0;
        margin-bottom: 7px;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
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
    .eachMBTI {
      padding: 0 20px;
      margin-bottom: 46px;
      input[type="range"]::-webkit-slider-thumb {
        background: #0376db;
      }
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: #515151;
      .percent {
        font-weight: 500;
        font-size: 18px;
        color: #0376db;
        text-align: center;
      }
      .left {
        text-align: left;
      }
      .right {
        text-align: right;
      }
    }
    .file {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: #515151;
      .file_name {
        text-decoration-line: underline;
        cursor: pointer;
      }
      .downloadBtn {
        display: flex;
        align-items: center;
        svg {
          margin-left: 5px;
        }
        cursor: pointer;
      }
    }
  }
}
.modalBox::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}
#requestModal {
  .requestModalContainer {
    padding: 20px 40px;
    position: relative;
    .sendSuggest {
      width: max-content;
      padding: 16px 28px;
      color: white;
      background: #0376db;
      margin: 30px auto;
      margin-bottom: 0;
      cursor: pointer;
    }
    input {
      outline: none;
    }
    textarea {
      outline: none;
    }
    .closeX {
      position: absolute;
      right: 10px;
    }
    .title {
      text-align: center;
      font-size: 28px;
      line-height: 38px;
    }
    .positionNDetail {
      display: flex;
      margin-top: 30px;
      .pBox {
        width: 50%;
        margin-right: 18px;
      }
    }
    .label {
      font-size: 20px;
      line-height: 27px;
      margin-bottom: 14px;
    }
    .kInput {
      border: #0376db 1px solid;
      border-radius: 0;
      padding: 16px;
    }
    .location {
      .searchBtn {
        width: 150px;
        background: #0376db;
        color: white;
        font-size: 20px;
        line-height: 27px;
        padding: 16px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 8px;
      }
    }
    .length {
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #515151;
      text-align: right;
    }
  }
}
</style>
