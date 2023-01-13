<template>
  <div class="bannerContainer">
    <b-carousel
      id="banner"
      v-model="slide"
      :interval="3000"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      indicators
      fade
    >
      <b-carousel-slide v-for="(e, i) in slideInfo" :key="i">
        <template #img>
          <img class="" width="1324" height="480" :src="e" alt="image slot" />
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
        // "https://static-cse.canva.com/blob/649373/createbanners.jpg",
        // "https://yozm.wishket.com/media/news/985/image001.png",
        // "https://static-cse.canva.com/blob/649373/createbanners.82908296.jpg",
        // "https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__480.jpg",
        "https://i.picsum.photos/id/434/1324/480.jpg?hmac=H1J2i21o5whZAQa-G1TepRkDTwwmD4jlYDICUnYVclo",
        "https://i.picsum.photos/id/295/1324/480.jpg?hmac=ktpy1wfG7hCcygjZk9Zqy8q7aDxSa7f_zSQhuWUzH7Q",
        "https://i.picsum.photos/id/1065/1324/480.jpg?hmac=5fEBvTQz6A6pnDGbmMAti2rI38sIMeWclO_3JEUtRQU",
        "https://i.picsum.photos/id/961/1324/480.jpg?hmac=ViVZLG2HajQrqxaCEO5gY3Vt7dBQyoyr-mc_-zfjNxI",
        "https://i.picsum.photos/id/140/1324/480.jpg?hmac=8NOTNl5nZTlHuh2LTKDi0AdXTUtMvZnRGkCfalh22GA",
        "https://i.picsum.photos/id/640/1324/480.jpg?hmac=RHIcJrfkmMIpbmiVLdm0urhPOJVAm6RdBudc05yB3go",
        "https://i.picsum.photos/id/894/1324/480.jpg?hmac=3fbuAN5WQmGhvAc6yYaLG7jRlg4cLUDIUfmHupK3vN4",
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
