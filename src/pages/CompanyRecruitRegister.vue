<template>
  <div class="bigContainer">
    <h1 class="title">기업공고 등록 페이지</h1>
    <b-form-group class="label" id="name" label="공고제목" label-for="name">
      <b-form-input
        class="kInput"
        id="name"
        v-model="name"
        trim
        placeholder="공고 제목을 입력해주세요."
      />
      <div class="length">{{ name.length }}/20</div>
    </b-form-group>
    <div class="label" style="margin-top: 30px">직군/직무</div>
    <div class="selectBox">
      <select-box-vue :options="options.type" />
      <select-box-vue :options="options.detail" />
      <select-box-vue :options="options.skill" />
    </div>
    <div class="label" style="margin-top: 30px">고용 형태</div>
    <select-box-vue :options="options.work_type" style="width: max-content" />
    <b-form-group
      style="margin-top: 30px"
      class="label"
      id="earn"
      label="연봉"
      label-for="earn"
    >
      <div
        style="
          display: flex;
          width: 425px;
          align-items: center;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
        "
      >
        <b-form-input
          class="kInput"
          style="width: 425px"
          id="earn"
          v-model="earn"
          trim
        /><span style="color: #515151; margin-left: -50px">만원</span>
      </div>
    </b-form-group>
    <div class="label" style="margin-top: 44px">공고 마감일</div>
    <b-form-datepicker
      class="kInput"
      id="due_date"
      v-model="duedate"
      style="width: 425px; padding: 10px"
      :placeholder="new Date().toLocaleDateString()"
      dropright
      label-help="화살표를 이용해서 년/월을 이동할 수 있습니다."
      :label-no-date-selected="new Date().toLocaleDateString()"
      locale="kr-KR"
      label-prev-month="이전 달"
      label-prev-year="이전 년도"
      label-next-month="다음 달"
      label-next-year="다음 년도"
      label-current-month="이번 달"
    />
    <b-form-group
      class="label"
      id="main_job"
      label="주요 담당 업무"
      label-for="main_job"
      style="margin-top: 44px"
    >
      <b-form-textarea
        class="kInput"
        rows="10"
        id="main_job"
        v-model="main_job"
        trim
        placeholder="상세한 주요 업무 및 담당 업무 내용을 입력해주세요."
      />
      <div class="length">{{ main_job.length }}/4000</div>
    </b-form-group>
    <b-form-group
      class="label"
      id="prefer"
      label="우대사항"
      label-for="prefer"
      style="margin-top: 70px"
    >
      <b-form-textarea
        class="kInput"
        rows="10"
        id="prefer"
        v-model="prefer"
        trim
        placeholder="우대사항 내용을 입력해주세요."
      />
      <div class="length">{{ prefer.length }}/4000</div>
    </b-form-group>
    <b-form-group
      class="label"
      id="benefit"
      label="혜택 및 복지"
      label-for="benefit"
      style="margin-top: 70px"
    >
      <b-form-textarea
        rows="10"
        id="benefit"
        class="kInput"
        v-model="benefit"
        trim
        placeholder="헤택및 복지 내용을 입력해주세요."
      />
      <div class="length">{{ benefit.length }}/4000</div>
    </b-form-group>
    <b-form-group
      class="label"
      id="culture"
      label="조직문화"
      label-for="culture"
      style="margin-top: 70px"
    >
      <b-form-textarea
        rows="5"
        class="kInput"
        id="culture"
        v-model="culture"
        trim
        placeholder="조직문화 내용을 입력해주세요."
      />
      <div class="length">{{ culture.length }}/500</div>
    </b-form-group>
    <b-form-group
      class="label"
      id="etc"
      label="기타세부사항"
      label-for="etc"
      style="margin-top: 55px"
    >
      <b-form-input
        id="etc"
        class="kInput"
        v-model="etc"
        trim
        placeholder="기타세부사항 내용을 입력해주세요."
      />
    </b-form-group>
    <div class="label" style="margin-top: 60px">근무지</div>
    <div style="display: flex; align-items: center">
      <input
        type="text"
        class="kInput"
        placeholder="주소를 검색해주세요"
        :value="addressSet.final"
        :readonly="true"
        style="width: 806px"
      />
      <input
        class="submit searchBtn"
        @click="execDaumPostcode()"
        type="submit"
        value="검색"
      />
    </div>
    <input
      type="text"
      class="kInput"
      placeholder="상세주소를 입력해주세요"
      v-model="detailAdress"
      style="width: 100%; margin-top: 20px"
    />
    <div id="map"></div>
    <div class="bottomSubmitContainer">
      <div class="kBtn white cancle">취소</div>
      <div class="kBtn temp">임시 저장</div>
      <div class="kBtn submit">공고 등록</div>
    </div>
  </div>
