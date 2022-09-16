<<<<<<< HEAD
import Vue from 'vue';
import VueRouter from 'vue-router';
import MainBody from './components/EmployerUser/MainBody.vue'
import ResisterBody from './components/Login/ResisterBody.vue'
import ResisterBodyEnterprise from './components/Login/ResisterEnterprise/ResisterBodyEnterprise'
import ResisterBodyEnterpriseInfo from './components/Login/ResisterEnterprise/ResisterBodyEnterpriseInfo'
Vue.use(VueRouter);

export const router = new VueRouter({
	mode:'history', //해쉬값 제거 방식
    routes: [{
        path: '/', 
        redirect: '/home' 
    }, {
        path: '/home',
        component: MainBody
    },{ //별칭 이용할 것 추후
        path:'/resister',
        component: ResisterBody,
        name:'Resister',
        props:true
    },{
        path:'/resister-Enterprise',
        component:ResisterBodyEnterprise,
        name:'ResisterEnterprise',
        props:true
    },{
        path:'/resister-Enterprise-Info',
        component:ResisterBodyEnterpriseInfo,
        name:'ResisterEnterpriseInfo',
        props:true
        
    }]
});
=======
import Vue from "vue";
import VueRouter from "vue-router";
import MainBody from "./components/EmployerUser/MainBody.vue";
import ResisterBody from "./components/Login/ResisterBody.vue";
import CompanyDetail from "./components/company/detail/CompanyDetail.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", //해쉬값 제거 방식
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: MainBody,
    },
    {
      path: "/resister",
      component: ResisterBody,
      name: "Resister",
      props: true,
    },
    {
      path: "/company_detail",
      component: CompanyDetail,
      name: "Company Detail",
      props: true,
    },
  ],
});
>>>>>>> 053c22dee1f0b4491515702e74bf46848ee24b1a
