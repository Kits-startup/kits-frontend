<template>
  <div class="choose position">
    <b-form-select
      v-model="select"
      :options="options"
      @change="$emit('choose', select)"
    />
    <!-- <svg
      width="15"
      height="9"
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.34091 9.69664e-07L9.1046e-08 1.36504L7.5 9L15 1.36504L13.6591 1.11656e-06L7.5 6.26992L1.34091 9.69664e-07Z"
        fill="#1F1F1F"
      />
    </svg> -->
  </div>
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
.choose {
  border: 1px solid #0376db;
  padding: 12px 17px;
  border-radius: 3px;
  margin-right: 8px;
  select {
    outline: none;
    margin-right: 5px;
  }
  option {
    background: red;
  }
}
</style>
