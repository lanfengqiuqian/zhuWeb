<template>
  <div>
    <el-carousel height="420px">
      <el-carousel-item v-for="(item, index)  in bannerArr" :key="index">
        <div class="banner-item" :class=" 'banner' + index">
          <h3>{{item.title}}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      bannerArr: [
        { title: "全程线上", image: "../../static/banner1.jpg" },
        { title: " 三步完成", image: "../../static/banner2.png" },
        { title: "合规经营", image: "../../static/banner3.png" },
        { title: "一键报税", image: "../../static/banner4.jpg" }
      ]
    };
  }
};
</script>

<style>
.banner-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.banner-item h3{
  font-size: 45px;
  text-shadow: 4px 10px 5px #333333;
  color: #ffffff;
  font-weight: 700;
}
</style>