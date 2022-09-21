<template>
  <div class="eachTabBar" @click="$emit('click', id)">
    <div class="blueBar" v-if="fill" />
    <div class="svgContainer">
      <svg
        width="28"
        height="28"
        :viewBox="vBox"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          v-for="(e, i) in ds"
          v-bind:key="i"
          :d="e"
          :fill="fill ? '#0376DB' : '#1F1F1F'"
        />
      </svg>
    </div>
    <div class="menuText" :class="fill ? 'blueColor' : null">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    ds: Array,
    vBox: String,
    click: Function,
    id: String,
    fill: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.eachTabBar {
  flex: 1;
  display: flex;
  margin-bottom: 16px;
  position: relative;
  align-items: center;

  .svgContainer {
    width: 30px;
    text-align: center;
    margin-right: 8px;
  }

  .menuText {
    font-size: 16px;
    line-height: 160%;
  }

  .blueColor {
    color: #0376db;
  }

  .blueBar {
    position: absolute;
    left: -17px;
    width: 3px;
    height: 36px;
    background-color: #0376db;
  }
}
</style>
