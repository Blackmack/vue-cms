/**
 * Created by huangchuang on 2017/7/4 0004.
 */
import {GET_USER_INFO} from '@/store/mutation-types'
import {getUserInfo} from '@/service/AjaxEngin'

const state={
    count:10
}
const actions={
   getUserInfos({commit,state}){
     let res=getUserInfo()
     commit(GET_USER_INFO,res.data)
     return res.data
   }
}
const mutations={
    [GET_USER_INFO](state){
      state.count++
    }
}
export  default {
  state,
  actions,
  mutations
}