</template>

<script>
import SelectBoxVue from "@/components/select/SelectBox.vue";
import {
  opt_type,
  opt_dev_detail,
  opt_dev_skill,
  work_type,
} from "@/data/options.js";
export default {
  components: {
    SelectBoxVue,
  },
  data() {
    return {
      name: "",
      earn: "",
      duedate: "",
      main_job: "",
      prefer: "",
      benefit: "",
      culture: "",
      detailAdress: "",
      etc: "",
      options: {
        type: opt_type,
        detail: opt_dev_detail,
        skill: opt_dev_skill,
        work_type,
      },
      addressSet: {
        inputDisable: false,
        postcode: "",
        address: "",
        final: "",
        extraAddress: "",
      },
    };
  },
  methods: {
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.addressSet.extraAddress !== "") {
            this.addressSet.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.addressSet.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.addressSet.address = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.addressSet.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.addressSet.extraAddress +=
                this.addressSet.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.addressSet.extraAddress !== "") {
              this.addressSet.extraAddress = `(${this.addressSet.extraAddress})`;
            }
          } else {
            this.addressSet.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.addressSet.postcode = data.zonecode;
          this.addressSet.final =
            this.addressSet.address + " [" + this.addressSet.postcode + "]";
        },
      }).open();
      this.initMap();
    },
    initMap() {
      const container = document.getElementById("map");
      var geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        this.addressSet.address,
        function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            const options = {
              center: new kakao.maps.LatLng(result[0].y, result[0].x),
              level: 3,
            };
            let map = new kakao.maps.Map(container, options);
            new kakao.maps.Marker({
              map,
              position: coords,
            });
          }
        }
      );
    },
    // displayMarker() {
    //   const container = document.getElementById("map");
    //   var geocoder = new kakao.maps.services.Geocoder();
    //   geocoder.addressSearch(
    //     this.addressSet.address,
    //     function (result, status) {
    //       if (status === kakao.maps.services.Status.OK) {
    //         console.log(result);
    //         var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    //         const options = {
    //           center: new kakao.maps.LatLng(result[0].y, result[0].x),
    //           level: 5,
    //         };
    //         let map = new kakao.maps.Map(container, options);
    //         new kakao.maps.Marker({
    //           map,
    //           position: coords,
    //         });
    //       }
    //     }
    //   );
    // },
  },
  mounted() {},
  updated() {
    this.$nextTick(function () {
      if (window.kakao && window.kakao.maps) {
        this.initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0&libraries=services";
        document.head.appendChild(script);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.bigContainer {
  width: 942px;
  margin: auto;
  textarea {
    resize: none;
    padding: 15px 20px;
  }
  input {
    padding: 15px 10px;
  }
  .title {
    font-size: 26px;
    line-height: 35px;
    margin-bottom: 27px;
  }
  .label {
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 6px;
  }
  .length {
    text-align: right;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #515151;
  }
  .selectBox {
    display: flex;
  }
  .kInput {
    border: #0376db 1px solid;
    border-radius: 0;
    margin-top: 6px;
  }
  .searchBtn {
    width: 150px;
    background: #0376db;
    color: white;
    font-size: 20px;
    line-height: 27px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    margin-top: 6px;
  }
  .bottomSubmitContainer {
    display: flex;
    justify-content: center;
    margin: 100px 0;
    .kBtn {
      width: 150px;
      background: #0376db;
      color: white;
      font-size: 20px;
      line-height: 27px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 8px;
    }
    .white {
      color: #0376db;
      background: white;
      border: 1px solid #0376db;
    }
  }
  #map {
    margin-top: 16px;
    height: 457px;
    background: #efefef;
  }
}
</style>
