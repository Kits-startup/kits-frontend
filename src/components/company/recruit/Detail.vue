<template>
  <div class="EachDetail">
    <div class="label">{{ label }}</div>
    <div class="listbox">
      <div class="list" v-for="(item, index) in lists" v-bind:key="index">
        - {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailVue",
  props: {
    label: String,
    lists: Array,
  },
};
</script>

<style lang="scss" scoped>
.EachDetail {
  margin: 50px 0;
  .label {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 11px;
  }
  .list {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #515151;
  }
}
</style>
