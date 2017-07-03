/**
 * Created by Administrator on 2017/7/3.
 */
import modules from '@/modules'
import {GET_USER_INFO} from './mutation-types'
import {getUserInfo} from '@/service/AjaxEngin'
export default {
  [GET_USER_INFO](state){
      let res=this.getUserInfo()
      return res.data
  }
}
