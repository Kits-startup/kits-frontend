<template>
  <div style="width: 1296px; margin: auto">
    <about-talent-person-vue v-if="modalVisible" @close="closeModal" />
    <h1 style="font-size: 40px; line-height: 54px; margin-bottom: 90px">
      인재풀검색<br />
      현재 구직중인 인재들의 프로필을 확인하고 면접 제인을 할 수 있습니다.
    </h1>
    <TabBar_largeVue
      @clickTab="clickTab"
      :tabList="tabList"
      :tab_now="tab_now"
    />
    <div class="searchKeyword">
      <div class="search">
        <img src="@/assets/search.png" alt="search icon" />
        <input placeholder="검색어 입력" class="label" v-model="search" />
      </div>
      <div class="searchBtn">검색하기</div>
    </div>
    <div class="optionContainer">
      <select-box-vue :options="options.name" @choose="onSelectReturn" />
      <select-box-vue :options="options.skill" @choose="onSelectReturn" />
      <select-box-vue :options="options.spec" @choose="onSelectReturn" />
      <select-box-vue :options="options.academy" @choose="onSelectReturn" />
      <select-box-vue :options="options.mbti" @choose="onSelectReturn" />
    </div>
    <div class="content">
      <b-row>
        <b-col cols="3" v-for="item in 15" :key="item"
          ><each-person-vue :data="examPerson" @click="showPersonModal"
        /></b-col>
      </b-row>
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
import {
  opt_academy,
  opt_dev_skill,
  opt_mbti,
  opt_name,
  opt_spec,
} from "@/data/options";
import EachPersonVue from "@/components/company/applicant/EachPerson.vue";
import TabBar_largeVue from "@/components/company/applicant/TabBar_large.vue";
import AboutTalentPersonVue from "@/components/modal/AboutTalentPerson.vue";
export default {
  name: "talent_search",
  components: {
    SelectBoxVue,
    EachPersonVue,
    TabBar_largeVue,
    AboutTalentPersonVue,
  },
  data() {
    return {
      tabList: [
        { label: "전체", key: "all" },
        { label: "신규", key: "new" },
        { label: "열람목록", key: "viewed" },
        { label: "관심지원자", key: "interest" },
        { label: "면접제안", key: "suggest_meeting" },
        { label: "최종합격", key: "final" },
      ],
      tab_now: "all",
      search: "",
      options: {
        name: opt_name,
        spec: opt_spec,
        academy: opt_academy,
        mbti: opt_mbti,
        skill: opt_dev_skill,
      },
      examPerson: {
        name: "이종빈",
        location: ["한국", "경기"],
        recent_spec: "KIPER 백엔드 팀장",
        academy: "서울대학교 경영학과",
      },
      clickedPage: 1,
      modalVisible: false,
    };
  },
  methods: {
    clickTab(param) {
      console.log(param);
      this.tab_now = param;
    },
    onSelectReturn(param) {
      console.log(param);
    },
    clickPage(i) {
      this.clickedPage = i;
    },
    showPersonModal() {
      console.log("click!");
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.searchKeyword {
  display: flex;
  margin-top: 57px;
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
.optionContainer {
  margin-top: 24px;
  display: flex;
}
.content {
  margin-top: 86px;
}
.paginationBox {
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
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
