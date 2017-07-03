// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import  VueRouter from 'vue-router'
import  VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
// import  'bootstrap/dist/css/bootstrap.css'

import App from './App'
import Routers from './router/index'
import Home from './components/home'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI,{locale})

const  router=new VueRouter({
   mode:'history',
   routes:Routers
})

/* eslint-disable no-new */
var app=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
