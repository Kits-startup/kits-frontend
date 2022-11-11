<template>
  <div class="searchContainer">
    <div class="table">
      <div class="line topLine">
        <div class="label">기간</div>
        <div class="content">
          <b-form-select class="option" v-model="type" :options="options" />
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
      <div class="line midLine">
        <div class="label">결제상태</div>
        <div class="content type">
          <b-form-checkbox-group
            id="state"
            v-model="state"
            :aria-describedby="ariaDescribedby"
            name="state"
          >
            <b-form-checkbox
              :value="['pay_done', 'reject_doing', 'reject_done']"
              >전체</b-form-checkbox
            >
            <b-form-checkbox value="pay_done">결제완료</b-form-checkbox>
            <b-form-checkbox value="reject_doing">환불 진행중</b-form-checkbox>
            <b-form-checkbox value="reject_done">환불 완료</b-form-checkbox>
          </b-form-checkbox-group>
        </div>
      </div>
      <div class="line bottomLine">
        <div class="label">검색어</div>
        <div class="content">
          <input type="text" class="kInput" />
        </div>
      </div>
    </div>
    <div class="submitBtn">조회</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: null,
      options: [{ value: null, text: "전체" }],
      date_start: null,
      date_end: null,
      state: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.searchContainer {
  display: flex;
  margin-bottom: 100px;
  width: 1500px;
  .table {
    border-top: 1px solid #d9d9d9;
    .datePicker {
      margin: 0 15px;
      width: 200px;
    }
    .line {
      height: 55px;
      display: flex;
      border-bottom: 1px solid #d9d9d9;
    }
    .label {
      background: #ededee;
      padding-left: 20px;
      width: 150px;
      display: flex;
      align-items: center;
      font-size: 18px;
      line-height: 27px;
    }
    .type {
      width: 450px;
    }
    .option {
      width: 100px;
    }
    .kInput {
      border: 1px solid #b7b7b7;
      width: 400px;
      padding: 5px 10px;
      outline: none;
    }
    .content {
      margin: auto;
      margin-left: 18px;
      display: flex;
    }
  }
  .topLine {
  }
  .midLine {
  }
  .btmLine {
  }
  .submitBtn {
    width: 135px;
    background: #0376db;
    color: white;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 167px;
  }
}
</style>
