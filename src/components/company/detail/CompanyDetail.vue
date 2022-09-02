<template>
  <div style="display: flex; justify-content: center">
    <div class="container">
      <intro-container />
      <job-opening />
    </div>
  </div>
</template>

<script>
import IntroContainer from "./IntroContainer.vue";
import JobOpening from "./JobOpening.vue";
export default {
  components: {
    IntroContainer,
    JobOpening,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  border: 1px solid black;
  min-width: 80%;
}
</style>
