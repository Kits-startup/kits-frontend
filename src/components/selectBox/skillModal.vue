<template>
  <div class="skillSelectModal">
    <div class="frequent">
      <div class="top">
        <div class="title">자주 찾는 기술스택</div>
        <div class="X" style="cursor: pointer" @click="$emit('close')">X</div>
      </div>
      <div class="examples">
        <span>Java</span><span>Node</span><span>React</span>
      </div>
    </div>
    <div class="mainSelect">
      <div class="leftTab">
        <div
          class="eachTab"
          v-for="(item, idx) in options"
          :key="idx"
          @click="changeTab(item.value)"
          :class="tab === item.value ? 'active' : null"
        >
          {{ item.text }}
        </div>
      </div>
      <div class="rightContent">
        <div class="topSelectAll">
          <b-form-checkbox
            id="checkAll"
            v-model="checkAll"
            @change="selectAll(checkAll)"
            name="checkAll"
            >전체 선택</b-form-checkbox
          >
        </div>
        <div class="selectBox">
          <div class="label">기술 스택</div>
          <b-form-checkbox-group
            id="job-type"
            v-model="checkList"
            name="job-type"
            @change="getChange"
          >
            <b-row>
              <b-col cols="4" v-for="(item, idx) in specific[tab]" :key="idx"
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
          <span class="blueX" @click="deleteList(item)" @change="getChange"
            >X</span
          >
        </div>
      </div>
      <div class="reset" @click="selectAll(false)">
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
</template>

<script>
export default {
  data() {
    return {
      checkAll: false,
      checkList: [],
    };
  },
  props: {
    options: Array,
    specific: Object,
    tab: String,
    selectTypeTab: Function,
    searchOptSend: Function,
    close: Function,
  },
  methods: {
    selectAll(checkAll) {
      this.checkList = checkAll
        ? this.specific[this.tab].map((e) => e.value)
        : [];
      if (checkAll === false) {
        this.checkAll == false;
      }
    },
    getChange(e) {
      this.$emit("searchOptSend", "skill", this.checkList);
    },
    changeTab(value) {
      this.$emit("selectTypeTab", "skill", value);
      this.checkList = [];
      this.checkAll = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.skillSelectModal {
  position: absolute;
  top: 70px;
  left: 410px;
  border: 1px solid #0376db;
  width: 888px;
  background: white;
  z-index: 10;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  height: 472px;
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
      width: 277px;
      border-right: #0376db 1px solid;
      height: 100%;
      overflow-y: auto;
      .eachTab {
        height: 20%;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
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
      height: 100%;
      .topSelectAll {
        display: flex;
        padding: 20px 10px;
        border-bottom: #0376db 1px solid;
        justify-content: space-between;
        width: 100%;
        .checkAll {
          margin-left: 30px;
        }
      }
      .selectBox {
        padding-top: 11px;
        padding-left: 38px;
        overflow-y: auto;
        overflow-x: hidden;
        height: 220px;
        .kCol {
          display: flex;
          justify-content: center;
        }
        .label {
          font-size: 20px;
          line-height: 27px;
          margin-bottom: 18px;
        }
        .eachSkill {
          margin-bottom: 18px;
        }
      }
    }
  }
  .bottomSelected {
    display: flex;
    padding-left: 30px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 58px;
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
</style>
