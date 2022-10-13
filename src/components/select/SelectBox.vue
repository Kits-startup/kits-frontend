<template>
  <b-form-select
    v-model="select"
    :options="options"
    @change="$emit('choose', select)"
  />
</template>

<script>
export default {
  data() {
    return { select: null };
  },
  props: {
    options: Array,
    choose: Function,
  },
};
</script>

<style lang="scss" scoped>
select {
  border: 1px solid #0376db;
  border-radius: 3px;
  outline: none;
  margin: 5px 0;
  margin-right: 5px;
  padding: 15px;
  height: 57px;
  min-width: 130px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
}
</style>
