<template>
  <div>
    <div class="oneBody" v-if="!pwChange">
      <div class="title">설정</div>
      <div id="settingWrapper">
        <div class="subtitle">전체알림</div>
        <div class="settingDetail">
          전체 알림을 on/off합니다.
          <ToggleButton
            :value="true"
            color="#0376DB"
            width="47"
            height="24"
          ></ToggleButton>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div class="editPassword" @click="pwChange = true">비밀번호 수정</div>
          <div class="exit">*회원탈퇴는 문의를 넣어주세요</div>
        </div>
      </div>
    </div>
    <div class="oneBody" v-else>
      <div class="title">비밀번호 수정</div>
      <div class="exit">
        *비밀번호 변경시 모든 기기에서 모두 로그아웃됩니다. 변경한 비밀번호로
        다시 로그인해주세요.
      </div>
      <div class="subsubtitle">
        현재 비밀번호를 입력한 후 새로 사용할 비밀번호를 입력하세요.
      </div>
      <div class="exit">
        너무 쉬운 비밀번호는 사용을 자제해 주시기 바랍니다.
      </div>
      <div class="inputBox" :class="wrong && 'wrong'">
        <div class="subtitle">현재 비밀번호 입력</div>
        <input
          type="password"
          class="kInput"
          placeholder="현재 비밀번호를 입력해 주세요."
        />
      </div>
      <div class="inputBox" :class="wrong && 'wrong'">
        <div class="subtitle">새 비밀번호 입력</div>
        <input
          type="password"
          class="kInput"
          placeholder="새 비밀번호를 입력해 주세요."
        />
        <div class="exit" style="font-size: 14px">
          영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상
          입력해 주세요.
        </div>
      </div>
      <div class="inputBox" :class="wrong && 'wrong'">
        <div class="subtitle">새 비밀번호 확인</div>
        <input
          type="password"
          class="kInput"
          placeholder="새 비밀번호를 다시 입력해 주세요."
        />
        <div class="exit" style="font-size: 14px" v-if="wrong">
          비밀번호가 다릅니다.
        </div>
      </div>
      <div class="kBtn" @click="wrong = true">비밀번호 변경</div>
    </div>
  </div>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";
export default {
  components: {
    ToggleButton,
  },
  data() {
    return {
      pwChange: true,
      wrong: false,
    };
  },
};
</script>

<style scoped lang="scss">
.kBtn {
  background: #0376db;
  border-radius: 99px;
  margin: auto;
  width: 150px;
  color: white;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-style: 24px;
  font-weight: bold;
  cursor: pointer;
}
.innerText {
  font-size: 18px;
  line-height: 25px;
  color: #515151;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.oneBody {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 695px;
  padding: 29px 47px 24px 47px;
  margin-bottom: 72px;

  margin-left: 20px;
}

.title {
  font-size: 22px;
  line-height: 35px;
  color: #1f1f1f;
  margin-bottom: 11px;
  font-weight: bold;
}

#settingWrapper {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #515151;
}

.subtitle {
  color: #1f1f1f;
  margin-bottom: 9px;
  font-weight: bold;
}

.settingDetail {
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
}

.editPassword {
  color: #0376db;
  margin-bottom: 33px;
  cursor: pointer;
}

.exit {
  color: #878787;
  margin-bottom: 21px;
  font-size: 16px;
}
.subsubtitle {
  color: black;
  font-style: 18px;
  font-weight: 600;
}
.inputBox {
  margin-top: 24px;
}
.kInput {
  padding: 16px;
  width: 100%;
  border: 1px solid #515151;
  border-radius: 4px;
  outline: none;
}
.wrong {
  .kInput {
    border: 1px solid red;
  }
  .exit {
    color: red;
  }
}
</style>
