<template>
  <div>
    <div class="kContainer">
      <div class="leftCat">
        <div class="title">직군 카테고리 관리 (총 500개)</div>
        <div class="contentBox">
          <div class="topBtns">
            <div class="catAdd">+ 카테고리 추가하기</div>
            <div class="delete">삭제</div>
          </div>
          <div class="label">
            <span>메인 카테고리</span>
            <b-form-select class="option" v-model="type" :options="options" />
          </div>
          <div class="lists">
            <div
              class="eachList"
              v-for="item in 15"
              :key="item"
              @click="setClicked('left', item)"
              :class="clicked_left === item ? 'clicked' : ''"
            >
              카테고리
            </div>
          </div>
        </div>
        <div class="bottomOrder">
          <div class="up arrow">▲</div>
          <div class="down arrow">▼</div>
          <span>카테고리 노출 순서 설정</span>
        </div>
      </div>
      <div class="rightCat">
        <div class="title">직무 카테고리 관리 (총 500개)</div>
        <div class="contentBox">
          <div class="topBtns">
            <div class="catAdd">+ 카테고리 추가하기</div>
            <div class="delete">삭제</div>
          </div>
          <div class="label">
            <span>메인 카테고리</span>
            <b-form-select class="option" v-model="type" :options="options" />
          </div>
          <div class="lists">
            <div
              class="eachList"
              v-for="item in 15"
              :key="item"
              @click="setClicked('right', item)"
              :class="clicked_right === item ? 'clicked' : ''"
            >
              카테고리
            </div>
          </div>
        </div>
        <div class="bottomOrder">
          <div class="up arrow">▲</div>
          <div class="down arrow">▼</div>
          <span>카테고리 노출 순서 설정</span>
        </div>
      </div>
    </div>
    <div class="btnContainer">
      <div class="kBtn edit">수정</div>
      <div class="kBtn save">저장</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{ value: null, text: "전체" }],
      type: null,
      clicked_right: null,
      clicked_left: null,
    };
  },
  methods: {
    setClicked(position, item) {
      position === "right"
        ? (this.clicked_right = item)
        : (this.clicked_left = item);
    },
  },
};
</script>

<style lang="scss" scoped>
.kContainer {
  display: flex;
  margin-top: 54px;
  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 17px;
  }
  .contentBox {
    border: 1px solid #b7b7b7;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.66);
    border-radius: 10px;
    width: 517px;
    height: 553px;
    .topBtns {
      display: flex;
      padding-left: 14px;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      margin: 15px 0;
      .catAdd {
        width: 206px;
        height: 57px;
        color: #0376db;
        border: 1px solid #0376db;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .delete {
        color: white;
        background: #0376db;
        width: 109px;
        height: 57px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .label {
      display: flex;
      justify-content: space-between;
      background: #f6f6f6;
      padding: 15px;
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
      color: #515151;
      align-items: center;
      .option {
        width: 100px;
      }
    }
    .lists {
      overflow-y: auto;
      height: 395px;
    }
    .eachList {
      padding: 5px 0;
      padding-left: 18px;
      height: 55px;
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
      display: flex;
      align-items: center;
      color: #878787;
      &:hover {
        background: #e3f1fd;
      }
      &:last-child {
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }
    .clicked {
      background: #c5def5;
    }
  }
  .bottomOrder {
    display: flex;
    margin-top: 34px;
    align-items: center;
    span {
      margin-left: 34px;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: #515151;
    }
    .arrow {
      cursor: pointer;
      width: 50px;
      height: 50px;
      background: #d9d9d9;
      justify-content: center;
      align-items: center;
      display: flex;
      margin-right: 8px;
    }
  }
  .leftCat {
  }
  .rightCat {
    margin-left: 200px;
  }
}
.btnContainer {
  display: flex;
  justify-content: flex-end;
  margin: 50px 0;
  .kBtn {
    width: 151px;
    height: 57px;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #fafafa;
    background: #0376db;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    cursor: pointer;
  }
  .edit {
    color: #0376db;
    background: white;
    border: 1px solid #0376db;
  }
}
</style>
