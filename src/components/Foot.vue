<template>
  <footer>
    <div class="foot-container">
      <div>
        <p style="font-size: 16px; margin-bottom: 10px;">CONTACT US</p>
        <p>企业合作咨询热线：18339635260</p>
        <p>产品使用咨询热线：18339635260</p>
      </div>
      <div style="display:flex;text-aglin:center;">
        <div>
          <img class="foot-img" src="../../static/images/cutWxxcx.jpg" alt />
          <p class="foot-str">筑商小程序</p>
        </div>
        <div>
          <img class="foot-img" src="../../static/images/cutWxgzh.png" alt />
          <p class="foot-str">筑商公众号</p>
        </div>
      </div>
      <div>
        <nav class="foot-nav" style="display:flex;">
          <li> <router-link to="/"> 首页 </router-link> </li>|
          <li> <router-link to="/Prodect"> 平台服务 </router-link> </li>|
          <li> <router-link to="/About"> 关于我们 </router-link> </li>|
          <li><router-link to="/Callus"> 联系我们 </router-link> </li>
        </nav>
      </div>
    </div>
    <div>
        <p style="text-align:center;">© 京ICP备16013310号-3</p>
        <ul class="key-des">
            <p>本站关键词:</p>
            <li>发票代开</li>|
            <li>营业执照办理</li>|
            <li>网银经办</li>
        </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Foot"
};
</script>

<style>
.foot-container {
  width: 1200px;
  margin: auto;
  border-top: 1px solid #ededed;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.foot-img {
  width: 100px;
  height: 100px;
  margin: 0 15px;
  border: 1px solid #ebebeb;
}
.foot-str {
  text-align: center;
}
.foot-nav {
  align-items: center;
}
.foot-nav li {
  margin: 0 3px;
  cursor: pointer;
}
.key-des{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>