<template>
  <div style="width:1200px;margin:auto">
    <h1 class="act-h">{{act.actH}}</h1>
    <p class="act-con" v-html="act.ans"></p>
    <div style="width:500px;margin:auto;" v-if="act.vSrc">
      <video controls style="width:500px;margin:auto;" :src="act.vSrc"></video>
    </div>
    <span class="act-time">{{act.time}}</span>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      act:{}
    }
  },
  created(){
    this.getRouterDate()
  },
  methods:{
    getRouterDate(){
      console.log(this.$route.query.item);
      this.act = {
        ...this.$route.query.item
      }
    }
  }
};
</script>

<style>
@import url(../../static/css/index.css);
.act-h{
  text-align: center;
  font-size: 33px;
  color: #333333;
  font-weight: 800;
  margin: 140px auto 30px;
}
.act-con{
  width: 500px;
  text-indent: 60px;
  font-size: 24px;
  color: #333333;
  letter-spacing: 5px;
  margin: auto;
}
.act-time{
  display: block;
  width: 700px;
  margin: auto;
  color: #8a8080;
  font-size: 18px;
  text-align: right;
}
</style>