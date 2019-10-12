<template>
  <div>
    <div class="like-banner">为商家搭起一座桥梁</div>
    <h3 class="about-title">简化用户操作流程</h3>
    <h5 style="font-size:12px;color:#333333;text-align:center;margin-bottom:20px;">SIMPLIFY USER OPERATION PROCESS</h5>
    <p class="des-p">筑商小程序已经有完善的服务系统,</p>
    <p class="des-p">全程线上操作,最大化的减少用户时间成本,最高效的为客户服务</p>
    <div class="show-box">
        <img src="../../static/images/cutShow2.png" alt="">
        <img src="../../static/images/cutShow3.png" alt="">
    </div>
    <div class="des-p" style="margin-top:30px;">筑商业务运营进入良性循环</div>
    <p class="des-p">筑商的访问人数正处稳定增长的状态,越来越多商家的信任着筑商,筑商将会提供更好的服务。</p>
    <img style="display:block; margin:20px auto;" src="../../static/images/cutShow4.png" alt="">
  </div>
</template>

<script>
export default {
  name: "About",
 created() {},
  methods: {}
};
</script>

<style scope>
.like-banner {
  width: 100%;
  height: 420px;
  display: flex;
  background: url(../../static/images/LBanner.jpg) no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  color: #ffffff;
}
.show-box{
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-around;
}
.about-title{
    margin: 30px auto 0;
    font-size: 36px;
    color: #333333;
    font-weight: 800;
    text-align: center;
}
.des-p{
    text-align:center;
    font-weight: 800;
    font-size: 22px;
    color: #333333;
    line-height: 36px;
}
</style>