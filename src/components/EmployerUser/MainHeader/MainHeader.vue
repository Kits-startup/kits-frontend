<template>
  <div class="header">
    <router-link to="/">kits</router-link>
    <div>프로필</div>
    <div>검색창</div>
    <div>
      <button id="show-modal" @click="showModal = true">회원가입/로그인</button>
      <div>
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false">
          <!-- <template #header>
            <h3>custom header</h3>
          </template> -->
        </modal>
      </div>
    </div>
    <div class="gotoCompany" @click="() => this.$router.push('company_detail')">
      기업 소개 페이지 확인하러 가기
    </div>
  </div>
</template>

<script>
import Modal from "../../Login/LoginModal.vue";

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
