<template>
  <div class="jopPostingContainer">
    <div class="d-day">D-{{ leftDay }}</div>
    <div class="position">{{ position }}를 구합니다.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftDay: 7,
      position: "백엔드 개발자",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.jopPostingContainer {
  border: 1px solid #0376db;
  border-radius: 15px;
  padding: 17px 22px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #515151;
  margin-top: 16px;
}
</style>
