<template>
  <div style="display: flex; justify-content: center">
    <div class="kContainer">
      <intro-container />
      <job-opening />
    </div>
  </div>
</template>

<script>
import IntroContainer from "../components/company/detail/intro/IntroContainer.vue";
import JobOpening from "../components/company/detail/opening/JobOpening.vue";
export default {
  components: {
    IntroContainer,
    JobOpening,
  },
  data() {
    return {};
  },
  props: ["id"],
  methods: {},
};
</script>

<style lang="scss" scoped>
.kContainer {
  display: flex;
  align-items: flex-start;
  // border: 1px solid black;
}
</style>
