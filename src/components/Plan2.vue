<template>
  <div>
    <div class="like-banner">{{title}}</div>
    <div style="width:1200px;margin:auto;" v-for="item in imgList1">
      <img :src="item" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Plan2",
  data() {
    return {
      imgList1: [
        require("../../static/images/wm02.jpg"),
        require("../../static/images/wm03.jpg"),
        require("../../static/images/wm04.jpg")
      ],
      title: "外卖行业解决方案"
    };
  },
  created() {},
  methods: {}
};
</script>

<style>
.like-banner {
  width: 100%;
  height: 420px;
  display: flex;
  background: url(../../static/images/wBanner.png) no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  color: #ffffff;
}
</style>