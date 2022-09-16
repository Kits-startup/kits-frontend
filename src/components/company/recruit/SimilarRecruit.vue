<template>
  <div class="similarContainer">
    <h1 style="font-size: 24px; line-height: 36px">비슷한 채용공고</h1>
    <div class="listsContainer">
      <div
        class="eachList"
        v-for="(item, idx) in similarLists"
        v-bind:key="idx"
      >
        <div
          class="thumbnail"
          :style="{ 'background-image': `url(${item.thumbnail})` }"
        >
          <img src="@/assets/gray_heart.png" alt="heart" class="heart" />
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="detail">
          <span class="sub">{{ item.sub_name }}</span
          ><span class="location">{{ item.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimilarRecruit",
  props: {
    similarLists: Array,
  },
};
</script>

<style lang="scss" scoped>
.similarContainer {
  width: 1300px;
  margin-bottom: 100px;
  .listsContainer {
    display: flex;
    margin-top: 30px;
    .eachList {
      margin-right: 20px;
      .thumbnail {
        width: 310px;
        height: 234px;
        border-radius: 15px;
        background-size: cover;
        z-index: 5;
        position: relative;
        .heart {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
        }
      }
      .name {
        font-size: 22px;
        line-height: 33px;
        margin-top: 17px;
        margin-bottom: 5px;
      }
      .sub {
        font-size: 20px;
        line-height: 30px;
      }
      .location {
        font-size: 16px;
        line-height: 24px;
        color: #9b9b9b;
        margin-left: 14px;
      }
    }
  }
}
</style>
