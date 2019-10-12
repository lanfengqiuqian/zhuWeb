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
  name: "Plan4",
  data() {
    return {
      imgList2: [
        require("../../static/images/zzy02.jpg"),
        require("../../static/images/zzy03.jpg"),
        require("../../static/images/zzy04.jpg")
      ],
      title: "制造业行业解决方案"
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
  background: url(../../static/images/zBanner.png) no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  color: #ffffff;
}
</style>