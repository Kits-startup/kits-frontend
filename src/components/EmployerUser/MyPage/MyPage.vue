<template>
<div class="bodyMypage">
    <div class="forFlex leftSort">
        <LeftBar></LeftBar>
    </div>
    <div class="forFlex center">
        <router-view></router-view>
    </div>
    <div class="forFlex"></div>
</div>
</template>

<script>
import LeftBar from './MyLeftBar.vue';
export default {
    components: { LeftBar }
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