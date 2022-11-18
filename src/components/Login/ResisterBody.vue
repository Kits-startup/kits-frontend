<template>
  <div class="body">
    <div class="title">간편가입</div>
    <div class="oneInputSet">
      <div class="inputTitle">이메일</div>
      <div class="flexDisplay">
        <div class="inputContainer">
          <input
            type="text"
            v-model="inputEmail"
            class="inputBox"
            v-bind:class="{ wrongEmailForm: this.test }"
            placeholder="이메일을 입력해 주세요."
          />
          <div class="wrongFormWarn">
            {{ test ? "올바른 이메일 부탁" : "" }}
          </div>
        </div>
        <div class="certificateBtn" @click="certificateEmail = true">
          {{ certificateEmail ? "재발송" : "메일인증" }}
        </div>
      </div>
    </div>
    <div class="oneInputSet" v-if="certificateEmail">
      <div class="flexDisplay">
        <div class="inputContainer">
          <input
            type="text"
            class="inputBox"
            placeholder="이메일 인증번호를 입력해 주세요."
          />

          <div class="wrongFormWarn">
            {{ test ? "올바른 이메일 부탁" : "" }}
          </div>
        </div>
        <div class="certificateBtn">인증하기</div>
      </div>
    </div>

    <div class="oneInputSet">
      <div class="inputTitle">비밀번호 입력</div>
      <input
        type="password"
        class="inputBox passwordBox"
        placeholder="비밀번호를 입력해 주세요."
      />
      <!-- v-bind:class="{ wrongEmailForm: this.test }" -->

      <div
        class="passwordCaution"
        v-bind:class="{ wrongFormWarn: this.test }"
      ></div>
    </div>

    <div class="oneInputSet">
      <div class="inputTitle">비밀번호 확인</div>

      <input
        type="password"
        class="inputBox"
        placeholder="비밀번호를 재입력해 주세요."
      />
    </div>

    <div class="phoneCertification">
      <div class="inputTitle">휴대폰 인증</div>
      <div class="certificationBox">
        <div class="getCertificationBox">
          <input
            class="inputBox certificationInput"
            type="text"
            placeholder="예시) 01012345678"
          />
          <div class="certificateBtn">휴대폰 인증</div>
        </div>
        <input
          class="inputBox"
          style="width: 100%"
          type="text"
          placeholder="인증번호를 입력해 주세요"
        />
      </div>
    </div>

    <div class="agree">
      <div
        class="inputTitle"
        style="
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          margin-bottom: 12px;
        "
      >
        이용약관 내용동의
      </div>
      <div class="checkBoxText" style="font-size: 18px; line-height: 30px">
        <input type="checkbox" v-model="allSelected" value="agreeAll" />전체동의
      </div>
      <div
        class="sepLine"
        style="
          width: 100%;
          height: 1px;
          background: #b7b7b7;
          margin-bottom: 12px;
        "
      />
      <div class="checkBoxText">
        <input type="checkbox" v-model="selectList" value="age" />만 14세 이상
        입니다
      </div>
      <div class="checkBoxText">
        <input type="checkbox" v-model="selectList" value="service" />
        <div class="flexForDetail">
          <div>서비스 이용 약관 동의<span class="star"> *</span></div>
          <div class="detail pointer" @click="showServiceModal = true">
            상세보기
          </div>
        </div>
      </div>
      <div class="checkBoxText">
        <input type="checkbox" v-model="selectList" value="private" />
        <div class="flexForDetail">
          <div>
            개인 정보 수집. 이용에 대한 동의<span class="star"> *</span>
          </div>
          <div class="detail pointer" @click="showPersonalModal = true">
            상세보기
          </div>
        </div>
      </div>
      <div class="checkBoxText">
        <input type="checkbox" v-model="selectList" value="offer" />
        <div class="flexForDetail">
          <div>
            개인정보 제 3자 제공및 위탁사항
            <span style="color: #878787">(선택)</span>
          </div>
          <div class="detail pointer" @click="showThirdPartyModal = true">
            상세보기
          </div>
        </div>
      </div>
      <!-- <div class="checkBoxText">
        <input type="checkbox" v-model="selectList" value="agree" />
        <div class="textAlign">위내용을 확인하였으며 동의 합니다.</div>
      </div> -->

      <button class="submit" id="finalSubmit" @click="checkArr()">
        회원가입하기
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
    email: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showServiceModal: false,
      showPersonalModal: false,
      showThirdPartyModal: false,
      inputEmail: this.email,
      selectList: [],
      checkList: ["age", "service", "private", "offer", "agree"],
      pressSubmit: false,
      certificateEmail: false,
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
      if (this.pressSubmit) {
        let re =
          /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return (
          this.inputEmail != "" &&
          this.inputEmail != "undefined" &&
          !re.test(this.inputEmail)
        );
      } else {
        return null;
      }
    },
  },
};
</script>

<style scoped lang="scss">
input {
  outline: none;
}
.body {
  display: flex;
  margin: auto;
  margin-top: 76px;
  width: 437px;
  flex-direction: column;
  align-items: stretch;
}

.title {
  color: #000000;
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 32px;
  line-height: 47px;
}

.inputTitle {
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #000000;
}

.inputBox {
  height: 55px;
  border: 1px solid #515151;
  border-radius: 3px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 0;
  padding-left: 19px;
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
  .certificateBtn {
    width: 106px;
    height: 56px;
    background: #f3f3f3;
    border-radius: 4px;
    font-size: 18px;
    line-height: 27px;
    color: #515151;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
  }
}
.certificationInput {
  width: 322px;
  height: 55px;
  margin: 0;
}

.submit {
  background: #f3f3f3;
  outline: 0;
  border: 0;
  border-radius: 3px;
  font-size: 18px;
  line-height: 27px;
  margin-left: 6px;
  width: 139px;
  height: 57px;
  margin: 120px 0;
  font-weight: 700;
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
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.checkBoxText input {
  margin-right: 8px;
}

.agreeALlcss {
  color: #0376db;
}

.flexForDetail {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.detail {
  font-size: 14px;
  line-height: 21px;
  text-decoration-line: underline;
  color: #878787;
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
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  height: 18px;
  margin-top: 4px;
  margin-bottom: 5px;
  color: #e60505;
}
.flexDisplay {
  display: flex;
  input {
    width: 332px;
  }
  .certificateBtn {
    width: 96px;
    height: 56px;
    background: #f3f3f3;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    font-size: 18px;
    line-height: 27px;
    color: #515151;
    cursor: pointer;
  }
}
.star {
  color: red;
}
</style>
