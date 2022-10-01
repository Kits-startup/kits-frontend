import Vue from "vue";
import VueRouter from "vue-router";
import MyMainBody from "./components/EmployerUser/MyPage/MyPage.vue";
import ResisterBody from "./components/Login/ResisterBody.vue";
import CompanyDetail from "./pages/CompanyDetail.vue";
import CompanyManagement from "./pages/CompanyManagement";
import ApplierManagement from "./pages/ApplierManagement";
import ResisterBodyEnterprise from "./components/Login/ResisterEnterprise/ResisterBodyEnterprise";
import ResisterBodyEnterpriseInfo from "./components/Login/ResisterEnterprise/ResisterBodyEnterpriseInfo";
import CompanyRecruit from "./pages/CompanyRecruit.vue";
import CompanyRecruitRegister from "./pages/CompanyRecruitRegister.vue";
import testMain from "./components/testMain.vue";
import MyActivity from "./components/EmployerUser/MyPage/MyActivity/MyActivity.vue";
import EditInfo from "./components/company/management/contents/EditInfo.vue";
import JobPosting from "./components/company/management/contents/JobPosting.vue";
import TalentPool from "./components/company/management/contents/TalentPool.vue";
import Payment from "./components/company/management/contents/MPayment.vue";
import MSetting from "./components/company/management/contents/MSetting.vue";
// import MyProfile from "./components/EmployerUser/MyPage/MyProfile/MyProfile.vue";
import MyAlarm from "./components/EmployerUser/MyPage/MyAlarm/MyAlarm.vue"
import MySetting from "./components/EmployerUser/MyPage/MySetting/MySetting.vue"
import BodyForProfile from "./components/EmployerUser/MyPage/MyProfile/BodyForProfile.vue"
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
        // { path: "profile",name:"Mypage-Profile", component: MyProfile },
        { path: "alarm",name:"Mypage-Alarm", component:  MyAlarm},
        { path: "setting",name:"Mypage-Setting", component:  MySetting},

      ],
    },
    {
      path: "/mypage/profile",
      component: BodyForProfile,
      name: "Mypage-Profile", 
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
    {
      path: "/company_management",
      component: CompanyManagement,
      name: "Comapny Management",
      children: [
        {
          path: "job-posting/:subtab",
          name: "management-job-posting-detail",
          component: JobPosting,
        },
        {
          path: "edit-info",
          name: "management-edit-info",
          component: EditInfo,
        },
        {
          path: "talent-pool",
          name: "management-talent-pool",
          component: TalentPool,
        },
        { path: "payment", name: "management-payment", component: Payment },
        { path: "setting", name: "management-setting", component: MSetting },
      ],
    },
    {
      path: "/company_recruit_register",
      component: CompanyRecruitRegister,
      name: "Company Recruit Register",
      props: true,
    },
    {
      path: "/company_applier_management",
      component: ApplierManagement,
      name: "Company Applier Management",
      props: true,
    },
  ],
});
