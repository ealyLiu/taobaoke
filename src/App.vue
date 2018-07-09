<template>
  <div id="app">
    <mt-header fixed title="淘宝客">
      <router-link to="/taobaoke" slot="left" v-show="backTrue">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      backTrue:false
    }
  },
  watch:{
    $route(){
      if(this.$route.name != "root"){
        this.backTrue = true;
      }else{
        this.backTrue = false;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 40px;
}
.mint-header-title{
  font-size:0.75rem;
}
</style>
