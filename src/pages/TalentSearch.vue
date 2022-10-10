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
      <!-- <select-box-vue :options="options.skill" @choose="onSelectReturn" /> -->
      <div class="skillSelect" @click="skillSelectModalOn">기술선택</div>
      <select-box-vue :options="options.spec" @choose="onSelectReturn" />
      <select-box-vue :options="options.academy" @choose="onSelectReturn" />
      <select-box-vue :options="options.mbti" @choose="onSelectReturn" />
      <div class="skillSelectModal" v-if="skillSelectModal">
        <div class="frequent">
          <div class="top">
            <div class="title">자주 찾는 기술스택</div>
            <div class="X" style="cursor: pointer" @click="skillSelectModalOn">
              X
            </div>
          </div>
          <div class="examples">
            <span>Java</span><span>Node</span><span>React</span>
          </div>
        </div>
        <div class="mainSelect">
          <div class="leftTab">
            <div
              class="eachTab"
              v-for="(item, idx) in options.type.slice(1)"
              :key="idx"
              @click="selectTypeTab(item.value)"
              :class="type_tab === item.value ? 'active' : null"
            >
              {{ item.text }}
            </div>
          </div>
          <div class="rightContent">
            <div class="topSelectAll">
              <b-form-checkbox
                id="checkAll"
                v-model="checkAll"
                @change="selectAll"
                name="checkAll"
                >개발 전체 선택</b-form-checkbox
              >
            </div>
            <div class="selectBox">
              <div class="label">기술스택</div>
              <b-form-checkbox-group
                id="checkbox-group-1"
                v-model="checkList"
                name="flavour-1"
              >
                <b-row>
                  <b-col
                    cols="4"
                    v-for="(item, idx) in options.skill[type_tab]"
                    :key="idx"
                    ><b-form-checkbox
                      :id="item.value"
                      :name="item.value"
                      class="eachSkill"
                      :value="item.value"
                      v-if="item.value != null"
                      >{{ item.text }}</b-form-checkbox
                    ></b-col
                  >
                </b-row>
              </b-form-checkbox-group>
            </div>
          </div>
        </div>
        <div class="bottomSelected">
          <div class="selection">
            <div v-for="(item, idx) in checkList" :key="idx" class="box">
              <span class="keyword">{{ item }}</span>
              <span class="blueX" @click="deleteList(item)">X</span>
            </div>
          </div>
          <div class="reset" @click="reset">
            선택초기화<svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_889_7365)">
                <path
                  d="M10.3697 5.20365C9.34259 4.17656 7.93301 3.53906 6.36759 3.53906C3.23676 3.53906 0.708008 6.0749 0.708008 9.20573C0.708008 12.3366 3.23676 14.8724 6.36759 14.8724C9.00968 14.8724 11.2126 13.0661 11.843 10.6224H10.3697C9.78884 12.2728 8.21634 13.4557 6.36759 13.4557C4.02301 13.4557 2.11759 11.5503 2.11759 9.20573C2.11759 6.86115 4.02301 4.95573 6.36759 4.95573C7.54342 4.95573 8.59176 5.44448 9.35676 6.21656L7.07592 8.4974H12.0343V3.53906L10.3697 5.20365Z"
                  fill="#515151"
                />
              </g>
              <defs>
                <clipPath id="clip0_889_7365">
                  <rect width="17" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
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
  dev_skill,
  dsgn_skill,
  opt_academy,
  opt_mbti,
  opt_name,
  opt_spec,
  opt_type,
} from "@/data/options";
import EachPersonVue from "@/components/company/applicant/EachPerson.vue";
import TabBar_largeVue from "@/components/company/applicant/TabBar_large.vue";
import AboutTalentPersonVue from "@/components/modal/AboutTalentPerson.vue";
import { getCoins } from "@/components/api/api.js";
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
        skill: { dev: dev_skill, dsgn: dsgn_skill },
        type: opt_type,
      },
      examPerson: {
        name: "이종빈",
        location: ["한국", "경기"],
        recent_spec: "KIPER 백엔드 팀장",
        academy: "서울대학교 경영학과",
      },
      clickedPage: 1,
      modalVisible: false,
      skillSelectModal: false,
      type_tab: null,
      checkAll: false,
      checkList: [],
      coin_name: [],
    };
  },
  mounted() {
    console.log("hi");
    getCoins().then((res) => {
      console.log(res.data);
      this.coin_name = res.data.slice(0, 100);
    });
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
    skillSelectModalOn() {
      this.skillSelectModal = !this.skillSelectModal;
    },
    selectTypeTab(type) {
      this.type_tab = type;
    },
    selectSkill(value) {
      this.checkList.append(value);
    },
    selectAll() {
      if (this.checkAll) {
        console.log("select all");
        this.checkList = this.options.skill[this.type_tab].map((e) => e.value);
        console.log(this.options.skill[this.type_tab].map((e) => e.value));
      } else {
        this.checkList = [];
      }
    },
    deleteList(item) {
      this.checkList.filter((e) => e != item);
    },
    reset() {
      this.checkList = [];
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
  position: relative;
  .skillSelect {
    padding: 15px;
    border: 1px solid #0376db;
    border-radius: 3px;
    margin: 5px;
    margin-left: 0;
    width: 150px;
    background: #fff
      url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%275%27 viewBox=%270 0 4 5%27%3e%3cpath fill=%27%23343a40%27 d=%27M2 0L0 2h4zm0 5L0 3h4z%27/%3e%3c/svg%3e")
      right 0.75rem center/8px 10px no-repeat;
    cursor: default;
  }
  .skillSelectModal {
    position: absolute;
    top: 80px;
    left: 205px;
    border: 1px solid #0376db;
    width: 788px;
    min-height: 472px;
    background: white;
    z-index: 10;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    .frequent {
      padding: 24px 30px;
      border-bottom: 1px solid #0376db;
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 23px;
        .title {
          font-size: 22px;
          line-height: 30px;
        }
      }
      .examples {
        display: flex;
        span {
          color: white;
          background: #0376db;
          padding: 5px 20px;
          margin-right: 10px;
          border-radius: 3px;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
    .mainSelect {
      display: flex;
      height: 280px;
      border-bottom: 1px solid #0376db;
      .leftTab {
        width: 18%;
        border-right: #0376db 1px solid;
        height: 100%;
        .eachTab {
          font-weight: 400;
          font-size: 20px;
          line-height: 27px;
          height: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .eachTab:hover {
          background: #ebf5fd;
        }
        .active {
          background: #e1f1ff;
        }
      }
      .rightContent {
        width: 100%;
        .topSelectAll {
          display: flex;
          padding: 20px 10px;
          border-bottom: #0376db 1px solid;
          width: 100%;
          #checkAll {
          }
        }
        .selectBox {
          padding-left: 38px;
          padding-top: 11px;
          overflow-y: auto;
          height: 215px;
          .label {
            font-size: 20px;
            line-height: 27px;
            margin-bottom: 18px;
          }
          .eachSkill {
            margin-bottom: 18px;
          }
        }
        .selectBox::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .bottomSelected {
      display: flex;
      padding-left: 30px;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .selection {
        display: flex;
        overflow-y: scroll;
        flex-wrap: wrap;
        width: 650px;
        height: 60px;
      }
      .selection::-webkit-scrollbar {
        display: none;
      }
      .box {
        display: flex;
        align-items: center;
        margin-right: 37px;
        .keyword {
          font-weight: 400;
          font-size: 15px;
          line-height: 27px;
          margin-right: 11px;
        }
        .blueX {
          color: #0376db;
          cursor: pointer;
        }
      }
      .reset {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #515151;
        display: flex;
        cursor: pointer;
        svg {
          margin-left: 5px;
        }
      }
    }
  }
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
