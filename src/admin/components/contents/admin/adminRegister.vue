<template>
  <div class="adminRegister">
    <div class="top">•관리자 등록</div>
    <div class="infoBox">
      <div class="infoRow">
        <div class="cell label">계정구분</div>
        <div class="cell data">
          <b-form-radio
            style="margin-right: 40px"
            v-model="type"
            name="type"
            value="basic"
            >관리자</b-form-radio
          >
          <b-form-radio v-model="type" name="type" value="second"
            >2차 관리자</b-form-radio
          >
        </div>
      </div>
      <div class="infoRow">
        <div class="cell label">ID</div>
        <div class="cell data">
          <div class="edit-pw">
            <div class="idValue cell">
              <input type="text" class="kInput" placeholder="아이디 입력" />
            </div>
            <div class="password">
              <div class="label cell">비밀번호</div>
              <div class="pwSetting cell">
                <input
                  type="password"
                  class="inputPw"
                  placeholder="비밀번호 입력"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="infoRow">
        <div class="cell label">계정상태</div>
        <div class="cell data">
          <b-form-radio
            style="margin-right: 40px"
            v-model="state"
            name="state"
            value="active"
            >활성</b-form-radio
          >
          <b-form-radio v-model="state" name="state" value="inactive"
            >비활성</b-form-radio
          >
        </div>
      </div>
      <div class="infoRow">
        <div class="cell label">이름</div>
        <div class="cell data">
          <input
            type="text"
            class="name kInput"
            style="width: 200px"
            placeholder="이름 입력"
          />
        </div>
      </div>
      <div class="infoRow memo" style="height: 70px">
        <div class="cell label">메모</div>
        <div class="cell data">
          <textarea
            type="text"
            class="name kInput"
            style="width: 800px; rows: 3"
            placeholder="메모 입력"
          />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="kBtn edit">취소</div>
      <div class="kBtn backToList" @click="goBack">등록</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      state: "",
    };
  },
  methods: {
    goBack() {
      this.$router.push(-1);
      this.edit = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
