<template>
  <div class="body">
    <div class="oneBody noti">
      <div class="title">공지사항</div>
      <div class="innerText">
        공지사항 입니다. 확인해주시고 다양한 정보를 받아가세요.
        <br />
        공지사항 입니다. 확인해주시고 다양한 정보를 받아가세요.
      </div>
    </div>

    <div class="oneBody jobStatus">
      <div class="title">구직현황</div>
      <div class="statusData innerText">
        <div>지원완료: 1</div>
        <div>서류통과: 2</div>
        <div>최종합격: 3</div>
        <div>불합격: 5</div>
      </div>
      <div class="statusTable">
        <statusTable></statusTable>
      </div>
    </div>

    <div class="oneBody jobStatus">
      <div class="title">관심공고</div>
      <div class="statusTable">
        <statusTable></statusTable>
      </div>
    </div>


    <div class="oneBody jobStatus">
      <div class="title">타임로그</div>
      <div class="statusTable">
        <TimeLog></TimeLog>
      </div>
    </div>
  </div>

  
</template>

<script>
import statusTable from "./statusTable.vue";
import TimeLog from "./timeLog.vue";
export default {
  components: { statusTable, TimeLog },
};
</script>

<style scoped>
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
  font-size: 20px;
  line-height: 27px;
  color: #1f1f1f;
  margin-bottom: 11px;
}

.innerText {
  font-size: 18px;
  line-height: 25px;
  color: #515151;
}

.statusData {
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
}
.statusTable {
  margin-top: 40px;
}

.td{
    text-align: center;
}
</style>
