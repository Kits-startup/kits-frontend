<template>
  <div style="display: flex; justify-content: center">
    <div class="kContainer">
      <intro-container :data="data" />
      <job-opening />
    </div>
  </div>
</template>

<script>
import {
  companyInfoEx,
  companyInfoEx1,
  companyInfoEx2,
  companyInfoEx3,
  companyInfoEx4,
} from "@/data/example";
import IntroContainer from "../components/company/detail/intro/IntroContainer.vue";
import JobOpening from "../components/company/detail/opening/JobOpening.vue";
export default {
  components: {
    IntroContainer,
    JobOpening,
  },
  data() {
    return {
      company1: companyInfoEx1,
      company2: companyInfoEx2,
      company3: companyInfoEx3,
      company4: companyInfoEx4,
      data: companyInfoEx,
    };
  },
  props: ["id"],
  methods: {},
  mounted() {
    if (this.id == 1) this.data = this.company1;
    if (this.id == 2) this.data = this.company2;
    if (this.id == 3) this.data = this.company3;
    if (this.id == 4) this.data = this.company4;
  },
};
</script>

<style lang="scss" scoped>
.kContainer {
  display: flex;
  align-items: flex-start;
  // border: 1px solid black;
}
</style>
