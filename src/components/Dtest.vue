<template>
  <div>
      <li v-for="(v,k) in list">
          {{v}}:{{k}}
      </li>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:{}
        }
    },
   methods:{
        
    },
     created(){
         this.list = {
                ...this.$route.query.obj
            }
        
    }
}
</script>

<style>

</style>