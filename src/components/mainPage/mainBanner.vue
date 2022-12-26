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
          src: "https://cdn.travie.com/news/photo/first/201705/img_19694_12.jpg",
        },
        {
          src: "https://mblogthumb-phinf.pstatic.net/MjAxODAzMzFfMTUg/MDAxNTIyNDg4NDQ1ODAx.SykBPNfjfWsBXyo87j56KVJp_qiaLuyUUOJQjcKRotwg.DXrnutpLdfHr_ly8rh5Ne3xEooJbmBEdqegntXo_7i0g.JPEG.myrikason/KakaoTalk_Moim_5qpBqAjsVPmB3swqW7wgUdr3kBGruh.jpg?type=w800",
        },
        { src: "https://t1.daumcdn.net/cfile/tistory/206FFA024CDA899150" },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVWjQ0HcLm7p0PJWCS2XTYPlfwpmQ2Hp_UA&usqp=CAU",
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
