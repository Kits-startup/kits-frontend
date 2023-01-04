<template>
  <div class="rightContainer">
    <complete-modal-vue
      v-if="showCompleteModal"
      title="제출이 완료되었습니다."
      subTitle="채용 지원이 완료되었습니다!"
    />
    <complete-modal-transparent-vue
      title="지원 취소가 완료되었습니다."
      subTitle=""
      v-if="showCancelModal"
    />
    <b-modal id="applyModal" hide-footer hide-header centered>
      <div class="modalContainer">
        <div
          class="xBtn"
          style="text-align: right; cursor: pointer; margin-bottom: 10px"
          @click="$bvModal.hide('applyModal')"
        >
          X
        </div>
        <div class="title">지원하기</div>
        <div class="title">
          프로필 완성도: <span class="blue" style="color: #0376db">80%</span>
        </div>
        <div class="paddingPart">
          <div class="skillBox">
            <div
              v-for="(i, idx) in [
                '경력',
                '학력',
                '기술',
                '기술',
                '학력',
                '기술',
                '기술',
              ]"
              v-bind:key="idx"
              class="skill"
            >
              <img
                src="@/assets/check_simple.png"
                alt="check"
                class="check"
              />{{ i }}
            </div>
          </div>
          <p class="description">
            지원하기전, 프로필 완성도를 더 올려서 지원하면 합격률이 올라게
            됩니다.
          </p>
          <div class="btnContainer">
            <div class="editBtn butn" @click="betaBlock">프로필수정 하기</div>
            <div class="submitBtn butn" @click="onFinalSubmit">
              최종제출 하기
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal id="cancelModal" hide-footer hide-header centered>
      <div class="modalContainer">
        <div
          class="xBtn"
          style="text-align: right; cursor: pointer; margin-bottom: 10px"
          @click="$bvModal.hide('cancelModal')"
        >
          X
        </div>
        <div class="title">지원하기 취소</div>
        <div class="title">정말 지원을 취소하시겠습니까?</div>

        <p class="description" style="text-align: center">
          해당 채용 공고에 대한 지원 내용 수정을 원하신다면<br />현재 팝업창에서
          지원을 취소한 후,<br />해당하는 공고에 재지원 해주시기 바랍니다.
        </p>
        <div class="btnContainer" style="margin-top: 48px; padding: 0 40px">
          <div class="cancelBtn butn" @click="onFinalCancel">네 취소합니다</div>
          <div class="notCancelBtn butn">아니오</div>
        </div>
      </div>
    </b-modal>
    <div class="topRight">
      {{ heart
      }}<img class="logo" src="@/assets/favorite_border.png" alt="heart" /><img
        src="@/assets/share.png"
        alt="heart"
        class="logo"
      />
    </div>
    <h1 class="title" style="font-size: 20px; line-height: 30px">채용 정보</h1>
    <div
      class="descriptionContainer"
      v-for="(item, idx) in workInfo"
      v-bind:key="idx"
    >
      <div class="label">{{ item.label }}</div>
      <div class="value">{{ item.value }}</div>
    </div>
    <div
      class="applyBtn"
      @click="onApplySubmit"
      :class="applyed ? 'applyed' : null"
    >
      {{ applyed ? "지원취소하기" : "지원하기" }}
    </div>
  </div>
</template>

<script>
import CompleteModalVue from "@/components/modal/CompleteModal.vue";
import CompleteModalTransparentVue from "@/components/modal/CompleteModalTransparent.vue";
export default {
  name: "rightCard",
  props: {
    workInfo: Array,
  },
  data() {
    return {
      heart: 30,
      supplyModalVisible: false,
      showCompleteModal: false,
      showCancelModal: false,
      applyed: false,
    };
  },
  methods: {
    onApplySubmit() {
      if (this.applyed) this.$bvModal.show("cancelModal");
      else this.$bvModal.show("applyModal");
    },
    onFinalSubmit() {
      this.$bvModal.hide("applyModal");
      this.showCompleteModal = true;
      setTimeout(() => {
        this.showCompleteModal = false;
      }, 2000);
      this.applyed = true;
    },
    onFinalCancel() {
      this.$bvModal.hide("cancelModal");
      this.showCancelModal = true;
      setTimeout(() => {
        this.showCancelModal = false;
      }, 2000);
      this.applyed = false;
    },
    betaBlock() {
      window.alert("아직 준비중인 기능입니다. 정식 오픈을 기다려주세요!");
    },
  },
  components: {
    CompleteModalVue,
    CompleteModalTransparentVue,
  },
};
</script>

<style lang="scss" scoped>
.rightContainer {
  margin-left: 46px;
  width: 373px;
  border: 1px solid #0376db;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 26px;
  .topRight {
    display: flex;
    justify-content: flex-end;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #0376db;
    margin-bottom: 5px;
    align-items: center;
    .logo {
      margin: 0 5px;
    }
  }
  .descriptionContainer {
    border: 1px solid #0376db;
    border-radius: 15px;
    padding: 17px 22px;
    margin: 16px 0;
    .label {
      font-size: 20px;
      line-height: 30px;
    }
    .value {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #515151;
    }
  }
  .applyBtn {
    background: #0376db;
    border-radius: 29.5px;
    color: white;
    text-align: center;
    padding: 14px 0;
    margin: 23px 0;
    cursor: pointer;
  }
  .applyed {
    background: #878787;
  }
}
.modalContainer {
  background: #ffffff;
  border-radius: 15px;
  .paddingPart {
    padding: 0 50px;
  }
  .title {
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    margin-bottom: 23px;
  }
  .skillBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 48px;
  }
  .skill {
    display: flex;
    margin-right: 18px;
    word-break: keep-all;
    align-items: center;
    font-size: 24px;
    line-height: 160%;
    color: #515151;
    margin-bottom: 37px;
  }
  .description {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #515151;
  }
  .btnContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-top: 22px;
  }
  .butn {
    width: 49%;
    color: white;
    background: #0376db;
    border-radius: 28.5px;
    padding: 13px 0;
    text-align: center;
    font-size: 20px;
    line-height: 27px;
    cursor: pointer;
  }
  #cancelModal___BV_modal_content_ {
    width: 533px !important;
  }
}
</style>
