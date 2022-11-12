<template>
  <div>
    <div class="eachQnA" v-if="num">
      •문의 정보
      <div class="table">
        <div class="eachLine">
          <div class="label">답변상태</div>
          <div class="content">{{ detailData.state }}</div>
        </div>
        <div class="eachLine">
          <div class="label">제목</div>
          <div class="content">
            {{ detailData.title }}
          </div>
        </div>
        <div class="eachLine">
          <div class="label">문의유형</div>
          <div class="content">탈퇴문의</div>
        </div>
        <div class="eachLine">
          <div class="label">이메일</div>
          <div class="content">
            {{ detailData.mail }}
          </div>
        </div>
        <div class="eachLine">
          <div class="label">등록일</div>
          <div class="content">
            {{ detailData.register_date }}
          </div>
        </div>
        <div class="eachLine">
          <div class="label">이미지</div>
          <div class="content">
            <span style="text-decoration: underline">이미지.jpeg</span>
          </div>
        </div>
        <div class="eachLine">
          <div class="label">내용</div>
          <div class="content">
            {{ detailData.title }}
          </div>
        </div>
      </div>
      <div class="bottomBtnContainer" v-if="!answerMode">
        <div class="kTbn answer" @click="answerQna">답변하기</div>
        <div class="kTbn cancle" @click="goBack">목록</div>
      </div>
      <div class="answerModeOpen" v-if="answerMode">
        •답변하기
        <div class="answerTable table">
          <div class="eachLine">
            <div class="label">제목</div>
            <div class="content">
              <input
                type="text"
                class="kInput"
                v-model="title"
                placeholder="제목입력"
              />
            </div>
          </div>
          <div class="eachLine">
            <div class="label">관리자</div>
            <div class="content">관리자123</div>
          </div>
          <div class="eachLine">
            <div class="label">내용</div>
            <div class="content">
              <textarea
                rows="5"
                class="kTextarea"
                placeholder="내용 입력"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="bottomBtnContainer">
          <div class="kTbn answer">등록하기</div>
          <div class="kTbn cancle">취소</div>
        </div>
      </div>
    </div>
    <div class="qnaList" v-else>
      <search-option-box-qn-a />
      총 123,455 명의 사용자가 있습니다.
      <b-table
        class="noticeList"
        hover
        :items="items"
        :fields="fields"
        @row-clicked="goDetail"
      >
        <template #cell(title)="data">
          <div
            style="
              width: 200px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              display: block;
            "
          >
            {{ data.value }}
          </div>
        </template>
        <template #cell(check)="data">
          <b-check size="sm" class="mr-1" :value="data.value"></b-check>
        </template>
        <template #cell(detail)="data">
          <div style="text-decoration: underline" @click="gotoLink(data.value)">
            상세보기
          </div>
        </template>
      </b-table>
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
import { field_QnA } from "@/data/tableFieldData";
import searchOptionBoxQnA from "../../search/searchOptionBoxQnA.vue";
import { ex_QnA } from "@/data/tableExData";
export default {
  components: { searchOptionBoxQnA },
  data() {
    return {
      tab: null,
      items: ex_QnA,
      fields: field_QnA,
      clickedPage: 1,
      num: null,
      detailData: null,
      answerMode: false,
    };
  },
  methods: {
    setTab() {
      console.log("change!");
      const url = this.$route.fullPath.split("/");
      console.log(url.slice(-1));
      this.tab = url.slice(-1)[0];
    },
    clickPage: function (index) {
      this.clickedPage = index;
    },
    goDetail: function (item) {
      const num = item.num;
      console.log(num);
      this.$router.push(`?num=${num}`);
    },
    setDetail() {
      const url = this.$route.fullPath.split("?num=");
      this.num = url[1];
      if (this.num) {
        this.detailData = ex_QnA.filter(
          (data) => data.num == Number(this.num)
        )[0];
        console.log(this.detailData);
      }
    },
    answerQna() {
      this.answerMode = true;
    },
    goBack() {
      this.$router.push(-1);
      this.answerMode = false;
    },
  },
  mounted() {
    this.setTab();
    this.setDetail();
  },
  watch: {
    $route() {
      this.setTab();
      this.setDetail();
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  border-top: 1px solid #d9d9d9;
  margin-top: 20px;
  .eachLine {
    display: flex;
    border-bottom: 1px solid #d9d9d9;
  }
  .label {
    width: 204px;
    min-height: 55px;
    background: #ededee;
    display: flex;
    padding-left: 30px;
    align-items: center;
  }
  .content {
    width: 1000px;
    display: flex;
    display: flex;
    padding-left: 18px;
    align-items: center;
  }
  .kInput {
    border: 1px solid #b7b7b7;
    outline: none;
    padding: 5px;
    width: 400px;
    height: 36px;
  }
  .length {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #878787;
    margin-left: 4px;
  }
  .fileBtn {
    width: 106px;
    height: 36px;
    color: white;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    background: #0376db;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .kTextarea {
    border: 1px solid #b7b7b7;
    outline: none;
    padding: 5px;
    width: 90%;
    height: 90%;
    resize: none;
  }
}
.bottomBtnContainer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-bottom: 20px;
}
.kTbn {
  width: 151px;
  height: 57px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #0376db;
  border: 1px solid #0376db;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 8px;
  cursor: pointer;
}
.cancle {
  background: #0376db;
  color: white;
}
.register {
}
</style>
