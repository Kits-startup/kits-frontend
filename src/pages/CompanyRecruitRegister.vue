<template>
  <div class="bigContainer">
    <h1 class="title">기업공고 등록 페이지</h1>
    <b-form-group class="label" id="name" label="공고제목" label-for="name">
      <b-form-input
        class="kInput"
        id="name"
        v-model="name"
        :state="state"
        trim
        placeholder="공고 제목을 입력해주세요."
      />
      <div class="length">{{ name.length }}/20</div>
    </b-form-group>
    <div class="label" style="margin-top: 60px">직군/직무</div>
    <div class="selectBox">
      <select-box-vue :options="options.type" />
      <select-box-vue :options="options.detail" />
      <select-box-vue :options="options.skill" />
    </div>
    <div class="label" style="margin-top: 60px">고용 형태</div>
    <select-box-vue :options="options.work_type" style="width: max-content" />
    <b-form-group
      style="margin-top: 44px"
      class="label"
      id="earn"
      label="연봉"
      label-for="earn"
    >
      <div style="display: flex; width: 425px">
        <b-form-input
          class="kInput"
          style="width: 380px"
          id="earn"
          v-model="earn"
          :state="state"
          trim
        /><span>만원</span>
      </div>
    </b-form-group>
    <div class="label" style="margin-top: 44px">공고 마감일</div>
    <b-form-datepicker class="kInput" id="due_date" v-model="duedate" />
    <b-form-group
      class="label"
      id="main_job"
      label="주요 담당 업무"
      label-for="main_job"
      style="margin-top: 44px"
    >
      <b-form-textarea
        class="kInput"
        rows="10"
        id="main_job"
        v-model="main_job"
        :state="state"
        trim
        placeholder="상세한 주요 업무 및 담당 업무 내용을 입력해주세요."
      />
      <div class="length">{{ main_job.length }}/4000</div>
    </b-form-group>
    <b-form-group
      class="label"
      id="prefer"
      label="우대사항"
      label-for="prefer"
      style="margin-top: 70px"
    >
      <b-form-textarea
        class="kInput"
        rows="10"
        id="prefer"
        v-model="prefer"
        :state="state"
        trim
        placeholder="우대사항 내용을 입력해주세요."
      />
      <div class="length">{{ prefer.length }}/4000</div>
    </b-form-group>
    <b-form-group
      class="label"
      id="benefit"
      label="혜택 및 복지"
      label-for="benefit"
      style="margin-top: 70px"
    >
      <b-form-textarea
        rows="10"
        id="benefit"
        class="kInput"
        v-model="benefit"
        :state="state"
        trim
        placeholder="헤택및 복지 내용을 입력해주세요."
      />
      <div class="length">{{ benefit.length }}/4000</div>
    </b-form-group>
    <b-form-group
      class="label"
      id="culture"
      label="조직문화"
      label-for="culture"
      style="margin-top: 70px"
    >
      <b-form-textarea
        rows="5"
        class="kInput"
        id="culture"
        v-model="culture"
        :state="state"
        trim
        placeholder="조직문화 내용을 입력해주세요."
      />
      <div class="length">{{ culture.length }}/500</div>
    </b-form-group>
    <b-form-group
      class="label"
      id="etc"
      label="기타세부사항"
      label-for="etc"
      style="margin-top: 55px"
    >
      <b-form-input
        id="etc"
        class="kInput"
        v-model="etc"
        :state="state"
        trim
        placeholder="기타세부사항 내용을 입력해주세요."
      />
    </b-form-group>

    <div class="bottomSubmitContainer">
      <div class="kBtn white cancle">취소</div>
      <div class="kBtn temp">임시 저장</div>
      <div class="kBtn submit">공고 등록</div>
    </div>
  </div>
</template>

<script>
import SelectBoxVue from "@/components/select/SelectBox.vue";
import {
  opt_type,
  opt_dev_detail,
  opt_dev_skill,
  work_type,
} from "@/data/options.js";
export default {
  components: {
    SelectBoxVue,
  },
  data() {
    return {
      name: "",
      earn: "",
      duedate: "",
      main_job: "",
      prefer: "",
      benefit: "",
      culture: "",
      options: {
        type: opt_type,
        detail: opt_dev_detail,
        skill: opt_dev_skill,
        work_type,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.bigContainer {
  width: 942px;
  margin: auto;
  textarea {
    resize: none;
    padding: 15px 20px;
  }
  input {
    padding: 15px 10px;
  }
  .title {
    font-size: 26px;
    line-height: 35px;
    margin-bottom: 27px;
  }
  .label {
    font-size: 20px;
    line-height: 27px;
  }
  .length {
    text-align: right;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #515151;
  }
  .selectBox {
    display: flex;
  }
  .kInput {
    border: #0376db 1px solid;
    border-radius: 0;
  }
  .bottomSubmitContainer {
    display: flex;
    justify-content: center;
    margin: 100px 0;
    .kBtn {
      width: 150px;
      background: #0376db;
      color: white;
      font-size: 20px;
      line-height: 27px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 8px;
    }
    .white {
      color: #0376db;
      background: white;
      border: 1px solid #0376db;
    }
  }
}
</style>
