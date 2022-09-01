<template>
  <div class="body">
    <div class="title">간편가입</div>
    <div class="oneInputSet">
      <div class="inputTitle">이메일</div>
      <input
        type="text"
        v-model="inputEmail"
        class="inputBox"
        v-bind:class="{ wrongEmailForm: this.test }"
        placeholder="이메일을 입력해 주세요."
      />
      <div class="wrongFormWarn">{{ test ? "올바른 이메일 부탁" : "" }}</div>
    </div>
    <div class="oneInputSet">
      <div class="inputTitle">이메일 인증번호 입력</div>
      <input
        type="text"
        class="inputBox"
        v-bind:class="{ wrongEmailForm: this.test }"
        placeholder="이메일 인증번호를 입력해 주세요."
      />
      <div class="wrongFormWarn">{{ test ? "올바른 이메일 부탁" : "" }}</div>
    </div>

    <div class="oneInputSet">
      <div class="inputTitle">비밀번호 입력</div>
      <input
        type="password"
        class="inputBox passwordBox"
        v-bind:class="{ wrongEmailForm: this.test }"
        placeholder="비밀번호를 입력해 주세요."
      />
      <div class="passwordCaution" v-bind:class="{ wrongFormWarn: this.test }">
        {{
          test
            ? "비밀번호가 올바르지 않습니다"
            : "영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해주세요."
        }}
      </div>
    </div>

    <div class="oneInputSet">
      <div class="inputTitle">비밀번호 확인</div>

      <input
        type="password"
        class="inputBox"
        v-bind:class="{ wrongEmailForm: this.test }"
        placeholder="휴대폰 번호를 입력해 주세요."
      />
      <div class="wrongFormWarn">{{ test ? "올바른 이메일 부탁" : "" }}</div>
    </div>

    <div class="phoneCertification">
      <div class="title">휴대폰 인증</div>
      <div class="certificationBox">
        <div class="getCertificationBox">
          <input
            class="inputBox certificationInput"
            type="text"
            placeholder="예시) 01012345678"
          />
          <input class="submit" type="submit" value="인증번호 받기" />
        </div>
        <input
          class="inputBox certificationInput"
          type="text"
          placeholder="인증번호를 입력해 주세요"
        />
      </div>
    </div>

    <div class="agree">
      <div class="title">이용약관 내용동의</div>
      <div class="checkBoxText agreeALlcss">
        <input type="checkbox" v-model="allSelected" value="agreeAll" />전체동의
      </div>
      <div class="checkBoxText">
        <input type="checkbox" v-model="selectList" value="age" />만 14세 이상
        입니다
      </div>
      <div class="checkBoxText">
        <input type="checkbox" v-model="selectList" value="service" />
        <div class="flexForDetail">
          서비스 이용 약관 동의 (필수)
          <div class="detail pointer" @click="showServiceModal = true">
            상세보기
          </div>
        </div>
      </div>
      <div class="checkBoxText">
        <input type="checkbox" v-model="selectList" value="private" />
        <div class="flexForDetail">
          개인 정보 수집. 이용에 대한 동의 (필수)
          <div class="detail pointer" @click="showPersonalModal = true">
            상세보기
          </div>
        </div>
      </div>
      <div class="checkBoxText">
        <input type="checkbox" v-model="selectList" value="offer" />
        <div class="flexForDetail">
          개인정보 제 3자 제공및 위탁사항 (선택)
          <div class="detail pointer" @click="showThirdPartyModal = true">
            상세보기
          </div>
        </div>
      </div>
      <div class="checkBoxText">
        <input type="checkbox" v-model="selectList" value="agree" />
        <div class="textAlign">위내용을 확인하였으며 동의 합니다.</div>
      </div>

      <button class="submit" id="finalSubmit" @click="checkArr()">
        화원가입하기
      </button>

      <div>
        <DetailModal :show="showServiceModal" @close="showServiceModal = false">
          <h1 slot="title">서비스 이용 약관</h1>
          <ServiceTermAgree slot="innerText"></ServiceTermAgree>
        </DetailModal>
        <DetailModal
          :show="showPersonalModal"
          @close="showPersonalModal = false"
        >
          <h1 slot="title">개인정보처리방침</h1>
          <PersonalData slot="innerText"></PersonalData>
        </DetailModal>
        <DetailModal
          :show="showThirdPartyModal"
          @close="showThirdPartyModal = false"
        >
          <h1 slot="title">개인정보제3자 제공</h1>
          <ThirdPartyAgree slot="innerText"></ThirdPartyAgree>
        </DetailModal>
      </div>
    </div>
  </div>
</template>

<script>
import DetailModal from "./DetailModal";
import PersonalData from "./DetailText/PersonalData.vue";
import ThirdPartyAgree from "./DetailText/ThirdPartyAgree.vue";
import ServiceTermAgree from "./DetailText/ServiceTermAgree.vue";

export default {
  components: {
    DetailModal,
    PersonalData,
    ThirdPartyAgree,
    ServiceTermAgree,
  },
  props: {
    emailFrom: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
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
    test() {
      let re =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return (
        this.inputEmail != "" &&
        this.inputEmail != "undefined" &&
        !re.test(this.inputEmail)
      );
    },
  },
};
</script>

<style scoped>
.body {
  display: flex;
  margin: auto;
  margin-top: 76px;
  width: 437px;
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
  margin-bottom: 8px;
}

.inputTitle {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
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
  color: #515151;
  padding: 0;
  padding-left: 19px;
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

  margin-left: 6px;
  width: 139px;
  height: 57px;
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

.wrongEmailForm,
.wrongEmailForm:focus {
  border: 1px solid #e60505;
  outline-color: #e60505;
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
</style>
