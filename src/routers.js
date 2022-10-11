import Vue from "vue";
import VueRouter from "vue-router";
import CompanyDetail from "./pages/CompanyDetail.vue";
import CompanyManagement from "./pages/CompanyManagement";
import ApplierManagement from "./pages/ApplierManagement";
import TalentSearch from "./pages/TalentSearch";
import MainPage from "./pages/MainPage";
import CompanyRecruit from "./pages/CompanyRecruit.vue";
import CompanyRecruitRegister from "./pages/CompanyRecruitRegister.vue";
import MyMainBody from "./components/EmployerUser/MyPage/MyPage.vue";
import ResisterBody from "./components/Login/ResisterBody.vue";
import ResisterBodyEnterprise from "./components/Login/ResisterEnterprise/ResisterBodyEnterprise";
import ResisterBodyEnterpriseInfo from "./components/Login/ResisterEnterprise/ResisterBodyEnterpriseInfo";
import MyActivity from "./components/EmployerUser/MyPage/MyActivity/MyActivity.vue";
import EditInfo from "./components/company/management/contents/EditInfo.vue";
import JobPosting from "./components/company/management/contents/JobPosting.vue";
import Payment from "./components/company/management/contents/MPayment.vue";
import MSetting from "./components/company/management/contents/MSetting.vue";
import MyAlarm from "./components/EmployerUser/MyPage/MyAlarm/MyAlarm.vue";
import MySetting from "./components/EmployerUser/MyPage/MySetting/MySetting.vue";
import BodyForProfile from "./components/EmployerUser/MyPage/MyProfile/BodyForProfile.vue";
import Admin from "./admin/adminIndex.vue";
import Admin_Management from "./admin/components/contents/admin/adminManagement.vue";
import User_Management from "./admin/components/contents/user/userManagement.vue";
import approval_Management from "./admin/components/contents/approval/approvalManagement.vue";
import jobOpening_Management from "./admin/components/contents/jobOpening/jobOpeningManagement.vue";
import payment_Management from "./admin/components/contents/payment/paymentManagement.vue";
import notice_Management from "./admin/components/contents/notice/noticeManagement.vue";
import banner_Management from "./admin/components/contents/banner/bannerManagement.vue";
import qna_Management from "./admin/components/contents/qna/qnaManagement.vue";
Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history", //해쉬값 제거 방식
  routes: [
    {
      path: "/admin",
      component: Admin,
      name: "Admin Index",
      children: [
        {
          path: "management/:id",
          name: "Admin-management",
          component: Admin_Management,
        },
        {
          path: "user/:id",
          name: "Admin-user",
          component: User_Management,
        },
        {
          path: "approval/:id",
          name: "Admin-approval",
          component: approval_Management,
        },
        {
          path: "job-opening/:id",
          name: "Admin-job-opening",
          component: jobOpening_Management,
        },
        {
          path: "payment/:id",
          name: "Admin-payment",
          component: payment_Management,
        },
        {
          path: "notice/:id",
          name: "Admin-notice",
          component: notice_Management,
        },
        {
          path: "banner/:id",
          name: "Admin-banner",
          component: banner_Management,
        },
        {
          path: "qna/:id",
          name: "Admin-qna",
          component: qna_Management,
        },
      ],
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: MainPage,
    },
    {
      path: "/mypage",
      component: MyMainBody,
      name: "Mypage",
      children: [
        { path: "activity", name: "Mypage-Activity", component: MyActivity },
        // { path: "profile",name:"Mypage-Profile", component: MyProfile },
        { path: "alarm", name: "Mypage-Alarm", component: MyAlarm },
        { path: "setting", name: "Mypage-Setting", component: MySetting },
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
    {
      path: "/talent_search",
      component: TalentSearch,
      name: "Talent Search",
      props: true,
    },
  ],
});
