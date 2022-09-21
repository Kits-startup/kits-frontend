import Vue from "vue";
import VueRouter from "vue-router";
import MyMainBody from "./components/EmployerUser/MyPage/MyPage.vue";
import ResisterBody from "./components/Login/ResisterBody.vue";
import CompanyDetail from "./pages/CompanyDetail.vue";
import ResisterBodyEnterprise from "./components/Login/ResisterEnterprise/ResisterBodyEnterprise";
import ResisterBodyEnterpriseInfo from "./components/Login/ResisterEnterprise/ResisterBodyEnterpriseInfo";
import CompanyRecruit from "./pages/CompanyRecruit.vue";
import testMain from "./components/testMain.vue";
import MyActivity from "./components/EmployerUser/MyPage/MyActivity/MyActivity.vue";
import MyProfile from "./components/EmployerUser/MyPage/MyProfile/MyProfile.vue";
import MyAlarm from "./components/EmployerUser/MyPage/MyAlarm/MyAlarm.vue"
import MySetting from "./components/EmployerUser/MyPage/MySetting/MySetting.vue"
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
      component: testMain,
    },
    {
      path: "/mypage",
      component: MyMainBody,
      name: "Mypage",
      children: [
        { path: "activity",name:"Mypage-Activity", component: MyActivity },
        { path: "profile",name:"Mypage-Profile", component: MyProfile },
        { path: "alarm",name:"Mypage-Alarm", component:  MyAlarm},
        { path: "profile",name:"Mypage-Setting", component:  MySetting},

      ],
    },
    {
      //별칭 이용할 것 추후
      path: "/resister",
      component: ResisterBody,
      name: "Resister",
      props: true,
    },
    {
      path: "/resister-Enterprise",
      component: ResisterBodyEnterprise,
      name: "ResisterEnterprise",
      props: true,
    },
    {
      path: "/resister-Enterprise-Info",
      component: ResisterBodyEnterpriseInfo,
      name: "ResisterEnterpriseInfo",
      props: true,
    },
    {
      path: "/company_detail/:id",
      component: CompanyDetail,
      name: "Company Detail",
      props: true,
    },

    {
      path: "/company_recruit/:id",
      component: CompanyRecruit,
      name: "Company Recruit",
      props: true,
    },
  ],
});
