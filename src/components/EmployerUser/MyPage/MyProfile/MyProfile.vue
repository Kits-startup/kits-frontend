<template>
  <div class="body">
    <div class="oneBody" style="padding-bottom: 36px">
      <img id="edit" src="./edit.svg" alt="edit" />
      <div class="profile">
        <div class="profileFrame">
          <div class="imgFrame">
            <div class="img"></div>
            <div class="imgEdit">프로필 사진 수정</div>
          </div>
          <div class="infoFrame">
            <div class="nameFrame">
              <div class="name">이종빈</div>
              <div class="location">서울시 강남구</div>
            </div>
            <div class="subText">asdf@asdf.com</div>
            <div class="subText">010-1234-5678</div>
            <!-- <div class="subText">instagram : asdf</div> -->
          </div>
        </div>
        <div class="oneInputSet">
          <div class="inputTitle">자기 소개</div>
          <div class="inputBoxFrame">
            <textarea
              type="text"
              class="inputBox"
              placeholder="자기소개를 입력해주세요."
              v-model="intro"
            >
            </textarea>
            <div
              class="introLimit"
              v-bind:class="intro.length <= 4000 ? '' : 'tooLong'"
            >
              {{ intro.length }}/50
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="oneBody" style="padding-bottom: 36px">
      <img id="edit" src="./edit.svg" alt="edit" />
      <div class="title">학력</div>
      <div class="oneHistory">
        <div id="where">대한국민대학교</div>
        <div id="graduate">졸업</div>
        <div id="detail">4.5/4.06</div>
      </div>
      <div class="oneHistory">
        <div id="where">시각디자인 학과</div>
        <div id="detail">2022.01.01~2023.04</div>
      </div>
    </div>
    <div class="oneBody" style="padding-bottom: 36px">
      <img id="edit" src="./edit.svg" alt="edit" />
      <div class="title">경력사항</div>
      <div class="oneHistory">
        <div id="where">네이버 클라우드</div>
        <div id="detail">2022.0101~2023.04</div>
        <div id="graduate">재직중</div>
      </div>
      <div class="oneHistory">
        <div id="where">카카오 웹툰</div>
        <div id="detail">2022.0101~2023.04</div>
      </div>
    </div>
    <div class="oneBody">
      <img id="edit" src="./edit.svg" alt="edit" />
      <div class="title">보유기술</div>
      <div class="skillTable">
        <div v-for="item in skills" v-bind:key="item[0][0]" class="skillColumn">
          <div v-for="j in item" v-bind:key="j[0]" class="skillRow">
            <div class="aSkill">{{ j[0] }}</div>
            <div class="aSkill">{{ j[1] }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="oneBody">
      <img id="edit" src="./edit.svg" alt="edit" />
      <div class="title">자격증</div>
      <div class="skillTable">
        <div
          v-for="item in cetification"
          v-bind:key="item[0][0]"
          class="skillColumn"
        >
          <div v-for="j in item" v-bind:key="j[0]" class="skillRow">
            <div class="aSkill">{{ j[0] }}</div>
            <div class="aSkill">{{ j[1] }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="oneBody" style="padding-bottom: 36px">
      <img id="edit" src="./edit.svg" alt="edit" />
      <div class="title">경력사항</div>
      <div class="oneHistory">
        <div id="where">네이버 클라우드</div>
        <div id="detail">2022.0101~2023.04</div>
        <div id="graduate">재직중</div>
      </div>
      <div class="oneHistory">
        <div id="where">카카오 웹툰</div>
        <div id="detail">2022.0101~2023.04</div>
      </div>
    </div>

    <div class="oneBody" style="padding-top:36px;padding-bottom: 44px">
      <img id="edit" src="./edit.svg" alt="edit" />
      <div class="title" style="margin-bottom:32px;">성향</div>
      <div class="oneBarSet">
        <div class="barText">
          <div>외향형</div>
          <div>내향형</div>
        </div>
        <div class="barBox">
          <div class="grayBar"></div>
          <div class="blueBall"></div>
        </div>
        <div class="barPer">0%</div>
      </div>
      <div class="oneBarSet">
        <div class="barText">
          <div>외향형</div>
          <div>내향형</div>
        </div>
        <div class="barBox">
          <div class="grayBar"></div>
          <div class="blueBall"></div>
        </div>
        <div class="barPer">0%</div>
      </div>
      <div class="oneBarSet">
        <div class="barText">
          <div>외향형</div>
          <div>내향형</div>
        </div>
        <div class="barBox">
          <div class="grayBar"></div>
          <div class="blueBall"></div>
        </div>
        <div class="barPer">0%</div>
      </div>
      <div class="oneBarSet" style="margin-bottom:0px;">
        <div class="barText">
          <div>외향형</div>
          <div>내향형</div>
        </div>
        <div class="barBox">
          <div class="grayBar"></div>
          <div class="blueBall"></div>
        </div>
        <div class="barPer">0%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: "",
      skills: [
        [
          ["Java", "상"],
          ["Java", "상"],
          ["Java", "상"],
        ],
        [
          ["Python", "상"],
          ["Python", "상"],
          ["Python", "상"],
        ],
        [
          ["Node.JS", "상"],
          ["Node.JS", "상"],
          ["Node.JS", "상"],
        ],
      ],
      cetification: [
        [
          ["포토샵", "1급"],
          ["포토샵", "1급"],
          ["포토샵", "1급"],
        ],
        [
          ["중국어 신hsk", "6급"],
          ["중국어 신hsk", "6급"],
          ["중국어 신hsk", "6급"],
        ],
      ],
    };
  },
};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.oneBody {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 695px;
  padding: 29px 47px 24px 47px;
  margin-bottom: 72px;
  position: relative;
}

