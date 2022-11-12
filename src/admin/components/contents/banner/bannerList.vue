<template>
  <div>
    <search-option-banner />
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
</template>

<script>
import { ex_Banner } from "@/data/tableExData";
import searchOptionBanner from "../../search/searchOptionBanner.vue";
import { field_Banner } from "@/data/tableFieldData";
export default {
  components: { searchOptionBanner },
  methods: {
    clickPage: function (index) {
      this.clickedPage = index;
    },
  },
  data() {
    return {
      clickedPage: 1,
      items: ex_Banner,
      fields: field_Banner,
    };
  },
};
</script>

<style lang="scss" scoped></style>
