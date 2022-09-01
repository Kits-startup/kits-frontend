import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{
        isEmployer:true,
    },
    mutations:{
        changeUserType(state){
            state.isEmployer = !state.isEmployer;
        }
    }
})