<template>
  <div>
    <div
      class="like-banner"
      style="background: url(../../static/images/usBanner.jpeg) no-repeat;
  background-size: cover;"
    >{{title}}</div>
    <div style="text-align:center;margin:20px auto;color:#333333;font-size:30px;">如有业务需求可扫描底部二维码 </div>
    <p style="text-align:center;margin:20px auto;color:#333333;font-size:18px;">如有合作意向可留下您的联系方式</p>
    <el-form style="width:800px;margin:30px auto;" label-width="80px">
      <el-form-item label="手机">
        <el-input style="width: 300px;" v-model="phone" @blur="testPhone()"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input style="width: 300px;" v-model="userName" @blur="testName()"></el-input>
      </el-form-item>
      <el-form-item label="留言">
        <el-input style="width: 500px;" type="textarea" v-model="content" @blur="testCon()"></el-input>
      </el-form-item>
      <el-button style="margin-left:300px;" type="primary" @click="setUserInfo()">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Callus",

  data() {
    return {
      title: "联系筑商",
      userName: "",
      content: "",
      phone: "",
      clock: false
    };
  },
  methods: {
    testPhone() {
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.clock = false;
        this.$message({
          message: "请输入正确的手机格式",
          type: "warning"
        });
        this.phone = "";
      } else {
        this.clock = true;
      }
    },
    testName() {
      if (this.userName == "") {
        this.clock = false;
        this.$message({
          message: "请留下您的称呼",
          type: "warning"
        });
      } else {
        this.clock = true;
      }
    },
    testCon() {
      if (this.content == "") {
        this.clock = false;
        this.$message({
          message: "请留下您的建议",
          type: "warning"
        });
      } else {
        this.clock = true;
      }
    },
    setUserInfo() {
      if (this.clock) {
        // console.log(this.$axios);
        this.$axios.get(`/api?name=${this.userName}&phone=${this.phone}&content=${this.content}`).then(res => {
            console.log(res);
            const h = this.$createElement;
            this.$notify({
              title: "提交成功",
              message: h(
                "i",
                { style: "color: teal" },
                "很高兴收到您的留言,我们将在3个工作日内联系您"
              )
            });
            this.userName = '';
            this.phone = '';
            this.content = '';
            this.clock = false;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style>
.like-banner {
  width: 100%;
  height: 420px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  color: #ffffff;
}
.show-us {
  width: 1200px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.show-us > img {
  width: 300px;
  margin-right: 40px;
  border-radius: 20px;
}
input {
  width: 300px;
}
</style>