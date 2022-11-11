<template>
  <div>
    <search-option-noticement />
    총 123,455 명의 사용자가 있습니다.
    <b-table
      class="noticeList"
      hover
      :items="items"
      :fields="fields"
      @row-clicked="goDetail"
    >
      <template #cell(content)="data">
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
</template>

<script>
import { ex_Notice } from "@/data/tableExData";
import { field_Notice } from "@/data/tableFieldData";
import searchOptionNoticement from "../../search/searchOptionNoticement.vue";
export default {
  components: { searchOptionNoticement },
  data() {
    return {
      items: ex_Notice,
      fields: field_Notice,
      clickedPage: 1,
    };
  },
  methods: {
    clickPage: function (index) {
      this.clickedPage = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.noticeList {
  width: 1300px;
}
</style>
