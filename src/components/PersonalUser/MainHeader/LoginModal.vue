<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-close-button" @click="$emit('close')">X</button>

          <div class="logo">Logo</div>
          <div class="title">안녕하세요!</div>
          <div class="default">키츠에 오신걸 환영합니다.</div>
          <div class="emailForm">
            <input class="input" type="text" />
            <input class="submit" type="submit" value="바로가기"/>
          </div>
          <div>
            <div>개인고객이 이렇습니까?</div>
            <div>개인서비스 바로가기</div>
          </div>
          <div>
            <div>아이디/비번 기억 ?</div>
            <div>찾기</div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-container .logo {
  font-size: 30px;
  position: absolute;
  width: 134px;
  height: 52px;

  top: 79px;

  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-container .emailForm {
  position: absolute;
  display: flex;

  flex-direction: column;
  align-items: center;

  top: 295px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.emailForm .input {
  box-sizing: border-box;
  width: 437px;
  height: 57px;
  background: #ffffff;
  /* 메인 */

  border: 1px solid #0376db;
  border-radius: 3px;
}

.emailForm .submit {
  margin-top: 16px;
  background: #0376db;
  outline : 0;
  border:0;
  border-radius: 3px;
  width: 437px;
  height: 57px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #ffffff;
}

.modal-container .title {
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  position: absolute;
  top: 138px;

  left: 50%;
  transform: translate(-50%, 0%);

  margin: 0;
}
.modal-container .default {
  margin: 0;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* identical to box height */

  /* 검색 */

  color: #515151;

  position: absolute;
  top: 192px;
  left: 50%;
  transform: translate(-50%, 0%);
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.67);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 664px;
  width: 628px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  text-align: center;

  position: relative;
}

.modal-close-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
