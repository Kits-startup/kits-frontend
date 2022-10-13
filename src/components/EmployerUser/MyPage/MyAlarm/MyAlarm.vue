<template>
  <div>
    <div class="oneBody">
      <div class="title">알림 현황</div>
      <div class="statusTable" id="alarmWrapper">
        <v-data-table
          :headers="appliedHeaders"
          :items="timeLog"
          :items-per-page="5"
          class="innerText elevation-1"
        ></v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appliedHeaders: [
        {
          text: "알림",
          align: "center",
          sortable: true,
          value: "title",
        },
        { text: "일시", align: "center", value: "date" },
      ],
      timeLog: [
        {
          title: "네이버클라우드에 서류합격 하셨습니다.",
          date: "2022.07.07 18:00",
        },
        {
          title: "네이버클라우드에 서류합격 하셨습니다.",
          date: "2022.07.07 18:00",
        },
        {
          title: "네이버클라우드에 서류합격 하셨습니다.",
          date: "2022.07.07 18:00",
        },
        {
          title: "네이버클라우드에 서류합격 하셨습니다.",
          date: "2022.07.07 18:00",
        },
        {
          title: "네이버클라우드에 서류합격 하셨습니다.",
          date: "2022.07.07 18:00",
        },
        {
          title: "네이버클라우드에 서류합격 하셨습니다.",
          date: "2022.07.07 18:00",
        },
        {
          title: "네이버클라우드에 서류합격 하셨습니다.",
          date: "2022.07.07 18:00",
        },
        {
          title: "네이버클라우드에 서류합격 하셨습니다.",
          date: "2022.07.07 18:00",
        },
      ],
    };
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


table thead th {
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 22px !important;
  color: #000000 !important;
}
.v-data-table-header {
  background-color: #ededee;
}
.v-data-footer {
  float: right;
  /* justify-content: space-around; */
  justify-content: flex-end;
}

.v-select__slot {
  margin-left: 10px;
}

#alarmWrapper{
  margin-bottom:30px;
}
</style>
