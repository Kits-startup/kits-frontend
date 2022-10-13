<template>
  <div class="kContainer">
    <div class="title">
      채용 공고 리스트 현황<br />
      현재 진행중인 모든 공고 현황을 확인할 수 있습니다.
    </div>
    <div class="searchKeyword">
      <div class="search">
        <img src="@/assets/search.png" alt="search icon" />
        <input placeholder="검색어 입력" class="label" v-model="search" />
      </div>
      <div class="sortOption">
        <b-form-checkbox
          class="sort_up"
          id="sort_up"
          v-model="sortOption_up"
          name="up"
          @change="sortOption('up')"
          ><div class="kLabel">공고등록일순</div></b-form-checkbox
        >
        <b-form-checkbox
          id="sort_down"
          v-model="sortOption_down"
          name="down"
          @change="sortOption('down')"
          ><div class="kLabel">공고마감일순</div></b-form-checkbox
        >
      </div>
    </div>
    <div class="optionContainer">
      <div class="specificSelect" @click="selectModalOn('region')">
        지역선택
      </div>
      <div class="specificSelect" @click="selectModalOn('job')">직업선택</div>
      <div class="specificSelect" @click="selectModalOn('skill')">기술선택</div>
      <select-box-vue :options="options.spec" @choose="onSelectReturn" />
      <div class="searchBtn">검색하기</div>
      <region-modal
        v-if="modals.region"
        @selectTypeTab="selectTypeTab"
        :options="options.regionType"
        :specific="options.specificRegion"
        :tab="tabs.region"
        @searchOptSend="getSearchOpt"
      />
      <job-modal
        v-if="modals.job"
        @selectTypeTab="selectTypeTab"
        :options="options.jobType"
        :specific="options.specificJob"
        :tab="tabs.job"
        @searchOptSend="getSearchOpt"
      />
      <skill-modal
        v-if="modals.skill"
        @selectTypeTab="selectTypeTab"
        :options="options.jobType"
        :specific="options.specificSkill"
        :tab="tabs.skill"
        @searchOptSend="getSearchOpt"
      />
    </div>
    <div class="contentContainer">
      <b-row>
        <b-col cols="3" v-for="(item, index) in 16" :key="index">
          <each-posting-vue :id="index" />
        </b-col>
      </b-row>
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
  </div>
</template>

<script>
import {
  opt_dev_detail,
  opt_dev_skill,
  opt_dsgn_skill,
  opt_spec,
  opt_type,
  specific_region_incheon,
  specific_region_seoul,
  type_region,
} from "@/data/options";
import eachPostingVue from "@/components/mainPage/eachPosting.vue";
import RegionModal from "@/components/selectBox/regionModal.vue";
import SelectBoxVue from "@/components/select/SelectBox.vue";
import JobModal from "@/components/selectBox/jobModal.vue";
import SkillModal from "@/components/selectBox/skillModal.vue";
export default {
  components: {
    eachPostingVue,
    RegionModal,
    SelectBoxVue,
    JobModal,
    SkillModal,
  },
  data() {
    return {
      options: {
        regionType: type_region,
        specificRegion: {
          seoul: specific_region_seoul,
          incheon: specific_region_incheon,
        },
        jobType: opt_type.slice(1),
        specificJob: {
          dev: opt_dev_detail.slice(1),
          dsgn: opt_dsgn_skill.slice(1),
        },
        specificSkill: {
          dev: opt_dev_skill.slice(1),
          dsgn: opt_dsgn_skill.slice(1),
        },
        spec: opt_spec,
      },
      modals: {
        region: false,
        job: false,
        skill: false,
        spec: false,
      },
      tabs: {
        region: null,
        job: null,
        skill: null,
      },
      checkLists: {
        region: [],
        job: [],
        skill: [],
        spec: null,
      },
      search: "",
      sortOption_up: true,
      sortOption_down: false,
      clickedPage: 1,
      jobSelectModal: false,
    };
  },
  methods: {
    selectModalOn(element) {
      if (element === "region") {
        this.modals.region = !this.modals.region;
        this.modals.job = false;
        this.modals.skill = false;
      } else if (element === "job") {
        this.modals.job = !this.modals.job;
        this.modals.region = false;
        this.modals.skill = false;
      } else if (element === "skill") {
        this.modals.skill = !this.modals.skill;
        this.modals.region = false;
        this.modals.job = false;
      }
    },
    selectTypeTab(type, tab) {
      if (type === "region") {
        this.tabs.region = tab;
      } else if (type === "job") {
        this.tabs.job = tab;
      } else if (type === "skill") {
        this.tabs.skill = tab;
      }
    },
    clickPage: function (index) {
      console.log(index);
      this.clickedPage = index;
    },
    sortOption(option) {
      option === "up"
        ? (this.sortOption_down = false)
        : (this.sortOption_up = false);
    },
    getSearchOpt(type, lists) {
      console.log(type, ":");
      console.log(lists);
      if (type === "region") {
        this.checkLists.region = lists;
      } else if (type === "job") {
        this.checkLists.job = lists;
      }
    },
    onSelectReturn(selected) {
      console.log(selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.kContainer {
  width: 1300px;
  margin: auto;
  .title {
    font-size: 40px;
    line-height: 54px;
    color: #515151;
  }
  .searchKeyword {
    display: flex;
    margin-top: 57px;
    justify-content: space-between;
    align-items: center;
    .sortOption {
      display: flex;
      align-items: center;
      .sort_up {
        margin-right: 31px;
      }
      .kLabel {
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
      }
    }
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
    padding: 18px 34px;
    height: max-content;
  }
  .optionContainer {
    margin-top: 24px;
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 81px;
    .specificSelect {
      width: 200px;
      padding: 15px;
      border: 1px solid #0376db;
      border-radius: 3px;
      margin: 5px;
      margin-left: 0;
      background: #fff
        url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%275%27 viewBox=%270 0 4 5%27%3e%3cpath fill=%27%23343a40%27 d=%27M2 0L0 2h4zm0 5L0 3h4z%27/%3e%3c/svg%3e")
        right 0.75rem center/8px 10px no-repeat;
      cursor: default;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      height: 57px;
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
}
</style>
