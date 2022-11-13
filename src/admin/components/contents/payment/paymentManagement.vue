<template>
  <div>
    <div class="topHelmet">
      <div class="blue">결제 관리</div>
      <div>홈 > 결제 관리 > 결제 목록</div>
    </div>
    <payment-reject-check-each
      v-if="showEachRejectModal"
      @emitAnswer="getAnswerFromRejectModal"
      @inputValue="getInputFromRejectModal"
      :info="selectedInfo"
    />
    <div class="topBanner">
      <div class="eachBox">
        <div class="label">전체</div>
        <div class="value">200건</div>
      </div>
      <div class="eachBox">
        <div class="label">진행중</div>
        <div class="value">200건</div>
      </div>
      <div class="eachBox">
        <div class="label">완료</div>
        <div class="value">200건</div>
      </div>
    </div>
    <search-option-box-payment />
    <div class="aboveTable">
      <div class="description">총 123,455 명의 사용자가 있습니다.</div>
      <div class="rejectBtn" @click="reject">환불하기</div>
    </div>
    <b-table class="userList" hover :items="items" :fields="fields">
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
      <template #cell(detail)="data">
        <div style="text-decoration: underline" @click="gotoLink(data.value)">
          바로가기
        </div>
      </template>
    </b-table>
    <div class="paginationBox" style="margin-bottom: 100px">
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
import searchOptionBoxPayment from "../../search/searchOptionBoxPayment.vue";
import { field_Payment } from "@/data/tableFieldData";
import { ex_Payment } from "@/data/tableExData";
import PaymentRejectCheckEach from "@/components/modal/PaymentRejectCheckEach.vue";
export default {
  components: { searchOptionBoxPayment, PaymentRejectCheckEach },
  data() {
    return {
      tab: null,
      clickedPage: 1,
      items: ex_Payment,
      fields: field_Payment,
      showEachRejectModal: false,
      eachModalCount: 0,
      selectedInfoLists: [
        { code: 111111, totalAmount: 100000, possible: 100000 },
        { code: 222222, totalAmount: 100000, possible: 100000 },
        { code: 333333, totalAmount: 100000, possible: 100000 },
      ],
      selectedInfo: null,
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
    reject: function (lists) {
      this.eachModalCount = 0;
      for (let i = 0; i < this.selectedInfoLists.length; i++) {
        this.showEachRejectModal = true;
        this.selectedInfo = this.selectedInfoLists[i];
      }
    },
    getAnswerFromRejectModal: function (value) {
      console.log(value);
      this.showEachRejectModal = false;
    },
    getInputFromRejectModal: function (value) {
      console.log(value);
    },
  },
  mounted() {
    this.setTab();
  },
  watch: {
    $route() {
      this.setTab();
    },
  },
};
</script>

<style lang="scss" scoped>
.topBanner {
  display: flex;
  background: #e1f1ff;
  margin-top: 30px;
  padding: 12px 20px;
  margin-bottom: 28px;
  width: max-content;
  .eachBox {
    display: flex;
    margin-right: 52px;
    &:last-child {
      margin-right: 0;
    }
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    .value {
      margin-left: 10px;
      color: #0376db;
    }
  }
}
.aboveTable {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  .description {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #515151;
  }
  .rejectBtn {
    width: 122px;
    height: 48px;
    color: white;
    background: #0376db;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
