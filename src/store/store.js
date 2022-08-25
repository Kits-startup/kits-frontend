import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{
        isPerson:true
    },
    mutations:{
        changeUserType(state){
            state.isPerson = !state.isPerson;
        }
    }
})