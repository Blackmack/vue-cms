/**
 * Created by Administrator on 2017/7/4.
 */
import  axios from 'axios'
import  env from './config.env'
var instance = axios.create({
  baseURL: env.baseUrl,
  timeout: 1000,
  headers: {'X-Requested-with':'XMLHttpRequest','Content-Type': 'application/x-www-form-urlencoded'}
})
export  default instance
