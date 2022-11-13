<template>
  <div>
    <div class="detailView" v-if="detailData">
      <div class="generalUser" v-if="type === 'general'">
        <div class="topToggle">
          <div
            class="toggleOption"
            @click="changeTab(1)"
            :class="tab === 1 ? 'active' : ''"
          >
            일반회원정보
          </div>
          <div
            class="toggleOption"
            @click="changeTab(2)"
            :class="tab === 2 ? 'active' : ''"
          >
            활동정보
          </div>
        </div>
        <div class="userInfoTab" v-if="tab === 1">
          <div class="basicInfo">
            • 기본 정보
            <div class="userInfoTable" style="border-right: 1px solid #d9d9d9">
              <div class="eachLine">
                <div class="label">회원 상태</div>
                <div class="content">
                  <b-form-select
                    class="state-option"
                    v-model="userState"
                    :options="options"
                  />
                </div>
                <div class="label">유형</div>
                <div class="content">일반회원</div>
              </div>
              <div class="eachLine">
                <div class="left" style="display: flex">
                  <div class="label" style="height: 167px">프로필사진</div>
                  <div class="content">
                    <div
                      class="photo"
                      style="
                        border: 1px solid #b7b7b7;
                        width: 120px;
                        height: 120px;
                      "
                    ></div>
                    <div class="filename"></div>
                  </div>
                </div>
                <div class="right">
                  <div style="display: flex; border-bottom: 1px solid #d9d9d9">
                    <div class="label">회원이메일</div>
                    <div class="content">{{ detailData.mail }}</div>
                  </div>
                  <div style="display: flex; border-bottom: 1px solid #d9d9d9">
                    <div class="label">연락처</div>
                    <div class="content">
                      <input type="text" class="kInput" v-model="phone" />
                      <div class="certificate">확인</div>
                    </div>
                  </div>
                  <div style="display: flex">
                    <div class="label">이름</div>
                    <div class="content">
                      <input type="text" class="kInput" v-model="name" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="eachLine">
                <div class="label">가입경로</div>
                <div class="content">{{ detailData.joinType }}</div>
              </div>
              <div class="eachLine">
                <div class="label">가입일시</div>
                <div class="content">{{ detailData.finalLogin }}</div>
              </div>
              <div class="eachLine">
                <div class="label">최종 로그인정보</div>
                <div class="content">{{ detailData.finalLogin }}</div>
              </div>
              <div class="eachLine">
                <div class="label">탈퇴일시</div>
                <div class="content">-</div>
              </div>
            </div>
          </div>
          <div class="plusInfo">
            • 추가 정보
            <div class="plusInfoTable">
              <div class="eachLine">
                <div class="label">성별</div>
                <div class="content">
                  <b-form-radio
                    style="margin-right: 40px"
                    v-model="sex"
                    name="men"
                    value="men"
                    >남성</b-form-radio
                  >
                  <b-form-radio v-model="sex" name="women" value="여"
                    >여성</b-form-radio
                  >
                </div>
                <div class="label">생년월일</div>
                <div class="content">
                  <b-form-datepicker
                    style="width: 180px"
                    class="datePicker"
                    id="birth"
                    v-model="birth"
                    placeholder="YYYY.MM.DD."
                    :date-format-options="{
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    }"
                    locale="kr"
                  />
                </div>
              </div>
              <div class="eachLine">
                <div class="label">직군</div>
                <div class="content">
                  <b-form-select
                    class="option"
                    v-model="userState"
                    :options="options"
                  />
                </div>
                <div class="label">경력</div>
                <div class="content">
                  <b-form-select
                    class="option"
                    v-model="userState"
                    :options="options"
                  />
                </div>
              </div>
              <div class="eachLine">
                <div class="label">스킬</div>
                <div class="content">
                  <input type="text" class="kInput" />
                </div>
                <div class="label">관심태그</div>
                <div class="content">
                  <input type="text" class="kInput" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="activeInfoTab" v-else>
          <div class="eachLine" v-for="(item, idx) in userInfoEx" :key="idx">
            <div class="label">{{ item.label }}</div>
            <div class="info">{{ item.value }}</div>
          </div>
        </div>
      </div>
      <div class="companyUser" v-else>
        <div class="topToggle">
          <div
            class="toggleOption"
            @click="changeTab(1)"
            :class="tab === 1 ? 'active' : ''"
          >
            기업회원정보
          </div>
          <div
            class="toggleOption"
            @click="changeTab(2)"
            :class="tab === 2 ? 'active' : ''"
          >
            활동정보
          </div>
        </div>
        <div class="userInfoTab" v-if="tab === 1">
          <div class="basicInfo">
            • 기본 정보
            <div class="userInfoTable" style="border-right: 1px solid #d9d9d9">
              <div class="eachLine">
                <div class="label">회원 상태</div>
                <div class="content">
                  <b-form-select
                    class="state-option"
                    v-model="userState"
                    :options="options"
                  />
                </div>
                <div class="label">유형</div>
                <div class="content">기업회원</div>
              </div>
              <div class="eachLine">
                <div class="left" style="display: flex">
                  <div class="label" style="height: 167px">프로필사진</div>
                  <div class="content">
                    <div
                      class="photo"
                      style="
                        border: 1px solid #b7b7b7;
                        width: 120px;
                        height: 120px;
                      "
                    ></div>
                    <div class="filename"></div>
                  </div>
                </div>
                <div class="right">
                  <div style="display: flex; border-bottom: 1px solid #d9d9d9">
                    <div class="label">회원이메일</div>
                    <div class="content">{{ detailData.mail }}</div>
                  </div>
                  <div style="display: flex; border-bottom: 1px solid #d9d9d9">
                    <div class="label">연락처</div>
                    <div class="content">
                      <input type="text" class="kInput" v-model="phone" />
                      <div class="certificate">확인</div>
                    </div>
                  </div>
                  <div style="display: flex">
                    <div class="label">이름</div>
                    <div class="content">
                      <input type="text" class="kInput" v-model="name" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="eachLine">
                <div class="label">가입경로</div>
                <div class="content">{{ detailData.joinType }}</div>
              </div>
              <div class="eachLine">
                <div class="label">가입일시</div>
                <div class="content">{{ detailData.finalLogin }}</div>
              </div>
              <div class="eachLine">
                <div class="label">최종 로그인정보</div>
                <div class="content">{{ detailData.finalLogin }}</div>
              </div>
              <div class="eachLine">
                <div class="label">탈퇴일시</div>
                <div class="content">-</div>
              </div>
            </div>
          </div>
          <div class="plusInfo">
            • 추가 정보
            <div class="plusInfoTable">
              <div class="eachLine">
                <div class="label">기업명</div>
                <div class="content">
                  <input type="text" class="kInput w289" />
                </div>
                <div class="label">주소</div>
                <div class="content">
                  <input type="text" class="kInput w289" />
                </div>
              </div>
              <div class="eachLine">
                <div class="label">설립연도</div>
                <div class="content">
                  <input type="text" class="kInput w289" />
                </div>
                <div class="label">사업자 등록번호</div>
                <div class="content">
                  <input type="text" class="kInput w289" />
                </div>
              </div>
              <div class="eachLine">
                <div class="label" style="font-size: 19.5px">
                  매출액 또는 투자금
                </div>
                <div class="content">
                  <input type="text" class="kInput w289" />
                </div>
                <div class="label">직원수</div>
                <div class="content">
                  <input type="text" class="kInput w289" />
                </div>
              </div>
              <div class="eachLine">
                <div class="label">담당자 이름</div>
                <div class="content">
                  <input type="text" class="kInput w289" />
                </div>
                <div class="label">담당자 연락처</div>
                <div class="content">
                  <input type="text" class="kInput w289" />
                </div>
              </div>
              <div class="eachLine">
                <div class="label">서비스 앱</div>
                <div class="content">
                  <input type="text" class="kInput w289" />
                </div>
                <div class="label">서비스 URL</div>
                <div class="content">
                  <input type="text" class="kInput w289" />
                </div>
              </div>
              <div class="eachLine taller">
                <div class="label">기업로고</div>
                <div class="content"></div>
                <div class="label">상세이미지</div>
                <div class="content"></div>
              </div>
              <div class="eachLine taller" style="height: 139px">
                <div class="label">기업 서비스소개</div>
                <div class="content">
                  <textarea class="kInput kTextArea" rows="10" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="activeInfoTab" v-else>
          <div class="eachLine" v-for="(item, idx) in companyInfoEx" :key="idx">
            <div class="label">{{ item.label }}</div>
            <div class="info">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="list" v-else>
      <search-option-box />
      총 123,455 명의 사용자가 있습니다.
      <div class="userTable">
        <b-table
          class="userList"
          hover
          :items="items"
          :fields="fields"
          @row-clicked="goDetail"
        >
          <template #cell(check)="data">
            <b-check size="sm" class="mr-1" :value="data.value"></b-check>
          </template>
          <template #cell(detail)="data">
            <div style="text-decoration: underline">
              상세보기{{ data.value }}
            </div>
          </template>
        </b-table>
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
  </div>
