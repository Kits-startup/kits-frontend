<template>
  <div class="bannerContainer">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="10000"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide
        v-for="i in 9"
        :key="i"
        :caption="i.toString()"
        img-src="https://picsum.photos/1024/480/?image=52"
        img-width="740"
        img-height="400"
      />
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return { slide: null };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.bannerContainer {
  width: 740px;
  border: 1px solid black;
  margin: auto;
}
</style>
