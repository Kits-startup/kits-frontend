<template>
  <div class="body">
    <div class="wideBody">
      <div class="title">기업정보 등록</div>
      <div class="flex-row marginB27">
        <div class="oneInputSet w-437px">
          <div class="inputTitle">기업명</div>
          <input
            type="text"
            class="inputBox"
            placeholder="기업명을 입력해 주세요."
          />
        </div>
        <div class="oneInputSet w-171px">
          <div class="inputTitle">설립년도</div>
          <input type="text" class="inputBox" placeholder="예) 2020" />
        </div>
      </div>
      <div class="oneInputSet marginB18">
        <div class="inputTitle">주소</div>
        <div class="flex-row marginB10">
          <input
            type="text"
            class="inputBox w-437px"
            placeholder="주소를 검색해주세요"
            :value="addressSet.final"
            :readonly="true"
          />
          <input
            class="submit"
            @click="execDaumPostcode()"
            type="submit"
            value="검색"
          />
        </div>
        <input
          type="text"
          class="inputBox"
          placeholder="상세주소를 입력해주세요"
        />
      </div>
      <div class="oneInputSet marginB27">
        <div class="inputTitle">사업자등록번호</div>
        <input
          type="text"
          class="inputBox"
          placeholder="예)123456789 띄어쓰기없이 번호만 입력"
        />
      </div>

      <div class="oneInputSet marginB27">
        <div class="inputTitle">매출액 또는 투자금(단위 만원)</div>
        <input type="text" class="inputBox" placeholder="예) 200000000" />
      </div>

      <div class="oneInputSet marginB27">
        <div class="inputTitle">직원수</div>
        <input
          type="text"
          class="inputBox"
          placeholder="예) 5,10,15 숫자만입력"
        />
      </div>

      <div class="oneInputSet marginB27">
        <div style="display: flex; flex-direction: row">
          <div class="oneInputSet" style="width: 50%; margin-right: 8px">
            <div class="inputTitle">담장자 이름</div>
            <input
              type="text"
              class="inputBox"
              placeholder="담당자 이름을 입력해주세요."
            />
          </div>
          <div class="oneInputSet" style="width: 50%">
            <div class="inputTitle">담당자 연락처</div>

            <input
              type="text"
              class="inputBox"
              placeholder="예) 01012345678 숫자만입력"
            />
          </div>
        </div>
      </div>

      <div class="oneInputSet" style="margin-bottom: 43px">
        <div class="inputTitle">기업/서비스 소개</div>
        <textarea
          type="text"
          class="inputBox"
          style="height: 276px; padding-top: 17px"
          placeholder="내용을 상세히 작성해주세요."
          v-model="entpIntro"
        ></textarea>
        <div
          class="introLimit"
          v-bind:class="entpIntro.length <= 4000 ? '' : 'tooLong'"
        >
          {{ entpIntro.length }}/4000
        </div>
      </div>

      <div class="oneInputSet" style="margin-bottom: 160px">
        <div class="inputTitle">홈페이지 URL</div>
        <input
          type="text"
          class="inputBox"
          placeholder="홈페이지 URL 을 입력해주세요."
        />
      </div>
    </div>
    <div class="scroll">
      <div class="imgs">
        <div class="oneImgSet" style="margin-right: 44px">
          <div class="imgTitle">기업 로고 이미지</div>
          <div class="oneImg"></div>
        </div>
        <div class="oneImgSet">
          <div class="imgTitle">기업 상세 이미지</div>
          <div class="oneImg"></div>
        </div>
        <div class="oneImgSet">
          <div class="imgTitle"></div>

          <div class="oneImg"></div>
        </div>
        <div class="oneImgSet">
          <div class="imgTitle"></div>

          <div class="oneImg"></div>
        </div>
      </div>
    </div>
    <button class="submit" id="finalSubmit" @click="checkArr()">
      화원가입하기
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    emailFrom: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      addressSet: {
        inputDisable: false,
        postcode: "",
        address: "",
        final: "",
        extraAddress: "",
      },
      entpIntro: "",
      showServiceModal: false,
      showPersonalModal: false,
      showThirdPartyModal: false,
      inputEmail: this.emailFrom,
      selectList: [],
      checkList: ["age", "service", "private", "offer", "agree"],
    };
  },
  methods: {
    checkArr: function () {
      console.log(this.selectList);
    },
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.addressSet.extraAddress !== "") {
            this.addressSet.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.addressSet.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.addressSet.address = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.addressSet.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.addressSet.extraAddress +=
                this.addressSet.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.addressSet.extraAddress !== "") {
              this.addressSet.extraAddress = `(${this.addressSet.extraAddress})`;
            }
          } else {
            this.addressSet.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.addressSet.postcode = data.zonecode;
          this.addressSet.final =
            this.addressSet.address + " [" + this.addressSet.postcode + "]";
        },
      }).open();
    },
  },
  computed: {
    allSelected: {
      get: function () {
        return this.checkList.length === this.selectList.length;
      },
      //setter
      set: function (e) {
        this.selectList = e ? this.checkList : [];
      },
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Noto Sans KR";
}

.body {
  display: flex;
  margin: auto;
  margin-top: 76px;
  flex-direction: column;
  align-items: stretch;
}

.wideBody {
  display: flex;
  margin: auto;
  width: 620px;
  flex-direction: column;
  align-items: stretch;
}

.title {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;

  line-height: 38px;
  color: #000000;
  margin-bottom: 28px;
}

.inputTitle {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 10px;

  color: #000000;
}

.inputBox {
  height: 55px;
  border: 1px solid #0376db;
  border-radius: 3px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 0;
  padding-left: 19px;

  text-align: left;
}
.inputBox::placeholder {
  color: #515151;
}

.oneInputSet {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.passwordBox {
  margin-bottom: 4px;
}
.passwordCaution {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
  color: #515151;
  margin-bottom: 5px;
}

.phoneCertification {
  margin-top: 41px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.getCertificationBox {
  display: flex;
  margin-bottom: 10px;
}
.certificationInput {
  width: 273px;
  height: 55px;
  margin: 0;
}

.submit {
  background: #0376db;
  outline: 0;
  border: 0;
  border-radius: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;

  width: 139px;
  height: 55px;
}

.agree {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 85px;
}
.checkBoxText {
  display: flex;
  margin-bottom: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
}

.checkBoxText input {
  margin-right: 8px;
}

.agreeALlcss {
  font-weight: 500;
  color: #0376db;
}

.flexForDetail {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.detail {
  margin-right: 39px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-decoration-line: underline;
  color: #0376db;
}

#finalSubmit {
  width: 100%;
  border-radius: 28.5px;
  margin-top: 41px;
}

.wrongFormWarn {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  height: 18px;
  margin-top: 4px;
  margin-bottom: 5px;
  color: #e60505;
}

.w-437px {
  width: 437px;
  margin-right: 12px;
}

.w-171px {
  width: 171px;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.marginB10 {
  margin-bottom: 10px;
}
.marginB18 {
  margin-bottom: 18px;
}
.marginB27 {
  margin-bottom: 27px;
}

.introLimit {
  text-align: right;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #515151;
}
.tooLong,
.tooLong:focus {
  color: #e60505;
}

.scroll {
  width: 68.6%;
  margin: 0 auto;
  flex-direction: row;
  overflow: auto;
}
.imgs {
  width: 1000px;
  display: flex;
}

.oneImg {
  width: 310px;
  height: 234px;
  background: #f5f5f5;
  border-radius: 15px;
}

.oneImgSet {
  display: flex;
  flex-direction: column;
  margin-right: 8px;
}

.imgTitle {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  height: 27px;
  margin-bottom: 16px;
}
</style>
