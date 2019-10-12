<template>
  <div id="app">
    <header class="header-wrap" style="margin-bottom:91px;">
      <Nav v-if="showCom"></Nav>
    </header>
    <div>
       <router-view/>
    </div>
   
    <Foot v-if="showCom"></Foot>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Foot from './components/Foot'
export default {
  name: 'App',
  data(){
    return {
        showCom:true
    }
  },
  components:{
    Nav,
    Foot
  },
  activated(){
    console.log(this.$router + '11');
  },
  watch:{
  $route(to,from){
    window.scrollTo(0,0);
    this.showCom = this.$route.meta.showCom===false?false:true;
     console.log(this.$route);
    console.log(to.path);
  }
},
}
</script>

<style>
#app{
  background: #ffffff;
  width: 100%;
  font-size: 18px;
  color: #333333;
}
.header-wrap{
  width: 100%;
  margin: auto;
  position: fixed;
  z-index: 99;
  border-bottom: 1px solid #ebebeb;
  top: 0;
  background: #ffffff;
  margin-bottom: 91px;
}
</style>
