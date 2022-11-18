<template>
  <div class="kContainer">
    <div class="content">
      <div class="title">비밀번호 찾기</div>
      <div class="label">이메일</div>
      <form>
        <input
          type="email"
          v-model="name"
          class="kInput"
          placeholder="이메일을 입력해주세요."
        />
        <input type="submit" class="submitBtn" value="비밀번호 변경 URL 전송" />
      </form>
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
      margin-bottom: 350px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
