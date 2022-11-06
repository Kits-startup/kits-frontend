<template>
  <div>
    <complete-modal-transparent-vue
      v-if="approvalFinish"
      title="가입승인 완료"
      subTitle="가입 승인이 완료 되었습니다."
    />
    <approval-false-modal
      v-if="showApprovalFalseModal"
      @emitAnswer="getAnswerFromRejectModal"
    />
    <div class="list">
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
          <template #cell(detail)="data">
            <div
              style="text-decoration: underline"
              @click="gotoLink(data.value)"
            >
              바로가기
            </div>
          </template>
        </b-table>
        <div class="btnContainer">
          <div class="kBtn" @click="approval(false)">가입 미승인</div>
          <div class="kBtn" @click="approval(true)">가입 승인</div>
          <approval-modal-vue
            v-if="showApprovalTrueModal"
            @emitAnswer="getAnswerFromModal"
          />
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
import {
  userField_ApprovalPosting,
  userEx_ApprovalPosting,
} from "@/data/admin";
import SearchOptionApprovalUserBox from "../../search/searchOptionApprovalUserBox .vue";
import ApprovalModalVue from "@/components/modal/ApprovalModal.vue";
import CompleteModalVue from "@/components/modal/CompleteModal.vue";
import CompleteModalTransparentVue from "@/components/modal/CompleteModalTransparent.vue";
import ApprovalFalseModal from "@/components/modal/ApprovalFalseModal.vue";
export default {
  components: {
    SearchOptionApprovalUserBox,
    ApprovalModalVue,
    CompleteModalVue,
    CompleteModalTransparentVue,
    ApprovalFalseModal,
  },
  data() {
    return {
      items: userEx_ApprovalPosting,
      fields: userField_ApprovalPosting,
      clickedPage: 1,
      showApprovalTrueModal: false,
      approvalFinish: false,
      showApprovalFalseModal: false,
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
    approval: function (param) {
      if (param) {
        this.showApprovalTrueModal = true;
      } else {
        this.showApprovalFalseModal = true;
      }
    },
    getAnswerFromModal: function (value) {
      console.log(value);
      if (value) {
        this.approvalFinish = true;
        setTimeout(() => {
          this.approvalFinish = false;
        }, 1000);
      }
      this.showApprovalTrueModal = false;
    },
    getAnswerFromRejectModal: function (value) {
      console.log(value);
      this.showApprovalFalseModal = false;
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
  position: relative;
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
