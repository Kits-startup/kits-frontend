<template>
  <div>
    <div class="topHeader">
      <div class="main">관리자 관리</div>
      <div class="optional" v-if="num">
        <span
          >홈 > 관리자관리 >
          {{ this.edit ? "관리자수정(관리자)" : "관리자상세" }}</span
        >
      </div>
    </div>
    <div class="adminDetail" v-if="num">
      <div class="top">•관리자 정보</div>
      <div class="infoBox">
        <div class="infoRow">
          <div class="cell label">계정구분</div>
          <div class="cell data">
            <div v-if="!edit">{{ detailData.type }}</div>
            <div v-else style="display: flex">
              <b-form-radio
                style="margin-right: 40px"
                v-model="adminType"
                :aria-describedby="ariaDescribedby"
                name="basic"
                value="basic"
                >관리자</b-form-radio
              >
              <b-form-radio
                v-model="adminType"
                :aria-describedby="ariaDescribedby"
                name="second"
                value="second"
                >2차 관리자</b-form-radio
              >
            </div>
          </div>
        </div>

        <div class="infoRow">
          <div class="cell label">ID</div>
          <div class="cell data">
            <div v-if="!edit">{{ detailData.id }}</div>
            <div class="edit-pw" v-else>
              <div class="idValue cell">{{ detailData.id }}</div>
              <div class="password">
                <div class="label cell">비밀번호</div>
                <div class="pwSetting cell">
                  <input type="password" class="inputPw" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="infoRow">
          <div class="cell label">계정상태</div>
          <div class="cell data">
            <div v-if="!edit">{{ detailData.state }}</div>
            <div v-else style="display: flex">
              <b-form-radio
                style="margin-right: 40px"
                v-model="adminState"
                :aria-describedby="ariaDescribedby"
                name="active"
                value="active"
                >활성</b-form-radio
              >
              <b-form-radio
                v-model="adminState"
                :aria-describedby="ariaDescribedby"
                name="inactive"
                value="inactive"
                >비활성</b-form-radio
              >
            </div>
          </div>
        </div>
        <div class="infoRow">
          <div class="cell label">이름</div>
          <div class="cell data">
            <div v-if="!edit">{{ detailData.name }}</div>
            <div v-else>
              <input type="text" class="name kInput" style="width: 200px" />
            </div>
          </div>
        </div>
        <div class="infoRow" v-if="!edit">
          <div class="cell label">계정생성일</div>
          <div class="cell data">{{ detailData.createdAt }}</div>
        </div>
        <div class="infoRow" v-if="!edit">
          <div class="cell label">최종 로그인 정보</div>
          <div class="cell data">{{ detailData.finalLogin }}</div>
        </div>
        <div class="infoRow memo" style="height: 70px">
          <div class="cell label">메모</div>
          <div class="cell data">
            <div v-if="!edit">메모메모메모메모</div>
            <div v-else>
              <textarea
                type="text"
                class="name kInput"
                style="width: 800px; rows: 3"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="kBtn edit" @click="editInfo">수정</div>
        <div class="kBtn backToList" @click="goBack">목록</div>
      </div>
    </div>
    <div class="adminListContainer" v-else>
      <b-table
        class="adminList"
        hover
        :items="items"
        :fields="fields"
        @row-clicked="goDetail"
      />
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
import { adminListEx } from "@/data/admin";
import { fieldData } from "@/data/tableFieldData";
export default {
  data() {
    return {
      fields: fieldData,
      items: adminListEx,
      clickedPage: 1,
      num: null,
      edit: false,
      detailData: null,
      adminType: null,
      adminState: null,
    };
  },
  methods: {
    clickPage: function (index) {
      console.log(index);
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
        this.detailData = adminListEx.filter(
          (data) => data.num == Number(this.num)
        )[0];
        console.log(this.detailData);
      }
    },
    editInfo() {
      this.edit = true;
    },
    goBack() {
      this.$router.push(-1);
      this.edit = false;
    },
  },
  watch: {
    $route() {
      this.setDetail();
    },
  },
  mounted() {
    this.setDetail();
  },
};
</script>

<style lang="scss">
.adminListContainer {
  margin-bottom: 100px;
  width: 1000px;
  .adminList {
    text-align: center;
    white-space: pre-wrap;
  }
  .kCell {
    vertical-align: middle;
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
.topHeader {
  font-size: 20px;
  line-height: 27px;
  display: flex;
  margin-bottom: 33px;
  .main {
    font-weight: 500;
    color: #0376db;
    margin-right: 16px;
  }
  .optional {
    font-weight: 400;
    color: #878787;
  }
}
.infoBox {
  width: 1083px;
  border-top: 1px solid #d9d9d9;
  .infoRow {
    display: flex;
    height: 55px;
    border-bottom: 1px solid #d9d9d9;
    .kInput {
      border: 1px solid #b7b7b7;
      resize: none;
    }
    .cell {
      display: flex;
      padding-left: 33px;
      align-items: center;
    }
    .label {
      width: 203px;
      background: #ededee;
    }
    .data {
      width: 100%;
    }
    .adminType {
      display: flex;
    }
    .edit-pw {
      display: flex;
      align-items: stretch;
      .idValue {
        width: 300px;
        padding-left: 0px;
      }
      .label {
        height: 55px;
      }
      .password {
        display: flex;
      }
      .pwSetting {
        .inputPw {
          border: 1px solid #b7b7b7;
          width: 300px;
        }
      }
    }
  }
  .memo {
    min-height: 55px;
    height: 100%;
    display: flex;
    height: 55px;
    border-bottom: 1px solid #d9d9d9;
  }
}
.bottom {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  .kBtn {
    padding: 15px 60px;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    cursor: pointer;
  }
  .edit {
    color: #0376db;
    background: white;
    border: 1px solid #0376db;
  }
  .backToList {
    color: white;
    background-color: #0376db;
    margin-left: 8px;
  }
}
</style>
