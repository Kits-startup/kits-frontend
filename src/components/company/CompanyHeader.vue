<template>
  <div>
    <div class="header">
      <div class="left">
        <router-link to="/">
          <img src="@/assets/kitsLogoNew.png" alt="Kits" id="headerLogo" />
        </router-link>
        <div class="menu" @click="dropDown('posting')">공고 관리</div>
        <div class="menu" @click="dropDown('edit')">정보 수정</div>
      </div>
      <div class="right">
        <div class="noti">
          <img src="@/assets/circle_notifications.png" alt="notification" />
        </div>
        <div class="profile">
          <div class="profileImg">
            <img :src="userInfo.logo" alt="profile image" />
          </div>
          <div class="name" @click="showDropDown = !showDropDown">
            {{ userInfo.username }}
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.34091 9.69664e-07L9.1046e-08 1.36504L7.5 9L15 1.36504L13.6591 1.11656e-06L7.5 6.26992L1.34091 9.69664e-07Z"
                fill="#515151"
              />
            </svg>
            <div class="dropDownProfile" v-if="showDropDown">
              <div class="eachMenu" @click="dropDown('edit')">
                기업 정보 수정
              </div>
              <div class="eachMenu" @click="dropDown('posting')">공고 관리</div>
              <div class="eachMenu" @click="dropDown('setting')">계정 설정</div>
              <div class="eachMenu" @click="dropDown('qna')">문의하기</div>
              <div class="eachMenu" @click="dropDown('logout')">로그아웃</div>
            </div>
          </div>
        </div>
        <div class="servicemode" style="cursor: pointer" @click="changeMode()">
          {{ userMode === "user" ? "기업" : "개인" }}서비스
        </div>
      </div>
    </div>
    <div id="bottomLine" />
  </div>
</template>

<script>
// import Modal from "../../Login/LoginModal.vue";

export default {
  components: {
    // Modal,
  },
  data() {
    return {
      showModal: false,
      userInfo: JSON.parse(localStorage.getItem("currentUser")) || null,
      userMode: localStorage.getItem("userMode") || "user",
      showDropDown: false,
    };
  },
  methods: {
    changeMode() {
      if (this.userMode === "user") {
        console.log("usermode->companymode");
        localStorage.setItem("userMode", "company");
        this.$router.go();
      } else {
        console.log("company->usermode");
        localStorage.setItem("userMode", "user");
        this.$router.go();
      }
    },
    dropDown(mode) {
      if (mode === "edit") {
        this.$router.push("/company_edit_info");
      } else if (mode === "posting") {
        this.$router.push("/company_management/job-posting/in-progress");
      } else if (mode === "setting") {
        this.$router.push("/company_management/setting");
      } else if (mode === "qna") {
        window.alert("문의사항은 메일로 부탁드립니다!");
      } else if (mode === "logout") {
        const ok = window.confirm("정말 로그아웃하시겠습니까?");
        if (ok) {
          localStorage.removeItem("currentUser");
          localStorage.removeItem("userMode");
          this.$router.push("/");
          this.$router.go();
        }
      }
    },
  },
  props: {},
  watch: {
    userInfo: function (value, oldvalue) {
      console.log(oldvalue);
      console.log("to..");
      console.log(value);
    },
    userMode: function (value, oldvalue) {
      console.log(oldvalue);
      console.log("to..");
      console.log(value);
    },
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("currentUser")) || null;
    console.log(localStorage.getItem("userMode"));
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  width: 1296px;
  color: #000000;
  margin: auto;
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
.menu {
  margin-right: 43px;
  cursor: pointer;
}

#R1search {
  margin-left: 66px;
}

.servicemode {
  margin-left: 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  background: #0376db;
  width: 114px;
  height: 42px;
  border-radius: 99px;
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
.right {
  .noti {
  }
  .profile {
    margin-left: 17px;
    display: flex;
    .profileImg {
      width: 50px;
      height: 50px;
      border: 1px solid gray;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      margin-left: 8px;
      font-size: 20px;
      line-height: 27px;
      position: relative;
      cursor: pointer;
      svg {
        margin-left: 8px;
      }
      .dropDownProfile {
        position: absolute;
        top: 63px;
        width: 140px;
        border: 1px solid #0376db;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        background: white;
        padding: 20px;
        .eachMenu {
          text-align: center;
          font-size: 14px;
          line-height: 19px;
          margin: 8px 0;
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
  }
}
</style>
