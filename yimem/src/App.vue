<template>
  <div id="app">
    <!--<div>这是我的app</div>-->
    <!--<router-link :to="'/details/'+id">166</router-link>-->
    <!--<div>{{id}}</div>-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        id:"166"
      }
    }
  }
</script>

<style>
/*body{*/
  /*background:#eee*/
/*}*/
  #app {
    /*background:#eee*/
  }
</style>
