<template>
  <div class="cardContainer" @click="$emit('click', data.name)">
    <img
      src="https://image.edaily.co.kr/images/Photo/files/NP/S/2017/07/PS17072900100.jpg"
      alt="person image"
    />
    <div class="infoContainer">
      <div class="bookmark active" @click="clickBookMark" v-if="bookmark">
        <svg
          width="22"
          height="28"
          viewBox="0 0 22 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8571 0H3.14286C1.41429 0 0.0157146 1.4 0.0157146 3.11111L0 28L11 23.3333L22 28V3.11111C22 1.4 20.5857 0 18.8571 0Z"
            fill="#0376DB"
          />
        </svg>
      </div>
      <div class="bookmark" @click="clickBookMark" v-if="!bookmark">
        <svg
          width="22"
          height="27"
          viewBox="0 0 22 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4612 0.0078125H3.34217C1.67907 0.0078125 0.333479 1.35478 0.333479 3.00108L0.318359 26.9472L10.9017 22.4573L21.485 26.9472V3.00108C21.485 1.35478 20.1243 0.0078125 18.4612 0.0078125ZM18.4612 22.4573L10.9017 19.1946L3.34217 22.4573V3.00108H18.4612V22.4573Z"
            fill="#0376DB"
          />
        </svg>
      </div>
      <div class="name">{{ data.name }}</div>
      <div class="location">{{ data.location[0] }}|{{ data.location[1] }}</div>
      <div class="spec">{{ data.recent_spec }}</div>
      <div class="academy">{{ data.academy }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Each_Person_card",
  props: {
    data: Object,
    click: Function,
  },
  data() {
    return {
      bookmark: false,
    };
  },
  methods: {
    clickBookMark() {
      this.bookmark = !this.bookmark;
    },
  },
};
</script>

<style lang="scss" scoped>
.cardContainer {
  border: 0.962121px solid #0376db;
  border-radius: 14.4318px;
  width: 312px;
  overflow: hidden;
  margin-bottom: 65px;
  img {
    width: 312px;
    object-fit: cover;
    height: 187px;
  }
  .infoContainer {
    position: relative;
    div {
      text-align: center;
      font-size: 19px;
      line-height: 160%;
    }
    .name {
      font-size: 25px;
      line-height: 34px;
      margin-top: 10px;
      margin-bottom: 5px;
    }
    .location {
      font-size: 13px;
      line-height: 18px;
      color: #515151;
      margin-bottom: 25px;
    }
    .academy {
      margin-top: 10px;
      margin-bottom: 30px;
    }
  }
  .bookmark {
    position: absolute;
    right: 20px;
  }
}
</style>