</template>

<script>
import { companyInfoEx, userInfoEx, userListEx } from "@/data/admin";
import { userField } from "@/data/tableFieldData";
import searchOptionBox from "../../search/searchOptionBox.vue";
export default {
  components: { searchOptionBox },
  data() {
    return {
      items: userListEx,
      fields: userField,
      clickedPage: 1,
      type: null,
      num: null,
      detailData: null,
      tab: 1,
      userInfoEx: userInfoEx,
      companyInfoEx: companyInfoEx,
      options: [
        { value: null, text: "상태" },
        { value: "active", text: "활성" },
        { value: "inactive", text: "비활성" },
      ],
      userState: null,
      sex: null,
      birth: null,
      phone: null,
      name: null,
    };
  },
  methods: {
    clickPage: function (index) {
      this.clickedPage = index;
    },
    goDetail: function (item) {
      const { num, type } = item;
      this.$router.push({
        query: { type: type === "일반회원" ? "general" : "company", id: num },
      });
    },
    setDetail: function () {
      const { type, id } = this.$route.query;
      this.type = type;
      this.num = id;
      this.detailData = userListEx.find((e) => e.num === Number(id));
      this.sex = this.detailData.sex;
      this.phone = this.detailData.call;
      this.name = this.detailData.name;
    },
    changeTab: function (tab) {
      this.tab = tab;
    },
  },
  watch: {
    $route() {
      this.setDetail();
    },
  },
  mounted() {
    this.setDetail();
  },
};
</script>

