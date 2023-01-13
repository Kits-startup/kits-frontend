<template>
  <div class="eContainer" @click="gotoDetail">
    <div class="thumbnail">
      <img class="kImage" :src="companyInfo.src" alt="thumbnail" />
      <div class="heart">
        <img class="logo" src="@/assets/favorite_border.png" alt="heart" />
      </div>
    </div>
    <div class="info">
      <div class="name">{{ companyInfo.name }}</div>
      <div class="subscription">
        <span class="category">{{ companyInfo.category }}</span
        ><span class="location">{{ companyInfo.location }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exam: {
        src: "https://picsum.photos/1024/480/?image=52",
        name: "아비즈",
        category: "온라인 쇼핑몰",
        location: "경기 한국",
      },
    };
  },
  props: {
    companyInfo: Object,
    id: Number,
  },
  methods: {
    gotoDetail() {
      this.$router.push(`/company_detail/${this.id}`);
      window.scroll(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.eContainer {
  width: 100%;
  margin-bottom: 90px;
  .thumbnail {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 17px;
    .heart {
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
  .kImage {
    height: 234px;
    width: 100%;
    object-fit: cover;
  }
  .info {
    .name {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 8px;
    }
    .category {
      font-size: 20px;
      line-height: 27px;
    }
    .location {
      font-size: 16px;
      line-height: 22px;
      color: #9b9b9b;
      margin-left: 13px;
    }
  }
}
</style>
