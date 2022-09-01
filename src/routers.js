import Vue from 'vue';
import VueRouter from 'vue-router';
import MainBody from './components/PersonalUser/MainBody.vue'
import ResisterBody from './components/Login/ResisterBody.vue'
Vue.use(VueRouter);

export const router = new VueRouter({
	mode:'history', //해쉬값 제거 방식
    routes: [{
        path: '/', 
        redirect: '/home' 
    }, {
        path: '/home',
        component: MainBody
    },{
        path:'/resister',
        component: ResisterBody,
        name:'Resister',
        props:true
    }]
});