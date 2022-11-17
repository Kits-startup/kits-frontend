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
    <MainHeader v-if="userMode === 'user'" />
    <company-header v-else />
    <router-view v-slot="{ MainPage }">
      <componet :is="MainPage" />
    </router-view>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from "./components/EmployerUser/MainHeader/MainHeader.vue";
import MainFooter from "./components/EmployerUser/MainHeader/MainFooter.vue";
import CompanyHeader from "./components/company/CompanyHeader.vue";
export default {
  components: {
    MainHeader,
    MainFooter,
    CompanyHeader,
  },
  data() {
    return {
      userMode: localStorage.getItem("userMode") || "user",
    };
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
