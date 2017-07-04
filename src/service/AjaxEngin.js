/**
 * Created by Administrator on 2017/7/3.
 */
import  axios from '@/config/config.axios'
export  const getUserInfo=()=>axios.get('/getInfos')
