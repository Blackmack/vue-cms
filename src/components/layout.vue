<template>
  <div id="wrap">
    <div id="navTop">
      <div class="homeBar">
        <el-menu theme="dark"  class="el-menu-demo"  router mode="horizontal" @select="handleSelect">
          <el-menu-item index="/">我的工作台</el-menu-item>
        </el-menu>
      </div>
      <div id="userInfo">
        <span>{{sayHelloMsg}}</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu theme="dark"  slot="dropdown" start>
            <el-dropdown-item index="/"><i class="el-icon-caret-bottom el-icon-setting"></i> 个人中心<el-badge class="mark" :value="3" /></el-dropdown-item>
            <el-dropdown-item index="/"><el-badge is-dot class="item">我的订单</el-badge></el-dropdown-item>
            <el-dropdown-item divided index="/list" is-dot>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div id="content">
      <div id="leftNav">
        <el-menu theme="dark" defaultActive="2" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <el-menu-item index="/list">列表</el-menu-item>
              <el-menu-item index="/form">表单</el-menu-item>
              <el-menu-item index="/transfer">穿越</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </div>
      <div id="main">
         <div class="main-content">
           <router-view></router-view>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
  export  default{
    data(){
      let hour = new Date().getHours(),helloMsg='';
      if(hour < 6){helloMsg="凌晨好！"}
      else if (hour < 9){helloMsg="早上好！"}
      else if (hour < 12){helloMsg="上午好！"}
      else if (hour < 14){helloMsg="中午好！"}
      else if (hour < 17){helloMsg="下午好！"}
      else if (hour < 19){helloMsg="傍晚好！"}
      else if (hour < 22){helloMsg="晚上好！"}
      else {helloMsg="夜里好！"}
      return {
          sayHelloMsg:helloMsg,
          userName:'admin',
          path:'/home',
          activeIndex:'2'
      }
    },
    methods: {
      handleSelect(){
//        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
//        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
//        console.log(key, keyPath);
      }
    }
  }
</script>
<style type="text/css">
    @import "../../static/style/common.css";
</style>
