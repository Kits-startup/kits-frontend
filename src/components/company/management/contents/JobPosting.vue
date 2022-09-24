<template>
  <div>
    <div class="topContainer">
      <div class="topHeader">
        <div class="topLine">
          <h1 class="title">진행 중인 공고 목록</h1>
          <span class="register" @click="onRegisterClick">+공고 등록</span>
        </div>
        <p class="subline">
          내 기업에서 현재 진행 중인 채용 공고의 리스트를 확인할 수 있습니다.
        </p>
        <div class="searchBox">
          <select-box-vue
            :options="options_position"
            @choose="onSelectReturn"
          />
          <select-box-vue :options="options_job" @choose="onSelectReturn" />
          <div class="search">
            <img src="@/assets/search.png" alt="search icon" />
            <input placeholder="검색어 입력" class="label" />
          </div>
          <div class="searchBtn">검색하기</div>
        </div>
      </div>
    </div>
    <div class="bottomContainer">
      <div class="sortContainer"></div>
      <div class="contentBox">
        <b-table hover :items="items" :fields="fields"></b-table>
      </div>
    </div>
    <div class="paginationBox">
      <div
        class="page"
        :class="{ active: clickedPage === i }"
        v-for="i in 5"
        v-bind:key="i"
        @click="clickPage(i)"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
import SelectBoxVue from "@/components/select/SelectBox.vue";
export default {
  components: {
    SelectBoxVue,
  },
  data() {
    return {
      sel_position: null,
      sel_job: null,
      options_position: [
        { value: null, text: "직군 선택" },
        { value: "developer", text: "개발자" },
        { value: "design", text: "디자이너" },
        { value: "planner", text: "기획자" },
      ],
      options_job: [
        { value: null, text: "직무 선택" },
        { value: "front", text: "프론트엔드" },
        { value: "back", text: "백엔드" },
        { value: "devops", text: "데브 옵스" },
      ],
      clickedPage: 1,
      fields: [
        {
          key: "name",
          label: "공고명",
          sortable: true,
        },
        {
          key: "position",
          name: "직군",
          sortable: true,
        },
        {
          key: "job",
          label: "직무",
          sortable: true,
        },
        {
          key: "date",
          label: "등록일",
          sortable: true,
        },
        {
          key: "update",
          label: "수정일",
          sortable: true,
        },
        {
          key: "state",
          label: "상태변경",
          sortable: false,
        },
      ],
      items: [
        {
          isActive: true,
          name: "KIPER에서 개발자를 모집합니다",
          position: "개발자",
          job: "프론트엔드 개발자",
          date: "2022.02.01",
          update: "2022.02.01 18:00",
          state: "진행 중",
        },
        {
          isActive: true,
          name: "KIPER에서 개발자를 모집합니다",
          position: "개발자",
          job: "프론트엔드 개발자",
          date: "2022.02.01",
          update: "2022.02.01 18:00",
          state: "진행 중",
        },
        {
          isActive: true,
          name: "KIPER에서 개발자를 모집합니다",
          position: "개발자",
          job: "프론트엔드 개발자",
          date: "2022.02.01",
          update: "2022.02.01 18:00",
          state: "진행 중",
        },
        {
          isActive: true,
          name: "KIPER에서 개발자를 모집합니다",
          position: "개발자",
          job: "프론트엔드 개발자",
          date: "2022.02.01",
          update: "2022.02.01 18:00",
          state: "진행 중",
        },
      ],
    };
  },
  methods: {
    clickPage: function (index) {
      console.log(index);
      this.clickedPage = index;
    },
    onRegisterClick() {
      this.$router.push({ name: "Company Recruit Register" });
    },
    onSelectReturn(selected) {
      console.log(selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.topContainer {
  width: 1008px;
  margin-left: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 30px 46px;
  .topLine {
    display: flex;
    font-size: 26px;
    line-height: 35px;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    margin-bottom: 9px;
  }
  .register {
    color: #0376db;
    cursor: pointer;
  }
  .subline {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #515151;
  }
  .searchBox {
    display: flex;
    .search {
      border: 1px solid #0376db;
      border-radius: 3px;
      align-items: center;
      display: flex;
      padding: 12px 20px;
      width: 346px;
      .label {
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        margin-left: 8px;
        outline: none;
      }
      input::placeholder {
        color: #0376db;
      }
    }
    .searchBtn {
      background: #0376db;
      border-radius: 3px;
      color: white;
      cursor: pointer;
      font-size: 15px;
      line-height: 20px;
      display: flex;
      align-items: center;
      margin-left: 8px;
      padding: 0 34px;
    }
  }
}
.paginationBox {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  .page {
    width: 26px;
    height: 26px;
    border: 0.5px solid #e3e6e8;
    border-radius: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    color: #1042f1;
    cursor: pointer;
  }
  .active {
    color: white;
    background-color: #0376db;
  }
}
</style>
