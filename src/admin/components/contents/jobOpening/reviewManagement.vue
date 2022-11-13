<template>
  <div>
    <div class="list">
      <div class="searchBox">
        <div class="eachOption">
          <div class="label">키워드</div>
          <div class="content">
            <input type="text" placeholder="검색어를 입력하세요." />
          </div>
        </div>
        <div class="eachOption">
          <div class="label">등록일</div>
          <div class="content">
            <b-form-datepicker
              class="datePicker"
              id="start"
              v-model="date_start"
              placeholder="start"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              locale="kr"
            />-<b-form-datepicker
              class="datePicker"
              placeholder="end"
              id="end"
              v-model="date_end"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              locale="kr"
            />
          </div>
        </div>
        <b-button>조회</b-button>
      </div>
      총 123,455 명의 사용자가 있습니다.
      <div class="userTable adminTable">
        <b-table
          class="userList"
          hover
          :items="items"
          :fields="fields"
          @row-clicked="goDetail"
        >
          <template #cell(name_company)="data">
            <div
              style="
                width: 100px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                display: block;
              "
            >
              {{ data.value }}
            </div>
          </template>
          <!-- <template #cell(register_date)="data">
            <div style="width: 100px">{{ data.value }}</div>
          </template> -->
          <template #cell(check)="data">
            <b-check size="sm" class="mr-1" :value="data.value"></b-check>
          </template>
          <template #cell(delete)="data">
            <b-button size="sm" class="mr-1">{{ data.value }}</b-button>
          </template>
          <template #cell(manage)="data">
            <div
              style="text-decoration: underline"
              @click="gotoLink(data.value)"
            >
              상세관리
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
  </div>
</template>

<script>
import { ex_Review } from "@/data/admin";
import { field_review } from "@/data/tableFieldData";
import SearchOptionApprovalUserBox from "../../search/searchOptionApprovalUserBox .vue";
export default {
  components: { SearchOptionApprovalUserBox },
  data() {
    return {
      items: ex_Review,
      fields: field_review,
      clickedPage: 1,
    };
  },
  methods: {
    clickPage: function (index) {
      this.clickedPage = index;
    },
    goDetail: function (item) {
      // const { num, type } = item;
      // this.$router.push({
      //   query: { type: type === "일반회원" ? "general" : "company", id: num },
      // });
    },
    gotoLink: function (link) {
      console.log(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.paginationBox {
  margin-bottom: 100px;
}
.btnContainer {
  display: flex;
  justify-content: flex-end;
  .kBtn {
    width: 155px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0376db;
    color: white;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-left: 10px;
    cursor: pointer;
  }
}
.searchBox {
  display: flex;
  justify-content: space-between;
  height: 68px;
  align-items: center;
  background: #f6f6f6;
  padding-left: 20px;
  padding-right: 10px;
  font-size: 20px;
  line-height: 27px;
  margin-top: 30px;
  margin-bottom: 100px;
  width: 1300px;
  .eachOption {
    display: flex;
    align-items: center;
  }
  .label {
    margin-right: 26px;
  }
  .content {
    display: flex;
    input {
      border: 1px solid #878787;
      outline: none;
      background: white;
      width: 400px;
      padding: 5px 10px;
      margin-right: 80px;
    }
  }
  .datePicker {
    width: 150px;
  }
}
</style>
