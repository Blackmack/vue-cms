/**
 * Created by Administrator on 2017/7/3.
 */
const files=require.context('.',false,/\.js$/)
const  modules={
}
files.keys().forEach((key)=>{
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
export  default modules
