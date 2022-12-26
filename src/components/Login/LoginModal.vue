<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div>
            <button class="modal-close-button" @click="$emit('close')">
              <img
                src="@/assets/xBtn.png"
                alt="close button"
                width="24px"
                height="24px"
              />
            </button>
          </div>
          <div>
            <div class="logo">
              <img
                src="@/assets/kitsLogoNew.png"
                width="134px"
                height="42px"
                alt="logo"
              />
            </div>
          </div>
          <div class="default">안녕하세요!</div>
          <div class="title">키츠에 오신걸 환영합니다.</div>
          <div>
            <div class="emailForm" v-if="!getPwMode">
              <input
                class="input"
                v-model="inputEmail"
                v-bind:class="{ wrongEmailForm: this.test }"
                placeholder="이메일로 바로가기"
                type="text"
              />
              <div id="unvalidEmail">{{ validEmailMessage }}</div>
              <input
                class="submit"
                type="submit"
                @click="checkAccountExist()"
                value="바로가기"
              />
            </div>
            <div class="emailForm PW" v-else>
              <input
                class="input pw"
                v-model="pw"
                placeholder="비밀번호 입력"
                type="password"
              />
              <div id="unvalidEmail" />
              <input
                class="submit"
                type="submit"
                @click="checkIDPW()"
                value="바로가기"
              />
            </div>
          </div>
          <div class="EasyLoginContainer" v-if="mode === 'user'">
            <div class="social">
              <div class="logo">
                <img src="@/assets/social/kakao.png" alt="kakao" />
              </div>
              <div class="label">카카오</div>
            </div>
            <div class="social">
              <div class="logo">
                <img src="@/assets/social/google.png" alt="google" />
              </div>
              <div class="label">구글</div>
            </div>
            <div class="social">
              <div class="logo">
                <img src="@/assets/social/naver.png" alt="naver" />
              </div>
              <div class="label">네이버</div>
            </div>
          </div>
          <div class="changeLoginMode">
            <div class="question">
              {{ mode === "user" ? "기업" : "개인" }} 고객이신가요?
            </div>
            <div
              class="link"
              @click="
                $emit('changeModalMode', mode === 'user' ? 'company' : 'user')
              "
            >
              {{ mode === "user" ? "기업" : "개인" }}서비스 바로가기
            </div>
          </div>
          <div class="findIdPw">
            <div class="find" @click="goto('id')">아이디찾기</div>
            <div class="sep">|</div>
            <div class="find" @click="goto('pw')">비밀번호 찾기</div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { accountDB } from "../../data/login";
import { findUserByEmail } from "../api/userApi";
export default {
  props: {
    show: Boolean,
    mode: String,
    changeModalMode: Function,
  },
  data() {
    return {
      inputEmail: "",
      getPwMode: false,
      pw: null,
    };
  },
  computed: {
    test() {
      let re =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      console.log(
        this.inputEmail != "" &&
          this.inputEmail != "undefined" &&
          !re.test(this.inputEmail)
      );
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
      this.$emit("close");
      if (this.$store.state.isEmployer) {
        this.$router
          .push({ name: "Resister", params: { emailFrom: this.inputEmail } })
          .catch(() => {});
      } else {
        this.$router
          .push({
            name: "ResisterEnterprise",
            params: { emailFrom: this.inputEmail },
          })
          .catch(() => {});
      }
    },
    async checkAccountExist() {
      const isCompany = this.mode === "company";
      if (!this.test) {
        console.log(this.inputEmail);
        const found = await findUserByEmail(this.inputEmail);
        console.log(found);
        // const found = accountDB.find(
        //   (e) => e.email == this.inputEmail && e.isCompany == isCompany
        // );
        if (found) {
          console.log("user exists");
          this.getPwMode = true;
        } else {
          console.log("no such user, go to register");
          this.$emit("close");
          if (isCompany) {
            this.$router.push({
              name: "ResisterEnterprise",
              params: { emailFrom: this.inputEmail },
            });
          } else {
            this.$router.push({
              name: "Resister",
              params: { email: this.inputEmail },
            });
          }
        }
      }
    },
    async checkIDPW() {
      // const user = accountDB.find(
      //   (e) => e.email == this.inputEmail && e.pw == this.pw
      // );
      const user = await findUserByEmail(this.inputEmail);
      console.log(user);
      if (user.password == this.pw) {
        console.log(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("userMode", "company");
        this.pw = false;
        this.$router.go();
        // this.$emit("close");
      } else {
        console.log("wrong pw");
      }
    },
    goto(where) {
      where === "id"
        ? this.$router.push("/find-id")
        : this.$router.push("/find-pw");
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
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
  font-weight: 400;
  font-size: 18px;
  color: #515151;
  float: left;
}
.EnterpriseSwitch #Link {
  color: #0376db;
  float: right;
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
  outline: none;
  border: 1px solid #0376db;
  border-radius: 3px;
  font-weight: 400;
  font-size: 18px;
}

.emailForm .wrongEmailForm,
.wrongEmailForm:focus {
  border: 1px solid #e60505;
  outline-color: #e60505;
}

#unvalidEmail {
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

  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #ffffff;
}

.modal-container .title {
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;

  margin: 0;
  margin-top: 7px;
}
.modal-container .default {
  margin: 0;
  margin-top: 7px;

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
  min-height: 564px;
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
.EasyLoginContainer {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  .social {
    cursor: pointer;
    .logo {
      img {
        width: 56px;
        height: 56px;
      }
    }
    .label {
      margin-top: 14px;
      font-size: 15px;
      line-height: 20px;
      color: #515151;
    }
  }
}
.changeLoginMode {
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  justify-content: center;
  margin-top: 24px;
  .question {
    color: #515151;
  }
  .link {
    text-decoration: underline;
    color: #0376db;
    cursor: pointer;
    margin-left: 8px;
  }
}
.findIdPw {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #515151;
  margin-bottom: 75px;
  .find {
    cursor: pointer;
  }
  .sep {
    margin: 0 24px;
  }
}
</style>
