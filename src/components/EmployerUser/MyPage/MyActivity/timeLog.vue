<template>
  <div>
    <div class="statusTable">
      <v-data-table
        :headers="appliedHeaders"
        :items="timeLog"
        :items-per-page="5"
        class="innerText elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appliedHeaders: [
        {
          text: "채용 공고 제목",
          align: "center",
          sortable: true,
          value: "title",
        },
        { text: "일시", align: "center", value: "date" },
      ],
      timeLog: [
        {
          title: "내 프로필 수정",
          date: "2022.07.07 18:00",
        },
        {
          title: "내 프로필 수정",
          date: "2022.07.07 18:00",
        },
        {
          title: "내 프로필 수정",
          date: "2022.07.07 18:00",
        },
        {
          title: "내 프로필 수정",
          date: "2022.07.07 18:00",
        },
        {
          title: "내 프로필 수정",
          date: "2022.07.07 18:00",
        },
        {
          title: "내 프로필 수정",
          date: "2022.07.07 18:00",
        },
        {
          title: "내 프로필 수정",
          date: "2022.07.07 18:00",
        },
        {
          title: "내 프로필 수정",
          date: "2022.07.07 18:00",
        },
      ],
    };
  },
};
</script>

<style>
.innerText {
  font-size: 18px;
  line-height: 25px;
  color: #515151;
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
</style>
