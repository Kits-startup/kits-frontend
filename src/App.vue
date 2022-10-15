<template>
  <div id="app">
    <header>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <!-- font -->
    </header>
    <MainHeader
      v-if="!isAdmin"
      @toCompanyUser="changeToCompany"
      :isCompany="isCompany"
    />
    <router-view v-slot="{ MainPage }">
      <componet :is="MainPage" :isCompany="isCompany" />
    </router-view>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from "./components/EmployerUser/MainHeader/MainHeader.vue";
import MainFooter from "./components/EmployerUser/MainHeader/MainFooter.vue";
export default {
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      isAdmin: false,
      isCompany: false,
    };
  },
  methods: {
    changeToCompany(company) {
      company ? (this.isCompany = true) : (this.isCompany = false);
    },
  },
  mounted() {
    const url = this.$route.fullPath.split("/");
    if (url[1] === "admin") {
      this.isAdmin = true;
    } else if (url[1] === "company") {
      this.isCompany = true;
    }
  },
};
</script>

<style>
#app {
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
}
</style>
