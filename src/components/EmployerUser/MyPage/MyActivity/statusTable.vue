<template>
  <div>
    <div class="statusTable">
      <v-data-table
        :headers="appliedHeaders"
        :items="applied"
        :items-per-page="10"
        class="innerText"
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
          align: "start",
          sortable: true,
          value: "title",
        },
        { text: "회사명", align: "start", value: "companyName" },
        { text: "공고마감일", align: "start", value: "due" },
        { text: "진행단계", align: "start", value: "step" },
      ],
      applied: [
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.11",
          step: "지원완료",
        },
        {
          title: "FRONT_END 개발자",
          companyName: "KITS",
          due: "2022.1.10",
          step: "서류통과",
        },
        {
          title: "FRONT_END 개발자",
          companyName: "KITS",
          due: "2022.9.10",
          step: "최종합격",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.10",
          step: "지원완료",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.8.10",
          step: "지원완료",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.10",
          step: "지원완료",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.10",
          step: "지원완료",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.10",
          step: "지원완료",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.10",
          step: "지원완료",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.10",
          step: "지원완료",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.10",
          step: "지원완료",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.10",
          step: "지원완료",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.10",
          step: "지원완료",
        },
        {
          title: "BACK_END 개발자",
          companyName: "넷마블",
          due: "2022.9.10",
          step: "지원완료",
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
