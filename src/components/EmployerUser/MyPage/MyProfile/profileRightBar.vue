<template>
  <div class="body">
    <div class="title">내 프로필 완성도</div>
    <div class="percent">70%</div>
    <div class="bar">
      <div class="gray">
        <div class="blue"></div>
      </div>
    </div>
    <div class="checkList">
      <div class="oneCheck">
        <img src="../../../../assets/onlyCheck.svg" alt="V" />
        <div class="text">경력</div>
      </div>
      <div class="oneCheck">
        <img src="../../../../assets/onlyCheck.svg" alt="V" />
        <div class="text">학력</div>
      </div>
      <div class="oneCheck">
        <img src="../../../../assets/onlyCheck.svg" alt="V" />
        <div class="text">기술</div>
      </div>
      <div class="oneCheck">
        <img src="../../../../assets/onlyCheck.svg" alt="V" />
        <div class="text">기술</div>
      </div>
      <div class="oneCheck">
        <img src="../../../../assets/onlyCheck.svg" alt="V" />
        <div class="text">기술</div>
      </div>
      <div class="oneCheck">
        <img src="../../../../assets/onlyCheck.svg" alt="V" />
        <div class="text">기술</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.18);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 27px 27px 30px 27px;
  width: 270px;
  border: 1px solid #0376db;
}

.title {
  font-size: 16px;
  line-height: 160%;
}

.percent {
  font-size: 24px;
  line-height: 160%;
}
.gray {
  position: relative;
  height: 8px;
  background: #d9d9d9;
  margin-bottom: 22px;
}

.blue {
  width: 70%;
  height: 8px;
  background: #0376db;
}
.oneCheck {
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
}
.text {
    margin-left:11px;
  font-size: 16px;
  line-height: 160%;
}
</style>
