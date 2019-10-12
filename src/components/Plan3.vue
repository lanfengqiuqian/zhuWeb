<template>
  <div>
    <div class="like-banner">{{title}}</div>
    <div style="width:1200px;margin:auto;" v-for="item in imgList2">
      <img :src="item" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Plan3",
  data() {
    return {
      imgList2: [
        require("../../static/images/wl02.jpg"),
        require("../../static/images/wl03.jpg"),
        require("../../static/images/wl04.jpg"),
        require("../../static/images/wl05.jpg"),
        require("../../static/images/wl06.jpg"),
        require("../../static/images/wl07.jpg")
      ],
      title: "物流行业解决方案"
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
  background: url(../../static/images/wlBanner.png) no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  color: #ffffff;
}
</style>