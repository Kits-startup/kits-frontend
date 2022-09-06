<template>
  <div class="infoContainer">
    <div class="name">{{ companyInfo.name }}</div>
    <div class="sub">
      <div class="subname">{{ companyInfo.sub_name }}</div>
      <div class="location">{{ companyInfo.location }}</div>
    </div>
    <div class="tagContainer">
      <div v-for="(tag, i) in companyInfo.tags" v-bind:key="i" class="tag">
        #{{ tag }}
      </div>
    </div>
    <h5 style="font-size: 24px; line-height: 36px; font-weight: 500">
      내용소개
    </h5>
    <p class="description">
      {{ companyInfo.description }}<br />홈페이지:
      <a v-bind:href="companyInfo.link" class="link">{{ companyInfo.link }}</a>
    </p>
    <KakaoMap />
    <div class="map">지도가 들어갈 부분입니다..</div>
    <!-- <CompanyMap /> -->
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
    <div class="bottomContainer">
      <div class="comment good">
        <span style="font-weight: 700"
          >{{ companyInfo.goodComment.percent }}%</span
        >의 사람들이 {{ companyInfo.goodComment.content }}을(를) 칭찬합니다.
      </div>
      <div class="comment bad">
        <span style="font-weight: 700"
          >{{ companyInfo.badComment.percent }}%</span
        >의 사람들이 {{ companyInfo.goodComment.content }}을(를) 아쉬워합니다.
      </div>
      <div class="rateDetailContainer">
        <div
          class="eachRate"
          v-for="(item, index) in companyInfo.rateDetail"
          v-bind:key="index"
        >
          <div class="star">
            <span v-for="i in 5 - index" v-bind:key="i">⭐</span>
          </div>
          <div class="percentBox">
            <div class="percentBar blue" />
            <div class="percentBar gray" />
          </div>
          <div class="percent">{{ item }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CompanyMap from "./CompanyMap.vue";
import KakaoMap from "./KaKaoMap.vue";
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
      },
    };
  },
  components: { KakaoMap },

  mounted() {},

  methods: {},
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
.name {
  font-weight: 500;
  font-size: 40px;
  line-height: 59px;
}
.sub {
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 22px;
  .subname {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-right: 15px;
  }
  .location {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #9b9b9b;
  }
}
.tagContainer {
  display: flex;
  margin-bottom: 35px;
  .tag {
    border: 1px solid #0376db;
    border-radius: 28.5px;
    padding: 10px 25px;
    margin-right: 18px;
    color: #515151;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
}
.description {
  margin-top: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  white-space: pre-line;
  .link {
    text-decoration: none;
    color: #0376db;
  }
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
.bottomContainer {
  margin-top: 30px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 30px;
  .comment {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
  }
  .strong {
    font-weight: 700;
  }
}
.rateDetailContainer {
  margin-top: 30px;
  .eachRate {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .star {
      width: 15%;
    }
  }
  .percentBox {
    margin-left: 20px;
    margin-right: 10px;
    display: flex;
    width: 300px;
    background: #9b9b9b;
    height: 10px;
    .blue {
      background: #0376db;
      width: 50%;
    }
  }
}
</style>
