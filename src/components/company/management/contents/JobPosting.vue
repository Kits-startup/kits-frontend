<template>
  <div>
    <div class="topContainer">
      <div class="topHeader">
        <div class="topLine">
          <h1 class="title">{{ title[mode] }}</h1>
          <span class="register" @click="onRegisterClick">+공고 등록</span>
        </div>
        <p class="subline">
          내 기업에서 {{ subline[mode] }} 채용 공고의 리스트를 확인할 수
          있습니다.
        </p>
        <div class="searchBox">
          <select-box-vue
            :options="options_position"
            @choose="onSelectJobReturn"
          />
          <select-box-vue :options="options_job" @choose="onSelectReturn" />
          <div class="search">
            <img src="@/assets/search.png" alt="search icon" />
            <input placeholder="검색어 입력" class="label" />
          </div>
          <div class="searchBtn">검색하기</div>
        </div>
      </div>
      <div class="bottomContainer">
        <table class="kTable">
          <th
            v-for="(item, idx) in field1"
            :key="'field1' + idx"
            :class="item.key"
          >
            {{ item.label
            }}<svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="black" />
            </svg>
          </th>
          <th v-if="mode === 'in-progress'" class="date">
            등록일<svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="black" />
            </svg>
          </th>
          <th
            v-for="(item, idx) in field2"
            :key="'field2' + idx"
            :class="item.key"
          >
            {{ item.label
            }}<svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="black" />
            </svg>
          </th>
          <tr v-for="(item, idx) in items" :key="idx">
            <td class="name">
              <div class="tData">{{ item.name }}</div>
            </td>
            <td class="position">
              <div class="tData">{{ item.position }}</div>
            </td>
            <td class="job">
              <div class="tData">{{ item.job }}</div>
            </td>
            <td class="date" v-if="mode === 'in-progress'">
              <div class="tData">{{ item.date }}</div>
            </td>
            <td class="update">
              <div class="tData">{{ item.update }}</div>
            </td>
            <td class="state" v-if="mode === 'in-progress'">
              <div class="tData stateChange" @click="clickStateChange(idx)">
                {{ item.state
                }}<svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  :class="changeStateModal === idx ? 'rotate' : null"
                >
                  <path
                    d="M1.09188 0.856026L7.80394e-08 2.02606L6.10714 8.57031L12.2143 2.02606L11.1224 0.856026L6.10714 6.23025L1.09188 0.856026Z"
                    fill="#878787"
                  />
                </svg>
              </div>
              <div
                class="tData stateChange option"
                @click="changeToFin(idx)"
                v-if="changeStateModal === idx"
              >
                마감
              </div>
              <div v-if="checkStateChange == idx" class="checkModal">
                <img src="@/assets/warning.png" alt="" />
                <div>해당 공고를 마감시키겠습니까?</div>
                <div class="btnContainer">
                  <div class="left checkBtn" @click="changeBtnClicked">예</div>
                  <div class="right checkBtn" @click="changeBtnClicked">
                    아니오
                  </div>
                </div>
              </div>
            </td>
            <td class="state" v-if="mode !== 'in-progress'">
              <div class="stateBtn" @click="stateBtnClicked">
                {{ mode === "finish" ? "지원자관리" : "수정 및 등록" }}
              </div>
            </td>
          </tr>
        </table>
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
import { getJobs, getJobTypes } from "@/components/api/static";
import { field, table_items } from "@/data/options";
export default {
  components: {
    SelectBoxVue,
  },
  data() {
    return {
      sel_position: null,
      sel_job: null,
      options_position: [{ value: null, text: "직군 선택" }],
      options_job: [{ value: null, text: "직무 선택" }],
      mode: "in-progress",
      clickedPage: 1,
      field1: field.slice(0, 3),
      field2: field.slice(3),
      items: table_items,
      changeStateModal: null,
      checkStateChange: null,
      title: {
        "in-progress": "진행중인 공고목록",
        finish: "마감된 공고목록",
        temp: "임시보관함",
      },
      subline: {
        "in-progress": "진행 중인",
        finish: "마감된",
        temp: "임시 보관 중인",
      },
      options_jobTypes_All: [],
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
    onSelectJobReturn(selected) {
      console.log(selected);
      this.switchJobId(selected);
    },
    onSelectReturn(selected) {
      console.log(selected);
    },
    clickStateChange(idx) {
      if (this.changeStateModal == idx) this.changeStateModal = null;
      else this.changeStateModal = idx;
    },
    changeToFin(idx) {
      console.log(idx);
      this.checkStateChange = idx;
    },
    changeBtnClicked() {
      this.checkStateChange = null;
      this.changeStateModal = null;
    },
    stateBtnClicked() {
      if (this.mode === "finish") {
        this.$router.push("/company_applier_management");
      } else {
        this.onRegisterClick();
      }
    },
    switchJobId(value) {
      let newArr = [];
      this.options_jobTypes_All.map((e) =>
        e.job_id == value ? newArr.push(e) : null
      );
      console.log(newArr);
      this.options_job = [this.options_job[0], ...newArr];
    },
  },
  watch: {
    $route(to) {
      this.mode = to.params.subtab;
    },
  },
  mounted() {
    const route = this.$router.currentRoute.path.split("/");
    this.mode = route[3];
    getJobs().then((res) => {
      console.log(res.data);
      this.options_position = [...this.options_position, ...res.data];
    });
    getJobTypes().then((res) => {
      console.log(res.data);
      this.options_jobTypes_All = res.data;
    });
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
  .topHeader {
    flex-direction: column;
  }
  .topLine {
    display: flex;
    font-size: 26px;
    line-height: 35px;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    margin-bottom: 9px;
    font-weight: 500;
    font-size: 26px;
    line-height: 35px;
  }
  .register {
    color: #0376db;
    cursor: pointer;
    font-size: 18px;
    line-height: 25px;
  }
  .subline {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #515151;
  }
  .searchBox {
    display: flex;
    align-items: center;
    .search {
      border: 1px solid #0376db;
      border-radius: 3px;
      align-items: center;
      display: flex;
      padding: 12px 20px;
      width: 346px;
      height: 57px;
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
      padding: 10px 34px;
      height: 57px;
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
.kTable {
  width: 100%;
  text-align: center;
  margin-top: 33px;

  th {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #515151;
    height: 30px;
  }
  tr {
    height: 70px;
  }
  .tData {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    max-width: 170px;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #515151;
  }
  .name {
    width: 120px;
  }
  .position {
    width: 70px;
  }
  .job {
    width: 120px;
  }
  .date {
    width: 80px;
  }
  .update {
    width: 120px;
  }
  .state {
    width: 100px;
    position: relative;
    .stateBtn {
      background: #0376db;
      border-radius: 3px;
      color: white;
      padding: 10px 0;
      font-size: 16px;
      line-height: 22px;
      width: 124px;
      margin: auto;
      cursor: pointer;
    }
  }
  .stateChange {
    width: 80px;
    margin: auto;
    padding: 5px 0;
    font-size: 12px;
    color: black;
    border: 0.642857px solid #0376db;
    border-radius: 1.92857px;
    cursor: pointer;
    svg {
      margin-left: 7px;
    }
    .rotate {
      transform: rotate(180deg);
    }
  }
  .option {
    border-top: 0px;
  }
  .checkModal {
    position: absolute;
    top: 0px;
    left: 120px;
    border: 1px solid red;
    width: 230px;
    background: white;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    border: 1px solid #0376db;
    box-shadow: 0px 4px 25px 1px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 15px 25px;
    img {
      width: 20px;
      height: 20px;
    }
    .btnContainer {
      margin-top: 16px;
      display: flex;
      justify-content: center;
      .checkBtn {
        width: 60px;
        text-align: center;
        border: 1.67287px solid #0376db;
        border-radius: 5.0186px;
        margin: 0 10px;
        padding: 5px;
        color: #515151;
        cursor: pointer;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
}
</style>
