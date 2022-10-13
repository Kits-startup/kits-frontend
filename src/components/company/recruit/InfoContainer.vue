<template>
  <div>
    <div class="name">{{ companyInfo.name }}</div>
    <div class="sub">
      <div class="subname">{{ companyInfo.sub_name }}</div>
      <div class="location">{{ companyInfo.location }}</div>
    </div>
    <div class="tagContainer">
      <div v-for="(tag, i) in companyInfo.tags" v-bind:key="i" class="tag">
        #{{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companyInfo: Object,
  },
};
</script>

<style lang="scss" scoped>
.name {
  font-size: 40px;
  line-height: 59px;
}
.sub {
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 22px;
  .subname {
    font-size: 20px;
    line-height: 30px;
    margin-right: 15px;
  }
  .location {
    font-size: 16px;
    line-height: 24px;
    color: #9b9b9b;
  }
}
.tagContainer {
  display: flex;
  margin-bottom: 35px;
  .tag {
    border: 1px solid #0376db;
    border-radius: 28.5px;
    padding: 10px 25px;
    margin-right: 18px;
    color: #515151;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
}
.description {
  margin-top: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  white-space: pre-line;
  .link {
    text-decoration: none;
    color: #0376db;
  }
}
</style>
