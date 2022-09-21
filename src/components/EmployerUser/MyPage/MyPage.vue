<template>
<div class="bodyMypage">
    <div class="forFlex leftSort">
        <Rightbar></Rightbar>
    </div>
    <div class="forFlex center">
        <router-view></router-view>
    </div>
    <div class="forFlex"></div>
</div>
</template>

<script>
import Rightbar from './MyRightBar.vue';
export default {
    components: { Rightbar }
}
</script>

<style scoped>
.bodyMypage{
    display:flex;
    flex-direction: row;
    align-items: flex-start;
}
.forFlex{
    flex:1;
}

.leftSort{
    display:flex;
    flex-direction: row-reverse;
    align-items: flex-start;
}

.center{
    margin-right: 30px;
    margin-left:30px;
}
</style>