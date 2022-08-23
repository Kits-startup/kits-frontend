<template>
  <div class="header">
    <div>kits</div>
    <div>프로필</div>
    <div>검색창</div>
    <Button>회원가입/로그인</Button>
    <div>
      <button id="show-modal" @click="showModal = true">Show Modal</button>

      <div>
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false">
          <!-- <template #header>
            <h3>custom header</h3>
          </template> -->
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./LoginModal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style></style>
