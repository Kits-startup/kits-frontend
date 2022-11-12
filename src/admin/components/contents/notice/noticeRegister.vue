<template>
  <div class="kContainer">
    <div class="eachLine">
      <div class="label">제목</div>
      <div class="content">
        <input
          type="text"
          class="kInput"
          v-model="title"
          placeholder="제목입력"
        />
        <div class="length">{{ title ? title.length : 0 }}/15</div>
      </div>
    </div>
    <div class="eachLine">
      <div class="label">첨부파일</div>
      <div class="content">
        <input type="file" class="kInput" />
        <div class="fileBtn">파일 찾기</div>
      </div>
    </div>
    <div class="eachLine">
      <div class="label">내용</div>
      <div class="content">
        <textarea
          rows="10"
          class="kTextarea"
          placeholder="내용 입력"
        ></textarea>
      </div>
    </div>
    <div class="bottomBtnContainer">
      <div class="kTbn register">등록</div>
      <div class="kTbn cancle">취소</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.kContainer {
  border-top: 1px solid #d9d9d9;
}
.eachLine {
  display: flex;
  border-bottom: 1px solid #d9d9d9;
}
.label {
  width: 204px;
  min-height: 55px;
  background: #ededee;
  display: flex;
  padding-left: 30px;
  align-items: center;
}
.content {
  width: 1000px;
  display: flex;
  display: flex;
  padding-left: 18px;
  align-items: center;
}
.kInput {
  border: 1px solid #b7b7b7;
  outline: none;
  padding: 5px;
  width: 400px;
  height: 36px;
}
.length {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #878787;
  margin-left: 4px;
}
.fileBtn {
  width: 106px;
  height: 36px;
  color: white;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  background: #0376db;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.kTextarea {
  border: 1px solid #b7b7b7;
  outline: none;
  padding: 5px;
  width: 90%;
  height: 90%;
  resize: none;
}
.bottomBtnContainer {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-top: 20px;
}
.kTbn {
  width: 151px;
  height: 57px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #0376db;
  border: 1px solid #0376db;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 8px;
  cursor: pointer;
}
.cancle {
  background: #0376db;
  color: white;
}
.register {
}
</style>
