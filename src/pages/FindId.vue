<template>
  <div class="kContainer">
    <div class="content">
      <div class="title">아이디 찾기</div>
      <div class="label">이름</div>
      <input
        type="text"
        v-model="name"
        class="kInput"
        placeholder="이름을 입력해주세요."
      />
      <div class="label">휴대폰번호</div>
      <input
        type="text"
        v-model="name"
        class="kInput"
        placeholder="예시)01012345678"
      />
      <div class="submitBtn">SNS로 이메일 주소 전송</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.kContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    .title {
      font-weight: 700;
      font-size: 28px;
      line-height: 41px;
      margin-bottom: 24px;
    }
    .label {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 8px;
    }
    .kInput {
      width: 440px;
      outline: none;
      height: 56px;
      border: 1px solid #515151;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 16px;
    }
    .submitBtn {
      width: 440px;
      height: 56px;
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #0376db;
      margin-top: 64px;
      margin-bottom: 250px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
