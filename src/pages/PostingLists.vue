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
          >공고등록일순</b-form-checkbox
        >
        <b-form-checkbox
          id="sort_down"
          v-model="sortOption_down"
          name="down"
          @change="sortOption('down')"
          >공고마감일순</b-form-checkbox
        >
      </div>
    </div>
    <div class="optionContainer">
      <div class="skillSelect" @click="regionSelectModalOn">지역선택</div>
      <div class="skillSelect" @click="regionSelectModalOn">지역선택</div>
      <div class="skillSelect" @click="regionSelectModalOn">지역선택</div>
      <div class="skillSelect" @click="regionSelectModalOn">경력선택</div>
      <div class="searchBtn">검색하기</div>
      <region-modal
        v-if="regionSelectModal"
        @selectTypeTab="selectTypeTab"
        :options="options.regionType"
        :specific="options.specificRegion"
        :tab="region_tab"
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
  specific_region_incheon,
  specific_region_seoul,
  type_region,
} from "@/data/options";
import eachPostingVue from "@/components/mainPage/eachPosting.vue";
import RegionModal from "@/components/selectBox/regionModal.vue";
export default {
  components: {
    eachPostingVue,
    RegionModal,
  },
  data() {
    return {
      options: {
        regionType: type_region,
        specificRegion: {
          seoul: specific_region_seoul,
          incheon: specific_region_incheon,
        },
      },
      regionSelectModal: false,
      region_tab: null,
      region_checkList: [],
      search: "",
      sortOption_up: true,
      sortOption_down: false,
      clickedPage: 1,
    };
  },
  methods: {
    regionSelectModalOn() {
      this.regionSelectModal = !this.regionSelectModal;
    },
    selectTypeTab(type, tab) {
      if (type === "region") {
        this.region_tab = tab;
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
      .sort_up {
        margin-right: 31px;
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
