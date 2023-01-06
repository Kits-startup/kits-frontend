<template>
  <div class="footer">
    <img src="../../../assets/kitsLogo.png" alt="Logo" class="logo" />
    <div class="footerBody">
      <div class="left">
        <div class="line">
          <div class="kBox">상호: 키츠 주식회사</div>
          <div class="kBox">대표: 이종빈</div>
        </div>
        <div class="line">
          <div class="kBox">
            주소: 서울특별시 구로구 디지털로 30길 28 마리오타워 8층 805호
          </div>
        </div>
        <div class="line">
          <div class="kBox">사업자등록번호: 775-81-02469</div>
        </div>
        <div class="line">
          <div class="kBox">Email: kitsmatching@gmail.com</div>
        </div>
      </div>
      <div class="right">
        <div class="snsLogo">
          <a href="https://www.instagram.com/kits_matching/" target="_blank">
            <img
              src="https://t1.daumcdn.net/cfile/tistory/99B6AB485D09F2132A"
              alt="instagram link"
              class="insta"
          /></a>
        </div>
        <div class="snsLogo">
          <a href="https://blog.naver.com/kitsmatching" target="_blank">
            <img
              src="https://mblogthumb-phinf.pstatic.net/MjAyMDA5MjRfMTQ0/MDAxNjAwOTI4MDIxMTQ4.LGGIcSU4FrU6c_-MgA5xerYp1KXlF290JkqaG9uTPskg.MHNU4ycUh0ivOCxgEDo6YWorwOtonE7zwtmJMr1I3RAg.PNG.thdnjs4484/%EB%B8%94%EB%A1%9C%EA%B7%B81.png?type=w800"
              alt="naver blog link"
              class="blog"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  height: 242px;
  padding-top: 40px;
  padding-left: 316px;
  background: #efefef;
  display: flex;
}

.logo {
  margin-bottom: 8px;
  width: 68px;
  height: 30px;
  padding-top: 4px;
}
.footerBody {
  margin-left: 23px;
  width: 1000px;
  display: flex;
  justify-content: space-between;
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

.line {
  display: flex;
}
.kBox {
  margin-right: 10px;
  font-weight: bold;
}
.right {
  margin-right: 150px;
  display: flex;
  flex-direction: column;
  .snsLogo {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}
</style>
