<template>
  <div class="regist-box">
    <h1 style="font-size:30px;color:#333333;text-align:center;margin:30px auto;">欢迎注册筑商账号</h1>
    <div>
      <el-steps :space="200" :active="active" finish-status="success" align-center>
        <el-step title="验证手机"></el-step>
        <el-step title="实名验证"></el-step>
        <el-step title="设置密码"></el-step>
        <el-step title="完成注册"></el-step>
      </el-steps>
    </div>
    <div class="phone">
      <el-input placeholder="请输入手机号" v-model="phone">
        <template slot="prepend">+186</template>
      </el-input>
      <el-button style="margin:20px 0;" type="primary">获取验证码</el-button>
      <el-input placeholder="请输入验证码" v-model="code" clearable></el-input>
    </div>
    <el-button style="margin:20px auto;display:block;" type="primary">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: "Regist",
  data() {
    return {
      active: 0,
      phone: "",
      code:''
    };
  }
};
</script>

<style>
.regist-box {
  width: 1000px;
  margin: auto;
  background: #ffffff;
}
.el-steps--horizontal {
  justify-content: center;
}
.phone {
  width: 400px;
  /* margin: auto; */
  padding-left: 170px;
  margin: 30px 0;
}
</style>