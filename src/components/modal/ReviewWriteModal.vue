<template>
  <b-modal id="reviewModal" hide-footer hide-header centered>
    <div class="reviewModalContainer">
      <div class="closeX" @click="$bvModal.hide('reviewModal')">X</div>
      <div class="rateNTotal">
        <div class="ratingBoxes">
          <div class="ratingBox">
            <div class="label">일과 삶의 균형</div>
            <div class="starBox">
              <div
                class="star"
                v-for="i in 5"
                v-bind:key="i"
                @click="rateChange_balance(i)"
                v-bind:class="i <= write_review.balance ? 'color' : null"
              >
                ★
              </div>
            </div>
          </div>
          <div class="ratingBox">
            <div class="label">보상과 복지</div>
            <div class="starBox">
              <div
                class="star"
                v-for="i in 5"
                v-bind:key="i"
                @click="rateChange_reward(i)"
                v-bind:class="i <= write_review.reward ? 'color' : null"
              >
                ★
              </div>
            </div>
          </div>
          <div class="ratingBox">
            <div class="label">동료와 문화</div>
            <div class="starBox">
              <div
                class="star"
                v-for="i in 5"
                v-bind:key="i"
                @click="rateChange_culture(i)"
                v-bind:class="i <= write_review.culture ? 'color' : null"
              >
                ★
              </div>
            </div>
          </div>
        </div>
        <span class="totalPotint"
          >나의 점수:
          <span class="blue"> {{ write_review.total.toFixed(1) }}</span></span
        >
      </div>
      <div class="inputLabel">장점</div>
      <textarea
        name="pros"
        id="pros"
        class="proNCon"
        cols="50"
        placeholder="리뷰를 남겨주세요. (장점)"
        :value="pros"
        @input="this.$emit('setPros', $event.target.value)"
      />
      <div class="letterNum">{{ write_review.pros.length }}/500</div>
      <div class="inputLabel">단점</div>
      <textarea
        name="cons"
        id="cons"
        class="proNCon"
        cols="50"
        placeholder="리뷰를 남겨주세요. (단점)"
        v-model="cons"
        @input="writeCons"
      />
      <div class="letterNum">{{ write_review.cons.length }}/500</div>
      <input type="text" @input="change()" />
      <div class="warn">ℹ️허위사실로 작성시 불이익이 가해질 수 있습니다.??</div>
      <div
        class="review_submit"
        @click="
          $bvModal.hide('reviewModal');
          submitReview();
        "
      >
        리뷰 등록하기
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ReviewWriteModal",
  data() {
    return {
      pros: "",
      cons: "",
    };
  },
  props: {
    write_review: Object,
  },
  methods: {
    writePros: function () {
      console.log("change value!");
      //   this.$emit("setPros", $event.target.value);
    },
    writeCons: function () {
      console.log("change value!");
      this.$emit("setCons", this.cons);
    },
    change: function () {
      console.log("hi");
    },
  },
};
</script>

<style lang="scss" scoped>
#reviewModal {
  .reviewModalContainer {
    padding: 20px;
  }
  position: relative;
  .rateNTotal {
    display: flex;
  }
  .ratingBoxes {
    width: 74%;
  }
  .ratingBox {
    display: flex;
    margin-top: 23px;
  }
  .label {
    width: 50%;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    color: #0376db;
  }
  .starBox {
    display: flex;
  }
  .star {
    font-size: 22px;
    color: gray;
  }
  .color {
    color: #f1c40f;
  }
  .totalPotint {
    align-self: flex-end;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #878787;
    .blue {
      color: #0376db;
    }
  }
  .closeX {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }
  .inputLabel {
    margin-top: 30px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #878787;
    margin-bottom: 3px;
  }
  .proNCon {
    border: 1px solid #878787;
    width: 100%;
    height: 125px;
    border-radius: 5px;
    padding: 10px 16px;
  }
  .letterNum {
    display: flex;
    justify-content: flex-end;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #878787;
  }
  .warn {
    text-align: center;
    margin-bottom: 30px;
  }
  .review_submit {
    background: #0376db;
    border-radius: 29.5px;
    padding: 15px 50px;
    width: max-content;
    margin: auto;
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
}
</style>
