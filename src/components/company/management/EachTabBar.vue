<template>
  <div>
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
      <div class="menuText" :class="fill ? 'blueColor' : null">
        {{ label }}
        <div class="arrow" v-if="id === 'job-posting'">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="!fill"
              d="M1.34091 9.69664e-07L9.1046e-08 1.36504L7.5 9L15 1.36504L13.6591 1.11656e-06L7.5 6.26992L1.34091 9.69664e-07Z"
              fill="#1F1F1F"
            />
            <path
              v-if="fill"
              d="M13.6591 9L15 7.63496L7.5 -3.27835e-07L-3.33735e-07 7.63496L1.34091 9L7.5 2.73008L13.6591 9Z"
              fill="#0376DB"
            />
          </svg>
          <!-- <svg
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg> -->
        </div>
      </div>
    </div>
    <div class="subTabBar" v-if="fill && id === 'job-posting'">
      <div
        class="sublist"
        v-for="(item, index) in subList"
        :key="index"
        @click="$emit('subClick', item.id)"
        :class="tab_sub === item.id ? 'blue' : null"
      >
        {{ item.label }}
      </div>
    </div>
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
    subClick: Function,
    tab_sub: String,
  },
  data() {
    return {
      subList: [
        { label: "진행중인 채용정보", id: "in-progress" },
        { label: "마감된 채용정보", id: "finish" },
        { label: "임시보관함", id: "temp" },
        { label: "지원자관리", id: "applicant" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.eachTabBar {
  cursor: pointer;
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
    display: flex;
    align-items: center;
    .arrow {
      margin-left: 5px;
    }
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
.subTabBar {
  padding-left: 40px;
  cursor: pointer;
  .sublist {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 16px;
    color: #515151;
  }
  .blue {
    color: #0376db;
  }
}
</style>
