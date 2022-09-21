<template>
  <div class="body">
    <div
      class="myPageMenu"
      @click="goActivity()"
      v-bind:style="{ color: colorList[0] }"
    >
      <div class="blueBar" v-show="colorList[0] == blue"></div>
      <div class="svgContainer">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2.33333V18.6667C0 19.95 1.03833 21 2.33333 21H9.33333V0H2.33333C1.03833 0 0 1.05 0 2.33333ZM18.6667 0H11.6667V9.33333H21V2.33333C21 1.05 19.95 0 18.6667 0ZM11.6667 21H18.6667C19.95 21 21 19.95 21 18.6667V11.6667H11.6667V21Z"
            v-bind:fill="colorList[0]"
          />
        </svg>
      </div>
      <div class="menuText">활동현황</div>
    </div>
    <div
      class="myPageMenu"
      @click="goProfile()"
      v-bind:style="{ color: colorList[1] }"
    >
      <div class="blueBar" v-show="colorList[1] == blue"></div>

      <div class="svgContainer">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 3.3C12.826 3.3 14.3 4.774 14.3 6.6C14.3 8.426 12.826 9.9 11 9.9C9.174 9.9 7.7 8.426 7.7 6.6C7.7 4.774 9.174 3.3 11 3.3ZM11 18.92C8.25 18.92 5.819 17.512 4.4 15.378C4.433 13.189 8.8 11.99 11 11.99C13.189 11.99 17.567 13.189 17.6 15.378C16.181 17.512 13.75 18.92 11 18.92Z"
            v-bind:fill="colorList[1]"
          />
        </svg>
      </div>
      <div class="menuText">내프로필</div>
    </div>
    <div
      class="myPageMenu"
      @click="goAlarm()"
      v-bind:style="{ color: colorList[2] }"
    >
      <div class="blueBar" v-show="colorList[2] == blue"></div>

      <div class="svgContainer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9997 0.335938C5.55967 0.335938 0.333008 5.5626 0.333008 12.0026C0.333008 18.4426 5.55967 23.6693 11.9997 23.6693C18.4397 23.6693 23.6663 18.4426 23.6663 12.0026C23.6663 5.5626 18.4397 0.335938 11.9997 0.335938ZM11.9997 19.5859C11.0313 19.5859 10.2497 18.8043 10.2497 17.8359H13.7497C13.7497 18.8043 12.968 19.5859 11.9997 19.5859ZM17.833 16.6693H6.16634V15.5026L7.33301 14.3359V11.2909C7.33301 8.8176 8.53467 6.7176 10.833 6.16927V5.58594C10.833 4.92094 11.3347 4.41927 11.9997 4.41927C12.6647 4.41927 13.1663 4.92094 13.1663 5.58594V6.16927C15.4647 6.7176 16.6663 8.82927 16.6663 11.2909V14.3359L17.833 15.5026V16.6693Z"
            v-bind:fill="colorList[2]"
          />
        </svg>
      </div>

      <div class="menuText">알람</div>
    </div>
    <div
      class="myPageMenu"
      @click="goSetting()"
      v-bind:style="{ color: colorList[3] }"
    >
      <div class="blueBar" v-show="colorList[3] == blue"></div>

      <div class="svgContainer">
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_649_4780)">
            <path
              d="M23.1277 15.6343C23.176 15.2718 23.2002 14.8972 23.2002 14.4984C23.2002 14.1118 23.176 13.7251 23.1156 13.3626L25.5685 11.4534C25.786 11.2843 25.8465 10.958 25.7135 10.7164L23.3935 6.70469C23.2485 6.43885 22.9465 6.35427 22.6806 6.43885L19.7927 7.59885C19.1885 7.13969 18.5481 6.75302 17.8352 6.46302L17.4002 3.39385C17.3519 3.10385 17.1102 2.89844 16.8202 2.89844H12.1802C11.8902 2.89844 11.6606 3.10385 11.6123 3.39385L11.1773 6.46302C10.4644 6.75302 9.81188 7.15177 9.2198 7.59885L6.33188 6.43885C6.06605 6.34219 5.76396 6.43885 5.61896 6.70469L3.31105 10.7164C3.16605 10.9701 3.21438 11.2843 3.45605 11.4534L5.90896 13.3626C5.84855 13.7251 5.80021 14.1239 5.80021 14.4984C5.80021 14.873 5.82438 15.2718 5.8848 15.6343L3.43188 17.5434C3.21438 17.7126 3.15396 18.0389 3.28688 18.2805L5.60688 22.2922C5.75188 22.558 6.05396 22.6426 6.3198 22.558L9.20771 21.398C9.81188 21.8572 10.4523 22.2439 11.1652 22.5339L11.6002 25.603C11.6606 25.893 11.8902 26.0984 12.1802 26.0984H16.8202C17.1102 26.0984 17.3519 25.893 17.3881 25.603L17.8231 22.5339C18.536 22.2439 19.1885 21.8572 19.7806 21.398L22.6685 22.558C22.9344 22.6547 23.2365 22.558 23.3815 22.2922L25.7015 18.2805C25.8465 18.0147 25.786 17.7126 25.5565 17.5434L23.1277 15.6343ZM14.5002 18.8484C12.1077 18.8484 10.1502 16.8909 10.1502 14.4984C10.1502 12.1059 12.1077 10.1484 14.5002 10.1484C16.8927 10.1484 18.8502 12.1059 18.8502 14.4984C18.8502 16.8909 16.8927 18.8484 14.5002 18.8484Z"
              v-bind:fill="colorList[3]"
            />
          </g>
          <defs>
            <clipPath id="clip0_649_4780">
              <rect width="29" height="29" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div class="menuText">설정</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorList: ["#0376DB", "#1F1F1F", "#1F1F1F", "#1F1F1F"],
      black: "#1F1F1F",
      blue: "#0376DB",
    };
  },
  computed: {
    // why2(){
    //   return this.why==false
    // }
  },
  methods: {
    makeItBlue(num) {
      for (let i = 0; i < 4; i++) this.colorList[i] = this.black;
      this.colorList.splice(num, 1, this.blue);
    },
    goActivity() {
      this.$router
        .push({
          name: "Mypage-Activity",
        })
        .catch(() => {});
      this.makeItBlue(0);
    },
    goProfile() {
      this.$router
        .push({
          name: "Mypage-Profile",
        })
        .catch(() => {});
      this.makeItBlue(1);
    },
    goAlarm() {
      this.$router
        .push({
          name: "Mypage-Alarm",
        })
        .catch(() => {});
      this.makeItBlue(2);
    },
    goSetting() {
      this.$router
        .push({
          name: "Mypage-Setting",
        })
        .catch(() => {});
      this.makeItBlue(3);
    },
  },
};
</script>

<style scoped>
.body {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.18);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px 0 9px 17px;
  width: 270px;
}

.myPageMenu {
  flex: 1;
  display: flex;
  margin-bottom: 16px;
  position: relative;
  align-items: center;
}

.svgContainer {
  width: 30px;
  text-align: center;
  margin-right: 8px;
}

.menuText {
  font-size: 16px;
  line-height: 160%;
}

.blueColor {
  color: #0376db;
}

.blueBar {
  position: absolute;
  left: -17px;
  width: 3px;
  height: 36px;
  background-color: #0376db;
}
</style>
