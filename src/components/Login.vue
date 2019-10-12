<template>
  <div class="login-box">
    <div class="login-container">
      <div>WELCOME TO ZHUPC TECHNOLOGY</div>
      <div class="form-box">
        <div style="text-align:center;">筑商账号登录</div>
        <el-form>
          <el-form-item label="账号：">
            <el-input class="input-l" placeholder="请输入账号" v-model="userName" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input class="input-l" placeholder="请输入密码" v-model="passWord" show-password></el-input>
          </el-form-item>
          <el-button class="logbtn" type="primary">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      passWord: ""
    };
  }
};
</script>

<style>
.login-box {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  background: url(../../static/images/nbg.jpg) no-repeat;
  background-size: cover;
  z-index: 999;
}
.login-container {
  width: 1200px;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-box {
  background: #ffffff;
  padding: 30px 30px 40px;
  /* width: 300px; */
  /* box-sizing: border-box; */
  border-radius: 10px;
  box-shadow: 2px 4px 10px #3333;
}
.logbtn{
  width: 100%;
  margin: 20px auto;
}
.input-l {
  width: 250px;
}
.el-form-item{
  margin-bottom: 0;
}
</style>