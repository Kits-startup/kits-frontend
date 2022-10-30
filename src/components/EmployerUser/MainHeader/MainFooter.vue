<template>
  <div class="footer">
    <img src="../../../assets/kitsLogo.png" alt="Logo" class="logo" />
    <div class="footerBody">
      <div class="oneColumn">
        <div class="title">소개</div>
        <div class="innerText">기업소개</div>
      </div>
      <div class="oneColumn">
        <div class="title">지원</div>
        <div class="innerText">이용약관</div>
        <div class="innerText">개인정보처리방침</div>
      </div>
      <div class="oneColumn">
        <div class="title">LGO</div>
        <div class="innerText">031-1123-1234</div>
        <div class="innerText">asdf@asdf.asdf</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  height: 242px;
  padding-top: 40px;
  padding-left: 316px;
  background: #efefef;
}

.logo {
  margin-bottom: 8px;
}
.footerBody {
  margin-left: 23px;
  display: flex;
  flex-direction: row;
}

.title {
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 10px;
  color: #000000;
}
.innerText {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #505050;
  margin-bottom: 5px;
}

.oneColumn {
  width: 146px;
  display: flex;
  flex-direction: column;
}
</style>
