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
    <MainHeader></MainHeader>
    <router-view> </router-view>
    <test-vue></test-vue>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from "./components/EmployerUser/MainHeader/MainHeader.vue";
import testVue from "./testVue.vue";
import MainFooter from "./components/EmployerUser/MainHeader/MainFooter.vue";
export default {
  components: {
    MainHeader,
    testVue,
    MainFooter,
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
