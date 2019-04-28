<template>
  <div class="login">
    <h1>elm后台管理系统</h1>
    <div class="content">
      <input type="text" placeholder="用户名" ref="name">
      <input type="password" placeholder="密码" ref='psd'>
      <div>{{msg}}</div>
      <button @click='login'>登陆</button>
      <p>温馨提示：</p>
      <p>未登陆过的新用户，自动登陆</p>
      <p>注册过的用户可凭账号密码登录</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    login(){
      if(!this.$refs.name.value){
        return this.msg='请输入正确的用户名'
      }else if(!this.$refs.psd.value){
        return this.msg='请输入正确的密码'
      }else{
        axios.post('https://elm.cangdu.org/admin/login').then((res)=>{
          console.log(res.data)
          this.$router.push({path:'/manage'});
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login{
  text-align:center;
  background:#324057;
  width:100%;
  height:100%;
  padding-top:160px;
  h1{
    color:white;
  }
  div{
    font-size:12px;
    color:pink;
    margin-top:20px;
  }
  .content{
    margin-top:50px;
    border-radius: 15px;
    width:380px;
    height:300px;
    background:white;
    input{
      width:90%;
      height:40px;
      margin-top:25px;
      border-radius: 10px;
      border:none;
      border:1px solid gray;
      padding-left:10px;
    }
    button{
      width:90%;
      height:40px;
      margin-top:20px;
      border-radius: 10px;
      border:none;
      background:#20a0ff;
      color:white;
      font-size:18px;
    }
    p{
      font-size:13px;
      color:red;
    }
    p:nth-of-type(1){
      margin-top:15px;
    }
  }
}
</style>
