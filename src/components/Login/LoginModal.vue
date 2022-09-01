<script>
export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      inputEmail: "",
    };
  },
  computed: {
    test() {
      let re =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return (
        this.inputEmail != "" &&
        this.inputEmail != "undefined" &&
        !re.test(this.inputEmail)
      );
    },

    validEmailMessage() {
      return this.test ? "올바른 이메일 형식을 입력해 주세요." : "";
    },
  },
  methods: {
    goResister() {
      this.$emit('close');
      this.$router.push({name:"Resister",params:{emailFrom:this.inputEmail}}).catch(()=>{}); //이미 resister form일때 오류발생
    },
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div>
            <button class="modal-close-button" @click="$emit('close')">
              X
            </button>
          </div>
          <div>
            <div class="logo">Logo</div>
          </div>
          <div class="title">안녕하세요!</div>
          <div class="default">키츠에 오신걸 환영합니다.</div>
          <div>
            <div class="emailForm">
              <input
                class="input"
                v-model="inputEmail"
                v-bind:class="{ wrongEmailForm: this.test }"
                type="text"
              />
              <div id="unvalidEmail">{{ validEmailMessage }}</div>
              <input
                class="submit"
                type="submit"
                @click="goResister()"
                value="바로가기"
              />
            </div>
          </div>
          <div v-show="!$store.state.isEmployer" class="EasyLoginContainer">
            카카오 네이버 구글
          </div>
          <div class="EnterpriseSwitch">
            <div>
              {{ $store.state.isEmployer ? "개인" : "기업" }}고객이 이렇습니까?
            </div>
            <div
              @click="$store.commit('changeUserType')"
              class="pointer"
              id="Link"
            >
              {{ $store.state.isEmployer ? "개인" : "기업" }}서비스 바로가기
            </div>
          </div>
          <div class="EnterpriseSwitch" id="FindID">
            <div>아이디/비밀번호를 기억하세요?</div>
            <div class="pointer" id="Link">아이디/비밀번호 찾기</div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.pointer {
  cursor: pointer;
}
.EnterpriseSwitch#FindID {
  margin-top: 12px;
}
.EnterpriseSwitch {
  display: flex;
  justify-content: space-between;
  padding: 0 81px;
  margin-top: 39px;
}
.EnterpriseSwitch div {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #515151;
  float: left;
}
.EnterpriseSwitch #Link {
  color: #0376db;
  float: right;
}
.modal-container .EasyLoginContainer {
  margin-top: 54px;
  height: 87px;
}

.modal-container .logo {
  font-size: 30px;
  width: 134px;
  height: 52px;
  margin: auto;
  margin-top: 21px;
}
.modal-container .emailForm {
  display: flex;
  align-items: stretch;
  margin: auto;
  margin-top: 40px;
  width: 437px;
  flex-direction: column;
}

.emailForm .input {
  box-sizing: border-box;
  height: 57px;
  padding-left: 22px;
  background: #ffffff;
  /* 메인 */

  border: 1px solid #0376db;
  border-radius: 3px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
}

.emailForm .wrongEmailForm,.wrongEmailForm:focus {
  border: 1px solid #e60505;
  outline-color: #e60505;
}

#unvalidEmail {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #e60505;
  margin: 8px 0;
  margin-right: auto;
}

.emailForm .submit {
  background: #0376db;
  outline: 0;
  border: 0;
  border-radius: 3px;
  height: 57px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #ffffff;
}

.modal-container .title {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;

  margin: 0;
  margin-top: 7px;
}
.modal-container .default {
  margin: 0;
  margin-top: 7px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* identical to box height */

  /* 검색 */

  color: #515151;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.67);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 664px;
  width: 628px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  text-align: center;

  position: relative;
}

.modal-close-button {
  float: right;
  width: 24px;
  height: 24px;
  margin: 34px 25px 0 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
