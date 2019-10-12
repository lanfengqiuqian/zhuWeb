<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" @click="goRouter(item.prop)">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "路由一", prop: { str: "1", num: 1 } },
        { title: "路由二", prop: { str: "A", num: 2 } },
        { title: "路由三", prop: { str: "一", num: 3 } },
        { title: "路由四", prop: { str: "壹", num: 4 } }
      ]
    };
  },
  methods:{
      goRouter(obj){
          this.$router.push({
              name:'Dtest',
              query:{
                  obj:obj
              }
          })
      }
  }
};
</script>

<style>
</style>