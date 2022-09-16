<script>
import PersonalData from "./DetailText/PersonalData.vue";
export default {
  components: {
    PersonalData,
  },
  props: {
    show: Boolean,
  },
  data() {
    return {
      scrollInvoked: 0,
    };
  },
  methods: {
    onScroll() {
      this.scrollInvoked++;
    },
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="title">
              <h1>개인정보처리방침</h1>
            </slot>
            <i
              class="fa-solid fa-xmark pointer modal-close-button"
              @click="$emit('close')"
            ></i>
          </div>
          <div class="innerText">
            <slot name="innerText">
              <PersonalData></PersonalData>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.pointer {
  cursor: pointer;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 18px;
}
.modal-header h1 {
  font-weight: 400;
  font-size: 24px;
  margin-left: 8px;
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 594px;
  height: 80%;
  margin: 70px auto;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  text-align: center;
  position: relative;

  padding: 0 24px;
}

.modal-close-button {
  margin-top: 8px;
  font-size: 24px;
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

.not-scroll {
  overflow: hidden;
}

.innerText {
  margin-top: 50px;
  max-height: 600px;
  overflow-y: scroll;
}
</style>
