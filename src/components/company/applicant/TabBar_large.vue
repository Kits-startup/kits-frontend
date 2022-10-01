<template>
  <div class="tabBar">
    <div
      v-for="(e, i) in tabList"
      v-bind:key="i"
      @click="$emit('clickTab', e.key)"
      :class="tab_now === e.key ? 'blue' : null"
      class="each"
    >
      {{ e.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarForApplicant",
  props: {
    tabList: Array,
    clickTab: Function,
    tab_now: String,
  },
  methods: {
    clicked(param) {
      console.log(param);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabBar {
  display: flex;
  .each {
    width: 200px;
    border-bottom: 5px solid #ececec;
    color: #878787;
    text-align: center;
    font-size: 28px;
    line-height: 38px;
    padding-bottom: 22px;
    cursor: pointer;
  }
  .blue {
    color: black;
    border-color: #0376db;
  }
}
</style>
