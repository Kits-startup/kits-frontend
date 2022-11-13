<template>
  <div>
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
    <search-option-box-opening />
    총 123,455 명의 사용자가 있습니다.
    <b-table
      class="userList adminTable"
      hover
      :items="items"
      :fields="fields"
      @row-clicked="goDetail"
      responsive
    >
      <template #head()="scope">
        <div class="text-nowrap" style="min-width: 100px">
          {{ scope.label }}
        </div>
      </template>
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
          상세보기
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
import { field_jobOpening } from "@/data/tableFieldData";
import { ex_Opening } from "@/data/admin";
import searchOptionBoxOpening from "../../search/searchOptionBoxOpening.vue";
export default {
  components: { searchOptionBoxOpening },
  data() {
    return {
      items: ex_Opening,
      fields: field_jobOpening,
      clickedPage: 1,
    };
  },
  methods: {
    gotoLink(link) {
      console.log(link);
      this.$router.push(`/admin/job-opening/register?id=${link}`);
    },
    clickPage: function (index) {
      this.clickedPage = index;
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
.userList {
  width: 1300px;
}
</style>
