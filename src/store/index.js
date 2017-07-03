/**
 * Created by Administrator on 2017/7/3.
 */
import  Vue from 'vue'
import  Vuex from 'vuex'
import  mutations from './mutations'
import  modules from './modules'

Vue.use(Vuex)
const  state={
   userId:1
}
export  default  new  Vuex.Store({
  state,
  mutations,
  modules:{
    ...modules
  }
})
