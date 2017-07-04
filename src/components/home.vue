<template>
  <div class="wrap-content">
      <el-button @click="handleGetInfo">默认按钮</el-button>
      <el-button type="primary" >主要按钮</el-button>
      <el-button type="text">文字按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>

    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <el-alert title="成功提示的文案" type="success"></el-alert>

    <el-alert
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon>
    </el-alert>

    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  export default{
      data(){
          return {
            value1:2,
            activeIndex:1
          }
      },
      methods:{
        ...mapActions(['getUserInfos']),
        handleGetInfo(){
            console.log(this)
            this.getUserInfos()
              .then(res=>{
                console.log(res)
            })
        },
        open(){
            this.$alert('这是一段内容', '标题名称', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
          }
      }
  }
</script>
<style>

</style>