<style lang="scss" scoped>
.detailView {
  margin-top: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  .generalUser {
  }
  .userInfoTab {
    .basicInfo {
      margin-bottom: 75px;
      .state-option {
        width: 100px;
      }
      .certificate {
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        color: white;
        background: #515151;
        width: 65px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
      }
    }
    .plusInfo {
      margin-bottom: 100px;
      .option {
        width: 200px;
      }
      .plusInfoTable {
        margin-top: 10px;
      }
    }
    .kInput {
      min-width: 200px;
      border: 1px solid #b7b7b7;
      outline: none;
      padding: 5px;
      height: 35px;
    }
    .kTextArea {
      resize: none;
      width: 988px;
      height: 100px;
    }
    .taller {
      height: 104px;
      .label {
        height: 100%;
      }
    }
    .eachLine {
      display: flex;
      border-bottom: 1px solid #d9d9d9;
      &:first-child {
        border-top: 1px solid #d9d9d9;
        margin-top: 8px;
      }
    }
    .label {
      height: 55px;
      width: 204px;
      background: #ededee;
      display: flex;
      align-items: center;
      padding-left: 31px;
    }
    .content {
      min-width: 400px;
      display: flex;
      align-items: center;
      padding-left: 31px;
    }
  }
  .activeInfoTab {
    border-top: 1px solid #d9d9d9d9;
    border-right: 1px solid #d9d9d9d9;
    width: 1255px;
    .eachLine {
      display: flex;
      height: 55px;
      border-bottom: 1px solid #d9d9d9;
      .w289 {
        width: 289px;
      }
      .label {
        width: 204px;
        background: #ededee;
        display: flex;
        align-items: center;
        padding-left: 31px;
      }
      .info {
        display: flex;
        align-items: center;
        padding-left: 31px;
      }
    }
  }
  .topToggle {
    display: flex;
    margin-bottom: 30px;
  }
  .toggleOption {
    width: 150px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: #878787;
    border: 1px solid #d9d9d9;
    cursor: pointer;
  }
  .active {
    color: black;
    background: #ededee;
  }
}
</style>
