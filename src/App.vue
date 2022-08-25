<template>
  <div id="app">
    <MainHeader></MainHeader>
    <router-view></router-view>	
    hi kiper!
  </div>
</template>


<script>
import MainHeader from './components/PersonalUser/MainHeader/MainHeader.vue'
export default {
  components:{
    MainHeader,
  }
}
</script>

<style>

</style>