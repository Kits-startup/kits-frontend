<template>
  <div>
    <div
      class="gotoCompany"
      @click="() => this.$router.push('/company_detail/1')"
    >
      기업 소개 페이지 확인하러 가기
    </div>
    <div
      class="gotoManagement"
      @click="() => this.$router.push('/company_management')"
    >
      기업 관리 페이지로 이동
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
