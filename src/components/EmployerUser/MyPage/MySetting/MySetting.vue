<template>
  <div>
    <div class="oneBody">
      <div class="title">설정</div>
      <div id="settingWrapper">
        <div class="subtitle">전체알림</div>
        <div class="settingDetail">
          전체 알림을 on/off합니다.
          <ToggleButton color="#0376DB" width=47 height=24></ToggleButton>
        </div>

        <div class="subtitle">구직 여부</div>
        <div class="settingDetail">
          기업의 구직 제안을 on/off합니다.
          <ToggleButton color="#0376DB" width=47 height=24></ToggleButton>
        </div>
        <div class="editPassword">비밀번호 수정</div>
        <div class="exit">회원탈퇴는 문의를 넣어주세요</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";
export default {
  components: {
    ToggleButton,
  },
};
</script>

<style scoped>
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
}

.title {
  font-size: 26px;
  line-height: 35px;
  color: #1f1f1f;
  margin-bottom: 11px;
}

#settingWrapper {
  display: flex;
  flex-direction: column;

  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #515151;
}

.subtitle {
  color: #1f1f1f;
  margin-bottom:9px;
}

.settingDetail{
    display:flex;
    justify-content: space-between;
    margin-bottom:33px;
}

.editPassword{
    color: #0376DB;
    margin-bottom:33px;
}

.exit{
    color: #878787;
    margin-bottom:21px;
}
</style>