#edit {
  position: absolute;
  top: 30px;
  right: 30px;
}

.nameFrame {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.infoFrame {
  display: flex;
  flex-direction: column;
}
.name {
  font-style: normal;
  font-size: 22px;
  line-height: 30px;
  color: #515151;
}

.location {
  margin-left: 10px;
  font-size: 16px;
  line-height: 22px;
  color: #7c7c7c;
}
.profileFrame {
  display: flex;
  flex-direction: row;
}

.imgFrame {
  margin-right: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img {
  width: 108px;
  height: 108px;
  background: #eeeeee;
  border-radius: 5px;
}

.imgEdit {
  font-size: 10px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #515151;
  align-items: center;
  margin-top: 3px;
}
.subText {
  font-weight: 400;
  margin-top: 2px;
  font-size: 16px;
  line-height: 22px;
  color: #515151;
}

.oneInputSet {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 10px;
}
.inputTitle {
  font-size: 20px;
  line-height: 27px;
  color: #1f1f1f;
  margin-bottom: 9px;
}

.inputBox {
  height: 148px;
  background: #ffffff;
  border: 1px solid rgba(19, 19, 19, 0.25);
  border-radius: 3px;

  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #ada7a7;

  padding: 12px 23px 12px 23px;
  text-align: left;
}
.inputBox::placeholder {
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #ada7a7;
}

.inputBoxFrame {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.introLimit {
  position: absolute;
  right: 13px;
  bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #ada7a7;
}

.title {
  font-size: 20px;
  line-height: 27px;
  color: #1f1f1f;
  margin-bottom: 16px;
}

.oneHistory {
  display: flex;
  flex-direction: row;
}

#graduate {
  color: #0376db;
}

#detail {
  margin-bottom: 10px;
}

#where {
  width: 122px;
}

.oneHistory div {
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #515151;
  margin-right: 18px;
  margin-bottom: 13px;
}
.skillTable {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.skillColumn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}
.skillRow {
  width: 140px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
}

.aSkill {
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #515151;
}

.oneBarSet {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 46px;
}

.barText {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom:2px;
}
.barBox {
  position: relative;
  width: 100%;
  height: 24px;
}

.grayBar {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  width: 100%;
  background: #d9d9d9;
  height: 9px;
  border-radius: 9px;
}
.barText div {
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #515151;
}
.blueBall {
  position: absolute;
  height: 24px;
  width: 24px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 24px;
  background: #0376db;
}

.barPer {
  margin-top: 4px;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #0376db;
  text-align: center;
}
</style>
