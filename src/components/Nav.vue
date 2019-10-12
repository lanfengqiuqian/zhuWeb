<template>
  <div class="head-container" style="width:1200px;margin:auto;">
    <div class="left-nav">
      <img src="../assets/logo.jpeg" class="logo" alt="logo" />
      <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex">
        <el-menu-item index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/Prodect">平台服务</router-link>
        </el-menu-item>
        <!-- <el-submenu index="3">
          <template slot="title">解决方案</template>
          <el-menu-item index="3-1">
            <router-link to="/Plan1">通用解决方案</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/Plan2">外卖行业解决方案</router-link>
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="/Plan3">物流行业解决方案</router-link>
          </el-menu-item>
          <el-menu-item index="3-4"><router-link to="/Plan4">制造业行业解决方案</router-link></el-menu-item>
        </el-submenu> -->
        <el-menu-item index="3"><router-link to="/About">关于筑商</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/Callus">联系我们</router-link></el-menu-item>
      </el-menu>
    </div>
    <div class="logIn-wrap">
      <el-button type="primary" disabled> 登录 </el-button>
      <el-button type="primary" disabled>注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    goRoute(n) {
      this.$router.push({
        path: `/Plan2`,
        query: {
          keye:n,
        }
      });
    }
  }
};
</script>

<style>
@import url(../../static/css/nav.css);
</style>