import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import home from '@/components/home'
import list from '@/views/list'

Vue.use(Router)

let routes=[
  {
    path: '/',
    component: layout,
    children:[
      {
        path:'/home',
        component:home
      },
      {
        path:'/list',
        component:list
      }
    ]

  }
]
export default routes
