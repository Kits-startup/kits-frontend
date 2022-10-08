<template>
  <div class="headerContainer">
    <div class="gray">
      <img src="@/assets/kits_logo.png" alt="logo" @click="gotoHomepage" />
    </div>
    <div class="logoutBtn">로그아웃</div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoHomepage() {
      this.$router.push("/admin");
    },
  },
};
</script>

<style lang="scss" scoped>
.headerContainer {
  height: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
}
.gray {
  width: 310px;
  background: #f7f7f7;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 111px;
    height: 36px;
    margin-left: 45px;
  }
}
.logoutBtn {
  font-size: 20px;
  line-height: 160%;
  color: #ffffff;
  background: #0376db;
  border-radius: 24px;
  padding: 8px 28px;
}
</style>
