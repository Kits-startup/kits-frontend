<template>
  <div class="bannerContainer">
    <b-carousel
      id="banner"
      v-model="slide"
      :interval="5000"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      indicators
      fade
    >
      <b-carousel-slide v-for="(e, i) in slideInfo" :key="i">
        <template #img>
          <img
            class=""
            width="1324"
            height="480"
            :src="e.src"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: null,
      slideInfo: [
        {
          src: "https://static-cse.canva.com/blob/649373/createbanners.jpg",
        },
        {
          src: "https://yozm.wishket.com/media/news/985/image001.png",
        },
        {
          src: "https://static-cse.canva.com/blob/649373/createbanners.82908296.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__480.jpg",
        },
      ],
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.bannerContainer {
  width: 1324px;
  margin: auto;
}
#banner {
  height: 480px;
  width: 100%;
}
</style>
