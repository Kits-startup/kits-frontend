<template>
  <div class="jopPostingContainer" @click="gotoDetail">
    <div class="d-day">D-{{ jobInfo.leftDay }}</div>
    <div class="position">{{ jobInfo.position }}를 구합니다.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    jobInfo: {
      type: Object,
      default: () => {
        return { leftDay: "미정", position: "미정", id: null };
      },
    },
  },
  mounted() {},

  methods: {
    gotoDetail() {
      this.$router.push(`/company_recruit/${this.jobInfo.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.jopPostingContainer {
  border: 1px solid #0376db;
  border-radius: 15px;
  padding: 17px 22px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #515151;
  margin-top: 16px;
}
</style>
