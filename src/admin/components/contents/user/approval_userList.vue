<template>
  <div>
    <div class="list">
      <search-option-approval-user-box />
      총 123,455 명의 사용자가 있습니다.
      <div class="userTable">
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
          <template #cell(register_date)="data">
            <div style="width: 100px">{{ data.value }}</div>
          </template>
          <template #cell(check)="data">
            <b-check size="sm" class="mr-1" :value="data.value"></b-check>
          </template>
          <template #cell(link)="data">
            <div
              style="text-decoration: underline"
              @click="gotoLink(data.value)"
            >
              바로가기
            </div>
          </template>
        </b-table>
        <div class="btnContainer">
          <div class="kBtn">가입 미승인</div>
          <div class="kBtn">가입 승인</div>
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
    </div>
  </div>
</template>

<script>
import { userField_Approval } from "@/data/tableFieldData";
import { userListEx_Approval } from "@/data/admin";
import SearchOptionApprovalUserBox from "../../search/searchOptionApprovalUserBox .vue";
export default {
  components: { SearchOptionApprovalUserBox },
  data() {
    return {
      items: userListEx_Approval,
      fields: userField_Approval,
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
</style>
