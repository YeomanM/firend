<template>
  <el-form :model="account" class="login-container" :rules="rules" label-position="left" label-width="0px">
    <h3 class="title">个人系统</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="false" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width: 100%" :loading="loading">登陆</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "MyLogin",
        data() {
            return {
                loading:false,
                account:{
                    username: "admin",
                    pwd: 123456
                },
                rules: {
                  username: [
                    {required: true,message: "请输入账号...",trigger: "blur"},
                  ],
                  pwd: [
                    {required: true,message:"请输入密码...",trigger: "blur"}
                  ]
                }
            }
        }
    }
</script>

<style>
  body{
    background: #DFE9FB;
  }
</style>

<style type="scss" scoped>
  .login-container {
    -webkit-border-radius:5px;
    border-radius: 5px;
    -moz-border-radius: 5px;

    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow:  0 0 25px #cac6c6;

    background: -ms-linear-gradient(top, #ace, #00C1DE); /* IE 10 */
    background: -moz-linear-gradient(top, #ace, #00C1DE); /*火狐*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ace), to(#00C1DE)); /*谷歌*/
    background: -webkit-linear-gradient(top, #ace, #00C1DE); /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top,#ace, #00C1DE); /*Opera 11.10+*/

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }

  }
</style>
