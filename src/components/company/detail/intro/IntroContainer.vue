<template>
  <div class="infoContainer">
    <IntroInfoContainer :companyInfo="companyInfo" />
    <div class="rateContainer">
      <div class="rate">
        <div class="rateNum">{{ companyInfo.rateNum }}</div>
        <div class="rateStarContainer">
          <div class="starBox">
            <div
              class="star"
              v-for="i in companyInfo.rateStarNum"
              v-bind:key="i"
            ></div>
          </div>
          <div class="reviewNum">리뷰 ({{ companyInfo.reviewNum }})</div>
        </div>
      </div>
      <div class="submitBtn">리뷰 등록 하기</div>
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
            <div class="btn edit">수정하기</div>
            <div class="btn delete">삭제하기</div>
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
// import CompanyMap from "./CompanyMap.vue";
// import KakaoMap from "./KaKaoMap.vue";
import IntroInfoContainer from "./IntroInfoContainer.vue";
import RateContainer from "./RateContainer.vue";
export default {
  data() {
    return {
      companyInfo: {
        name: "아비즈",
        sub_name: "온라인 쇼핑몰",
        location: "경기 한국",
        tags: ["태그1", "태그2", "태그3"],
        description:
          "[아차키 / 기아 앱키] - 자동차 디지털키 솔루션\n자동차 스마트키의 모든 기능을 스마트폰 안으로 담은 디지털키 입니다.\n아차키 모듈을 차량에 장착하고 스마트폰 앱만 설치하면 차키로부터 해방됩니다. 차키를 가지고 다니지 않아도 스마트폰으로 문이 열리고 닫히며 시동까지 걸립니다.\n아차키를 이용하면 주차장에서 '아! 차키' 하며 다시 집이나 사무실로 돌아가지 않아도 되고, 메세지 주고 받듯이 차키 권한도 디지털로 주고 받을 수 있어 가정이나 회사 차량 키관리도 쉽게 할 수 있습니다.",
        link: "https://smartstore.naver.com/achakey/products/4531725049",
        mapInfo: "",
        rateNum: "4.0",
        rateStarNum: 5,
        reviewNum: 200,
        goodComment: { percent: 93, content: "근무환경" },
        badComment: { percent: 80, content: "직장동료" },
        rateDetail: [50, 20, 15, 10, 5],
        review: [
          {
            userId: "kits",
            rate: 4,
            title: "1번 리뷰)배울게 많은 회사",
            date: "2022.01.01",
            pros: " 우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네",
            cons: " 우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네",
          },
          {
            userId: "kits2",
            rate: 2,
            title: "2번 리뷰)최악인 많은 회사",
            date: "2022.10.01",
            pros: " 우리회사는 좋은 점이 없고 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네",
            cons: " 우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네",
          },
          {
            userId: "kits3",
            rate: 3,
            title: "3번 리뷰)단점이 많은 회사",
            date: "2021.10.01",
            pros: " 우리회사는 좋은 점이 없고 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네",
            cons: " 우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네",
          },
          {
            userId: "kits4",
            rate: 4,
            title: "4번 리뷰)최악인 많은 회사",
            date: "2022.10.01",
            pros: " 우리회사는 좋은 점이 없고 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네",
            cons: " 우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네",
          },
          {
            userId: "kits5",
            rate: 5,
            title: "5번 리뷰)최악인 많은 회사",
            date: "2022.10.01",
            pros: " 우리회사는 좋은 점이 없고 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네",
            cons: " 우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네우리회사는 뭐가 이래서 좋고 어째서 좋고 그래서 좋고 네네네네네네네네네네네네네네네네네네네네네네네네",
          },
        ],
      },
      clickedPage: 1,
      login: false,
    };
  },
  components: {
    IntroInfoContainer,
    RateContainer,
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
  },
};
</script>

<style lang="scss" scoped>
.infoContainer {
  width: 881px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 50px;
  font-family: "Noto Sans CJK KR";
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
    font-weight: 500;
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
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }
  .submitBtn {
    background: #0376db;
    border-radius: 29.5px;
    padding: 15px 60px;
    color: white;
    font-weight: 500;
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
    font-weight: 500;
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
        font-weight: 500;
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
      font-weight: 500;
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
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #0376db;
  }
}
</style>
