<template>
  <div class="infoContainer">
    <review-complete
      v-if="showCompleteModal"
      :title="modalTitle"
      :subTitle="modalSubTitle"
    />
    <delete-review-modal
      v-if="showDeleteModal"
      @emitAnswer="getAnswerFromModal"
    />
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
          v-model="write_review.pros"
        />
        <div class="letterNum">{{ write_review.pros.length }}/500</div>
        <div class="inputLabel">단점</div>
        <textarea
          name="cons"
          id="cons"
          class="proNCon"
          cols="50"
          placeholder="리뷰를 남겨주세요. (단점)"
          v-model="write_review.cons"
        />
        <div class="letterNum">{{ write_review.cons.length }}/500</div>
        <div class="warn">ℹ️허위사실로 작성시 불이익이 가해질 수 있습니다.</div>
        <div
          class="review_submit"
          @click="
            $bvModal.hide('reviewModal');
            submitReview();
          "
        >
          {{ modalType === "edit" ? "리뷰 수정하기" : "리뷰 등록하기" }}
        </div>
      </div>
    </b-modal>
    <IntroInfoContainer :companyInfo="data" />
    <div class="rateContainer">
      <div class="rate">
        <div class="rateNum">{{ companyInfo.rateNum }}</div>
        <div class="rateStarContainer">
          <div class="starBox">
            <div
              class="star"
              v-for="i in companyInfo.rateStarNum"
              v-bind:key="i"
            >
              ⭐
            </div>
          </div>
          <div class="reviewNum">리뷰 ({{ companyInfo.reviewNum }})</div>
        </div>
      </div>
      <div class="submitBtn" @click="$bvModal.show('reviewModal')">
        리뷰 등록 하기
      </div>
    </div>
    <RateContainer :companyInfo="companyInfo" />
    <div class="reviewPageContainer">
      <div class="popupContainer" :class="{ show: !login }">
        <div class="popup">
          <p>로그인을 하시면 더 많은 정보를 보실 수 있습니다.</p>
          <div class="loginBtn" @click="changeToLogin()">로그인 하러 가기</div>
        </div>
      </div>
      <div class="blurPart" :class="{ blur: !login }">
        <div
          class="myReview"
          v-if="companyInfo.review[clickedPage - 1].userId === 'kits'"
        >
          내가 쓴 댓글
        </div>
        <div class="reviewTitleContainer">
          <div class="leftPart">
            <div class="title">
              <span
                >{{ companyInfo.review[clickedPage - 1].rate.toFixed(1)
                }}{{ " " }}</span
              >{{ companyInfo.review[clickedPage - 1].title }}
            </div>
            <div class="star">
              <span v-for="i in 4" v-bind:key="i">⭐</span>
            </div>
            <div class="date">
              {{ companyInfo.review[clickedPage - 1].date }}
            </div>
          </div>
          <div
            class="rightPart"
            v-if="companyInfo.review[clickedPage - 1].userId === 'kits'"
          >
            <div
              class="btn edit"
              @click="editReview(companyInfo.review[clickedPage - 1])"
            >
              수정하기
            </div>
            <div class="btn delete" @click="deleteReview">삭제하기</div>
          </div>
        </div>
        <div class="pros proNcon">
          <div class="title">장점</div>
          <div class="content">
            {{ companyInfo.review[clickedPage - 1].cons }}
          </div>
        </div>
        <div class="cons proNcon">
          <div class="title">단점</div>
          <div class="content">
            {{ companyInfo.review[clickedPage - 1].pros }}
          </div>
        </div>
      </div>
      <div class="paginationBox">
        <div
          class="page"
          :class="{ active: clickedPage === i }"
          v-for="i in 5"
          v-bind:key="i"
          @click="clickPage(i)"
        >
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IntroInfoContainer from "./IntroInfoContainer.vue";
import RateContainer from "./RateContainer.vue";
import ReviewComplete from "../../../modal/CompleteModal.vue";
import DeleteReviewModal from "../../../modal/DeleteReviewModal.vue";
import { companyInfoEx } from "../../../../data/example";
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      companyInfo: companyInfoEx,
      clickedPage: 1,
      login: false,
      reviewModalVisible: false,
      write_review: {
        balance: 0,
        reward: 0,
        culture: 0,
        total: 0,
        pros: "",
        cons: "",
      },
      showCompleteModal: false,
      modalType: "",
      modalTitle: "리뷰 등록 완료",
      modalSubTitle: "리뷰 등록이 완료되었습니다",
      showDeleteModal: false,
    };
  },
  components: {
    IntroInfoContainer,
    RateContainer,
    ReviewComplete,
    DeleteReviewModal,
    // ReviewWriteModal,
    // KakaoMap
  },

  mounted() {},

  methods: {
    clickPage: function (index) {
      console.log(index);
      this.clickedPage = index;
    },
    changeToLogin: function () {
      this.login = !this.login;
    },
    registerReview: function () {
      this.reviewModalVisible = true;
    },
    rateChange_balance: function (rate) {
      this.write_review.balance = rate;
      this.write_review.total =
        (this.write_review.balance +
          this.write_review.reward +
          this.write_review.culture) /
        3;
    },
    rateChange_reward: function (rate) {
      this.write_review.reward = rate;
      this.write_review.total =
        (this.write_review.balance +
          this.write_review.reward +
          this.write_review.culture) /
        3;
    },
    rateChange_culture: function (rate) {
      this.write_review.culture = rate;
      this.write_review.total =
        (this.write_review.balance +
          this.write_review.reward +
          this.write_review.culture) /
        3;
    },
    submitReview: function () {
      if (this.modalType === "edit") {
        this.modalTitle = "수정이 완료되었습니다.";
        this.modalSubTitle = "리뷰 내용 수정이 완료 되었습니다.";
        setTimeout(() => {
          this.showCompleteModal = false;
        }, 1000);
      } else {
        setTimeout(() => this.$router.push("/home"), 3000);
      }
      this.showCompleteModal = true;
    },
    editReview: function (data) {
      console.log(data);
      this.write_review.pros = data.pros;
      this.write_review.cons = data.cons;
      this.modalType = "edit";
      this.$bvModal.show("reviewModal");
    },
    deleteReview: function () {
      this.showDeleteModal = true;
    },
    getAnswerFromModal: function (value) {
      console.log(value);
      if (value) {
        this.modalTitle = "삭제되었습니다.";
        this.modalSubTitle = "리뷰가 삭제 되었습니다.";
        this.showDeleteModal = false;
        this.showCompleteModal = true;
        setTimeout(() => {
          this.showCompleteModal = false;
        }, 1000);
      } else {
        this.showDeleteModal = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.infoContainer {
  width: 881px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 50px;
  margin-bottom: 100px;
}

.rateContainer {
  display: flex;
  justify-content: space-between;
  margin-top: 68px;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 45px;
  .rate {
    display: flex;
    align-items: center;
  }
  .rateNum {
    font-size: 40px;
    line-height: 59px;
    margin-right: 10px;
  }
  .starBox {
    display: flex;
    font-size: 24px;
    .star {
      margin-right: 10px;
    }
  }
  .reviewNum {
    font-size: 20px;
    line-height: 30px;
  }
  .submitBtn {
    background: #0376db;
    border-radius: 29.5px;
    padding: 15px 60px;
    color: white;

    font-size: 22px;
    line-height: 33px;
  }
}

.blur {
  filter: blur(5px);
  position: relative;
  z-index: -1;
}
.popupContainer {
  display: none;
  z-index: 10;
  position: absolute;
}
.popup {
  width: 460px;
  border: 1px solid #0376db;
  border-radius: 15px;
  background: #fff;
  padding: 27px 0;
  p {
    text-align: center;

    font-size: 18px;
    line-height: 27px;
    color: #515151;
    margin-bottom: 21px;
  }
  .loginBtn {
    text-align: center;
    background: #0376db;
    color: white;
    width: 175px;
    margin: auto;
    padding: 13px 0;
    border-radius: 29.5px;
    cursor: pointer;
  }
}
.show {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
}
.reviewPageContainer {
  margin-top: 20px;
  position: relative;
  .reviewTitleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    .leftPart {
      display: flex;
      align-items: center;
    }
    .rightPart {
      display: flex;
      .btn {
        color: #0376db;

        font-size: 18px;
        line-height: 27px;
        text-decoration: underline;
      }
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      margin-right: 10px;
    }
    .star {
      font-size: 20px;
      margin-right: 10px;
    }
    .date {
      font-size: 16px;
      line-height: 24px;
      color: #9b9b9b;
    }
  }
  .proNcon {
    margin-top: 20px;
    .title {
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
    }
  }
  .paginationBox {
    display: flex;
    justify-content: center;
    margin-top: 80px;
    .page {
      width: 26px;
      height: 26px;
      border: 0.5px solid #e3e6e8;
      border-radius: 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 4px;
      color: #1042f1;
      cursor: pointer;
    }
    .active {
      color: white;
      background-color: #0376db;
    }
  }
  .myReview {
    font-size: 16px;
    line-height: 24px;
    color: #0376db;
  }
}
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

    font-size: 18px;
    line-height: 27px;
  }
}
</style>
