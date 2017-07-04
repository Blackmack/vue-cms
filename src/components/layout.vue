<template>
  <div id="wrap">
    <div id="navTop">
      <el-menu theme="dark" :defaultActive="activeIndex" class="el-menu-demo"  router mode="horizontal" @select="handleSelect">
        <el-menu-item index="/home">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="/home">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="/list">订单管理</el-menu-item>
      </el-menu>
    </div>
    <div id="content">
      <div id="leftNav">
        <el-menu theme="dark" defaultActive="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </div>
      <div id="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export  default{
    data(){
      return {
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
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .el-menu {
    border-radius: 0;
    height: 100%;
  }
  #navTop{
    height:60px;
  }
  #leftNav {
    position: absolute;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 180px;
  }

  #main {
    position: absolute;
    top:60px;
    bottom:0;
    right:0;
    left: 180px;
    background-color: #eaedf1;
    padding:20px;
  }

</style>
