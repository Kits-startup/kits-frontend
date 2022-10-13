<template>
  <div>
    <div class="header">
      <div id="left">
        <router-link to="/">
          <img
            src="../../../assets/kitsLogoNew.png"
            alt="Kits"
            id="headerLogo"
          />
        </router-link>
        <div id="L2search">프로필</div>
        <div id="L1search" @click="gotoPostLists">채용공고</div>
      </div>
      <div id="search">
        <img src="../../../assets/search-normal.svg" alt="search" />
        <div id="searchText">지역, 직무, 회사, 키워드 검색</div>
      </div>
      <div id="right">
        <div id="R1search">
          <button id="show-modal" @click="showModal = true">
            회원가입/로그인
          </button>
          <div>
            <!-- use the modal component, pass in the prop -->
            <modal :show="showModal" @close="showModal = false">
              <!-- <template #header>
              <h3>custom header</h3>
            </template> -->
            </modal>
          </div>
        </div>
        <div id="R2search">기업서비스</div>
      </div>
    </div>
    <div id="bottomLine"></div>
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
  methods: {
    gotoPostLists() {
      this.$router.push("/posting_list");
    },
  },
};
</script>

<style scoped>
.header {
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  color: #000000;
}

#headerLogo {
  height: 40px;
  margin-right: 33px;
}

.header div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#search {
  width: 565px;
  height: 50px;
  border: 1px solid #0376db;
  border-radius: 25px;
  justify-content: flex-start;
}

#search img,
#searchText {
  margin-left: 18px;
}

#bottomLine {
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  margin-bottom: 55px;
}
#L2search {
  margin-right: 43px;
}

#L1search {
  margin-right: 38px;
}

#R1search {
  margin-left: 66px;
}

#R2search {
  margin-left: 40px;
}
#searchText {
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #0376db;
}

#left {
  flex: 1;
  justify-content: flex-end;
}
#right {
  flex: 1;
  justify-content: flex-start;
}
</style>
