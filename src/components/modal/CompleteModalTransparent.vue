<template>
  <div class="reviewCompleteModal">
    <div class="complete">
      <img
        src="@/assets/check.png"
        alt="check btn"
        style="margin-bottom: 10px"
      />
      <div style="font-size: 32px; line-height: 47px; color: #000000">
        {{ title }}
      </div>
      <div
        style="
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          color: #515151;
          margin-top: 7px;
        "
      >
        {{ subTitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompleteModalTransparent",
  props: {
    title: String,
    subTitle: String,
  },
};
</script>

<style lang="scss" scoped>
.reviewCompleteModal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(38, 38, 38, 0.67);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  .complete {
    background: white;
    width: 628px;
    height: 275px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    justify-content: center;
  }
}
</style>
